import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionSheetsPage } from './action-sheets.page';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionSheetsPageRoutingModule {}
