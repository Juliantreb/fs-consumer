import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(nav) {
        this.nav = nav;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.loginClick = function () {
        this.nav.navigateForward('tabs/tab1');
    };
    RegisterPage.prototype.goRegister = function () {
        this.nav.navigateForward('');
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map