(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contactmanager-contactmanager-module"],{

/***/ "./src/app/contactmanager/components/main-content/main-content.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/contactmanager/components/main-content/main-content.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!user\">\n    <mat-spinner></mat-spinner>\n</div>\n<div *ngIf=\"user\">\n<mat-card>\n    <mat-card-header>\n        <mat-icon mat-card-avatar svgIcon=\"{{user.avatar}}\"></mat-icon>\n        <mat-card-title>\n            <h2>\n              {{ user.name }}\n            </h2>\n        </mat-card-title>\n        <mat-card-subtitle>\n            Birthday {{ user.birthDate | date: 'd LLLL'}}\n        </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n          <mat-tab-group>\n              <mat-tab label=\"Bio\"> \n                <p>\n                  {{user.bio}}\n                </p>\n              </mat-tab>\n             <mat-tab label=\"Notes\">\n                <app-notes [notes]=\"user.notes\"></app-notes>\n             </mat-tab>\n            </mat-tab-group>\n            \n      </mat-card-content>\n</mat-card>\n</div>\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/contactmanager/services/user.service.ts");




var MainContentComponent = /** @class */ (function () {
    function MainContentComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    MainContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (!id)
                id = 1;
            _this.user = null;
            _this.service.users.subscribe(function (users) {
                if (users.length == 0)
                    return;
                setTimeout(function () {
                    _this.user = _this.service.userById(id);
                }, 500);
            });
        });
    };
    MainContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-content',
            template: __webpack_require__(/*! ./main-content.component.html */ "./src/app/contactmanager/components/main-content/main-content.component.html"),
            styles: [__webpack_require__(/*! ./main-content.component.scss */ "./src/app/contactmanager/components/main-content/main-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/contactmanager/components/new-contact-dialog/new-contact-dialog.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/contactmanager/components/new-contact-dialog/new-contact-dialog.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add new contact</h2>\n<mat-dialog-content>\n    <div class=\"example-container\">\n\n           \n        <mat-form-field>\n            <mat-select placeholder=\"Avatar\" [(ngModel)]=\"user.avatar\">\n              <mat-select-trigger>\n                  <mat-icon svgIcon=\"{{user.avatar}}\">\n                    \n                  </mat-icon> {{user.avatar}}\n              </mat-select-trigger>\n              <mat-option *ngFor = \"let avatar of avatars\" [value]= \"avatar\">\n                  <mat-icon svgIcon=\"{{avatar}}\">\n                      \n                  </mat-icon>{{avatar}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n\n        <mat-form-field>\n          <input matInput placeholder=\"Name\" [formControl]=\"name\" [(ngModel)]=\"user.name\" required>\n          <mat-error *ngIf=\"name.invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Born\" [(ngModel)]=\"user.birthDay\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n          \n        <mat-form-field>\n          <textarea matInput placeholder=\"Bio\" [(ngModel)] = \"user.bio\"></textarea>\n        </mat-form-field>\n \n      </div>\n      \n</mat-dialog-content>\n<mat-dialog-actions>\n    <button mat-button color=\"primary\" (click)=\"save()\">\n       <mat-icon>save</mat-icon> Save\n    </button>\n    <button mat-button color=\"primary\" (click)=\"dismiss()\">\n        <mat-icon>cancel</mat-icon> Cancel\n     </button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/contactmanager/components/new-contact-dialog/new-contact-dialog.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/contactmanager/components/new-contact-dialog/new-contact-dialog.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG1hbmFnZXIvY29tcG9uZW50cy9uZXctY29udGFjdC1kaWFsb2cvQzpcXHByb2plY3RzXFxtb3ZpZWRlbW8vc3JjXFxhcHBcXGNvbnRhY3RtYW5hZ2VyXFxjb21wb25lbnRzXFxuZXctY29udGFjdC1kaWFsb2dcXG5ldy1jb250YWN0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0bWFuYWdlci9jb21wb25lbnRzL25ldy1jb250YWN0LWRpYWxvZy9uZXctY29udGFjdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/contactmanager/components/new-contact-dialog/new-contact-dialog.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/contactmanager/components/new-contact-dialog/new-contact-dialog.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NewContactDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewContactDialogComponent", function() { return NewContactDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user */ "./src/app/contactmanager/models/user.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/contactmanager/services/user.service.ts");






var NewContactDialogComponent = /** @class */ (function () {
    function NewContactDialogComponent(userService, dialogRef) {
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.avatars = [
            'svg-1', 'svg-2', 'svg-3', 'svg-4'
        ];
    }
    NewContactDialogComponent.prototype.ngOnInit = function () {
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    };
    NewContactDialogComponent.prototype.save = function () {
        var _this = this;
        this.userService.addUser(this.user).then(function (user) {
            _this.dialogRef.close(_this.user);
        });
    };
    NewContactDialogComponent.prototype.dismiss = function () {
        this.dialogRef.close(null);
    };
    NewContactDialogComponent.prototype.getErrorMessage = function () {
        return this.name.hasError('required') ? 'You must enter a name' : '';
    };
    NewContactDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-contact-dialog',
            template: __webpack_require__(/*! ./new-contact-dialog.component.html */ "./src/app/contactmanager/components/new-contact-dialog/new-contact-dialog.component.html"),
            styles: [__webpack_require__(/*! ./new-contact-dialog.component.scss */ "./src/app/contactmanager/components/new-contact-dialog/new-contact-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], NewContactDialogComponent);
    return NewContactDialogComponent;
}());



/***/ }),

/***/ "./src/app/contactmanager/components/notes/notes.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/contactmanager/components/notes/notes.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" matSort>\n\n    \n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n  \n    <!-- Position Column -->\n\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n      <td mat-cell *matCellDef=\"let note\"> {{note.id}} </td>\n    </ng-container>\n  \n    <!-- Name Column -->\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let note\"> {{note.title}} </td>\n    </ng-container>\n  \n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"date\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n      <td mat-cell *matCellDef=\"let note\"> {{note.date | date:'yyyy-MM-dd'}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  \n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n  \n  <!-- Copyright 2018 Google Inc. All Rights Reserved.\n      Use of this source code is governed by an MIT-style license that\n      can be found in the LICENSE file at http://angular.io/license -->\n"

/***/ }),

/***/ "./src/app/contactmanager/components/notes/notes.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/contactmanager/components/notes/notes.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG1hbmFnZXIvY29tcG9uZW50cy9ub3Rlcy9DOlxccHJvamVjdHNcXG1vdmllZGVtby9zcmNcXGFwcFxcY29udGFjdG1hbmFnZXJcXGNvbXBvbmVudHNcXG5vdGVzXFxub3Rlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdG1hbmFnZXIvY29tcG9uZW50cy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/contactmanager/components/notes/notes.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/contactmanager/components/notes/notes.component.ts ***!
  \********************************************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var NotesComponent = /** @class */ (function () {
    function NotesComponent() {
        this.displayedColumns = ['position', 'title', 'date'];
    }
    NotesComponent.prototype.ngOnInit = function () {
        debugger;
        // this.dataSource = this.notes;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.notes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    NotesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NotesComponent.prototype, "notes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], NotesComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], NotesComponent.prototype, "paginator", void 0);
    NotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! ./notes.component.html */ "./src/app/contactmanager/components/notes/notes.component.html"),
            styles: [__webpack_require__(/*! ./notes.component.scss */ "./src/app/contactmanager/components/notes/notes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/contactmanager/components/sidenav/sidenav.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/contactmanager/components/sidenav/sidenav.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"app-container\" autosize>\n  <mat-drawer #sidenav class=\"app-sidenav mat-elevation-z10\" [mode]=\"isScreenSmall() ? 'over' : 'side'\" [opened]=\"!isScreenSmall()\" >\n    <mat-toolbar color=\"primary\">Contacts</mat-toolbar>\n    <mat-nav-list>\n        <mat-list-item *ngFor=\"let user of users | async\">\n           <a matLine [routerLink]=\"['/contactmanager', user.id]\">\n              <mat-icon svgIcon=\"{{user.avatar}}\"></mat-icon>{{ user.name }}\n           </a>\n        </mat-list-item>\n      </mat-nav-list>\n\n  </mat-drawer>\n\n  <div class=\"app-sidenav-content\">\n      <app-toolbar (toggleSidenav) = \"sidenav.toggle()\" ></app-toolbar>\n      <div class=\"wrapper\">\n          <router-outlet></router-outlet>\n      </div>\n  </div>\n\n</mat-drawer-container>\n\n\n"

/***/ }),

/***/ "./src/app/contactmanager/components/sidenav/sidenav.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/contactmanager/components/sidenav/sidenav.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-container {\n  flex: 1;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  min-width: 100%;\n  min-height: 100%; }\n\n.app-sidenav-content {\n  display: flex;\n  height: 100%;\n  flex-direction: column; }\n\n.app-sidenav {\n  width: 240px; }\n\n.wrapper {\n  margin: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG1hbmFnZXIvY29tcG9uZW50cy9zaWRlbmF2L0M6XFxwcm9qZWN0c1xcbW92aWVkZW1vL3NyY1xcYXBwXFxjb250YWN0bWFuYWdlclxcY29tcG9uZW50c1xcc2lkZW5hdlxcc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLFFBQU87RUFDUCxnQkFBZTtFQUNoQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLGFBQVk7RUFDWix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRyxhQUFZLEVBQ2Q7O0FBQ0Q7RUFDRSxhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0bWFuYWdlci9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGFpbmVyIHtcclxuICAgICBmbGV4OiAxO1xyXG4gICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmFwcC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5hcHAtc2lkZW5hdiB7XHJcbiAgICAgd2lkdGg6IDI0MHB4O1xyXG4gIH1cclxuICAud3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbiAgfVxyXG4gICJdfQ== */"

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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/contactmanager/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var SMALL_WIDTH_BREAKPOINT = 720;
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(zone, userService, router) {
        this.userService = userService;
        this.router = router;
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)");
        this.mediaMatcher.addListener(function (mql) {
            zone.run(function () { });
        });
    }
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.userService.users;
        this.userService.loadAll();
        this.router.events.subscribe(function () {
            if (_this.isScreenSmall()) {
                _this.sidenav.close();
            }
        });
    };
    SidenavComponent.prototype.isScreenSmall = function () {
        return this.mediaMatcher.matches;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"])
    ], SidenavComponent.prototype, "sidenav", void 0);
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/contactmanager/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/contactmanager/components/sidenav/sidenav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "<mat-toolbar color=\"primary\">\n    <button type=\"button\" mat-button (click)=\"toggleSidenav.emit()\" class=\"sidenav-toggle\" >\n         <mat-icon>\n           menu\n         </mat-icon>\n      </button>  \n  <span>Contact Manager</span>\n  <span class=\"example-spacer\"></span>\n\n  <button mat-button [matMenuTriggerFor]=\"menu\">\n      <mat-icon>more_vert</mat-icon>\n  </button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item (click)=\"openAddContactDialog()\" >New Contact</button>\n</mat-menu>\n\n\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/contactmanager/components/toolbar/toolbar.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/contactmanager/components/toolbar/toolbar.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-toggle {\n  display: none;\n  padding: 0;\n  margin: 8px;\n  min-width: 56px; }\n  @media (max-width: 720px) {\n    .sidenav-toggle {\n      display: flex;\n      align-items: center;\n      justify-content: center; } }\n  .sidenav-toggle mat-icon {\n    font-size: 30px;\n    height: 56px;\n    width: 56px;\n    line-height: 56px;\n    color: white; }\n  .example-icon {\n  padding: 0 14px; }\n  .example-spacer {\n  flex: 1 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG1hbmFnZXIvY29tcG9uZW50cy90b29sYmFyL0M6XFxwcm9qZWN0c1xcbW92aWVkZW1vL3NyY1xcYXBwXFxjb250YWN0bWFuYWdlclxcY29tcG9uZW50c1xcdG9vbGJhclxcdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQVk7RUFFWixXQUFVO0VBQ1YsWUFBVztFQUNYLGdCQVBZLEVBcUJmO0VBWkc7SUFQSjtNQVFRLGNBQWE7TUFDYixvQkFBbUI7TUFDbkIsd0JBQXVCLEVBUzlCLEVBQUE7RUFuQkQ7SUFhUSxnQkFBZTtJQUNmLGFBaEJRO0lBaUJSLFlBakJRO0lBa0JSLGtCQWxCUTtJQW1CUixhQUFZLEVBQ2Y7RUFFTDtFQUNJLGdCQUFlLEVBQ2hCO0VBRUQ7RUFDRSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0bWFuYWdlci9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRpY29uV2lkdGg6IDU2cHg7XHJcblxyXG4uc2lkZW5hdi10b2dnbGUge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG5cclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIG1pbi13aWR0aDogJGljb25XaWR0aDtcclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA3MjBweCl7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgbWF0LWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogJGljb25XaWR0aDtcclxuICAgICAgICB3aWR0aDogJGljb25XaWR0aDtcclxuICAgICAgICBsaW5lLWhlaWdodDogJGljb25XaWR0aDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuLmV4YW1wbGUtaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9Il19 */"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _new_contact_dialog_new_contact_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../new-contact-dialog/new-contact-dialog.component */ "./src/app/contactmanager/components/new-contact-dialog/new-contact-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(dialog, snackBar, router) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
        this.toggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.openAddContactDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_new_contact_dialog_new_contact_dialog_component__WEBPACK_IMPORTED_MODULE_3__["NewContactDialogComponent"], {
            width: '450px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dailog closed', result);
            if (result) {
                _this.openSnackBar("Contact added", "Navigate")
                    .onAction().subscribe(function () {
                    _this.router.navigate(['/contactmanager', result.id]);
                });
            }
        });
    };
    ToolbarComponent.prototype.openSnackBar = function (message, action) {
        return this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToolbarComponent.prototype, "toggleSidenav", void 0);
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/contactmanager/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/contactmanager/components/toolbar/toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var ContactmanagerAppComponent = /** @class */ (function () {
    function ContactmanagerAppComponent(iconRegistry, sanitizer) {
        iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
    }
    ContactmanagerAppComponent.prototype.ngOnInit = function () {
    };
    ContactmanagerAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactmanager-app',
            template: "\n   <app-sidenav></app-sidenav>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user.service */ "./src/app/contactmanager/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/notes/notes.component */ "./src/app/contactmanager/components/notes/notes.component.ts");
/* harmony import */ var _components_new_contact_dialog_new_contact_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/new-contact-dialog/new-contact-dialog.component */ "./src/app/contactmanager/components/new-contact-dialog/new-contact-dialog.component.ts");















var routes = [
    { path: '', component: _contactmanager_app_component__WEBPACK_IMPORTED_MODULE_6__["ContactmanagerAppComponent"],
        children: [
            { path: ':id', component: _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_8__["MainContentComponent"] },
            { path: '', component: _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_8__["MainContentComponent"] }
        ] },
    { path: '**', redirectTo: '' }
];
var ContactmanagerModule = /** @class */ (function () {
    function ContactmanagerModule() {
    }
    ContactmanagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_contactmanager_app_component__WEBPACK_IMPORTED_MODULE_6__["ContactmanagerAppComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__["ToolbarComponent"], _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_8__["MainContentComponent"], _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"], _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_13__["NotesComponent"], _components_new_contact_dialog_new_contact_dialog_component__WEBPACK_IMPORTED_MODULE_14__["NewContactDialogComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(routes)
            ],
            providers: [
                _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]
            ],
            entryComponents: [
                _components_new_contact_dialog_new_contact_dialog_component__WEBPACK_IMPORTED_MODULE_14__["NewContactDialogComponent"]
            ]
        })
    ], ContactmanagerModule);
    return ContactmanagerModule;
}());



/***/ }),

/***/ "./src/app/contactmanager/models/user.ts":
/*!***********************************************!*\
  !*** ./src/app/contactmanager/models/user.ts ***!
  \***********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.notes = [];
    }
    return User;
}());



/***/ }),

/***/ "./src/app/contactmanager/services/user.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/contactmanager/services/user.service.ts ***!
  \*********************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.dataStore = { users: [] };
        this._users = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    Object.defineProperty(UserService.prototype, "users", {
        get: function () {
            return this._users.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.addUser = function (user) {
        var _this = this;
        return new Promise(function (resolver, reject) {
            user.id = _this.dataStore.users.length + 1;
            _this.dataStore.users.push(user);
            _this._users.next(Object.assign({}, _this.dataStore).users);
            resolver(user);
        });
    };
    UserService.prototype.loadAll = function () {
        var _this = this;
        var usersUrl = 'https://angular-material-api.azurewebsites.net/users';
        return this.http.get(usersUrl)
            .subscribe(function (data) {
            _this.dataStore.users = data;
            _this._users.next(Object.assign({}, _this.dataStore).users);
        }, function (error) {
            console.log("Failed to fetch users");
        });
    };
    UserService.prototype.userById = function (id) {
        return this.dataStore.users.find(function (x) { return x.id == id; });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=contactmanager-contactmanager-module.js.map