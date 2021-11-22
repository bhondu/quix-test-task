import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { PaymentTransaction } from '../../models/payment-transaction';

@Component({
  selector: 'transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTableComponent {
  @Input()
  public loading = false;

  @Input()
  public items: PaymentTransaction[] = [];
}
