import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Events } from '@ionic/angular';
import * as firebase from "firebase";



@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage {

  constructor(public geolocation: Geolocation, public events: Events) {

    // this.geolocation.getCurrentPosition().then((resp) => {
    //   // resp.coords.latitude
    //   // resp.coords.longitude
    //   this.events.publish('location', resp);

    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });

    //  this.events.subscribe('userdetails', (res) =>{
    //    console.log(res)
    //  })

   }


}
