import { Component } from '@angular/core';
import { Property } from '../models';
import { NavController } from '@ionic/angular';
import { PropertyService } from '../services/property.services';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  properties: Array<Property> = [];
  
  public property: Array<Property> = [];
  public property1: Property= new Property ();
  public property2: Property= new Property ();
  public property3: Property= new Property ();
  public property4: Property= new Property ();

  

  constructor(
    private navCtrl: NavController,
    private propertyService: PropertyService
  ) {
    console.log(this.propertyService);
    this.propertyService.getAllProperties();
    this.properties = this.propertyService.properties;

  }

  navToProperty(property: Property) {
  
    this.navCtrl
      .navigateForward("property-details", {
        queryParams: {
          q: "ionic",
          propertyIMGNAME: property.imgName,
          propertyID: property.id,
          propertyPRICE: property.price,
          propertySTARTDATE: property.startdate,
          propertyENDDATE: property.enddate,
        }
      });
  }

}