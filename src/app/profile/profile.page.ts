import { Component, OnDestroy, NgZone } from "@angular/core";
import {
  ToastController,
  LoadingController,
  ActionSheetController,
  AlertController,
  Events,
} from "@ionic/angular";
import { ModalController } from "@ionic/angular";
import { TravelAppService } from "../travel-app.service";
import * as firebase from "firebase";
import { Camera } from "@ionic-native/camera/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { RouterPage } from "../routerpage";
import { Storage } from "@ionic/storage";

declare var $: any;

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage extends RouterPage implements OnDestroy {
  name = "";
  phonenumber = "";
  aboutMe = "";
  following = "";
  followers = "";
  provincesVisited = "0";
  myimage = "";
  base64CoverPhoto;
  base64ProfilePhoto;
  useruid;
  showGallery = false;
  showTrips = true;
  showMaps = false;
  showTripsText = false;
  showGalleryText = false;
  galleryimages = [];
  trips = [];
  visitedProvincesArray: any = [];
  tabvalue;
  map;
  testsnapshot;
  location;
  ishidden = false;
  data;
  public dynamicColor: string;
  menuHidden = true;
  selectedOption = "Recently Added";

  constructor(
    public toastCtrl: ToastController,
    public zone: NgZone,
    public camera: Camera,
    public modalController: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public alertController: AlertController,
    public events: Events,
    public router: Router,
    public route: ActivatedRoute,
    public storage: Storage,
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public travelAppService: TravelAppService
  ) {
    super(router, route);
    this.tabvalue = "showTrips";

    this.useruid = firebase.auth().currentUser.uid;
    this.loadingCtrl
      .create({ message: "Fetching your profile details" })
      .then((res) => {
        res.present();
        firebase
          .database()
          .ref("/users")
          .child(this.useruid)
          .once("value", (snapshot) => {
            this.name = snapshot.val().name;
            this.phonenumber = snapshot.val().phoneNumber;
            this.aboutMe = snapshot.val().aboutMe;
            this.following = snapshot.val().following;
            this.followers = snapshot.val().followers;
            if (snapshot.val().location == undefined) {
              this.location = "Location not set";
            } else {
              this.location = snapshot.val().location;
            }
            if (
              snapshot.val().photoURL == undefined ||
              snapshot.val().photoURL == ""
            ) {
              this.base64ProfilePhoto = "../../assets/icon/user2.png";
            } else {
              this.base64ProfilePhoto = snapshot.val().photoURL;
              if (snapshot.val().photoURL.includes("graph.facebook.com")) {
                this.base64ProfilePhoto =
                  snapshot.val().photoURL + "?height=500";
              }
            }
            if (
              snapshot.val().coverPhoto == undefined ||
              snapshot.val().coverPhoto == ""
            ) {
              this.base64CoverPhoto = "../../assets/backg2.png";
            } else {
              this.base64CoverPhoto = snapshot.val().coverPhoto;
            }
            this.storage.set("loadmap", "yes");
          })
          .then(() => {
            res.dismiss();
          })
          .catch((err) => {
            res.dismiss();
            this.presentToast(err);
          });
      });
    // }
    // })
    // }
    // })
  }

  recentlyadded() {
    this.selectedOption = "Recently Added";
    this.storage.set("order", "recent");
    this.fetchTrips();
  }

  latestfirst() {
    console.log("latest");
    this.selectedOption = "Latest Trip First";
    this.storage.set("order", "latest");
    this.fetchTrips();
  }

  setSortOrder() {
    this.storage.get("order").then((order) => {
      switch (order) {
        case "recent":
          this.trips.sort((a, b) =>
            a.postedtimetimestamp < b.postedtimetimestamp ? 1 : -1
          );
          break;

        case "latest":
          this.trips.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
          break;
      }
    });
  }

  openMenu() {
    this.menuHidden = !this.menuHidden;
  }

  hideIt() {
    this.ishidden = true;
    this.storage.set("showTutorials", "no");
    this.dynamicColor = "light";
  }

  editPage() {
    var locationtosend = this.location;
    if (this.location == "Location not set") {
      locationtosend = "";
    }
    let navigationExtras: NavigationExtras = {
      state: {
        name: this.name,
        location: locationtosend,
        aboutMe: this.aboutMe,
      },
    };

    // console.log(i);
    this.router.navigate(["editprofile"], navigationExtras);

    // this.router.navigateByUrl('/editprofile')
  }

  openProfileAndCoverPhoto(index) {
    var title: any;
    var image: any;

    if (index == 0) {
      title = "Cover Photo";
      image = this.base64CoverPhoto;
    } else if (index == 1) {
      title = "Profile Photo";
      image = this.base64ProfilePhoto;
    }

    let navigationExtras: NavigationExtras = {
      state: {
        title: title,
        image: image,
      },
    };

    this.router.navigate(["imagedetails"], navigationExtras);

    this.storage.set("index", "1");
  }

  openModal(w, index) {
    console.log(w);
    console.log(index);

    var title: any;
    var image: any;
    // console.log(bla);
    if (index == 2) {
      title = this.trips[w].eventTitle;
      image = this.galleryimages[w];
    }

    let navigationExtras: NavigationExtras = {
      state: {
        title: title,
        image: image,
      },
    };

    this.router.navigate(["imagedetails"], navigationExtras);

    this.storage.set("index", "1");
  }

  fetchTrips() {
    this.galleryimages = [];
    this.travelAppService
      .fetchTrips()
      .then((trips: any) => {
        this.trips = trips;

        this.setSortOrder();

        this.checkTripsArray();
        this.trips.forEach((trip) => {
          this.galleryimages.push(trip.photo);
          this.checkGalleryArray();
        });
        this.travelAppService
          .fetchVisitedProvicesArray()
          .then((visitedArray) => {
            this.visitedProvincesArray = visitedArray;
            this.provincesVisited = "" + this.visitedProvincesArray.length;
            // this.updateVisitedProvinces();

            // Init the maps div and map component
            setTimeout(() => {
              if (this.map == undefined) {
                this.map = (<any>$("#map")).ezClickableMap({});
              }
              this.map.setSelectedAreaNames(visitedArray);
            }, 100);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ionViewWillLeave() {
    this.updateVisitedProvinces();
    this.storage.set("loadmap", "no");
  }

  doRefresh(event) {
    if (this.showGallery == true) {
      event.target.complete();
    } else if (this.showMaps == true) {
      event.target.complete();
    } else {
      this.galleryimages = [];
      this.showTrips = true;
      this.showMaps = false;
      this.showGallery = false;

      this.travelAppService
        .fetchTrips()
        .then((trips: any) => {
          console.log(trips);
          this.trips = trips;

          this.setSortOrder();

          if (trips.length == 0) {
            event.target.complete();
          } else {
            this.trips.forEach((trip) => {
              this.galleryimages.push(trip.photo);
              event.target.complete();
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  onEnter() {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.showTutorials;
        console.log(this.data);
        this.ishidden = false;
        this.dynamicColor = "secondary";
      } else {
        console.log("Came from another");
        this.ishidden = true;
      }
    });

    this.fetchTrips();

    this.events.subscribe("name", (name) => {
      if (name != undefined) {
        this.name = name;
      }
    });
    this.events.subscribe("location", (location) => {
      if (location != undefined) {
        this.location = location;
      }
    });
    this.events.subscribe("aboutMe", (aboutMe) => {
      if (aboutMe != undefined) {
        this.aboutMe = aboutMe;
      }
    });
  }

  onDestroy() {
    super.ngOnDestroy();
  }

  showTripDetails(i) {
    let navigationExtras: NavigationExtras = {
      state: {
        trip: this.trips[i],
      },
    };

    console.log(i);
    this.router.navigate(["tripdetails"], navigationExtras);
  }

  segmentChanged(event) {
    // console.log(event)

    if (event.detail.value == "showTrips") {
      this.zone.run(() => {
        this.showTrips = true;
        this.showGallery = false;
        this.showMaps = false;
      });
    } else if (event.detail.value == "showMaps") {
      this.zone.run(() => {
        this.showMaps = true;
        this.showGallery = false;
        this.showTrips = false;
      });
    } else if (event.detail.value == "showGallery") {
      this.zone.run(() => {
        this.showGallery = true;
        this.showMaps = false;
        this.showTrips = false;
      });
    }
  }

  updateVisitedProvinces() {
    // console.log(this.visitedProvincesArray)
    // if(this.visitedProvincesArray != []){
    //   // console.log(this.provincesVisited);
    //   this.travelAppService
    //   .updateVisitedProvinces(this.provincesVisited, this.visitedProvincesArray)
    //   .then(() => {
    //     console.log("Provinces updated");
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // }
  }

  checkTripsArray() {
    if (this.trips == [] || this.trips == undefined) {
      this.showTripsText = true;
    }
  }

  checkGalleryArray() {
    if (this.galleryimages == [] || this.galleryimages == undefined) {
      this.showGalleryText = true;
    }
  }

  AccessCamera(index) {
    this.camera
      .getPicture({
        targetWidth: 512,
        targetHeight: 512,
        correctOrientation: true,
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.DATA_URL,
      })
      .then(
        (imageData) => {
          // this.presentToast(imageData)
          this.loadingCtrl
            .create({ message: "Uploading photo" })
            .then((load) => {
              load.present();
              if (index == 0) {
                this.base64CoverPhoto = "data:image/jpeg;base64," + imageData;
                this.travelAppService
                  .uploadCoverPhoto(this.useruid, this.base64CoverPhoto)
                  .then(() => {
                    this.presentToast("Cover Photo Uploaded Successfully");
                    load.dismiss();
                  })
                  .catch((err) => {
                    this.presentToast("Cover Photo Not Uploaded");
                    load.dismiss();
                  });
              } else if (index == 1) {
                this.base64ProfilePhoto = "data:image/jpeg;base64," + imageData;
                this.travelAppService
                  .uploadProfilePic(this.useruid, this.base64ProfilePhoto)
                  .then(() => {
                    this.presentToast("Profile Photo Uploaded Successfully");
                    load.dismiss();
                  })
                  .catch((err) => {
                    this.presentToast("Profile Photo Not Uploaded");
                    load.dismiss();
                  });
              }
            });
        },
        (err) => {
          console.log(err);
        }
      );
  }

  AccessGallery(index) {
    this.camera
      .getPicture({
        quality: 50,
        targetWidth: 600,
        targetHeight: 800,
        allowEdit: true,
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
        destinationType: this.camera.DestinationType.DATA_URL,
      })
      .then(
        (imageData) => {
          this.loadingCtrl
            .create({ message: "Uploading photo" })
            .then((load) => {
              load.present();
              if (index == 0) {
                this.base64CoverPhoto = "data:image/jpeg;base64," + imageData;
                this.travelAppService
                  .uploadCoverPhoto(this.useruid, this.base64CoverPhoto)
                  .then(() => {
                    this.presentToast("Cover Photo Uploaded Successfully");
                    load.dismiss();
                  })
                  .catch((err) => {
                    this.presentToast("Cover Photo Not Uploaded");
                    load.dismiss();
                  });
              } else if (index == 1) {
                this.base64ProfilePhoto = "data:image/jpeg;base64," + imageData;
                this.travelAppService
                  .uploadProfilePic(this.useruid, this.base64ProfilePhoto)
                  .then(() => {
                    this.presentToast("Profile Photo Uploaded Successfully");
                    load.dismiss();
                  })
                  .catch((err) => {
                    this.presentToast("Profile Photo Not Uploaded");
                    load.dismiss();
                  });
              }
            });
        },
        (err) => {
          console.log(err);
        }
      );
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 6000,
      color: "dark",
    });
    toast.present();
  }

  async presentToast2(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1000,
      color: "dark",
    });
    toast.present();
  }
}
