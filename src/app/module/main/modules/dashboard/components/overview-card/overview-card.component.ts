import { Component, Input, OnInit } from '@angular/core';
import { StatusCard } from 'src/app/module/shared/models/status-card.model';

@Component({
  selector: 'app-overview-card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.scss'],

})
export class OverviewCardComponent implements OnInit {

  @Input() statusCards: StatusCard = [];

  constructor() { }

  ngOnInit(): void {
  }

}
