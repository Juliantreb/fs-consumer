import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../models';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(navCtrl) {
        this.navCtrl = navCtrl;
        this.user = [];
        this.user1 = new User();
        this.user1.firstname = "Julian";
        this.user1.lastname = "Trebach";
        this.user1.livesin = "Bronx, New York";
        this.user1.joinedin = "May, 2015";
        this.user.push(this.user1);
    }
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: './tab1.page.html',
            styleUrls: ['./tab1.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map