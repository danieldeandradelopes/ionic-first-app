import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'navigation',
    loadChildren: () => import('./pages/navigation/navigation.module').then(m => m.NavigationPageModule)
  },
  {
    path: 'navigation-item',
    loadChildren: () => import('./pages/navigation-item/navigation-item.module').then(m => m.NavigationItemPageModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./pages/buttons/buttons.module').then(m => m.ButtonsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'alerts',
    loadChildren: () => import('./pages/alerts/alerts.module').then( m => m.AlertsPageModule)
  },
  {
    path: 'action-sheets',
    loadChildren: () => import('./pages/action-sheets/action-sheets.module').then( m => m.ActionSheetsPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./pages/badge/badge.module').then( m => m.BadgePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
