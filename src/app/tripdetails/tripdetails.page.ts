import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { ActionSheetController, ToastController, LoadingController, ModalController } from "@ionic/angular";
import { TravelAppService } from '../travel-app.service';
import { ImagemodalPage } from '../imagemodal/imagemodal.page';

@Component({
  selector: "app-tripdetails",
  templateUrl: "./tripdetails.page.html",
  styleUrls: ["./tripdetails.page.scss"]
})
export class TripdetailsPage implements OnInit {
  data;
  provincesVisited = "";
  visitedProvincesArray:any = [];

  // b = [{},{},{},{},{},{},{},{},{},{},{},{}]

  constructor(
    public route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public router: Router,
    public toastCtrl: ToastController,
    public modalController: ModalController,
    public loadingCtrl: LoadingController,
    public travelAppService: TravelAppService,
    public socialSharing: SocialSharing
  ) {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Options",
      buttons: [
        {
          text: "Edit Trip",
          icon: "create",
          handler: () => {
            this.editTrip();
          }
        },
        {
          text: "Delete Trip",
          icon: "trash",
          handler: () => {
            this.deleteTrip();
          }
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {}
        }
      ]
    });
    await actionSheet.present();
  }

  editTrip() {
    let navigationExtras: NavigationExtras = {
      state: {
        trip: this.data
      }
    };
    this.router.navigate(["edittrip"], navigationExtras);
  }

  deleteTrip() {

    this.loadingCtrl.create({message: "Please wait"}).then((res) =>{

      this.deleteProvince(this.data.province);

      res.present();
      this.travelAppService.deleteTrip(this.data.tripuid).then(() =>{
        
        this.updateVisitedProvinces()
        res.dismiss();
        // this.presentToast("Trip deleted successfully");
        this.router.navigateByUrl('/tabs/profile');
      }).catch((err) =>{
        res.dismiss();
        this.presentToast(err);
      })
    })
  }

  updateVisitedProvinces() {
    if(this.visitedProvincesArray != []){
      this.travelAppService
      .updateVisitedProvinces(this.provincesVisited, this.visitedProvincesArray)
      .then(() => {
        console.log("Provinces updated");
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
  deleteProvince(province){
    for(var i = 0; i < this.visitedProvincesArray.length; i++){
      if(this.visitedProvincesArray[i] == province){
        this.visitedProvincesArray.splice(i, 1)
      }
    }
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.trip;
      }
    });

    this.travelAppService.fetchVisitedProvicesArray().then(visitedArray => {

      this.visitedProvincesArray = visitedArray;
      this.provincesVisited = ""+this.visitedProvincesArray.length

      // console.log(this.visitedProvincesArray)
    })

    // console.log(this.data)

//     this.data = {
//       aboutTrip: "djdjjdjdjdjdjdjdjjfjff",
// city: "Bayugan",
// eventTitle: "bbchdhdjdj",
// fromDate: "2019-12-23",
// fromDate2: "December 23, 2019",
// photo: "https://firebasestorage.googleapis.com/v0/b/jahztravelapp.appspot.com/o/trips%2FCDRMfwGfmPc5giGY49zzqbuAR8m2%2F-LwnR1iIqJIxKGxsxu8a.jpg?alt=media&token=7b7785ca-75fe-4820-ae12-408e41b4d6ec",
// province: "Agusan del Sur",
// toDate: "2019-12-23",
// toDate2: "December 23, 2019",
// tripuid: "-LwnR1iIqJIxKGxsxu8a"
//     }

  }

  openModal() {
    let navigationExtras: NavigationExtras = {
      state: {
        title: this.data.eventTitle,
        image: this.data.photo
      }
    };

    this.router.navigate(["imagedetails"], navigationExtras);
  }

  shareTrip() {
    var msg = this.compilemsg();
    this.socialSharing.shareViaFacebook(msg, null, null);
  }


  compilemsg(): string {
    var msg =
      "Join me in my #Project81PH goal" +
      " \n" +
      " \n" +
      this.data.photo;
    // return msg.concat(" \n Sent from my Awesome App !" + " \n " + this.refernumber);
    return msg;
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
