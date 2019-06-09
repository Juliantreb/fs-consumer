import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, ParamMap } from '@angular/router';
// import { Property } from '../model/property.model';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {
  public property: any = {};
  public id: any;

  public booking: any = {
    propertyId: 0,
    dateFrom: "",
    dateTo: "",
    status: "",
    userId: 0,
    name: "",


  };

  
  constructor(private httpClient: HttpClient,
    private navCTRL: NavController,
    private activatedRoute: ActivatedRoute) {}
    
    submit() {
      console.log("Submitting to the server...");
      
      this.booking.propertyId = this.id;
      this.booking.userId = localStorage.getItem("user_id");
      console.log(this.booking);
  
      // this.booking.propertyId = localStorage.getItem(property_id)
  
      this.httpClient
        .post("http://localhost:3000/api/bookings", this.booking)
        .subscribe(
          (response) => {
            console.log(response);
  
            this.navCTRL.navigateForward(
              "/tabs/tab5"
            )
          },
          (err) => {
            console.log(err);
            alert("ERROR! CANNOT BOOK")
          }
        );
       
    }
    

 ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(
      (parameters: any) => {
        console.log(parameters);
        // console.log("property_id is: " + parameters.get("property_id"))


        this.id = parameters.params.propertyId;
        console.log(this.id);
        

    this.httpClient.get(`http://localhost:3000/api/properties/${this.id}`)
    .subscribe( 
      (response) => {
        console.log(response);
        this.property = response;
      }
    )
   
  }

  

    )}}