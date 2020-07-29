import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionSheetsPageRoutingModule } from './action-sheets-routing.module';

import { ActionSheetsPage } from './action-sheets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionSheetsPageRoutingModule
  ],
  declarations: [ActionSheetsPage]
})
export class ActionSheetsPageModule {}
