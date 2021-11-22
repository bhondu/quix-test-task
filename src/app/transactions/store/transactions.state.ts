import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { Paginated, PaymentTransaction } from '../models/payment-transaction';
import { Reset, ResetPaginated, SetError, SetLoading, SetPaginated } from './transactions.actions';

export interface TransactionsStateModel {
  paginated: Paginated;
  loading: boolean;
  error: any;
}

export const defaults: TransactionsStateModel = {
  paginated: {
    currentPage: 0,
    numberOfPages: 0,
    pageSize: 5,
    totalNumberOfItems: 0,
    hasNext: false,
    items: [],
  },
  loading: false,
  error: null,
};

@State<TransactionsStateModel>({
  name: 'transactions',
  defaults,
})
@Injectable()
export class TransactionsState {
  @Selector([TransactionsState.getPaginated])
  public static getTransactions({ items }: Paginated): PaymentTransaction[] {
    return items;
  }

  @Selector([TransactionsState.getPaginated])
  public static getTotalNumberOfPages({ totalNumberOfItems }: Paginated): number {
    return totalNumberOfItems;
  }

  @Selector()
  public static getLoading({ loading }: TransactionsStateModel): boolean {
    return loading;
  }

  @Selector()
  public static getError({ error }: TransactionsStateModel): any {
    return error;
  }

  @Selector()
  private static getPaginated({ paginated }: TransactionsStateModel): Paginated {
    return paginated;
  }

  @Action(SetLoading)
  public setLoading({ patchState }: StateContext<TransactionsStateModel>, action: SetLoading) {
    patchState({
      loading: action.payload,
    });
  }

  @Action(SetError)
  public setError({ patchState }: StateContext<TransactionsStateModel>, action: SetError) {
    patchState({
      error: action.payload,
    });
  }

  @Action(SetPaginated)
  public setPaginated({ patchState }: StateContext<TransactionsStateModel>, action: SetPaginated) {
    patchState({
      paginated: action.payload,
    });
  }

  @Action(Reset)
  public reset({ setState }: StateContext<TransactionsStateModel>) {
    setState(() => ({
      ...defaults,
    }));
  }

  @Action(ResetPaginated)
  public resetPaginated({ setState }: StateContext<TransactionsStateModel>) {
    setState(state => ({
      ...state,
      paginated: { ...defaults.paginated },
    }));
  }
}
