import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { OverviewCardComponent } from './components/overview-card/overview-card.component';
import { SalesDetailComponent } from './components/sales-detail/sales-detail.component';
import { InventoryGridComponent } from './components/inventory-grid/inventory-grid.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    OverviewCardComponent,
    SalesDetailComponent,
    InventoryGridComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AgGridModule
  ]
})
export class DashboardModule { }
