import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationItemPage } from './navigation-item.page';

const routes: Routes = [
  {
    path: '',
    component: NavigationItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationItemPageRoutingModule {}
