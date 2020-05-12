import { Component } from "@angular/core";
import * as firebase from "firebase";
// import { FirebaseAnalytics } from "@ionic-native/firebase-analytics/ngx";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { TravelAppService } from "./travel-app.service";
import {
  FlurryAnalytics,
  FlurryAnalyticsObject,
  FlurryAnalyticsOptions
} from "@ionic-native/flurry-analytics/ngx";
// import { GoogleAnalytics } from "@ionic-native/google-analytics/ngx";
import { Router } from "@angular/router";
// import { TravelAppService } from '../tr'

// declare var mixpanel: any;

// var Countly = require('countly-sdk-nodejs');

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  public appPages = [
    {
      title: "Home",
      url: "/home",
      icon: "home"
    },
    {
      title: "Profile",
      url: "/profile",
      icon: "person"
    },
    {
      title: "Logout",
      url: "/login",
      icon: "log-out"
    }
  ];

  constructor(
    private platform: Platform,
    public travelAppService: TravelAppService,
    // private ga: GoogleAnalytics,
    public flurryAnalytics: FlurryAnalytics,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');

      this.splashScreen.hide();

    //   const options: FlurryAnalyticsOptions = {
    //     appKey: "34XNZFH3594CJ2MM4FSV", // REQUIRED
    //     reportSessionsOnClose: true,
    //     enableLogging: true
    //   };

    //   let fa: FlurryAnalyticsObject = this.flurryAnalytics.create(options);

    //   //  this.flurryAnalytics.
    //   fa.logEvent("event name")
    //     .then(() => console.log("Logged an event!"))
    //     .catch(e => console.log("Error logging the event", e));
    });


    // this.ga.startTrackerWithId('UA-XXXXXXXXX-X')
    //   .then(() => {}).catch(e => console.log('Error starting GoogleAnalytics == '+ e));
 
    
  }

  checkPage(p) {
    if (p.title == "Logout") {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.router.navigateByUrl(p.url);
        });
      // console.log("ressss");
    } else {
      this.router.navigateByUrl(p.url);
    }
  }
}
