import { Component, NgZone } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  profileIcon = "";
  discoverIcon = "";
  addTripIcon = "";
  searchIcon = "";
  moreIcon = "";


  constructor(public events: Events, public zone: NgZone) {
    this.events.subscribe('addtripevent', (res) =>{
      if(res ==  "closed"){
        this.changeProfileIcon();
      }
    })
    this.changeProfileIcon();

    // this.events.subscribe('addtripevent', (res) =>{
    //   if(res ==  "closed"){
    //     this.changeProfileIcon();
    //   }
    // })
  }

  changeProfileIcon(){
    this.profileIcon = "../../assets/tabicons/profileactive.svg";
    this.discoverIcon = "../../assets/tabicons/discover.svg";
    this.addTripIcon = "../../assets/tabicons/addtrip.svg";
    this.searchIcon = "../../assets/tabicons/search.svg";
    this.moreIcon = "../../assets/tabicons/more.svg";


  }

  changeDiscoverIcon(){
    this.discoverIcon = "../../assets/tabicons/discoveractive.svg";
    this.profileIcon = "../../assets/tabicons/profile.svg";
    this.addTripIcon = "../../assets/tabicons/addtrip.svg";
    this.searchIcon = "../../assets/tabicons/search.svg";
    this.moreIcon = "../../assets/tabicons/more.svg";


  }

  changeAddtripIcon(){
    this.profileIcon = "../../assets/tabicons/profile.svg";
    this.discoverIcon = "../../assets/tabicons/discover.svg";
    this.addTripIcon = "../../assets/tabicons/addtripactive.svg";
    this.searchIcon = "../../assets/tabicons/search.svg";
    this.moreIcon = "../../assets/tabicons/more.svg";


  }

  changeSearchIcon(){
    this.profileIcon = "../../assets/tabicons/profile.svg";
    this.discoverIcon = "../../assets/tabicons/discover.svg";
    this.addTripIcon = "../../assets/tabicons/addtrip.svg";
    this.searchIcon = "../../assets/tabicons/searchactive.svg";
    this.moreIcon = "../../assets/tabicons/more.svg";
  }

  changeMoreIcon(){
    this.profileIcon = "../../assets/tabicons/profile.svg";
    this.discoverIcon = "../../assets/tabicons/discover.svg";
    this.addTripIcon = "../../assets/tabicons/addtrip.svg";
    this.searchIcon = "../../assets/tabicons/search.svg";
    this.moreIcon = "../../assets/tabicons/moreactive.svg";
  }
}
