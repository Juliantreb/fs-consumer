import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
  { path: 'rental-details', loadChildren: './rental-details/rental-details.module#RentalDetailsPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  // { path: 'tab6', loadChildren: './tab6/tab6.module#Tab6PageModule' },
  { path: 'rental-details-0', loadChildren: './rental-details-0/rental-details-0.module#RentalDetails0PageModule' },
  // { path: 'rental-details-montreal', loadChildren: './rental-details-montreal/rental-details-montreal.module#RentalDetailsMontrealPageModule' },
  { path: 'property-details', loadChildren: './property-details/property-details.module#PropertyDetailsPageModule'},
  { path: 'bookings', loadChildren: './bookings/bookings.module#BookingsPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
