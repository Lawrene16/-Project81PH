import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, Events } from '@ionic/angular';
import { TravelAppService } from '../travel-app.service';
import * as firebase from 'firebase';
import { Storage } from '@ionic/storage';

// import * as papa from 'papaparse';

// import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  email = "";
  password = "";
  menuHidden = true;

//   • Date selector improvement (showing calendar style, or month day year text)
// • Search bar on province list (user can type when searching for the province)
// • Trip sorting (Recently added, Latest trip)
  constructor(
    public router: Router,
    public events: Events,
    private travelAppService: TravelAppService,
    private toastCtrl: ToastController,
    public loadingController: LoadingController,
    public storage: Storage,
  ) { 

  }

  ngOnInit() {
    this.events.publish('justloggedin', 'yes');
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color: 'dark'
    });
    toast.present();
  }

  fbLogin(){
    this.loadingController.create({message:"Please wait"}).then((res) =>{
      res.present()
      this.travelAppService.facebookLogin().then((user:any) =>{
        console.log(user);
        this.checkIfUserExits(user.uid).then((isthereuser) =>{
            switch (isthereuser) {
              case true:
                this.router.navigateByUrl('/tabs');
                res.dismiss();
                break;
              case false:
                  this.travelAppService.generateInitialUserDetails(user.displayName, user.email, user.photoURL).then(() =>{
                    this.router.navigateByUrl('/tabs');
                    res.dismiss();
                  }).catch((err) =>{
                    this.presentToast(err)
                    res.dismiss()
                  })
                break;
            }
          }).catch((err) => {
            this.presentToast(err);
            console.log(err);
          });
      }).catch((err) =>{
        this.presentToast(err)
        res.dismiss()
      })
    }) 
  }

  googleLogin(){
    this.loadingController.create({message:"Please wait"}).then((res) =>{
      res.present()
      this.travelAppService.googleLogin().then((user:any) =>{
        this.checkIfUserExits(user.uid).then((isthereuser) =>{
            switch (isthereuser) {
              case true:
                this.router.navigateByUrl('/tabs');
                res.dismiss();
                break;
              case false:
                  this.travelAppService.generateInitialUserDetails(user.displayName, user.email, user.photoURL).then(() =>{
                    this.router.navigateByUrl('/tabs');
                    res.dismiss();
                  }).catch((err) =>{
                    this.presentToast(err)
                    res.dismiss()
                  })
                break;
            }
          }).catch((err) => {
            this.presentToast(err);
            console.log(err);
          });
      }).catch((err) =>{
        this.presentToast(err)
        res.dismiss()
      })
    })  
  }

  appleLogin(){
    this.loadingController.create({message:"Please wait"}).then((res) =>{
      res.present()
      this.travelAppService.appleLogin().then((user:any) =>{
        this.checkIfUserExits(user.uid).then((isthereuser) =>{
            switch (isthereuser) {
              case true:
                this.router.navigateByUrl('/tabs');
                res.dismiss();
                break;
              case false:
                  this.travelAppService.generateInitialUserDetails(user.displayName, user.email, user.photoURL).then(() =>{
                    this.router.navigateByUrl('/tabs');
                    res.dismiss();
                  }).catch((err) =>{
                    this.presentToast(err)
                    res.dismiss()
                  })
                break;
            }
          }).catch((err) => {
            this.presentToast(err);
            console.log(err);
          });
      }).catch((err) =>{
        this.presentToast(err)
        res.dismiss()
      })
    }) 
  }

  checkIfUserExits(userId) {
    return new Promise((resolve, reject) => {
      firebase.database().ref('/users').child(userId).once('value', (snapshot) => {
        var exists = (snapshot.val() !== null);
        resolve(exists)

        this.storage.set("order", "latest")
      }).catch((err) => {
        reject(err);
      });
    });
  }

  login() {

    // window.open('mailto:test@example.com?subject=subject&body=body')


    if(this.email == "" || this.email.length < 3 ||
    !this.email.includes('@') || !this.email.includes('.')){
      this.presentToast("Invalid username/email address")
    }else if(this.password == "" || this.password.length < 6){
      this.presentToast("Password name field is either blank or too short")      
    }else{
      this.loadingController.create({
        message: 'Logging In',
      }).then((res) => {
        res.present();
        this.travelAppService.loginExistingUser(this.email, this.password).then(() =>{
          res.dismiss();
          this.router.navigateByUrl('/tabs');
        }).catch((err) =>{
          this.presentToast(err)
          res.dismiss()
        })
      });
  
    }
  }
}
