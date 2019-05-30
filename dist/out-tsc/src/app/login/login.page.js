import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var LoginPage = /** @class */ (function () {
    function LoginPage(nav) {
        this.nav = nav;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.loginClick = function () {
        this.nav.navigateForward('tabs/tab5');
    };
    LoginPage.prototype.goLogin = function () {
        this.nav.navigateForward('register');
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map