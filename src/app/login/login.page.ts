import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: any = {
    email: "",
    password: ""
  };

  constructor(private navCTRL: NavController, private httpClient: HttpClient) { }

  Login() {
    console.log("Submitting to the server...");
    console.log(this.user);


    this.httpClient
      .post("http://localhost:3000/users/authentication", this.user)
      .subscribe(
        (response) => {
          console.log(response);

          this.navCTRL.navigateForward(
            "tabs/tab5"
            )},
            (err) => {
              console.log(err);
              alert ("Incorrect Email or Password")
            }
          );

  }


  ngOnInit() {
  }

  // loginClick() {
  //   this.navCTRL.navigateForward('tabs/tab5');
  // }

  // goLogin() {
  //   this.navCTRL.navigateForward('register');
  // }
}