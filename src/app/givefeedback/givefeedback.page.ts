import { Component, OnInit } from "@angular/core";
import { LoadingController, ToastController } from "@ionic/angular";
import * as firebase from "firebase";

declare var emailjs:any;

@Component({
  selector: "app-givefeedback",
  templateUrl: "./givefeedback.page.html",
  styleUrls: ["./givefeedback.page.scss"]
})
export class GivefeedbackPage implements OnInit {
  title = "";
  message = "";

  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  sendfeedback() {

    if (this.title == "") {
      this.presentToast("Title field cannot be left blank");
    } else if (this.message == "") {
      this.presentToast("Message field cannot be left blank");
    } else {
      this.loadingCtrl.create({ message: "Please wait" }).then(res => {
        res.present();

        setTimeout(() => {
                    res.dismiss()
          this.presentToast("Your feedback has been submitted successfully");
          this.title = "";
          this.message = "";
        }, 3000);

        // Email.send({
        //   Host: "smtp.elasticemail.com",
        //   Username: "lawrenedickson49@gmail.com",
        //   Password: "D417EF6C3CEB84F2D0BD976445AC149E9337",
        //   To: "lawrenedickson49@gmail.com",
        //   From: "thrillerbrown106@gmail.com",
        //   Subject: "Feedback entry for #Project81PH",
        //   Body: "And this is the body"
        // }).then((response) => {
        //   res.dismiss()
        //   this.presentToast("Your feedback has been submitted successfully");
        //   this.title = "";
        //   this.message = "";
        //   console.log(response)
        // }).catch((err) =>{
        //   console.log(err)
        //   res.dismiss()
        // });

        emailjs.send(
          "gmail", "feedback",
           {
             "from_name":"#Project81PH",
             "user_email": firebase.auth().currentUser.email,
            "title": this.title,
             "message": this.message
            }
          )
      });
    }
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
