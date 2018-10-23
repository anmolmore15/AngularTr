"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(fName, lName, email, location, birthDate, gender, id, cstType, phone) {
        var _this = _super.call(this, fName, lName, email, location, birthDate, gender) || this;
        _this._customerId = id;
        _this._customerType = cstType;
        _this._contactNumber = phone;
        return _this;
    }
    return Customer;
}(Person_1.CRM.Person));
