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

/***/ "./src/app/angular-canvas/angular-canvas.component.html":
/*!**************************************************************!*\
  !*** ./src/app/angular-canvas/angular-canvas.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #canvas width=\"500\" height=\"500\" id=\"canvas\">\n  </canvas>\n"

/***/ }),

/***/ "./src/app/angular-canvas/angular-canvas.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/angular-canvas/angular-canvas.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXItY2FudmFzL2FuZ3VsYXItY2FudmFzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/angular-canvas/angular-canvas.component.ts":
/*!************************************************************!*\
  !*** ./src/app/angular-canvas/angular-canvas.component.ts ***!
  \************************************************************/
/*! exports provided: AngularCanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularCanvasComponent", function() { return AngularCanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AngularCanvasComponent = /** @class */ (function () {
    function AngularCanvasComponent() {
    }
    AngularCanvasComponent.prototype.ngOnInit = function () {
        this.canvasRef = document.getElementById('canvas');
        this.canvasRef.width = window.innerWidth; //document.body.clientWidth;
        this.canvasRef.height = window.innerHeight; //document.body.clientHeight;
        this.context = this.canvasRef.getContext('2d');
        this.fps = 6;
        this.fpsInterval = 1000 / this.fps;
        //console.log(this.fpsInterval);
        this.then = Date.now();
        this.startTime = this.then;
        this.stop = false;
        this.running = true;
        this.paint();
    };
    AngularCanvasComponent.prototype.ngOnDestroy = function () {
        this.running = false;
    };
    AngularCanvasComponent.prototype.paint = function (loop) {
        // console.log(this.stop);
        // if (stop) {
        //    return;
        //  }
        var _this = this;
        if (loop === void 0) { loop = true; }
        if (loop && this.running) {
            requestAnimationFrame(function () { return _this.paint(loop); });
        }
        this.now = Date.now();
        this.elapsed = this.now - this.then;
        // console.log(this.elapsed);
        if (this.elapsed > this.fpsInterval) {
            this.then = this.now - (this.elapsed % this.fpsInterval);
            this.particles = new Array();
            for (var i = 0; i < 5000; i++) {
                this.particles.push({
                    x: Math.random() * this.canvasRef.width,
                    y: Math.random() * this.canvasRef.height
                });
            }
            this.showParticles();
        }
    };
    AngularCanvasComponent.prototype.showParticles = function () {
        //let ctx: CanvasRenderingContext2D =this.canvasRef.getContext('2d');
        //this.canvasRef.nativeElement.getContext('2d');
        var _this = this;
        this.context.clearRect(0, 0, this.canvasRef.width, this.canvasRef.height);
        this.context.beginPath();
        this.particles.forEach(function (p) {
            _this.context.rect(p.x, p.y, 2, 2);
        });
        this.context.stroke();
    };
    AngularCanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-angular-canvas',
            template: __webpack_require__(/*! ./angular-canvas.component.html */ "./src/app/angular-canvas/angular-canvas.component.html"),
            styles: [__webpack_require__(/*! ./angular-canvas.component.scss */ "./src/app/angular-canvas/angular-canvas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AngularCanvasComponent);
    return AngularCanvasComponent;
}());



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
/* harmony import */ var _dthreechart_dthreechart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dthreechart/dthreechart.component */ "./src/app/dthreechart/dthreechart.component.ts");
/* harmony import */ var _angular_canvas_angular_canvas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./angular-canvas/angular-canvas.component */ "./src/app/angular-canvas/angular-canvas.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");


















var firebaseConfig = {
    apiKey: "AIzaSyCrCMHvW14sJnwcZvdDhazs43iTx5IOPY0",
    authDomain: "mock-a9f1c.firebaseapp.com",
    databaseURL: "https://mock-a9f1c.firebaseio.com",
    projectId: "mock-a9f1c",
    storageBucket: "mock-a9f1c.appspot.com",
    messagingSenderId: "339129684072"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _searchmovie_searchmovie_component__WEBPACK_IMPORTED_MODULE_7__["SearchmovieComponent"],
                _dthreechart_dthreechart_component__WEBPACK_IMPORTED_MODULE_11__["DthreechartComponent"],
                _angular_canvas_angular_canvas_component__WEBPACK_IMPORTED_MODULE_12__["AngularCanvasComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(firebaseConfig, 'SimpleMovieDemo'),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_17__["NgxMaskModule"].forRoot({})
            ],
            providers: [_services_movieservice_service__WEBPACK_IMPORTED_MODULE_8__["MovieserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dthreechart/dthreechart.component.html":
/*!********************************************************!*\
  !*** ./src/app/dthreechart/dthreechart.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg width=\"900\" height=\"500\"></svg>\n"

/***/ }),

/***/ "./src/app/dthreechart/dthreechart.component.scss":
/*!********************************************************!*\
  !*** ./src/app/dthreechart/dthreechart.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2R0aHJlZWNoYXJ0L2R0aHJlZWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dthreechart/dthreechart.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dthreechart/dthreechart.component.ts ***!
  \******************************************************/
/*! exports provided: DthreechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DthreechartComponent", function() { return DthreechartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/src/index.js");







var DthreechartComponent = /** @class */ (function () {
    function DthreechartComponent() {
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
    DthreechartComponent.prototype.ngOnInit = function () {
        this.buildSvg();
        this.addXandYAxis();
        this.drawLineAndPath();
    };
    DthreechartComponent.prototype.buildSvg = function () {
        this.svg = d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]('svg')
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    };
    DthreechartComponent.prototype.addXandYAxis = function () {
        // range of data configuring
        this.x = d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleTime"]().range([0, this.width]);
        this.y = d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]().range([this.height, 0]);
        this.x.domain(d3_array__WEBPACK_IMPORTED_MODULE_5__["extent"](this.data, function (d) { return d.date; }));
        this.y.domain(d3_array__WEBPACK_IMPORTED_MODULE_5__["extent"](this.data, function (d) { return d.value; }));
        // Configure the Y Axis
        this.svg.append('g')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_6__["axisBottom"](this.x));
        // Configure the Y Axis
        this.svg.append('g')
            .attr('class', 'axis axis--y')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_6__["axisLeft"](this.y));
    };
    DthreechartComponent.prototype.drawLineAndPath = function () {
        var _this = this;
        this.line = d3_shape__WEBPACK_IMPORTED_MODULE_4__["line"]()
            .x(function (d) { return _this.x(d.date); })
            .y(function (d) { return _this.y(d.value); });
        // Configuring line path
        this.svg.append('path')
            .datum(this.data)
            .attr('class', 'line')
            .attr('d', this.line);
    };
    DthreechartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dthreechart',
            template: __webpack_require__(/*! ./dthreechart.component.html */ "./src/app/dthreechart/dthreechart.component.html"),
            styles: [__webpack_require__(/*! ./dthreechart.component.scss */ "./src/app/dthreechart/dthreechart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DthreechartComponent);
    return DthreechartComponent;
}());



/***/ }),

/***/ "./src/app/searchmovie/searchmovie.component.html":
/*!********************************************************!*\
  !*** ./src/app/searchmovie/searchmovie.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div>\n  Search Movie:<span><input type=\"text\" id=\"txtSearchMovie\" [(ngModel)]=\"title\" />\n    &nbsp;<button (click)=\"searchMovie()\" mat-button>\n        <mat-icon>face</mat-icon>\n      Search!\n    </button>\n  </span>\n</div>\n<div>\n  Phone: <input type='text' [(ngModel)] = \"phoneVal\" mask='(000) 000-0000' (blur)=\"onBlurValidate($event.target.value,'\\\\([0-9]{3}\\\\)\\\\s+[0-9]{3}\\\\-[0-9]{3}', 'zipCodeErr')\" >\n</div>\n<div *ngIf=\"showTable\">\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n    \n  \n    \n\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef > Title </th>\n      <td mat-cell *matCellDef=\"let movie\"> {{movie.title}} </td>\n    </ng-container>\n  \n   \n    <ng-container matColumnDef=\"plot\">\n      <th mat-header-cell *matHeaderCellDef > Plot </th>\n      <td mat-cell *matCellDef=\"let movie\"> {{movie.plot}} </td>\n    </ng-container>\n  \n   \n    <ng-container matColumnDef=\"director\">\n      <th mat-header-cell *matHeaderCellDef > Director </th>\n      <td mat-cell *matCellDef=\"let movie\"> {{ movie.director}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actors\">\n        <th mat-header-cell *matHeaderCellDef > Actors </th>\n        <td mat-cell *matCellDef=\"let movie\"> {{movie.actors}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"poster\">\n          <th mat-header-cell *matHeaderCellDef > Poster </th>\n          <td mat-cell *matCellDef=\"let movie\"> <img [src]='movie.poster'  /> </td>\n        </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>-->\n<!--\n<div>\n   <ul>\n       <li *ngFor=\"let movie of _movies\">\n           <span>{{movie.title}}</span>\n           &nbsp;\n           <span>{{movie.plot}}</span>\n           &nbsp;\n           <span>{{movie.director}}</span>\n           &nbsp;\n           <span>{{movie.actors}}</span>\n           &nbsp;\n           <span><img [src]='movie.poster'  /></span>\n       </li>\n   </ul>\n</div>\n-->\n<app-angular-canvas></app-angular-canvas>\n\n"

/***/ }),

/***/ "./src/app/searchmovie/searchmovie.component.scss":
/*!********************************************************!*\
  !*** ./src/app/searchmovie/searchmovie.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNobW92aWUvQzpcXHByb2plY3RzXFxtb3ZpZWRlbW8vc3JjXFxhcHBcXHNlYXJjaG1vdmllXFxzZWFyY2htb3ZpZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNobW92aWUvc2VhcmNobW92aWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"

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
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");




var SearchmovieComponent = /** @class */ (function () {
    function SearchmovieComponent(movieSvc, firestore) {
        /* db.collection("MockExercises").add({
           calories:2,
           duration: 60,
           name:"walking"
         });*/
        /*this.temp = db.collection("Temp").valueChanges();
        this.temp.subscribe( t => {
            console.log(t);
        })*/
        this.movieSvc = movieSvc;
        this.firestore = firestore;
        this.title = '';
        this.displayedColumns = ['title', 'plot', 'director', 'actors', 'poster'];
    }
    SearchmovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._movies = new Array();
        this.dataSource = this._movies;
        this.showTable = false;
        this.firestore.collection('MockExercises').snapshotChanges().subscribe(function (data) {
            _this.exercises = data.map(function (e) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, e.payload.doc.data());
            });
        });
        var phone = "3051021234";
        this.phoneVal = "3051021234";
        var newPhone = "(" + phone.substring(0, 3) + ")" + phone.substring(3, 6) + '-' + phone.substring(6, phone.length);
        console.log(newPhone);
    };
    SearchmovieComponent.prototype.searchMovie = function () {
        var _this = this;
        this.showTable = false;
        console.log(this.phoneVal);
        console.log(this.exercises);
        this.movieSvc.GetMovie(this.title).subscribe(function (movie) {
            console.log(movie);
            _this._movies.push(movie);
            _this.showTable = true;
        });
    };
    SearchmovieComponent.prototype.onBlurValidate = function (val, chkVal, errorMsgId) {
        var regExpr = new RegExp(chkVal);
        if (regExpr.test(val)) {
            console.log(chkVal, val, 'Valid Phone');
        }
        else {
            console.log(chkVal, val, 'Not Valid Phone');
        }
    };
    SearchmovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchmovie',
            template: __webpack_require__(/*! ./searchmovie.component.html */ "./src/app/searchmovie/searchmovie.component.html"),
            styles: [__webpack_require__(/*! ./searchmovie.component.scss */ "./src/app/searchmovie/searchmovie.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_movieservice_service__WEBPACK_IMPORTED_MODULE_2__["MovieserviceService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
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