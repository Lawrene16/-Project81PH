import { Component, OnInit } from '@angular/core';
import { TravelAppService } from '../travel-app.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from "firebase";

@Component({
  selector: 'app-changeemail',
  templateUrl: './changeemail.page.html',
  styleUrls: ['./changeemail.page.scss'],
})
export class ChangeemailPage implements OnInit {
  currentemail = ""
  newemail = ""
  newemailconfirmation = ""


  emailfromdb = "";
  // passwordfromdb  = "";

  constructor(
    public router: Router,
    public travelAppSerice: TravelAppService,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) { 

    firebase.database().ref("/users").child(firebase.auth().currentUser.uid).once("value", snapshot => {
            this.emailfromdb = snapshot.val().email;
            // this.passwordfromdb = snapshot.val().password;
          });
  }

  ngOnInit() {
  }


  updateemail(){
    if(this.currentemail != this.emailfromdb){
      this.presentToast("Email does not exist for this user");
    }
    else if(this.newemail == "" || this.newemail.length < 3){
      this.presentToast("New email length should be atleast 6 characters")
    }else if(this.newemailconfirmation != this.newemail){
      this.presentToast("New email confirmation doesnt match with new email")
    }else{
      this.loadingCtrl.create({message: "Please wait"}).then((res) =>{
        res.present()
        this.travelAppSerice.updateUserEmail(this.newemail);

        firebase.database().ref('/users').child(firebase.auth().currentUser.uid).update({
          email: this.newemail
        }).then(() =>{
          firebase.auth().currentUser.sendEmailVerification();

        }).catch((err) =>{
          
        })

        setTimeout(() => {
          res.dismiss();
          this.presentToast("Email updated successfully. Please sign in again")
          firebase
          .auth()
          .signOut()
          .then(() => {
            this.router.navigateByUrl('/login');
          });
        }, 4000);
      })
    }
  }

  resendVerificationLink(){
    firebase.auth().currentUser.sendEmailVerification();
    setTimeout(() => {
      this.presentToast("Verification link resent")
    }, 4000);
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color: 'dark'
    });
    toast.present();
  }


}
