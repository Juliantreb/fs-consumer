import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { pasttrip } from '../models';
import { payment } from '../models';
import { property } from '../models';
import { User } from '../models';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit{

  public pasttrips: Array<pasttrip> = [];
  public payment: Array<payment> = [];
  public property: Array<property> = [];
  public user: Array<User> = [];

  constructor (private navCtrl: NavController) {
    
  let pasttrip1 = new pasttrip();
  pasttrip1.price="$50";
  pasttrip1.imgName="https://secretldn.com/wp-content/uploads/2017/06/Screen-Shot-2018-01-30-at-17.06.11.png";
  pasttrip1.location="London, England";
  pasttrip1.startdate="July1";
  pasttrip1.startdate="July5";

  this.pasttrips.push(pasttrip1);


  
  }



  ngOnInit() {
  }
goRental1() {
  this.navCtrl.navigateForward('rental-details');

}
goRental2() {
  this.navCtrl.navigateForward('rental-details-london');

}
goRental3() {
  this.navCtrl.navigateForward('rental-details-montreal');

}
}


