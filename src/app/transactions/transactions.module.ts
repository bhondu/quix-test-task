import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxsModule } from '@ngxs/store';

import { TransactionsTableComponent } from './components/table/transactions-table.component';
import { TransactionsComponent } from './containers/transactions.component';
import { TransactionsApiService } from './services/transactions-api.service';
import { TransactionsConverterService } from './services/transactions-converter.service';
import { TransactionsState } from './store/transactions.state';
import { TransactionsRoutingModule } from './transactions-routing.module';

@NgModule({
  declarations: [TransactionsComponent, TransactionsTableComponent],
  imports: [CommonModule, TransactionsRoutingModule, FormsModule, NgxsModule.forFeature([TransactionsState]), NgbPaginationModule],
  providers: [TransactionsApiService, TransactionsConverterService],
})
export class TransactionsModule {}
