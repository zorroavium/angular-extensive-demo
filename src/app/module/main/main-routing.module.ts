import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./modules/inventory/inventory-routing.module').then(m => m.InventoryRoutingModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./modules/orders/orders-routing.module').then(m => m.OrdersRoutingModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./modules/customers/customers-routing.module').then(m => m.CustomersRoutingModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./modules/reports/reports-routing.module').then(m => m.ReportsRoutingModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings-routing.module').then(m => m.SettingsRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
