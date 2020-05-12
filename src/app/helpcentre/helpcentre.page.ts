import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-helpcentre',
  templateUrl: './helpcentre.page.html',
  styleUrls: ['./helpcentre.page.scss'],
})
export class HelpcentrePage implements OnInit {

  public items: any = [];

  constructor(public router: Router) {
    this.items = [
      {title: "How do i add my trip", beforeicon: "Easy breezy. You just have to look for this icon", icon: "add-circle-outline", aftericon: " from your main menu bar to get started. Adding the trip will also automatically highlight on the map the province you selected where the trip took place.", expanded: false },
      {title: "How do i edit my trip", beforeicon: "From your profile page, open that trip from the list of posts under “Trip” tab that you want to update and tap over this icon", icon: "options", aftericon: " from the top right and select “Edit Trip”.", expanded: false },
      {title: "How do i delete my trip", beforeicon: "From your profile page, open that trip from the list of posts under “Trip” tab that you want to delete and tap over this icon", icon: "options", aftericon: " from the top right and select Delete Trip”.", expanded: false },
      {title: "Can i add multiple trips to a single place", beforeicon: "Yes, for as many as you want.", expanded: false }
    ];
  }

  expandItem(item): void {
    // console.log(item)
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  ngOnInit() {
  }

  contactUs(){
    this.router.navigateByUrl('/givefeedback');
  }
}
