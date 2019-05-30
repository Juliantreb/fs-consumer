import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RentalDetailsMontrealPage } from './rental-details-montreal.page';
var routes = [
    {
        path: '',
        component: RentalDetailsMontrealPage
    }
];
var RentalDetailsMontrealPageModule = /** @class */ (function () {
    function RentalDetailsMontrealPageModule() {
    }
    RentalDetailsMontrealPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RentalDetailsMontrealPage]
        })
    ], RentalDetailsMontrealPageModule);
    return RentalDetailsMontrealPageModule;
}());
export { RentalDetailsMontrealPageModule };
//# sourceMappingURL=rental-details-montreal.module.js.map