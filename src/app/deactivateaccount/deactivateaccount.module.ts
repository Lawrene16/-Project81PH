import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeactivateaccountPage } from './deactivateaccount.page';

const routes: Routes = [
  {
    path: '',
    component: DeactivateaccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeactivateaccountPage]
})
export class DeactivateaccountPageModule {}
