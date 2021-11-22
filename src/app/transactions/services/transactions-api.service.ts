import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TransactionPagingParams } from '../models/payment-transaction';
import { PaginatedDto } from '../models/payment-transaction-dto';

@Injectable()
export class TransactionsApiService {
  constructor(private http: HttpClient) {}

  private static get url() {
    return '/payments';
  }

  public getPayments({ page, size, status }: TransactionPagingParams) {
    return this.http.get<PaginatedDto>(TransactionsApiService.url, {
      params: {
        page,
        size,
        ...(status ? { status } : {}),
      },
    });
  }
}
