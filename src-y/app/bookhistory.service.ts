import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookhistoryService {

  // public FlightHistory :any;
  constructor() {
    // this.FlightHistory = this.hlist.FlightHistory;
  }
  FlightHistory = [{}]  // Holds the history of the bookings

  addtoHistory(source:string,destination:string,snum:number,bill:number)
  {
    this.FlightHistory.push({Source: source,Destination: destination,Seats: snum,Bill:bill});
    alert("Booking Added to History");
  }
}
