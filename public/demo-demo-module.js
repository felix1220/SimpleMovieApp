(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-demo-module"],{

/***/ "./src/app/demo/buttons/buttons.component.ts":
/*!***************************************************!*\
  !*** ./src/app/demo/buttons/buttons.component.ts ***!
  \***************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buttons',
            template: "\n   <button mat-button>\n     <mat-icon>face</mat-icon>\n        Click Me!\n      </button>\n      <mat-checkbox>Check me!</mat-checkbox>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/demo/demo-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/demo/demo-routing.module.ts ***!
  \*********************************************/
/*! exports provided: DemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoRoutingModule", function() { return DemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/demo/buttons/buttons.component.ts");
/* harmony import */ var _flexbox_flexbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flexbox/flexbox.component */ "./src/app/demo/flexbox/flexbox.component.ts");





var routes = [
    { path: 'buttons', component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"] },
    { path: 'flexbox', component: _flexbox_flexbox_component__WEBPACK_IMPORTED_MODULE_4__["FlexboxComponent"] },
    { path: '**', redirectTo: 'buttons' }
];
var DemoRoutingModule = /** @class */ (function () {
    function DemoRoutingModule() {
    }
    DemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DemoRoutingModule);
    return DemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/demo.module.ts":
/*!*************************************!*\
  !*** ./src/app/demo/demo.module.ts ***!
  \*************************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _demo_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo-routing.module */ "./src/app/demo/demo-routing.module.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/demo/buttons/buttons.component.ts");
/* harmony import */ var _flexbox_flexbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flexbox/flexbox.component */ "./src/app/demo/flexbox/flexbox.component.ts");









var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__["ButtonsComponent"], _flexbox_flexbox_component__WEBPACK_IMPORTED_MODULE_8__["FlexboxComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _demo_routing_module__WEBPACK_IMPORTED_MODULE_6__["DemoRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]
            ]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/app/demo/flexbox/flexbox.component.html":
/*!*****************************************************!*\
  !*** ./src/app/demo/flexbox/flexbox.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div class=\"flex-item\">1</div>\n  <div class=\"flex-item\">2</div>\n  <div class=\"flex-item\">3</div>\n  <div class=\"flex-item\">4</div>\n  <div class=\"flex-item\">5</div>\n  <div class=\"flex-item\">6</div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/flexbox/flexbox.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/demo/flexbox/flexbox.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around; }\n\n@media all and (max-width: 800px) {\n  .flex-container {\n    justify-content: flex-start; } }\n\n.flex-item {\n  width: 200px;\n  height: 150px;\n  background: tomato;\n  color: white;\n  font-size: 3em;\n  text-align: center;\n  line-height: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9mbGV4Ym94L0M6XFxwcm9qZWN0c1xcbW92aWVkZW1vL3NyY1xcYXBwXFxkZW1vXFxmbGV4Ym94XFxmbGV4Ym94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiw4QkFBNkIsRUFDaEM7O0FBQ0Q7RUFDSTtJQUNJLDRCQUEyQixFQUM5QixFQUFBOztBQUVMO0VBQ0ksYUFBVztFQUNYLGNBQWE7RUFDYixtQkFBaUI7RUFDakIsYUFBVztFQUNYLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZGVtby9mbGV4Ym94L2ZsZXhib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmZsZXgtY29udGFpbmVye1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIH1cclxufVxyXG4uZmxleC1pdGVtIHtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQ6dG9tYXRvO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/demo/flexbox/flexbox.component.ts":
/*!***************************************************!*\
  !*** ./src/app/demo/flexbox/flexbox.component.ts ***!
  \***************************************************/
/*! exports provided: FlexboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexboxComponent", function() { return FlexboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FlexboxComponent = /** @class */ (function () {
    function FlexboxComponent() {
    }
    FlexboxComponent.prototype.ngOnInit = function () {
    };
    FlexboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flexbox',
            template: __webpack_require__(/*! ./flexbox.component.html */ "./src/app/demo/flexbox/flexbox.component.html"),
            styles: [__webpack_require__(/*! ./flexbox.component.scss */ "./src/app/demo/flexbox/flexbox.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FlexboxComponent);
    return FlexboxComponent;
}());



/***/ })

}]);
//# sourceMappingURL=demo-demo-module.js.map