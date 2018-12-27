(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./contactmanager/contactmanager.module": [
		"./src/app/contactmanager/contactmanager.module.ts",
		"default~contactmanager-contactmanager-module~demo-demo-module",
		"contactmanager-contactmanager-module"
	],
	"./demo/demo.module": [
		"./src/app/demo/demo.module.ts",
		"default~contactmanager-contactmanager-module~demo-demo-module",
		"demo-demo-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_searchmovie_searchmovie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/searchmovie/searchmovie.component */ "./src/app/searchmovie/searchmovie.component.ts");




var routes = [
    { path: 'movie', component: _app_searchmovie_searchmovie_component__WEBPACK_IMPORTED_MODULE_3__["SearchmovieComponent"] },
    { path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule' },
    { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
    { path: '', redirectTo: '/movie', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'moviedemo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _searchmovie_searchmovie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./searchmovie/searchmovie.component */ "./src/app/searchmovie/searchmovie.component.ts");
/* harmony import */ var _services_movieservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/movieservice.service */ "./src/app/services/movieservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/material.module */ "./src/app/shared/material.module.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _searchmovie_searchmovie_component__WEBPACK_IMPORTED_MODULE_7__["SearchmovieComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_services_movieservice_service__WEBPACK_IMPORTED_MODULE_8__["MovieserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/searchmovie/searchmovie.component.html":
/*!********************************************************!*\
  !*** ./src/app/searchmovie/searchmovie.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  Search Movie:<span><input type=\"text\" id=\"txtSearchMovie\" [(ngModel)]=\"title\" />\n    &nbsp;<button (click)=\"searchMovie()\" mat-button>\n        <mat-icon>face</mat-icon>\n      Search!\n    </button>\n  </span>\n</div>\n<div>\n   <ul>\n       <li *ngFor=\"let movie of _movies\">\n           <span>{{movie.title}}</span>\n           &nbsp;\n           <span>{{movie.plot}}</span>\n           &nbsp;\n           <span>{{movie.director}}</span>\n           &nbsp;\n           <span>{{movie.actors}}</span>\n           &nbsp;\n           <span><img [src]='movie.poster'  /></span>\n       </li>\n   </ul>\n</div>\n<svg width=\"900\" height=\"500\"></svg>\n\n"

/***/ }),

/***/ "./src/app/searchmovie/searchmovie.component.scss":
/*!********************************************************!*\
  !*** ./src/app/searchmovie/searchmovie.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaG1vdmllL3NlYXJjaG1vdmllLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/searchmovie/searchmovie.component.ts":
/*!******************************************************!*\
  !*** ./src/app/searchmovie/searchmovie.component.ts ***!
  \******************************************************/
/*! exports provided: SearchmovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchmovieComponent", function() { return SearchmovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_movieservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movieservice.service */ "./src/app/services/movieservice.service.ts");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/src/index.js");








var SearchmovieComponent = /** @class */ (function () {
    function SearchmovieComponent(movieSvc) {
        this.movieSvc = movieSvc;
        this.title = 'Line Chart';
        this.data = [
            { date: new Date('2010-01-01'), value: 80 },
            { date: new Date('2010-01-04'), value: 90 },
            { date: new Date('2010-01-05'), value: 95 },
            { date: new Date('2010-01-06'), value: 100 },
            { date: new Date('2010-01-07'), value: 110 },
            { date: new Date('2010-01-08'), value: 120 },
            { date: new Date('2010-01-09'), value: 130 },
            { date: new Date('2010-01-10'), value: 140 },
            { date: new Date('2010-01-11'), value: 150 },
        ];
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        this.width = 960 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
    }
    SearchmovieComponent.prototype.ngOnInit = function () {
        this._movies = new Array();
        this.buildSvg();
        this.addXandYAxis();
        this.drawLineAndPath();
    };
    SearchmovieComponent.prototype.searchMovie = function () {
        var _this = this;
        console.log(this.title);
        this.movieSvc.GetMovie(this.title).subscribe(function (movie) {
            console.log(movie);
            _this._movies.push(movie);
        });
    };
    SearchmovieComponent.prototype.buildSvg = function () {
        this.svg = d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"]('svg')
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    };
    SearchmovieComponent.prototype.addXandYAxis = function () {
        // range of data configuring
        this.x = d3_scale__WEBPACK_IMPORTED_MODULE_4__["scaleTime"]().range([0, this.width]);
        this.y = d3_scale__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]().range([this.height, 0]);
        this.x.domain(d3_array__WEBPACK_IMPORTED_MODULE_6__["extent"](this.data, function (d) { return d.date; }));
        this.y.domain(d3_array__WEBPACK_IMPORTED_MODULE_6__["extent"](this.data, function (d) { return d.value; }));
        // Configure the Y Axis
        this.svg.append('g')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_7__["axisBottom"](this.x));
        // Configure the Y Axis
        this.svg.append('g')
            .attr('class', 'axis axis--y')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_7__["axisLeft"](this.y));
    };
    SearchmovieComponent.prototype.drawLineAndPath = function () {
        var _this = this;
        this.line = d3_shape__WEBPACK_IMPORTED_MODULE_5__["line"]()
            .x(function (d) { return _this.x(d.date); })
            .y(function (d) { return _this.y(d.value); });
        // Configuring line path
        this.svg.append('path')
            .datum(this.data)
            .attr('class', 'line')
            .attr('d', this.line);
    };
    SearchmovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchmovie',
            template: __webpack_require__(/*! ./searchmovie.component.html */ "./src/app/searchmovie/searchmovie.component.html"),
            styles: [__webpack_require__(/*! ./searchmovie.component.scss */ "./src/app/searchmovie/searchmovie.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_movieservice_service__WEBPACK_IMPORTED_MODULE_2__["MovieserviceService"]])
    ], SearchmovieComponent);
    return SearchmovieComponent;
}());



/***/ }),

/***/ "./src/app/services/movieservice.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/movieservice.service.ts ***!
  \**************************************************/
/*! exports provided: MovieserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieserviceService", function() { return MovieserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MovieserviceService = /** @class */ (function () {
    function MovieserviceService(http) {
        this.http = http;
    }
    MovieserviceService.prototype.GetMovie = function (title) {
        return this.http.get('https://moviedemotest1.azurewebsites.net/api/movie/' + title);
    };
    MovieserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieserviceService);
    return MovieserviceService;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\moviedemo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map