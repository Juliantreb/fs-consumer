import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


import { User } from '../models';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {

  public user: Array<User> = [];
  public user1: User;
  constructor(private navCtrl: NavController) {
    this.user1 = new User();
    this.user1.firstname = "Julian";
    this.user1.lastname = "Trebach";
    this.user1.livesin="Bronx, New York";
    this.user1.joinedin="May, 2015";

    this.user.push(this.user1);
  }
}