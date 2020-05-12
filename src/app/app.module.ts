import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
// import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { Crop } from "@ionic-native/crop/ngx";
import { File } from "@ionic-native/file/ngx";

// import { ImagePicker } from "@ionic-native/image-picker/ngx";
import { SignInWithApple } from '@ionic-native/sign-in-with-apple/ngx';
import { Facebook } from "@ionic-native/facebook/ngx";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { FlurryAnalytics } from '@ionic-native/flurry-analytics/ngx';
// import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AngularFireModule } from "angularfire2";
import * as firebase from "firebase";
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { HttpClientModule } from '@angular/common/http';
// import { ImagemodalPageModule } from '../app/imagemodal/imagemodal.module'
import { AppComponent } from "./app.component";
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';
import { AppRoutingModule } from "./app-routing.module";

// import { HttpModule } from '@angular/http';

var firebaseconfig = {
  apiKey: "AIzaSyCkvYY31eCJguhDl63ADJu16l7qGkK7l7w",
  authDomain: "jahztravelapp.firebaseapp.com",
  databaseURL: "https://jahztravelapp.firebaseio.com",
  projectId: "jahztravelapp",
  storageBucket: "jahztravelapp.appspot.com",
  messagingSenderId: "970318906848",
  appId: "1:970318906848:web:979a198774cac488d79785"

  // apiKey: "AIzaSyABuRu5bOcg3KoRnOjEiYIx7I7Ftw38qVQ",
  //   authDomain: "project81ph-fc707.firebaseapp.com",
  //   databaseURL: "https://project81ph-fc707.firebaseio.com",
  //   projectId: "project81ph-fc707",
  //   storageBucket: "project81ph-fc707.appspot.com",
  //   messagingSenderId: "219004912652",
  //   appId: "1:219004912652:web:7da8b813d6d4562382da29",
  //   measurementId: "G-60S0E5MEGZ"
};

firebase.initializeApp(firebaseconfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    Ionic4DatepickerModule,
    // ImagemodalPageModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    GooglePlus,
    SplashScreen,
    Camera,
    Geolocation,
    // NavParams,
    Crop,
    // FirebaseAnalytics,
    File,
    FlurryAnalytics,
    // GoogleAnalytics,
    SocialSharing,
    Facebook,
    SignInWithApple,
    // ImagePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
