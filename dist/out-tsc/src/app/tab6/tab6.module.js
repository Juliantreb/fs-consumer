import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Tab6Page } from './tab6.page';
var routes = [
    {
        path: '',
        component: Tab6Page
    }
];
var Tab6PageModule = /** @class */ (function () {
    function Tab6PageModule() {
    }
    Tab6PageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [Tab6Page]
        })
    ], Tab6PageModule);
    return Tab6PageModule;
}());
export { Tab6PageModule };
//# sourceMappingURL=tab6.module.js.map