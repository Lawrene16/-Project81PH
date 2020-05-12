import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-imagemodal',
  templateUrl: './imagemodal.page.html',
  styleUrls: ['./imagemodal.page.scss'],
})
export class ImagemodalPage implements OnInit {

  @Input()title:string;
  @Input()img:string;

  constructor(private modalController: ModalController) { }

  
    ngOnInit() {
      // console.log(this.img)
      // console.table(this.navParams);
      // this.img = this.navParams.data.img;
      // this.title = this.navParams.data.title;
      // console.log(`${this.title} ${this.img}`)
    }
  
    async closeModal() {
      await this.modalController.dismiss();
    }
}
