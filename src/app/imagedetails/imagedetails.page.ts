import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-imagedetails',
  templateUrl: './imagedetails.page.html',
  styleUrls: ['./imagedetails.page.scss'],
})
export class ImagedetailsPage implements OnInit {

  title:any;
  img:any;

  constructor(    public route: ActivatedRoute,
    public location: Location,
    public router: Router,) { }

    ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.title = this.router.getCurrentNavigation().extras.state.title;
        this.img = this.router.getCurrentNavigation().extras.state.image;
      }
    });

    // this.img = "../../assets/stuff.png"
  }

  closeModal(){
    this.location.back();
  }

}
