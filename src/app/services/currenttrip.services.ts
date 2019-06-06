import { Injectable } from '@angular/core';
import { CurrentTrip } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CurrentTripService {

  public currenttrips: Array<CurrentTrip> = [];

  constructor() {}

  getAllCurrentTrips() {
    this.currenttrips = [];

    let currenttrip1 = new CurrentTrip();
    currenttrip1.id = "Lisbon, Portugal";
    currenttrip1.imgName = "https://i.boring.host/1798u27Y.jpg";
    currenttrip1.price=  78;
    currenttrip1.startdate= "May 25, 2019";
    currenttrip1.enddate= "July 6, 2019";




   

    this.currenttrips.push(currenttrip1);
   
  }

  // Returns null if not found.
  findCurrentTripById(id: string): CurrentTrip {
    let foundCurrentTrip: CurrentTrip = null;

    this.currenttrips.forEach(
      (currenttrip: CurrentTrip) => {
        if (currenttrip.id == id) {
          foundCurrentTrip = currenttrip;
        }
      }
    );

    return foundCurrentTrip;
  }

}