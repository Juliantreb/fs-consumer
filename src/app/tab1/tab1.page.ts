import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { User } from '../models';
import { ActivatedRoute, ParamMap } from '@angular/router';

// import { User } from '../models';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public user: User = new User ();

  constructor(
    private navCTRL: NavController, 
    private http: HttpClient ,
    private activatedRoute: ActivatedRoute
    ){}

  
    ngOnInit() {
      this.activatedRoute.queryParamMap.subscribe(
        (parameters: ParamMap) => {
          console.log(parameters);
          console.log("user_id is: " + parameters.get("user_id"))
  
  
          const userId = localStorage.getItem("user_id");
  
  
          this.http
            .get(`http://localhost:3000/api/users/${userId}`)
            .subscribe(
              (response: User) => {
                console.log("response: " + response);
                this.user.id = response.id;
                this.user.name = response.name;
                this.user.email = response.email;
                this.user.profilephoto = response.profilephoto;
                this.user.today = response.today;
                this.user.facebook = response.facebook;
                this.user.phonenumber = response.phonenumber;
                this.user.livesin= response.livesin;
              }
            );
  
  
          /*Express:
          return res.json({
            id: 123,
            name:"",
            emai:""
  
          })
          */
  
  
        }
      );
    }
  
  }







