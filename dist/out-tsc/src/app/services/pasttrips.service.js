import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { pasttrips } from '../models';
var pasttripsService = /** @class */ (function () {
    function pasttripsService() {
        this.pasttrips = [];
    }
    pasttripsService.prototype.getAllPasttrip = function () {
        this.pasttrips = [];
        var pasttrip1 = new pasttrips();
        pasttrip1.id = "London";
        pasttrip1.price = "$50";
        pasttrip1.imgName = "https://secretldn.com/wp-content/uploads/2017/06/Screen-Shot-2018-01-30-at-17.06.11.png";
        pasttrip1.location = "London, England";
        pasttrip1.startdate = "July1";
        pasttrip1.enddate = "July5";
        var pasttrip2 = new pasttrips();
        pasttrip2.id = "Montreal";
        pasttrip2.price = "$60";
        pasttrip2.imgName = "http://static.trip101.com/paragraph_media/pictures/001/612/529/large/1514a6b6_original.jpg?1556004699";
        pasttrip2.location = "Montreal, Canada";
        pasttrip2.startdate = "August 4, 2016";
        pasttrip2.enddate = "August 18, 2016";
    };
    pasttripsService.prototype.findpasttripById = function (id) {
        var foundpasttrips = null;
        this.pasttrips.forEach(function (pasttrips) {
            if (pasttrips.id == id) {
                // Display this property
                foundpasttrips = pasttrips;
            }
        });
        return foundpasttrips;
    };
    pasttripsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], pasttripsService);
    return pasttripsService;
}());
export { pasttripsService };
//# sourceMappingURL=pasttrips.service.js.map