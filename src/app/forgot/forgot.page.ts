import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { TravelAppService } from '../travel-app.service';
import * as firebase from "firebase";
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  email = "";
  showCleanBox = true;
  showGreenBox = false;
  showRedBox = false;
  buttonText = "Reset Password";


  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    public travelAppService: TravelAppService
  ) { }

  ngOnInit() {
    
  }


  resetpassword(){
    if(this.buttonText == "Back to Sign In"){
      this.router.navigateByUrl('/login');
    }else{
      if(this.email == "" || this.email.length < 3 ||
      !this.email.includes('@') || !this.email.includes('.')){
        this.presentToast("Invalid username/email address")
      }else{
        this.loadingCtrl.create({message: "Sending password reset email"}).then((res) =>{
          res.present();
          
          firebase.auth().sendPasswordResetEmail(this.email).then(() =>{
            res.dismiss()
  
  
            this.showCleanBox = false;
            this.showGreenBox = true;
            this.showRedBox = false;
            // this.presentToast("Password reset email sent")
  
            this.buttonText = "Back to Sign In";
  
  
          }).catch((err) =>{
  
            this.showCleanBox = false;
            this.showGreenBox = false;
            this.showRedBox = true;
  
            res.dismiss()
            this.presentToast(err)
            this.buttonText = "Back to Sign In";
  
          })
  
        })
      }
    }

  }


  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 6000,
      color: 'dark'
    });
    toast.present();
  }

}
