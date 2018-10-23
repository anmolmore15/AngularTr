"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CRM;
(function (CRM) {
    var Person = /** @class */ (function () {
        function Person(fName, lName, email, location, birthDate, gender) {
            this._firstName = fName;
            this._lastName = lName;
            this._email = email;
            this._location = location;
            this._gender = gender;
            this._birthDate = birthDate;
        }
        Person.prototype.getFullName = function () {
            return this._firstName + " " + this._lastName;
        };
        return Person;
    }());
    CRM.Person = Person;
})(CRM = exports.CRM || (exports.CRM = {}));
