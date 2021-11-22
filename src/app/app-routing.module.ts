import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutesNames } from './app-routes-names';

const routes: Routes = [
  {
    path: AppRoutesNames.Transactions,
    loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule),
  },
  { path: AppRoutesNames.Home, redirectTo: AppRoutesNames.Transactions, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
