(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contactmanager-contactmanager-module"],{

/***/ "./src/app/contactmanager/components/main-content/main-content.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/contactmanager/components/main-content/main-content.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  main-content works!\n</p>\n"

/***/ }),

/***/ "./src/app/contactmanager/components/main-content/main-content.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/contactmanager/components/main-content/main-content.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RtYW5hZ2VyL2NvbXBvbmVudHMvbWFpbi1jb250ZW50L21haW4tY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contactmanager/components/main-content/main-content.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/contactmanager/components/main-content/main-content.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainContentComponent = /** @class */ (function () {
    function MainContentComponent() {
    }
    MainContentComponent.prototype.ngOnInit = function () {
    };
    MainContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-content',
            template: __webpack_require__(/*! ./main-content.component.html */ "./src/app/contactmanager/components/main-content/main-content.component.html"),
            styles: [__webpack_require__(/*! ./main-content.component.scss */ "./src/app/contactmanager/components/main-content/main-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/contactmanager/components/sidenav/sidenav.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/contactmanager/components/sidenav/sidenav.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\" autosize>\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n    <p>Auto-resizing sidenav</p>\n    <p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>\n    <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n      Toggle extra text\n    </button>\n  </mat-drawer>\n\n  <div class=\"example-sidenav-content\">\n      <app-toolbar></app-toolbar>\n      <router-outlet></router-outlet>\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n      Toggle sidenav\n    </button>\n  </div>\n\n</mat-drawer-container>\n\n\n"

/***/ }),

/***/ "./src/app/contactmanager/components/sidenav/sidenav.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/contactmanager/components/sidenav/sidenav.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5); }\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center; }\n\n.example-sidenav {\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG1hbmFnZXIvY29tcG9uZW50cy9zaWRlbmF2L0M6XFxwcm9qZWN0c1xcbW92aWVkZW1vL3NyY1xcYXBwXFxjb250YWN0bWFuYWdlclxcY29tcG9uZW50c1xcc2lkZW5hdlxcc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixjQUFhO0VBQ2IscUNBQW9DLEVBQ3JDOztBQUVEO0VBQ0UsY0FBYTtFQUNiLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0UsY0FBYSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdG1hbmFnZXIvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/contactmanager/components/sidenav/sidenav.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/contactmanager/components/sidenav/sidenav.component.ts ***!
  \************************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/contactmanager/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/contactmanager/components/sidenav/sidenav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/contactmanager/components/toolbar/toolbar.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/contactmanager/components/toolbar/toolbar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  toolbar works!\n</p>\n"

/***/ }),

/***/ "./src/app/contactmanager/components/toolbar/toolbar.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/contactmanager/components/toolbar/toolbar.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RtYW5hZ2VyL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/contactmanager/components/toolbar/toolbar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/contactmanager/components/toolbar/toolbar.component.ts ***!
  \************************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/contactmanager/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/contactmanager/components/toolbar/toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/contactmanager/contactmanager-app.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/contactmanager/contactmanager-app.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactmanagerAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactmanagerAppComponent", function() { return ContactmanagerAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactmanagerAppComponent = /** @class */ (function () {
    function ContactmanagerAppComponent() {
    }
    ContactmanagerAppComponent.prototype.ngOnInit = function () {
    };
    ContactmanagerAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactmanager-app',
            template: "\n   <app-sidenav></app-sidenav>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactmanagerAppComponent);
    return ContactmanagerAppComponent;
}());



/***/ }),

/***/ "./src/app/contactmanager/contactmanager.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/contactmanager/contactmanager.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactmanagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactmanagerModule", function() { return ContactmanagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _contactmanager_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactmanager-app.component */ "./src/app/contactmanager/contactmanager-app.component.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/contactmanager/components/toolbar/toolbar.component.ts");
/* harmony import */ var _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main-content/main-content.component */ "./src/app/contactmanager/components/main-content/main-content.component.ts");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/contactmanager/components/sidenav/sidenav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var routes = [
    { path: '', component: _contactmanager_app_component__WEBPACK_IMPORTED_MODULE_6__["ContactmanagerAppComponent"],
        children: [
            { path: '', component: _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_8__["MainContentComponent"] }
        ] },
    { path: '**', redirectTo: '' }
];
var ContactmanagerModule = /** @class */ (function () {
    function ContactmanagerModule() {
    }
    ContactmanagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_contactmanager_app_component__WEBPACK_IMPORTED_MODULE_6__["ContactmanagerAppComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__["ToolbarComponent"], _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_8__["MainContentComponent"], _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(routes)
            ]
        })
    ], ContactmanagerModule);
    return ContactmanagerModule;
}());



/***/ })

}]);
//# sourceMappingURL=contactmanager-contactmanager-module.js.map