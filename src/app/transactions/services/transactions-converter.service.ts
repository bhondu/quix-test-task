import { Injectable } from '@angular/core';

import { Paginated, PaymentTransaction } from '../models/payment-transaction';
import { PaginatedDto, PaymentTransactionDto } from '../models/payment-transaction-dto';

@Injectable()
export class TransactionsConverterService {
  public fromPaginated({ currentPage, pageSize, numberOfPages, totalNumberOfItems, items = [], hasNext }: PaginatedDto): Paginated {
    return {
      currentPage,
      pageSize,
      numberOfPages,
      totalNumberOfItems,
      items: items.map(item => this.fromPaymentTransactionDto(item)),
      hasNext,
    };
  }

  public fromPaymentTransactionDto({ id, amount, createdAt, currency, description, status }: PaymentTransactionDto): PaymentTransaction {
    return {
      id,
      amount,
      createdAt: new Date(createdAt),
      currency,
      description,
      status,
    };
  }
}
