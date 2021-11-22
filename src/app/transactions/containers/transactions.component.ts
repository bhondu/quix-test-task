import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PaymentTransactionStatus } from '../models/payment-transaction-status';
import { TransactionsControllerService } from '../services/transactions-controller.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TransactionsControllerService],
})
export class TransactionsComponent {
  public readonly transactions$ = this.controller.transactions$;
  public readonly total$ = this.controller.total$;
  public readonly transactionsPageParams$ = this.controller.pagingParams$;
  public readonly loading$ = this.controller.loading$;
  public readonly error$ = this.controller.error$;

  public readonly PaymentTransactionStatus = PaymentTransactionStatus;

  constructor(private controller: TransactionsControllerService) {}

  public onPageChange(page: number) {
    this.controller.onPageChange(page);
  }

  public onFilterChange(filter: PaymentTransactionStatus) {
    this.controller.onStatusChange(filter);
  }

  public onCloseError() {
    this.controller.onCloseError();
  }
}
