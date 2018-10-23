"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person_1 = require("./Person");
var Customer = (function (_super) {
    __extends(Customer, _super);
    function Customer(fName, lName, email, location, birthDate, gender, id, cstType, phone) {
        _super.call(this, fName, lName, email, location, birthDate, gender);
        this._customerId = id;
        this._customerType = cstType;
        this._contactNumber = phone;
    }
    return Customer;
}(Person_1.CRM.Person));
//# sourceMappingURL=customer.js.map