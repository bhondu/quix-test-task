import { Injectable, OnDestroy } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, Observable, catchError, finalize, map, switchMap, tap } from 'rxjs';

import { PaymentTransaction, TransactionPagingParams, Paginated } from "../models/payment-transaction";
import { PaymentTransactionStatus } from '../models/payment-transaction-status';
import { ResetPaginated, SetError, SetLoading, SetPaginated } from '../store/transactions.actions';
import { TransactionsState } from '../store/transactions.state';
import { TransactionsApiService } from './transactions-api.service';
import { TransactionsConverterService } from './transactions-converter.service';

@UntilDestroy()
@Injectable()
export class TransactionsControllerService implements OnDestroy {
  @Select(TransactionsState.getTransactions)
  public transactions$!: Observable<PaymentTransaction[]>;

  @Select(TransactionsState.getTotalNumberOfPages)
  public total$!: Observable<number>;

  @Select(TransactionsState.getLoading)
  public loading$!: Observable<boolean>;

  @Select(TransactionsState.getError)
  public error$!: Observable<any>;

  private pagingParams = new BehaviorSubject<TransactionPagingParams>({ page: 0, size: 5, status: null });
  public pagingParams$ = this.pagingParams.asObservable();

  constructor(private api: TransactionsApiService, private converter: TransactionsConverterService, private store: Store) {
    this.pagingParams
      .pipe(
        switchMap(params => this.fetchTransactions(params)),
        untilDestroyed(this),
      )
      .subscribe();
  }

  public ngOnDestroy() {
    this.pagingParams.complete();
  }

  public onCloseError() {
    this.store.dispatch(new SetError(null));
  }

  public onPageChange(page: number) {
    this.pagingParams.next({
      ...this.pagingParams.value,
      page,
    });
  }

  public onStatusChange(status: PaymentTransactionStatus) {
    this.pagingParams.next({
      ...this.pagingParams.value,
      page: 0,
      status,
    });
  }

  public fetchTransactions(params: TransactionPagingParams): Observable<Paginated> {
    this.store.dispatch([new SetLoading(true), new SetError(null)]);

    return this.api.getPayments(params).pipe(
      map(paginatedDto => this.converter.fromPaginated(paginatedDto)),
      tap(paginated => this.store.dispatch(new SetPaginated(paginated))),
      catchError(error => this.store.dispatch([new ResetPaginated(), new SetError(error)])),
      finalize(() => this.store.dispatch(new SetLoading(false))),
    );
  }
}
