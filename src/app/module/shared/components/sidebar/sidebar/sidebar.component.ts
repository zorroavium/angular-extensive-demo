import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu, MenuItem } from '../../../models/menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  @Input() menuItems: Menu = [];

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.menuItems[0].isActive = true;
  }

  public onMenuClick(menu: MenuItem) {
    this.menuItems.forEach(item => {
      item.isActive = false;
      if(item.title === menu.title) {
        item.isActive = true;
      }
    });
    this._router.navigate(['app', menu.link]);
  }

}
