"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SampleClass = (function () {
    function SampleClass() {
        this.colour = "red";
        this.colors = ["red", "blue"];
    }
    SampleClass.prototype.onClick = function (value) {
        console.log(value);
        this.name1 = '';
        this.name2 = '';
        this.result = '';
        this.icon = '';
    };
    SampleClass.prototype.add = function (value1, value2) {
        this.icon = '+';
        this.result = parseInt(value1) + parseInt(value2);
    };
    SampleClass.prototype.sub = function (value1, value2) {
        this.icon = '-';
        this.result = parseInt(value1) - parseInt(value2);
    };
    SampleClass.prototype.mul = function (value1, value2) {
        this.icon = '*';
        this.result = parseInt(value1) * parseInt(value2);
    };
    SampleClass.prototype.div = function (value1, value2) {
        this.icon = '/';
        this.result = parseInt(value1) / parseInt(value2);
    };
    return SampleClass;
}());
SampleClass = __decorate([
    core_1.Component({
        selector: 'my-sample',
        template: "<h2 class=\"myClass\">This is a sample calculator App</h2>\n             Enter the Numbers:  <input type=\"text\" #value1 [(ngModel)]=\"name1\">\n             <span>{{icon}}</span>\n             <input type=\"text\" #value2 [(ngModel)]=\"name2\">\n             ={{result}}<br><br>\n             Choose Operation: <button (click)=\"add(value1.value,value2.value)\">+</button>\n                                <button (click)=\"sub(value1.value,value2.value)\">-</button>\n                                <button (click)=\"div(value1.value,value2.value)\">/</button>\n                                <button (click)=\"mul(value1.value,value2.value)\">*</button>\n             <br><br>\n             <button class=\"btn btn-primary\" (click)=\"onClick(value1.value)\">Click Me!</button>\n             <div [ngSwitch]=\"colour\">\n             <p *ngSwitch when=\"red\">red is shown</p>\n             <p *ngDefault>Invalid Color is shown</p>\n             </div>\n             ",
        styles: ["\n        .myClass {\n            color:red\n    } \n        span{\n        color:red    \n        }"
        ]
    })
], SampleClass);
exports.SampleClass = SampleClass;
//# sourceMappingURL=Calculator.js.map