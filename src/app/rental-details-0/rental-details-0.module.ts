import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RentalDetails0Page } from './rental-details-0.page';

const routes: Routes = [
  {
    path: '',
    component: RentalDetails0Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RentalDetails0Page]
})
export class RentalDetails0PageModule{}
