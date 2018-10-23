"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EStore;
(function (EStore) {
    var Product = /** @class */ (function () {
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
