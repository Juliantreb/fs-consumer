import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RentalDetailsLondonPage } from './rental-details-london.page';
var routes = [
    {
        path: '',
        component: RentalDetailsLondonPage
    }
];
var RentalDetailsLondonPageModule = /** @class */ (function () {
    function RentalDetailsLondonPageModule() {
    }
    RentalDetailsLondonPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RentalDetailsLondonPage]
        })
    ], RentalDetailsLondonPageModule);
    return RentalDetailsLondonPageModule;
}());
export { RentalDetailsLondonPageModule };
//# sourceMappingURL=rental-details-london.module.js.map