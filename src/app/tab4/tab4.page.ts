import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { pasttrips, CurrentTrip } from '../models';
import { payment } from '../models';
import { Property } from '../models';
import { User } from '../models';

import { pasttripsService } from '../services/pasttrip.service';
import { CurrentTripService } from '../services/currenttrip.services';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  public pasttrips: Array<pasttrips> = [];
  public pasttrips1: pasttrips;
  public payment: Array<payment> = [];
  public property: Array<Property> = [];
  public user: Array<User> = [];
  public currenttrips: Array<CurrentTrip> =[];
  public CurrentTrip: CurrentTrip;
  ////added a 1 below and removed one above///

  public CurrentTrip1= new CurrentTrip();

  public pasttrip1: pasttrips= new pasttrips();
  public pasttrip2: pasttrips= new pasttrips();

  constructor (
    private navCtrl: NavController,
    private pasttripsService: pasttripsService,
    private CurrentService: CurrentTripService
    ) {
      console.log(this.CurrentService);
    this.CurrentService.getAllCurrentTrips();
    this.currenttrips = this.CurrentService.currenttrips;

  } 

  navToCurrent(trip) {
    this.navCtrl
      .navigateForward("rental-details-0)", {
        queryParams: {
          q: "ionic",
          CurrentIMGNAME:this.CurrentTrip1.imgName
          

        }
      }
    
,)}}



    
      // currenttriplst: Array<CurrentTrip>();
      // this.CurrentService.getAllCurrentTrips();
      // this.currenttrips = this.CurrentService.currenttrips;
      
      // pasttriplst: Array<pasttrips>();
      // this.pasttripsService.getAllPasttrip();
      // this.pasttrips = this.pasttripsService.pasttrips;
    
    // }
  

  // goCurrent(currenttrips: CurrentTrip) {
  //   this.navCtrl
  //     .navigateForward("rental-details-0",  {
  //       queryParams: {
  //         q: "ionic",
  //         CurrentIMGNAME: currenttrip1.imgName,
  //         CurrentID: currenttrip1.id,
  //         CurrentPRICE: currenttrip1.price,
  //         CurrentSTARTDATE: currenttrip1.startdate,
  //         CurrentENDDATE: currenttrip1.enddate,
  
    
  //  gopasttrip(pasttrips: pasttrips) {
  //   this.navCtrl
  //     .navigateForward("rental-details",  {
  //       queryParams: {
  //         q: "ionic",
  //         pasttripName: pasttrips.name,
  //         pasttripID: pasttrips.id,
  //         pasttripPrice: pasttrips.price,
  //         pasttripImGName: pasttrips.imgName,
  //         pasttripStartDate: pasttrips.startdate,
  //         pasttripEndDate: pasttrips.enddate,
  //         pasttripLocation: pasttrips.location,
  
  //       }
  //     });
  //  }




  // ,ngOnInit() {
  // }

  
///
      // })}