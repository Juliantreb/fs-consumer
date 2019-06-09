import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  public booking: any = {
    propertyId: 0,
    name: "",
    dateFrom: "",
    dateTo: "",
    status: "",


  };

  constructor(private httpClient: HttpClient,
    private navCTRL: NavController,
    private activatedRoute: ActivatedRoute) { }

  submit() {
    console.log("Submitting to the server...");
    console.log(this.booking);

    // this.booking.propertyId = localStorage.getItem(property_id)

    this.httpClient
      .post("http://localhost:3000/api/booking", this.booking)
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


        const propertyId = parameters.params.propertyId;
        console.log(propertyId);


      }
    )
    }
  }
