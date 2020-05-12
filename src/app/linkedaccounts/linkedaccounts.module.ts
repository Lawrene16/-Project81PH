import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LinkedaccountsPage } from './linkedaccounts.page';

const routes: Routes = [
  {
    path: '',
    component: LinkedaccountsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LinkedaccountsPage]
})
export class LinkedaccountsPageModule {}
