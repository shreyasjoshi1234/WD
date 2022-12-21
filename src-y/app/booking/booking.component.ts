import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookserviceService } from '../bookservice.service';
import { BookhistoryService } from '../bookhistory.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public FlightAvailList: any;
  // public FlightHistory: any;
  public hist: any;
  constructor(public flist:BookserviceService,public h: BookhistoryService,private router: Router) 
  {
    this.FlightAvailList = this.flist.FlightAvailList;
    this.hist = this.h;
    // this.FlightHistory = this.hlist.FlightHistory;
  }
  // Function calculates the total bill and
  // calls the addtoHistory function present in Book History Service
  BookTicket(fnum: any,snum:any)
  {
  
    let f = fnum.value - 1;
    let s = snum.value;

    // getting the details of selected flight
    let source = this.flist.FlightAvailList[f].Source;
    let dest = this.flist.FlightAvailList[f].Destination;
    let pr = this.flist.FlightAvailList[f].Price;

    let cost = s*pr;
    alert("Booking Success!"+"\nFinal Bill Amount = "+cost);

    // Adding to history
    this.h.addtoHistory(source,dest,s,cost);
    this.router.navigate(["history"]);
  }
  search(ID:any,src:any)
  {
    var sr=src.value;
    for(var i=0;i<3;i++)
    {
      if(this.flist.FlightAvailList[i].Destination==sr)
      {
        console.log("Same");
        this.flist.FlightAvailList[i].Destination="Samechanged";

      }
      else
      {
        console.log("Not Same");

      }
      // if(this.h.FlightHistory[i].destination==sr)
      // {
      //   console.log("Same");
      //   this.flist.FlightAvailList[i].Destination="Samechanged";

      // }
    }
  }

  ngOnInit(): void {
  }

}
