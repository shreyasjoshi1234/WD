import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BookserviceService {

  constructor() { }

  FlightAvailList = [
    {
      Source: "Hubballi",
      Destination: "Bengaluru",
      Price: 3500,
      id: 1
    },
    {
      Source: "Hubballi",
      Destination: "Mumbai",
      Price: 4000,
      id: 2
    },
    {
      Source: "Hubballi",
      Destination: "Hyderabad",
      Price: 4500,
      id: 3
    }
  ]
}
