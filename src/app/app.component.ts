import { Component } from '@angular/core';
import { Menu } from './module/shared/models/menu.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public opened = true;

  public menu: Menu = [
    {
      title: 'Dashboard',
      icon: 'fa fa-television',
      link: 'dashboard',
      color: '#ff7f0e',
      isActive: false
    },
    {
      title: 'Inventory',
      icon: 'fa fa-th-list',
      link: 'inventory',
      color: '#ff7f0e',
      isActive: false
    },
    {
      title: 'Orders',
      icon: 'fa fa-shopping-bag',
      link: 'orders',
      color: '#ff7f0e',
      isActive: false
    },
    {
      title: 'Customers',
      icon: 'fa fa-users',
      link: 'customers',
      color: '#ff7f0e',
      isActive: false
    },
    {
      title: 'Reports',
      icon: 'fa fa-file-text-o',
      link: 'reports',
      color: '#ff7f0e',
      isActive: false
    },
    {
      title: 'Settings',
      icon: 'fa fa-cog',
      link: 'settings',
      color: '#ff7f0e',
      isActive: false
    },
  ];

  public toggle(): void {
    this.opened = !this.opened;
  }

}
