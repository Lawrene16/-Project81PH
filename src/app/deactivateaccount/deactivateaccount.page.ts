import { Component, OnInit } from "@angular/core";
import { TravelAppService } from "../travel-app.service";
import { LoadingController, ToastController } from "@ionic/angular";
import { Router } from '@angular/router';
import * as firebase from "firebase";

declare var emailjs: any;

@Component({
  selector: "app-deactivateaccount",
  templateUrl: "./deactivateaccount.page.html",
  styleUrls: ["./deactivateaccount.page.scss"]
})
export class DeactivateaccountPage implements OnInit {
  ishidden = true;
  confusing = false;
  design = false;
  justtrying = false;
  similar = false;
  others = false;
  checklistarray = [];
  dynamicColor: string;
  reason = "";
  reasonToSend = "";

  constructor(
    public travelAppService: TravelAppService,
    public toastCtrl: ToastController,
    public router: Router,
    public loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    // this.dynamicColor = 'secondary'
  }

  deactivateaccount() {
    this.ishidden = !this.ishidden;
  }

  // parseReason(boolean ){
  //   this.checklistarray.forEach(reason =>{
  //     switch(){

  //     }
  //   })
  // }

  submitanddeactivate() {
    this.checklistarray = [];

    this.checklistarray.push(this.confusing);
    this.checklistarray.push(this.design);
    this.checklistarray.push(this.justtrying);
    this.checklistarray.push(this.similar);
    this.checklistarray.push(this.others);

    this.loadingCtrl.create({ message: "Please wait" }).then(res => {
      if (
        this.confusing == false &&
        this.design == false &&
        this.justtrying == false &&
        this.similar == false &&
        this.others == false
      ) {
        this.presentToast("Please select a reason");
      } else {
        if (this.others != true) {
          res.present();

          this.travelAppService
            .deactivateAccount(this.checklistarray)
            .then(() => {
              res.dismiss();

              // emailjs.send("gmail", "template_FhzuPisb", {
              //   from_name: "#Project81PH",
              //   title: "New user deactivated their account",
              //   message: this.reason
              // });


              this.presentToast(
                "Request to deactivate account submitted succesfully"
              );
              this.ishidden = true;
              this.router.navigateByUrl('/login')
            })
            .catch(err => {
              res.dismiss();
              this.presentToast(err);
            });
        } else if (this.others == true) {
          if (this.reason == "") {
            this.presentToast("Please type a reason");
          } else {
            res.present();
            this.travelAppService
              .deactivateAccount(this.checklistarray)
              .then(() => {
                res.dismiss();
                this.presentToast(
                  "Request to deactivate account submitted succesfully"
                );
                this.ishidden = true;

                emailjs.send("gmail", "feedback", {
                  "from_name": "#Project81PH",
                  "user_email": firebase.auth().currentUser.email,
                  "title": "New user deactivated their account",
                  "message": this.reason
                });
                this.router.navigateByUrl('/login')

              })
              .catch(err => {
                res.dismiss();
                this.presentToast(err);
              });
          }
        }
      }
    });
  }

  confusingChanged(event) {
    this.confusing = event.detail.checked;
  }

  designChanged(event) {
    this.design = event.detail.checked;
  }

  justTryingChanged(event) {
    this.justtrying = event.detail.checked;
  }

  similarChanged(event) {
    this.similar = event.detail.checked;
  }

  othersChanged(event) {
    this.others = event.detail.checked;
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color: "dark"
    });
    toast.present();
  }
}
