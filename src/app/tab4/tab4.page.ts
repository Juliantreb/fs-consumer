import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { pasttrips, currenttrip } from '../models';
import { payment } from '../models';
import { property } from '../models';
import { User } from '../models';

import { pasttripsService } from '../services/pasttrips.service';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit{

  public pasttrips: Array<pasttrips> = [];
  public pasttrips1: pasttrips;
  public payment: Array<payment> = [];
  public property: Array<property> = [];
  public user: Array<User> = [];
  public currenttrip: Array<currenttrip> =[];

  public currenttrip1= new currenttrip();

  public pasttrip1: pasttrips= new pasttrips();
  public pasttrip2: pasttrips= new pasttrips();

  constructor (
    private navCtrl: NavController,
    private pasttripsService: pasttripsService,
    ) {


    this.currenttrip1.price="$40";
    this.currenttrip1.imgName="https://s-ec.bstatic.com/images/hotel/max1280x900/105/105878771.jpg";
    this.currenttrip1.location="Lisbon, Portugal";
    this.currenttrip1.startdate="May 25";
    this.currenttrip1.enddate="July 6";
    
      
      
      pasttriplst: Array<pasttrips>();
      this.pasttripsService.getAllPasttrip();
      this.pasttrips = this.pasttripsService.pasttrips;

  }

  navTopasttrips(pasttrips: pasttrips) {
    this.navCtrl
      .navigateForward("pasttrip-details",  {
        queryParams: {
          q: "ionic",
          pasttripName: pasttrips.name,
          pasttripID: pasttrips.id,
          pasttripPrice: pasttrips.price,
          pasttripImGName: pasttrips.imgName,
          pasttripStartDate: pasttrips.startdate,
          pasttripEndDate: pasttrips.enddate,
          pasttripLocation: pasttrips.location,
  
        }
      });
  }
  ngOnInit() {
  }

  
}



