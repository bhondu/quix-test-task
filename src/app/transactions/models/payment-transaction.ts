import { PaymentTransactionStatus } from './payment-transaction-status';

export interface PaymentTransaction {
  amount: number;
  createdAt: Date;
  currency: string;
  description: string;
  id: string;
  status: PaymentTransactionStatus;
}

export interface Paginated {
  currentPage: number;
  hasNext: boolean;
  items: PaymentTransaction[];
  numberOfPages: number;
  pageSize: number;
  totalNumberOfItems: number;
}

export interface TransactionPagingParams {
  page: number;
  size: number;
  status: PaymentTransactionStatus;
}
