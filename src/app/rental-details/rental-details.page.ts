import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { pasttrips, CurrentTrip } from '../models';
import { payment } from '../models';
import { Property } from '../models';
import { User } from '../models';

import { pasttripsService } from '../services/pasttrip.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage implements OnInit{

  private pasttripID: string;

  public pasttrips: Array<pasttrips> = [];
  public Pasttrip: pasttrips;
  public payment: Array<payment> = [];
  public property: Array<Property> = [];
  public user: Array<User> = [];
  public currenttrip: Array<CurrentTrip> =[];

  public pasttrip: pasttrips= new pasttrips();

  constructor (
    private navCtrl: NavController,
    private pasttripsService: pasttripsService,
    private activatedRoute: ActivatedRoute
    ) {}
  ngOnInit() {
    let arrow = (data: any) => {
      this.pasttripID = data.params.pasttripid;

      this.pasttrip = this.pasttripsService.findpasttripById(this.pasttripID);
    }

    if (!this.Pasttrip) {
      alert("Trip not found!");
      this.navCtrl.navigateBack("tabs/tab4");
    }
    this.activatedRoute.queryParamMap.subscribe(
      arrow
    );
  }
} 