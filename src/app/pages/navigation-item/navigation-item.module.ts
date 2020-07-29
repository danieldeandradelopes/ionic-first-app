import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavigationItemPageRoutingModule } from './navigation-item-routing.module';

import { NavigationItemPage } from './navigation-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigationItemPageRoutingModule
  ],
  declarations: [NavigationItemPage]
})
export class NavigationItemPageModule {}
