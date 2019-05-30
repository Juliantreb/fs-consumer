import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RentalDetailsPage } from './rental-details.page';
var routes = [
    {
        path: '',
        component: RentalDetailsPage
    }
];
var RentalDetailsPageModule = /** @class */ (function () {
    function RentalDetailsPageModule() {
    }
    RentalDetailsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RentalDetailsPage]
        })
    ], RentalDetailsPageModule);
    return RentalDetailsPageModule;
}());
export { RentalDetailsPageModule };
//# sourceMappingURL=rental-details.module.js.map