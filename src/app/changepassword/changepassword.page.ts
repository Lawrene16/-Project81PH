import { Component, OnInit } from '@angular/core';
import { TravelAppService } from '../travel-app.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from "firebase";

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  currentpassword = ""
  newpassword = ""
  newpasswordconfirmation = ""

  passwordfromdb  = "";


  constructor(
    public router: Router,
    public travelAppSerice: TravelAppService,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) { 
    firebase.database().ref("/users").child(firebase.auth().currentUser.uid).once("value", snapshot => {
      // this.emailfromdb = snapshot.val().email;
      this.passwordfromdb = snapshot.val().password;
    });
  }

  ngOnInit() {
  }

  updatepassword(){
    if(this.passwordfromdb != this.currentpassword){
      this.presentToast("Incorrect user password");
    }
    else if(this.newpassword == "" || this.newpassword.length < 3){
      this.presentToast("New password length should be atleast 6 characters")
    }else if(this.newpasswordconfirmation != this.newpassword){
      this.presentToast("Password confirmation doesnt match")
    }else{
      this.loadingCtrl.create({message: "Please wait"}).then((res) =>{
        res.present()

        this.travelAppSerice.updateUserPassword(this.newpassword)

        firebase.database().ref('/users').child(firebase.auth().currentUser.uid).update({
          password: this.newpassword
        }).then(() =>{

        }).catch((err) =>{
          
        })
        setTimeout(() => {
          res.dismiss();
          this.presentToast("Password updated successfully. Please sign in again")
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

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color: 'dark'
    });
    toast.present();
  }

}
