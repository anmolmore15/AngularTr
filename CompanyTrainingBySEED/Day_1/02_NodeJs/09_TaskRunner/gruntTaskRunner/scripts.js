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
var Repository = (function () {
    function Repository() {
    }
    Repository.prototype.setValue = function (value) {
        this.value = value;
    };
    Repository.prototype.getValue = function () {
        return this.value;
    };
    return Repository;
}());
var gen1 = new Repository();
gen1.setValue("Hello World");
var result12 = gen1.getValue();
var gen2 = new Repository();
gen2.setValue(1);
var result13 = gen2.getValue();
var gen3 = new Repository();
gen3.setValue(true);
var result34 = gen3.getValue();
console.log(result12);
console.log(result13);
console.log(result34);
//# sourceMappingURL=GenericsClass.js.map
function processData(arg) {
    return arg;
}
function processAnyData(arg) {
    return arg;
}
function processGenericsData(arg) {
    return arg;
}
var result = processGenericsData("Ravi Tambade");
console.log("Generics Data  :" + result);
//# sourceMappingURL=genericsTest.js.map
var Car = (function () {
    function Car() {
        this._isRunning = false;
        this._distanceFromStart = 0;
    }
    Car.prototype.start = function () {
        this._isRunning = true;
    };
    Car.prototype.drive = function (distance) {
        if (this._isRunning) {
            this._distanceFromStart += distance;
            return true;
        }
        return false;
    };
    Car.prototype.getPosition = function () {
        return this._distanceFromStart;
    };
    return Car;
}());
//# sourceMappingURL=interfaces.js.map
"use strict";
var CRM;
(function (CRM) {
    var Person = (function () {
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
//# sourceMappingURL=Person.js.map
"use strict";
var EStore;
(function (EStore) {
    var Product = (function () {
        function Product(id, title, brand, description, category, unitPrice, quantity) {
            this.id = id;
            this.title = title;
            this.brand = brand;
            this.description = description;
            this.category = category;
            this.unitPrice = unitPrice;
            this.quantity = quantity;
        }
        Product.prototype.getTotalAmount = function () {
            return this.quantity * this.unitPrice;
        };
        return Product;
    }());
    EStore.Product = Product;
})(EStore = exports.EStore || (exports.EStore = {}));
//# sourceMappingURL=Product.js.map
"use strict";
var Drawing;
(function (Drawing) {
    var Point = (function () {
        function Point(x, y) {
            this._x = x;
            this._y = y;
        }
        return Point;
    }());
    Drawing.Point = Point;
    var Line = (function () {
        function Line() {
            this._startPoint = new Point(23, 34);
            this._endPoint = new Point(100, 200);
        }
        Line.prototype.draw = function (context) {
            console.log("Drawing Line");
        };
        return Line;
    }());
    Drawing.Line = Line;
    var Rectangle = (function () {
        function Rectangle() {
            this._startPoint = new Point(23, 34);
            this._endPoint = new Point(100, 200);
        }
        Rectangle.prototype.draw = function (context) {
            console.log("Drawing Rectangle");
        };
        return Rectangle;
    }());
    Drawing.Rectangle = Rectangle;
})(Drawing = exports.Drawing || (exports.Drawing = {}));
//# sourceMappingURL=shape.js.map
"use strict";
var shape_1 = require('./shape');
var l = new shape_1.Drawing.Line();
var rect = new shape_1.Drawing.Rectangle();
var s = l;
s.draw("2D");
console.log('Line');
//# sourceMappingURL=test.js.map