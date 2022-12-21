import { Component, OnInit } from '@angular/core';
import { BookhistoryService } from '../bookhistory.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public FlightHistory: any;  // Holds the Histry list from History Service 
  constructor(public hlist:BookhistoryService) {
    this.FlightHistory = this.hlist.FlightHistory;
  }

  ngOnInit(): void {
  }

}
