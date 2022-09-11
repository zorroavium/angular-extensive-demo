import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StatusCard } from 'src/app/module/shared/models/status-card.model';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLayoutComponent implements OnInit {

  public statusCards: StatusCard = [
    { id: 1, name: 'Open orders', icon: 'fa fa-shopping-basket', value: 239, color: 'warning' },
    { id: 2, name: 'Orders in transit', icon: 'fa fa-bus', value: 126, color: 'primary' },
    { id: 3, name: 'Fulfilled orders', icon: 'fa fa-check-square-o', value: 1254, color: 'success' },
    { id: 4, name: 'Cancelled orders', icon: 'fa fa-times-circle-o', value: 35, color: 'danger' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
