var User = /** @class */ (function () {
    function User() {
        this.firstname = "";
        this.lastname = "";
        this.livesin = "";
        this.joinedin = "";
    }
    User.prototype.setFirstname = function (firstname) {
        this.firstname = firstname;
    };
    User.prototype.getLivesIn = function () {
        return this.livesin;
    };
    User.prototype.getJoinedIn = function () {
        return this.joinedin;
    };
    User.prototype.setDateofBirth = function (dob) {
        // Calculate the age
        this.age = 55;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
export { User };
//# sourceMappingURL=user.model.js.map