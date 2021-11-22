import { PaymentTransactionStatus } from './payment-transaction-status';

export interface PaymentTransactionDto {
  amount: number;
  createdAt: string;
  currency: string;
  description: string;
  id: string;
  status: PaymentTransactionStatus;
}

export interface PaginatedDto {
  currentPage: number;
  hasNext: boolean;
  items: PaymentTransactionDto[];
  numberOfPages: number;
  pageSize: number;
  totalNumberOfItems: number;
}
