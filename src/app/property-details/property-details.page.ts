import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Property } from '../models';
import { PropertyService } from '../services/property.services';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {

  private propertyId: string;
  public nameOfProperty: string;
  public currentProperty: Property;

  constructor(
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService,
    private navCtrl: NavController
  ) { 
    this.propertyService.getAllProperties();
  }

  ngOnInit() {
   

    let arrow = (data: any) => {
      this.nameOfProperty = data.params.propertyName;
      this.propertyId = data.params.propertyId;

      this.currentProperty = 
        this.propertyService.findPropertyById(this.propertyId);
      
      if (!this.currentProperty) {
        alert("Property not found!");
        this.navCtrl.navigateBack("");
      }
    };

    this.activatedRoute.queryParamMap.subscribe(
      arrow
    );

  }

}