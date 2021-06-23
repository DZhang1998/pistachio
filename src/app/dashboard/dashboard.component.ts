import { EventFilterComponent } from './../event-filter/event-filter.component';
import { EventCardComponent } from './../event-card/event-card.component';
import { BioCardComponent } from './../bio-card/bio-card.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
