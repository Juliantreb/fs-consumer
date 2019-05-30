import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { pasttrips, currenttrip } from '../models';
import { pasttripsService } from '../services/pasttrips.service';
var Tab4Page = /** @class */ (function () {
    function Tab4Page(navCtrl, pasttripsService) {
        this.navCtrl = navCtrl;
        this.pasttripsService = pasttripsService;
        this.pasttrips = [];
        this.payment = [];
        this.property = [];
        this.user = [];
        this.currenttrip = [];
        this.currenttrip1 = new currenttrip();
        this.pasttrip1 = new pasttrips();
        this.pasttrip2 = new pasttrips();
        this.currenttrip1.price = "$40";
        this.currenttrip1.imgName = "https://s-ec.bstatic.com/images/hotel/max1280x900/105/105878771.jpg";
        this.currenttrip1.location = "Lisbon, Portugal";
        this.currenttrip1.startdate = "May 25";
        this.currenttrip1.enddate = "July 6";
        pasttriplst: Array();
        this.pasttripsService.getAllPasttrip();
        this.pasttrips = this.pasttripsService.pasttrips;
    }
    Tab4Page.prototype.navTopasttrips = function (pasttrips) {
        this.navCtrl
            .navigateForward("pasttrip-details", {
            queryParams: {
                q: "ionic",
                pasttripName: pasttrips.name,
                pasttripID: pasttrips.id,
                pasttripPrice: pasttrips.price,
                pasttripImGName: pasttrips.imgName,
                pasttripStartDate: pasttrips.startdate,
                pasttripEndDate: pasttrips.enddate,
                pasttripLocation: pasttrips.location,
            }
        });
    };
    Tab4Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab4',
            templateUrl: './tab4.page.html',
            styleUrls: ['./tab4.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            pasttripsService])
    ], Tab4Page);
    return Tab4Page;
}());
export { Tab4Page };
//# sourceMappingURL=tab4.page.js.map