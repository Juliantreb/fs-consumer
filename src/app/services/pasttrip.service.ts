import { Injectable } from '@angular/core';
import { pasttrips} from '../models';

@Injectable({
  providedIn: 'root'
})
export class pasttripsService {

  public pasttrips: Array<pasttrips> = [];
 

  constructor() { }

  getAllPasttrip() {
    this.pasttrips= [];

    let pasttrip1 = new pasttrips();
    
    pasttrip1.id= "London, England";
    pasttrip1.price=50;
    pasttrip1.imgName="https://secretldn.com/wp-content/uploads/2017/06/Screen-Shot-2018-01-30-at-17.06.11.png" ;
    pasttrip1.location="London, England";
    pasttrip1.startdate="July1";
    pasttrip1.enddate="July5";
  
    let pasttrip2 = new pasttrips();

    pasttrip2.id= "Montreal Canada";
    pasttrip2.price=60;
    pasttrip2.imgName="http://static.trip101.com/paragraph_media/pictures/001/612/529/large/1514a6b6_original.jpg?1556004699";
    pasttrip2.location="Montreal, Canada";
    pasttrip2.startdate="August 4, 2016";
    pasttrip2.enddate="August 18, 2016";

    this.pasttrips.push(pasttrip1);
    this.pasttrips.push(pasttrip2);  
  }

  findpasttripById(id: string): pasttrips {
    let foundpasttrips: pasttrips = null;

    this.pasttrips.forEach(
      (pasttrips: pasttrips) => {
        if (pasttrips.id == id) {
          // Display this property
          foundpasttrips = pasttrips;
  }
 }
    );
    return foundpasttrips;

}
}