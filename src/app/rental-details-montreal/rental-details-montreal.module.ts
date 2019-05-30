import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RentalDetailsMontrealPage } from './rental-details-montreal.page';

const routes: Routes = [
  {
    path: '',
    component: RentalDetailsMontrealPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RentalDetailsMontrealPage]
})
export class RentalDetailsMontrealPageModule {}
