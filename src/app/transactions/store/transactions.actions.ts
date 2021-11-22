import { Paginated } from '../models/payment-transaction';

export class SetLoading {
  public static readonly type = '[Transactions] SetLoading';

  constructor(public payload: boolean) {}
}

export class SetError {
  public static readonly type = '[Transactions] SetError';

  constructor(public payload: any) {}
}

export class SetPaginated {
  public static readonly type = '[Transactions] SetPaginated';

  constructor(public payload: Paginated) {}
}

export class Reset {
  public static readonly type = '[Transactions] Reset';
}

export class ResetPaginated {
  public static readonly type = '[Transactions] ResetPaginated';
}
