import { Component, OnInit } from '@angular/core';
import {CurrentTrip} from '../models'
import { NavController } from '@ionic/angular';
import {CurrentTripService} from '../services/currenttrip.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rental-details-0',
  templateUrl: './rental-details-0.page.html',
  styleUrls: ['./rental-details-0.page.scss'],
})


// q: "ionic",
//           CurrentIMGNAME: currenttrip.imgName,
//           CurrentID: currenttrip.id,
//           CurrentPRICE: currenttrip.price,
//           currentSTARTDATE: currenttrip.startdate,
//           currentENDDATE: currenttrip.enddate,

export class RentalDetails0Page implements OnInit {

  private currentTripId: string;
  public currenttrip: Array<CurrentTrip> =[];
  public CurrentTrip: CurrentTrip;
  public currentTripImgName: string;
  public currentPrice: string;
  public currentStartDate: string;
  public currentEndDate: string;


  constructor(
    private navCtrl: NavController,
    private currentTripService: CurrentTripService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    let arrow = (data: any) => {
      this.currentTripId = data.params.CurrentID;
      this.currentTripImgName = data.params.CurrentIMGNAME;
      this.currentPrice = data.params.CurrentPRICE;
      this.currentStartDate = data.params.CurrentSTARTDATE;
      this.currentEndDate = data.params.CurrentENDDATE;
      console.log(this.currentTripImgName);
      console.log(this.currentPrice);
      console.log(this.currentStartDate);
      console.log(this.currentEndDate);



      // this.CurrentTrip = this.currentTripService.findTripById(this.currenttripId);
    }

    if (!this.currenttrip) {
      alert("Trip not found!");
      this.navCtrl.navigateBack("tabs/tab4");
    }
    this.activatedRoute.queryParamMap.subscribe(
      arrow
    );
  }}
