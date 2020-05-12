import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelAppService } from '../travel-app.service';
import { LoadingController, ToastController, Events } from '@ionic/angular';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  data;
  name = "";
  location = "";
  aboutMe = "";

  constructor(public route: ActivatedRoute,
    public loadingCtrl: LoadingController,
    public events: Events,
    public toastCtrl: ToastController,
    public travelAppService: TravelAppService,
     public router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state;

        console.log(this.data)
        this.name = this.data.name;
        this.location =  this.data.location;
        this.aboutMe = this.data.aboutMe;
      }
    });
  }

  saveProfile(){
    if(this.name == ""){
      this.presentToast("Name field cannot be left blank")
    }else if(this.name.length <3 ){
      this.presentToast("Name length is too short")
    }
    else if(this.location == ""){
      this.presentToast("Location field cannot be left blank")
    }else if(this.location.length <3 ){
      this.presentToast("Location length is too short")
    }
    else if(this.aboutMe == ""){
      this.presentToast("Bio field cannot be left blank")
    }else if(this.aboutMe.length <3 ){
      this.presentToast("Bio length is too short")
    }else{

      
      this.loadingCtrl.create({message: "Updating your profile"}).then((load) =>{
        load.present()

        this.travelAppService.updateUserDetails(this.name, this.location, this.aboutMe).then(() =>{
          this.events.publish('name', this.name);
          this.events.publish('location', this.location);
          this.events.publish('aboutMe', this.aboutMe);

          load.dismiss()
          this.presentToast("Profile updated succesfully");
          this.router.navigateByUrl('/tabs/profile')
        }).catch((err) =>{
          this.presentToast(err);
          load.dismiss()

        })
    
    
      })
    }

  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 6000,
      color: "dark"
    });
    toast.present();
  }
}
