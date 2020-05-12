import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { Router } from '@angular/router';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})

export class MorePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  linkedaccounts(){
    this.router.navigateByUrl('/linkedaccounts');
  }

  changepassword(){
    this.router.navigateByUrl('/changepassword');
  }

  changeemail(){
    this.router.navigateByUrl('/changeemail');
  }

  deactivateaccount(){
    this.router.navigateByUrl('/deactivateaccount');
  }

  helpcenter(){
    this.router.navigateByUrl('/helpcentre');
  }

  about(){
    this.router.navigateByUrl('/about');
  }

  givefeedback(){
    this.router.navigateByUrl('/givefeedback');
  }

  logout(){
    firebase
        .auth()
        .signOut()
        .then(() => {
          this.router.navigateByUrl('/login');
        });
  }

}
