"use strict";function processData(a){return a}function processAnyData(a){return a}function processGenericsData(a){return a}var __extends=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)},Person_1=require("./Person"),Customer=function(a){function b(b,c,d,e,f,g,h,i,j){a.call(this,b,c,d,e,f,g),this._customerId=h,this._customerType=i,this._contactNumber=j}return __extends(b,a),b}(Person_1.CRM.Person),Repository=function(){function a(){}return a.prototype.setValue=function(a){this.value=a},a.prototype.getValue=function(){return this.value},a}(),gen1=new Repository;gen1.setValue("Hello World");var result12=gen1.getValue(),gen2=new Repository;gen2.setValue(1);var result13=gen2.getValue(),gen3=new Repository;gen3.setValue(!0);var result34=gen3.getValue();console.log(result12),console.log(result13),console.log(result34);var result=processGenericsData("Ravi Tambade");console.log("Generics Data  :"+result);var Car=function(){function a(){this._isRunning=!1,this._distanceFromStart=0}return a.prototype.start=function(){this._isRunning=!0},a.prototype.drive=function(a){return!!this._isRunning&&(this._distanceFromStart+=a,!0)},a.prototype.getPosition=function(){return this._distanceFromStart},a}(),CRM;!function(a){var b=function(){function a(a,b,c,d,e,f){this._firstName=a,this._lastName=b,this._email=c,this._location=d,this._gender=f,this._birthDate=e}return a.prototype.getFullName=function(){return this._firstName+" "+this._lastName},a}();a.Person=b}(CRM=exports.CRM||(exports.CRM={}));var EStore;!function(a){var b=function(){function a(a,b,c,d,e,f,g){this.id=a,this.title=b,this.brand=c,this.description=d,this.category=e,this.unitPrice=f,this.quantity=g}return a.prototype.getTotalAmount=function(){return this.quantity*this.unitPrice},a}();a.Product=b}(EStore=exports.EStore||(exports.EStore={}));var Drawing;!function(a){var b=function(){function a(a,b){this._x=a,this._y=b}return a}();a.Point=b;var c=function(){function a(){this._startPoint=new b(23,34),this._endPoint=new b(100,200)}return a.prototype.draw=function(a){console.log("Drawing Line")},a}();a.Line=c;var d=function(){function a(){this._startPoint=new b(23,34),this._endPoint=new b(100,200)}return a.prototype.draw=function(a){console.log("Drawing Rectangle")},a}();a.Rectangle=d}(Drawing=exports.Drawing||(exports.Drawing={}));var shape_1=require("./shape"),l=new shape_1.Drawing.Line,rect=new shape_1.Drawing.Rectangle,s=l;s.draw("2D"),console.log("Line");