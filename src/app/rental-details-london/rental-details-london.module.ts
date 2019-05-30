import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RentalDetailsLondonPage } from './rental-details-london.page';

const routes: Routes = [
  {
    path: '',
    component: RentalDetailsLondonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RentalDetailsLondonPage]
})
export class RentalDetailsLondonPageModule {}
