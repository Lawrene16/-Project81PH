import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddtripPage } from './addtrip.page';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Ionic4DatepickerModule,
    RouterModule.forChild([{ path: '', component: AddtripPage }])
  ],
  declarations: [AddtripPage]
})
export class AddtripPageModule {}
