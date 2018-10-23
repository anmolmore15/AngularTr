"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Drawing;
(function (Drawing) {
    var Point = /** @class */ (function () {
        function Point(x, y) {
            this._x = x;
            this._y = y;
        }
        return Point;
    }());
    Drawing.Point = Point;
    var Line = /** @class */ (function () {
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
    var Rectangle = /** @class */ (function () {
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
