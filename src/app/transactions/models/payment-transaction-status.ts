export type PaymentTransactionStatus = 'CAPTURED' | 'COMPLETED' | 'CREATED' | 'FAILED' | 'SETTLED' | null;

export const PaymentTransactionStatus = {
  CAPTURED: 'CAPTURED' as PaymentTransactionStatus,
  COMPLETED: 'COMPLETED' as PaymentTransactionStatus,
  CREATED: 'CREATED' as PaymentTransactionStatus,
  FAILED: 'FAILED' as PaymentTransactionStatus,
  SETTLED: 'SETTLED' as PaymentTransactionStatus,
};
