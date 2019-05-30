import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: '', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
    { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
    { path: 'rental-details', loadChildren: './rental-details/rental-details.module#RentalDetailsPageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'tab6', loadChildren: './tab6/tab6.module#Tab6PageModule' },
    { path: 'rental-details-london', loadChildren: './rental-details-london/rental-details-london.module#RentalDetailsLondonPageModule' },
    { path: 'rental-details-montreal', loadChildren: './rental-details-montreal/rental-details-montreal.module#RentalDetailsMontrealPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map