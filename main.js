(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _r_stuff_r_stuff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./r-stuff/r-stuff.component */ "./src/app/r-stuff/r-stuff.component.ts");
/* harmony import */ var _trouble_shoot_trouble_shoot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trouble-shoot/trouble-shoot.component */ "./src/app/trouble-shoot/trouble-shoot.component.ts");






var routes = [
    {
        path: '',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]
    },
    {
        path: 'data-wrangling',
        component: _r_stuff_r_stuff_component__WEBPACK_IMPORTED_MODULE_4__["RStuffComponent"]
    },
    {
        path: 'troubleshoot',
        component: _trouble_shoot_trouble_shoot_component__WEBPACK_IMPORTED_MODULE_5__["TroubleShootComponent"]
    }
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"wrapper\">\n  <div style=\"text-align:center; margin-top:20px\">\n    <img width=\"300\" alt=\"Raffy\" src=\"/assets/img/raffy-2.png\">\n  </div>\n\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-around center\" class=\"header\">\n    <button mat-button color=\"primary\" [routerLink]=\"['/']\" routerLinkActive=\"active-text\" [routerLinkActiveOptions]='{ exact: true }'>Welcome</button>\n    <button mat-button color=\"primary\" [routerLink]=\"['/data-wrangling']\" routerLinkActive=\"active-text\">Data Wrangling in\n      R</button>\n    <button mat-button color=\"primary\" disabled>Statistics in R</button>\n    <button mat-button color=\"primary\" disabled>MongoDB & NoSQL Databases</button>\n    <button mat-button color=\"primary\" [routerLink]=\"['/troubleshoot']\" routerLinkActive=\"active-text\">Trouble Shooting in\n      R</button>\n  </div>\n</div>\n<div class=\"content\">\n  <div class=\"wrapper\">\n    <router-outlet></router-outlet>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%; }\n\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.content {\n  flex: 1 0 auto; }\n\n.footer {\n  flex-shrink: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxjYXJsb1xcRGVza3RvcFxcV2ViIERldmVsb3BtZW50XFxnZWVrb3V0MjAxOS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLCtCQUErQixFQUFBOztBQUVqQztFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XHJcbn1cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG4iXX0= */"

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
        this.title = 'geekout2019';
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _r_stuff_r_stuff_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./r-stuff/r-stuff.component */ "./src/app/r-stuff/r-stuff.component.ts");
/* harmony import */ var _r_stats_r_stats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./r-stats/r-stats.component */ "./src/app/r-stats/r-stats.component.ts");
/* harmony import */ var _mongo_db_mongo_db_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mongo-db/mongo-db.component */ "./src/app/mongo-db/mongo-db.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _trouble_shoot_trouble_shoot_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trouble-shoot/trouble-shoot.component */ "./src/app/trouble-shoot/trouble-shoot.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
                _r_stuff_r_stuff_component__WEBPACK_IMPORTED_MODULE_7__["RStuffComponent"],
                _r_stats_r_stats_component__WEBPACK_IMPORTED_MODULE_8__["RStatsComponent"],
                _mongo_db_mongo_db_component__WEBPACK_IMPORTED_MODULE_9__["MongoDBComponent"],
                _trouble_shoot_trouble_shoot_component__WEBPACK_IMPORTED_MODULE_12__["TroubleShootComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mongo-db/mongo-db.component.html":
/*!**************************************************!*\
  !*** ./src/app/mongo-db/mongo-db.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mongo-db works!\n</p>\n"

/***/ }),

/***/ "./src/app/mongo-db/mongo-db.component.scss":
/*!**************************************************!*\
  !*** ./src/app/mongo-db/mongo-db.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbmdvLWRiL21vbmdvLWRiLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/mongo-db/mongo-db.component.ts":
/*!************************************************!*\
  !*** ./src/app/mongo-db/mongo-db.component.ts ***!
  \************************************************/
/*! exports provided: MongoDBComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MongoDBComponent", function() { return MongoDBComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MongoDBComponent = /** @class */ (function () {
    function MongoDBComponent() {
    }
    MongoDBComponent.prototype.ngOnInit = function () {
    };
    MongoDBComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mongo-db',
            template: __webpack_require__(/*! ./mongo-db.component.html */ "./src/app/mongo-db/mongo-db.component.html"),
            styles: [__webpack_require__(/*! ./mongo-db.component.scss */ "./src/app/mongo-db/mongo-db.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MongoDBComponent);
    return MongoDBComponent;
}());



/***/ }),

/***/ "./src/app/r-stats/r-stats.component.html":
/*!************************************************!*\
  !*** ./src/app/r-stats/r-stats.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  r-stats works!\n</p>\n"

/***/ }),

/***/ "./src/app/r-stats/r-stats.component.scss":
/*!************************************************!*\
  !*** ./src/app/r-stats/r-stats.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Itc3RhdHMvci1zdGF0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/r-stats/r-stats.component.ts":
/*!**********************************************!*\
  !*** ./src/app/r-stats/r-stats.component.ts ***!
  \**********************************************/
/*! exports provided: RStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RStatsComponent", function() { return RStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RStatsComponent = /** @class */ (function () {
    function RStatsComponent() {
    }
    RStatsComponent.prototype.ngOnInit = function () {
    };
    RStatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-r-stats',
            template: __webpack_require__(/*! ./r-stats.component.html */ "./src/app/r-stats/r-stats.component.html"),
            styles: [__webpack_require__(/*! ./r-stats.component.scss */ "./src/app/r-stats/r-stats.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RStatsComponent);
    return RStatsComponent;
}());



/***/ }),

/***/ "./src/app/r-stuff/r-stuff.component.html":
/*!************************************************!*\
  !*** ./src/app/r-stuff/r-stuff.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group dynamicHeight=true mat-stretch-tabs>\n  <mat-tab label=\"Level 1\">\n    <div id=\"afghanistan---world-bank-group-country-survey-2018\" class=\"section level1\">\n      <h1>Afghanistan - World Bank Group Country Survey 2018</h1>\n      <div id=\"selecting-and-replacing-values\" class=\"section level2\">\n        <h2>Selecting and Replacing Values</h2>\n        <div id=\"scenerio\" class=\"section level3\">\n          <h3>Scenerio</h3>\n          <p>The following scenerio was an assignment given to students in intro to data analysis last semester. What\n            is interesting here from a data wrangling perspective is that we cannot use the dataset as is to answer\n            these questions.</p>\n          <p>Link to dataset and related information: <a href=\"http://microdata.worldbank.org/index.php/catalog/3192/datafile/F1\" target=\"_blank\">World\n              Bank Website</a></p>\n          <p>Using these files, Choose 3 variables,</p>\n          <ol style=\"list-style-type: decimal\">\n            <li>Describe them using the data dictionary</li>\n            <li>State sample size.</li>\n            <li>Choose a central tendency measure you would use . calculate it. give an explanation of why?</li>\n            <li>Find the appropriate measure of variation. Calculate it and give an intrepretation</li>\n            <li>Find the 95% confidence interval for one of your variables. Give an intrepretation</li>\n          </ol>\n          <div id=\"step-1-load-dataset\" class=\"section level4\">\n            <h4>Step 1: Load dataset</h4>\n            <pre class=\"r\">\n            <code class=\"hljs\">\n              <span class=\"hljs-comment\">#install.packages(tidyverse)</span>\n              <span class=\"hljs-keyword\">library</span>(tidyverse)\n            </code>\n            </pre>\n            <pre>\n              <code class=\"hljs\">\n                ## v ggplot2 3.1.0     v purrr   0.2.5\n                ## v tibble  2.0.1     v dplyr   0.7.8\n                ## v tidyr   0.8.2     v stringr 1.3.1\n                ## v readr   1.3.1     v forcats 0.3.0\n              </code>\n            </pre>\n            <pre>\n              <code class=\"hljs\">\n                ## -- Conflicts ----------- tidyverse_conflicts() --\n                ## x dplyr::filter() masks stats::filter()\n                ## x dplyr::lag()    masks stats::lag()\n              </code>\n            </pre>\n            <pre class=\"r\">\n              <code class=\"hljs\">\n                <span class=\"hljs-comment\"># load data</span>\n                af &lt;- read_csv(<span class=\"hljs-string\">\"data/afghanistan.csv\"</span>)\n              </code>\n            </pre>\n          </div>\n          <div id=\"step-2-select-variables-of-interest\" class=\"section level4\">\n            <h4>Step 2: Select Variables of Interest</h4>\n            <pre class=\"r\">\n            <code class=\"hljs\">\n              <span class=\"hljs-comment\"># select 3 variables</span>\n              selectedVars &lt;- af %&gt;% select(c2_1:c2_3)\n              head(selectedVars, <span class=\"hljs-number\">3</span>)\n            </code>\n            </pre>\n            <pre>\n            <code class=\"hljs\">\n              ## # A tibble: 3 x 3\n              ##    c2_1  c2_2  c2_3\n              ##   &lt;dbl&gt; &lt;dbl&gt; &lt;dbl&gt;\n              ## 1     4     6     8\n              ## 2    11     3     3\n              ## 3     1     1     3\n            </code>\n            </pre>\n          </div>\n          <div id=\"step-3-understand-your-problem\" class=\"section level4\">\n            <h4>Step 3: Understand Your Problem</h4>\n            <p>So you selected your 3 variables and now you are ready to do some summary statistics. However, after\n              running <code>summary()</code> you notice that your results do not look right. <strong>WTF Does <em>Inf</em>\n                even MEAN!!!</strong></p>\n            <pre class=\"r\">\n            <code class=\"hljs\">summary(selectedVars)</code>\n            </pre>\n            <pre>\n            <code class=\"hljs\">\n              ##       c2_1          c2_2          c2_3\n              ##  Min.   :  1   Min.   :  1   Min.   :  1\n              ##  1st Qu.:  6   1st Qu.:  6   1st Qu.:  6\n              ##  Median : 10   Median :  8   Median :  9\n              ##  Mean   :Inf   Mean   :Inf   Mean   :Inf\n              ##  3rd Qu.: 11   3rd Qu.: 11   3rd Qu.: 11\n              ##  Max.   :Inf   Max.   :Inf   Max.   :Inf\n            </code>\n            </pre>\n            <pre class=\"r\">\n              <code class=\"hljs\">glimpse(selectedVars)</code>\n            </pre>\n            <pre>\n            <code class=\"hljs\">\n              ## Observations: 502\n              ## Variables: 3\n              ## $ c2_1 &lt;dbl&gt; 4, 11, 1, 1, Inf, Inf, 3, 4, 2, 11, 4, 11, 9, 5, Inf, Inf...\n              ## $ c2_2 &lt;dbl&gt; 6, 3, 1, 11, Inf, Inf, 4, 3, 4, 6, 7, 11, 9, 4, Inf, Inf,...\n              ## $ c2_3 &lt;dbl&gt; 8, 3, 3, 2, Inf, Inf, 4, 3, 7, 7, 5, 11, 8, 5, Inf, Inf, ...\n            </code>\n            </pre>\n          </div>\n          <div id=\"step-4-solution-replace-non-values\" class=\"section level4\">\n            <h4>Step 4: Solution: Replace Non values</h4>\n            <pre class=\"r\">\n            <code class=\"hljs\">\n              non_values &lt;- c(<span class=\"hljs-literal\">Inf</span>, <span class=\"hljs-number\">11</span>)\n              replacement_value &lt;- <span class=\"hljs-literal\">NA_real_</span>\n\n              <span class=\"hljs-comment\"># Approach One: Covert to matrix</span>\n              matVars &lt;- as.matrix(selectedVars)\n              matVars[matVars %<span class=\"hljs-keyword\">in</span>% non_values] &lt;- replacement_value\n\n              summary(matVars)\n            </code>\n            </pre>\n            <pre>\n            <code class=\"hljs\">\n              ##       c2_1             c2_2             c2_3\n              ##  Min.   : 1.000   Min.   : 1.000   Min.   : 1.000\n              ##  1st Qu.: 4.250   1st Qu.: 5.000   1st Qu.: 5.000\n              ##  Median : 7.000   Median : 7.000   Median : 7.000\n              ##  Mean   : 6.453   Mean   : 6.779   Mean   : 6.663\n              ##  3rd Qu.: 8.000   3rd Qu.: 8.000   3rd Qu.: 9.000\n              ##  Max.   :10.000   Max.   :10.000   Max.   :10.000\n              ##  NA's   :224      NA's   :163      NA's   :173\n            </code>\n            </pre>\n            <pre class=\"r\">\n            <code class=\"hljs\">glimpse(matVars)</code>\n            </pre>\n            <pre>\n            <code class=\"hljs\">\n              ##  num [1:502, 1:3] 4 NA 1 1 NA NA 3 4 2 NA ...\n              ##  - attr(*, \"dimnames\")=List of 2\n              ##   ..$ : NULL\n              ##   ..$ : chr [1:3] \"c2_1\" \"c2_2\" \"c2_3\"\n            </code>\n            </pre>\n            <pre class=\"r\">\n            <code class=\"hljs\">\n              <span class=\"hljs-comment\"># Approach Two</span>\n              dfVars &lt;- selectedVars %&gt;% mutate_all(~ if_else(.x %<span class=\"hljs-keyword\">in</span>% non_values, replacement_value, .x))\n\n              summary(dfVars)\n            </code>\n            </pre>\n            <pre>\n            <code class=\"hljs\">\n              ##       c2_1             c2_2             c2_3\n              ##  Min.   : 1.000   Min.   : 1.000   Min.   : 1.000\n              ##  1st Qu.: 4.250   1st Qu.: 5.000   1st Qu.: 5.000\n              ##  Median : 7.000   Median : 7.000   Median : 7.000\n              ##  Mean   : 6.453   Mean   : 6.779   Mean   : 6.663\n              ##  3rd Qu.: 8.000   3rd Qu.: 8.000   3rd Qu.: 9.000\n              ##  Max.   :10.000   Max.   :10.000   Max.   :10.000\n              ##  NA's   :224      NA's   :163      NA's   :173\n            </code>\n            </pre>\n            <pre class=\"r\">\n            <code class=\"hljs\">glimpse(dfVars)</code>\n            </pre>\n            <pre>\n            <code class=\"hljs\">\n              ## Observations: 502\n              ## Variables: 3\n              ## $ c2_1 &lt;dbl&gt; 4, NA, 1, 1, NA, NA, 3, 4, 2, NA, 4, NA, 9, 5, NA, NA, 9,...\n              ## $ c2_2 &lt;dbl&gt; 6, 3, 1, NA, NA, NA, 4, 3, 4, 6, 7, NA, 9, 4, NA, NA, 6, ...\n              ## $ c2_3 &lt;dbl&gt; 8, 3, 3, 2, NA, NA, 4, 3, 7, 7, 5, NA, 8, 5, NA, NA, 8, 1...\n            </code>\n            </pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Level 2\">\n      <div id=\"wmdt-dt\" class=\"section level1\">\n          <h1>WMDT-DT</h1>\n          <div id=\"inspecting-selecting-and-filtering-data\" class=\"section level2\">\n          <h2>Inspecting, Selecting and Filtering Data</h2>\n          <div id=\"scenerio-1\" class=\"section level3\">\n          <h3>Scenerio</h3>\n          <p>The following scenerio is a back and forth email exchange that was occurring as I was prepping for this Geek Out (so I thought why not include this as well). What is interesting here from a data wrangling perspective is that you (as the go-to data guy) will need to be able to inspect the dataset, see what can be useful for the person wanting to use the dataset and then filter appropiately.</p>\n          <ul style=\"list-style-type: none\">\n          <li><strong>Bale (in a message sent to Jason)</strong>: Did you say that you found the material in CNS’ old WMD Terrorism database? If so, is it accessible? I’d like to peruse it again, since the START center’s new, improved WMD Terrorism database is not yet up and running.</li>\n          </ul>\n          <p style=\"text-align:center\"><strong>[Bale recieves WMD-DT dataset]</strong></p>\n          <ul style=\"list-style-type: none\">\n          <li><strong>Bale</strong>: Is there any way to sort out the jihadist bio-incidents on this?</li>\n          <li><strong>Jason</strong>: Carlos, are we able to do that yet? Or is that something we can do in the future only?</li>\n          <li><strong>Carlos</strong>: I can send you a filtered version of the same dataset the only catch is you have to tell me what specific criteria you are interested in.</li>\n          <li><strong>Bale</strong>: What I’m interested in, Carlos, is the incidents involving a) jihadist groups (including those in Chechnya, if there are any involving bio agents), and b) biological toxins and agents. It doesn’t matter whether they are vague threats to use those materials by jihadist groups, actual jihadist plots to carry out low level attacks, or jihadist efforts to acquire, test, or develop biological agents. So the only sorting I need done is related to bio agents and jihadists. Also, what I need to retrieve is the actual description of the incidents (including the sources on which those descriptions are based, which should be footnoted).</li>\n          </ul>\n          <p>\n            Link to the WMD-TD dataset can be found here:  <a href=\"/assets/data/wmd-td.csv\" >Download Data</a>\n          </p>\n\n              <br>\n          <h4>Step 1: Load dataset</h4>\n          <pre class=\"r\"><code class=\"hljs\">\n          <span class=\"hljs-comment\">#install.packages(tidyverse)</span>\n          <span class=\"hljs-keyword\">library</span>(tidyverse)\n          <span class=\"hljs-comment\"># load data</span>\n          wmdt &lt;- read_csv(<span class=\"hljs-string\">\"data/wmd-td.csv\"</span>)</code></pre>\n          </div>\n          <div id=\"step-2-inspect-data\" class=\"section level4\">\n          <h4>Step 2: Inspect Data</h4>\n          <p>As you recall from the email exchange above, Bale is interested in incidents involving jihadist groups. However, there is no “JIHADIST” category. There are, however, some variables that may be relevant. Here we will use the <code>unique()</code> command to see all possible options for group type.</p>\n          <pre class=\"r\"><code class=\"hljs\">glimpse(wmdt)</code></pre>\n          <pre><code class=\"hljs\">\n          ## Observations: 1,224\n          ## Variables: 40\n          ## $ id               &lt;dbl&gt; 1629, 1630, 1631, 395, 756, 1783, 1713, 1142,...\n          ## $ year             &lt;dbl&gt; 2003, 2003, 2003, 1979, 1993, 2004, 2003, 197...\n          ## $ month            &lt;dbl&gt; 3, 3, 2, 7, 6, 1, 1, 6, 8, 1, 1, 0, 12, 3, 1,...\n          ## $ day              &lt;dbl&gt; 4, 28, 21, 0, 0, 0, 0, 15, 15, 0, 0, 0, 0, 30...\n          ## $ cbrn             &lt;chr&gt; \"chemical\", \"chemical\", \"chemical\", \"biologic...\n          ## $ agent            &lt;chr&gt; \"Cyanide\", \"Cyanide\", \"Cyanide\", \"Legionnaire...\n          ## $ location         &lt;chr&gt; \"Wellington\", \"Wellington\", \"Wellington\", \"Mu...\n          ## $ state            &lt;chr&gt; NA, NA, NA, NA, NA, NA, NA, \"District of Colu...\n          ## $ country          &lt;chr&gt; \"New Zealand\", \"New Zealand\", \"New Zealand\", ...\n          ## $ region           &lt;chr&gt; \"Australia and Oceania\", \"Australia and Ocean...\n          ## $ summary          &lt;chr&gt; \"On 4 March 2003, in Wellington, New Zealand,...\n          ## $ specTarget       &lt;chr&gt; \"Movie theatres; water supplies\", \"Food &amp; bev...\n          ## $ injuries         &lt;dbl&gt; 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...\n          ## $ fatalities       &lt;dbl&gt; 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...\n          ## $ spDelivery       &lt;chr&gt; \"Insert into water supply through tap; use as...\n          ## $ miscInfo         &lt;chr&gt; \"The same week, Auckland police received nume...\n          ## $ sources          &lt;chr&gt; \"[A] “Another Cyanide Threat Letter Sent in N...\n          ## $ grpName          &lt;chr&gt; \"11-Sep\", \"11-Sep\", \"11-Sep\", \"Aliens of Amer...\n          ## $ grpType          &lt;chr&gt; \"Unknown\", \"Unknown\", \"Unknown\", \"Lone actor ...\n          ## $ actor            &lt;chr&gt; \"Unknown\", \"Unknown\", \"Unknown\", \"Alphabet Bo...\n          ## $ specMotive       &lt;chr&gt; \"Protest US-led plans to invade Iraq\", \"Prote...\n          ## $ statMotive       &lt;chr&gt; \"To Support Other Single-Issue\", \"To Support ...\n          ## $ statEvent        &lt;chr&gt; \"Hoax/Prank\", \"Use of Agent\", \"Use of Agent\",...\n          ## $ statIncident     &lt;chr&gt; \"Type 1: Politically / Ideologically Motivate...\n          ## $ statDelivery     &lt;chr&gt; \"Water Supply\", \"Mail / Letter / Package\", \"M...\n          ## $ statTgtIndiscrim &lt;dbl&gt; 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, ...\n          ## $ statTgtAgro      &lt;dbl&gt; 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...\n          ## $ statTgtGovt      &lt;dbl&gt; 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, ...\n          ## $ statTgtBus       &lt;dbl&gt; 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...\n          ## $ statTgtOrg       &lt;dbl&gt; 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...\n          ## $ statTgtInd       &lt;dbl&gt; 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...\n          ## $ statTgtMed       &lt;dbl&gt; 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...\n          ## $ statTgtEd        &lt;dbl&gt; 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...\n          ## $ statTgtUnk       &lt;dbl&gt; 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, ...\n          ## $ statTgtNA        &lt;dbl&gt; 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, ...\n          ## $ lastModified     &lt;chr&gt; \"3/28/2005 15:15\", \"8/26/2004 16:03\", \"8/26/2...\n          ## $ created          &lt;chr&gt; \"8/15/2003\", \"8/15/2003\", \"7/14/2003\", \"6/24/...\n          ## $ suspected        &lt;dbl&gt; 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...\n          ## $ forceRelated     &lt;chr&gt; NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, N...\n          ## $ gsuspected       &lt;dbl&gt; 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...</code></pre>\n          <pre class=\"r\"><code class=\"hljs\">unique(wmdt$grpType)</code></pre>\n          <pre><code class=\"hljs\">\n          ##  [1] \"Unknown\"                     \"Lone actor (s)\"\n          ##  [3] \"Right-wing\"                  \"Religious (fundamentalists)\"\n          ##  [5] \"Single-issue\"                \"Nationalists / Separatists\"\n          ##  [7] \"Religious (cults)\"           \"Left-wing\"\n          ##  [9] \"Nationalists/Separatists\"    \"Criminal Organization\"\n          ## [11] \"N/A\"                         NA</code></pre>\n          <p>Based on these values I’d email Bale telling him the available options. He responds, “In that case, the filter should be for a) bio agents, and b) religious (fundamentalist) groups. (even though Islamist groups are also right-wing).”</p>\n          <p>With that out the way, let’s filter!</p>\n          </div>\n          <div id=\"step-3-filter-data\" class=\"section level4\">\n          <h4>Step 3: Filter Data</h4>\n          <pre class=\"r\"><code class=\"hljs\">rel_bio &lt;- wmdt %&gt;% filter(grpType == (<span class=\"hljs-string\">\"Religious (fundamentalists)\"</span>) &amp; cbrn == <span class=\"hljs-string\">\"biological\"</span>) %&gt;% select(year, month, day, cbrn, agent, grpType, grpName, location, state, country, summary, sources, fatalities, injuries )\n\n          glimpse(rel_bio)</code></pre>\n          <pre><code class=\"hljs\">\n          ## Observations: 13\n          ## Variables: 14\n          ## $ year       &lt;dbl&gt; 1999, 2002, 2003, 1999, 1997, 1998, 1995, 1998, 200...\n          ## $ month      &lt;dbl&gt; 0, 5, 9, 2, 4, 3, 8, 1, 12, 8, 4, 1, 3\n          ## $ day        &lt;dbl&gt; 0, 30, 18, 16, 23, 5, 21, 0, 1, 16, 0, 5, 26\n          ## $ cbrn       &lt;chr&gt; \"biological\", \"biological\", \"biological\", \"biologic...\n          ## $ agent      &lt;chr&gt; \"Ebola; anthrax; botulinum toxin\", \"Anthrax bacteri...\n          ## $ grpType    &lt;chr&gt; \"Religious (fundamentalists)\", \"Religious (fundamen...\n          ## $ grpName    &lt;chr&gt; \"Al-Qa`ida\", \"Al-Qa`ida\", \"Al-Qa'idah of Ukraine\", ...\n          ## $ location   &lt;chr&gt; \"Worldwide\", \"Pune\", \"Kyiv\", \"Yemen\", \"Washington, ...\n          ## $ state      &lt;chr&gt; NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA, NA\n          ## $ country    &lt;chr&gt; NA, \"lndia\", \"Ukraine\", \"Yemen\", \"United States\", \"...\n          ## $ summary    &lt;chr&gt; \"'USAMA BIN LADEN AND BIOLOGICAL WEAPONS: PLOTS AND...\n          ## $ sources    &lt;chr&gt; \"[A] Jihad Salim, “Report on bin Laden, Zawahiri, ‘...\n          ## $ fatalities &lt;dbl&gt; 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0\n          ## $ injuries   &lt;dbl&gt; 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0</code></pre>\n          <pre class=\"r\"><code class=\"hljs\"><span class=\"hljs-comment\">#write.csv(rel_bio, file = \"data/rel_bio.csv\", row.names=FALSE)</span></code></pre>\n          <p>Let’s also provide some extra data on bio-attacks.</p>\n          <pre class=\"r\"><code class=\"hljs\">bio_only &lt;- wmdt %&gt;% filter(cbrn == <span class=\"hljs-string\">\"biological\"</span>)\n          by_groupType &lt;- bio_only %&gt;% group_by(grpType) %&gt;% summarise(\n            n = n(),\n            fatalities = sum(fatalities),\n            injuries = sum(injuries)\n          )\n          by_groupType</code></pre>\n          <pre><code class=\"hljs\">\n          ## # A tibble: 11 x 4\n          ##    grpType                         n fatalities injuries\n          ##    &lt;chr&gt;                       &lt;int&gt;      &lt;dbl&gt;    &lt;dbl&gt;\n          ##  1 Criminal Organization           1          0        0\n          ##  2 Left-wing                       8          0        0\n          ##  3 Lone actor (s)                194          1      214\n          ##  4 N/A                             8          0        0\n          ##  5 Nationalists / Separatists     20         14        0\n          ##  6 Nationalists/Separatists        1          0        0\n          ##  7 Religious (cults)              15          0      776\n          ##  8 Religious (fundamentalists)    13          0        0\n          ##  9 Right-wing                      9          0        0\n          ## 10 Single-issue                   13          0        0\n          ## 11 Unknown                       386          7       81</code></pre>\n          </div>\n          </div>\n          </div>\n  </mat-tab>\n  <mat-tab label=\"Level 3\">\n\n<div id=\"the-armed-conflict-location-event-data-project-acled\" class=\"section level1\">\n<h1>The Armed Conflict Location &amp; Event Data Project (ACLED)</h1>\n<div id=\"scenerio-2\" class=\"section level3\">\n<h3>Scenerio</h3>\n<p>You are taking Intro to GIS and for your final project you need to do a Time Lapse. In order for the time lapse to work you need to format you data in a very specific way. Link to Story Map: <a href=\"https://middlebury.maps.arcgis.com/apps/MapJournal/index.html?appid=f5bc12312bd14ae1a4e058798d52b977\" target=\"_blank\">Time Lapse Project</a></p>\n<p>Link to dataset and related information: <a href=\"https://www.acleddata.com/data/\" target=\"_blank\">ACLED Data</a></p>\n<div id=\"step-1-load-dataset-2\" class=\"section level4\">\n<h4>Step 1: Load dataset</h4>\n<pre class=\"r\"><code class=\"hljs\"><span class=\"hljs-comment\">#install.packages(\"tidyverse\"\")</span>\n<span class=\"hljs-keyword\">library</span>(tidyverse)\n\nacled &lt;- read_csv(<span class=\"hljs-string\">\"data/acled.csv\"</span>)</code></pre>\n<pre><code class=\"hljs\">## Parsed with column specification:\n## cols(\n##   .default = col_character(),\n##   data_id = col_double(),\n##   iso = col_double(),\n##   event_id_no_cnty = col_double(),\n##   year = col_double(),\n##   time_precision = col_double(),\n##   inter1 = col_double(),\n##   inter2 = col_double(),\n##   interaction = col_double(),\n##   latitude = col_double(),\n##   longitude = col_double(),\n##   geo_precision = col_double(),\n##   fatalities = col_double(),\n##   timestamp = col_double()\n## )</code></pre>\n<pre><code class=\"hljs\">## See spec(...) for full column specifications.</code></pre>\n</div>\n<div id=\"step-2-inspect-dataset\" class=\"section level4\">\n<h4>Step 2: Inspect dataset</h4>\n<pre class=\"r\"><code class=\"hljs\">glimpse(acled)</code></pre>\n<pre><code class=\"hljs\">## Observations: 47,242\n## Variables: 30\n## $ data_id          &lt;dbl&gt; 3001512, 3001513, 3001498, 3001499, 3001500, ...\n## $ iso              &lt;dbl&gt; 586, 586, 586, 586, 586, 586, 586, 586, 586, ...\n## $ event_id_cnty    &lt;chr&gt; \"PAK47369\", \"PAK47370\", \"PAK47355\", \"PAK47356...\n## $ event_id_no_cnty &lt;dbl&gt; 47369, 47370, 47355, 47356, 47357, 47358, 473...\n## $ event_date       &lt;chr&gt; \"09 February 2019\", \"09 February 2019\", \"08 F...\n## $ year             &lt;dbl&gt; 2019, 2019, 2019, 2019, 2019, 2019, 2019, 201...\n## $ time_precision   &lt;dbl&gt; 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, ...\n## $ event_type       &lt;chr&gt; \"Riots/Protests\", \"Riots/Protests\", \"Riots/Pr...\n## $ actor1           &lt;chr&gt; \"Protesters (Pakistan)\", \"Protesters (Pakista...\n## $ assoc_actor_1    &lt;chr&gt; \"Health Workers (Pakistan)\", NA, \"Mallah Comm...\n## $ inter1           &lt;dbl&gt; 6, 6, 5, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, ...\n## $ actor2           &lt;chr&gt; NA, NA, \"Rioters (Pakistan)\", \"Police Forces ...\n## $ assoc_actor_2    &lt;chr&gt; NA, NA, \"Bozdar Communal Group (Pakistan)\", N...\n## $ inter2           &lt;dbl&gt; 0, 0, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...\n## $ interaction      &lt;dbl&gt; 60, 60, 55, 13, 60, 60, 60, 60, 60, 60, 60, 6...\n## $ region           &lt;chr&gt; \"Southern Asia\", \"Southern Asia\", \"Southern A...\n## $ country          &lt;chr&gt; \"Pakistan\", \"Pakistan\", \"Pakistan\", \"Pakistan...\n## $ admin1           &lt;chr&gt; \"Punjab\", \"Punjab\", \"Sindh\", \"Khyber Pakhtunk...\n## $ admin2           &lt;chr&gt; \"Layyah\", \"Lahore\", \"Jamshoro\", \"North Waziri...\n## $ admin3           &lt;chr&gt; \"Layyah\", \"Lahore\", \"Sehwan\", \"Mir Ali\", \"Kha...\n## $ location         &lt;chr&gt; \"Layyah\", \"Lahore-Gulberg\", \"Bhan Syedabad\", ...\n## $ latitude         &lt;dbl&gt; 30.9658, 31.5134, 26.5563, 32.9705, 34.7323, ...\n## $ longitude        &lt;dbl&gt; 70.9381, 74.3467, 67.7163, 70.2785, 71.5338, ...\n## $ geo_precision    &lt;dbl&gt; 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, ...\n## $ source           &lt;chr&gt; \"Nation (Pakistan)\", \"Dawn (Pakistan)\", \"Dail...\n## $ source_scale     &lt;chr&gt; \"National\", \"National\", \"Subnational\", \"Natio...\n## $ notes            &lt;chr&gt; \"As reported on February 9, Paramedical Staff...\n## $ fatalities       &lt;dbl&gt; 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...\n## $ timestamp        &lt;dbl&gt; 1549982942, 1549982942, 1549982942, 154998294...\n## $ iso3             &lt;chr&gt; \"PAK\", \"PAK\", \"PAK\", \"PAK\", \"PAK\", \"PAK\", \"PA...</code></pre>\n<pre class=\"r\"><code class=\"hljs\">unique(acled$admin1)</code></pre>\n<pre><code class=\"hljs\">##  [1] \"Punjab\"\n##  [2] \"Sindh\"\n##  [3] \"Khyber Pakhtunkhwa\"\n##  [4] \"Federal Capital Territory\"\n##  [5] \"Gilgit-Baltistan\"\n##  [6] \"Balochistan\"\n##  [7] \"Azad Jammu and Kashmir\"\n##  [8] \"FATA\"\n##  [9] \"Federally Administered Tribal Areas\"\n## [10] \"Islamabad Capital Territory\"</code></pre>\n</div>\n<div id=\"step-3-clean-strings\" class=\"section level4\">\n<h4>Step 3: Clean Strings</h4>\n<pre class=\"r\"><code class=\"hljs\"><span class=\"hljs-keyword\">library</span>(stringr)\n\nacled$admin1 &lt;- str_replace(acled$admin1, <span class=\"hljs-string\">\"Federally Administered Tribal Areas\"</span>, <span class=\"hljs-string\">\"FATA\"</span>)\nunique(acled$admin1)</code></pre>\n<pre><code class=\"hljs\">## [1] \"Punjab\"                      \"Sindh\"\n## [3] \"Khyber Pakhtunkhwa\"          \"Federal Capital Territory\"\n## [5] \"Gilgit-Baltistan\"            \"Balochistan\"\n## [7] \"Azad Jammu and Kashmir\"      \"FATA\"\n## [9] \"Islamabad Capital Territory\"</code></pre>\n</div>\n<div id=\"step-4-filter-values\" class=\"section level4\">\n<h4>Step 4: Filter Values</h4>\n<pre class=\"r\"><code class=\"hljs\">unique(acled$event_type)</code></pre>\n<pre><code class=\"hljs\">## [1] \"Riots/Protests\"\n## [2] \"Remote violence\"\n## [3] \"Strategic development\"\n## [4] \"Battle-No change of territory\"\n## [5] \"Violence against civilians\"\n## [6] \"Battle-Government regains territory\"\n## [7] \"Non-violent transfer of territory\"\n## [8] \"Battle-Non-state actor overtakes territory\"\n## [9] \"Headquarters or base established\"</code></pre>\n<pre class=\"r\"><code class=\"hljs\">non_violent &lt;- c(<span class=\"hljs-string\">\"Strategic development\"</span>, <span class=\"hljs-string\">\"Headquarters or base established\"</span>, <span class=\"hljs-string\">\"Non-violent transfer of territory\"</span>)\nacled_violent &lt;- acled %&gt;% filter(!event_type %<span class=\"hljs-keyword\">in</span>% non_violent)\nunique(acled_violent$event_type)</code></pre>\n<pre><code class=\"hljs\">## [1] \"Riots/Protests\"\n## [2] \"Remote violence\"\n## [3] \"Battle-No change of territory\"\n## [4] \"Violence against civilians\"\n## [5] \"Battle-Government regains territory\"\n## [6] \"Battle-Non-state actor overtakes territory\"</code></pre>\n<pre class=\"r\"><code class=\"hljs\">fata_violence &lt;- acled_violent %&gt;% filter(admin1 == <span class=\"hljs-string\">\"FATA\"</span>);\nunique(fata_violence$admin1)</code></pre>\n<pre><code class=\"hljs\">## [1] \"FATA\"</code></pre>\n</div>\n<div id=\"step-5-spread-values\" class=\"section level4\">\n<h4>Step 5: Spread Values</h4>\n<pre class=\"r\"><code class=\"hljs\">glimpse(fata_violence)</code></pre>\n<pre><code class=\"hljs\">## Observations: 3,363\n## Variables: 30\n## $ data_id          &lt;dbl&gt; 2082769, 1887979, 2082753, 1888332, 2563603, ...\n## $ iso              &lt;dbl&gt; 586, 586, 586, 586, 586, 586, 586, 586, 586, ...\n## $ event_id_cnty    &lt;chr&gt; \"PAK41601\", \"PAK41603\", \"PAK41586\", \"PAK41474...\n## $ event_id_no_cnty &lt;dbl&gt; 41601, 41603, 41586, 41474, 41476, 41485, 414...\n## $ event_date       &lt;chr&gt; \"22 May 2018\", \"22 May 2018\", \"21 May 2018\", ...\n## $ year             &lt;dbl&gt; 2018, 2018, 2018, 2018, 2018, 2018, 2018, 201...\n## $ time_precision   &lt;dbl&gt; 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ...\n## $ event_type       &lt;chr&gt; \"Riots/Protests\", \"Violence against civilians...\n## $ actor1           &lt;chr&gt; \"Protesters (Pakistan)\", \"Unidentified Armed ...\n## $ assoc_actor_1    &lt;chr&gt; \"JUI-F: Jamiat Ulema-e-Islam-Fazl; Unidentifi...\n## $ inter1           &lt;dbl&gt; 6, 3, 6, 3, 2, 6, 6, 3, 6, 3, 3, 6, 3, 3, 6, ...\n## $ actor2           &lt;chr&gt; NA, \"Civilians (Pakistan)\", NA, \"Police Force...\n## $ assoc_actor_2    &lt;chr&gt; NA, NA, NA, NA, NA, NA, NA, \"Unidentified Tri...\n## $ inter2           &lt;dbl&gt; 0, 7, 0, 1, 1, 0, 0, 7, 0, 7, 0, 0, 0, 1, 0, ...\n## $ interaction      &lt;dbl&gt; 60, 37, 60, 13, 12, 60, 60, 37, 60, 37, 30, 6...\n## $ region           &lt;chr&gt; \"Southern Asia\", \"Southern Asia\", \"Southern A...\n## $ country          &lt;chr&gt; \"Pakistan\", \"Pakistan\", \"Pakistan\", \"Pakistan...\n## $ admin1           &lt;chr&gt; \"FATA\", \"FATA\", \"FATA\", \"FATA\", \"FATA\", \"FATA...\n## $ admin2           &lt;chr&gt; \"Khyber Agency\", \"South Waziristan Agency\", \"...\n## $ admin3           &lt;chr&gt; \"Landi Kotal\", \"Sararogha\", \"Jamrud\", \"Miran ...\n## $ location         &lt;chr&gt; \"Charwazgai\", \"Sararogha\", \"Jamrud\", \"Miransh...\n## $ latitude         &lt;dbl&gt; 34.0239, 32.4742, 33.9991, 33.0001, 33.0001, ...\n## $ longitude        &lt;dbl&gt; 71.0621, 70.0026, 71.3646, 70.0698, 70.0698, ...\n## $ geo_precision    &lt;dbl&gt; 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 2, 1, ...\n## $ source           &lt;chr&gt; \"Daily Times\", \"Daily Pakistan Today\", \"Dawn;...\n## $ source_scale     &lt;chr&gt; \"National\", \"National\", \"Subnational-National...\n## $ notes            &lt;chr&gt; \"On May 22nd, tribesmen and JUI-F activists h...\n## $ fatalities       &lt;dbl&gt; 0, 1, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...\n## $ timestamp        &lt;dbl&gt; 1542756386, 1539454156, 1542756386, 153945415...\n## $ iso3             &lt;chr&gt; \"PAK\", \"PAK\", \"PAK\", \"PAK\", \"PAK\", \"PAK\", \"PA...</code></pre>\n<pre class=\"r\"><code class=\"hljs\">fata_wide &lt;- spread(fata_violence, event_type, fatalities, fill= <span class=\"hljs-number\">0</span>)\nglimpse(fata_wide)</code></pre>\n<pre><code class=\"hljs\">## Observations: 3,363\n## Variables: 34\n## $ data_id                                      &lt;dbl&gt; 2082769, 1887979,...\n## $ iso                                          &lt;dbl&gt; 586, 586, 586, 58...\n## $ event_id_cnty                                &lt;chr&gt; \"PAK41601\", \"PAK4...\n## $ event_id_no_cnty                             &lt;dbl&gt; 41601, 41603, 415...\n## $ event_date                                   &lt;chr&gt; \"22 May 2018\", \"2...\n## $ year                                         &lt;dbl&gt; 2018, 2018, 2018,...\n## $ time_precision                               &lt;dbl&gt; 1, 1, 1, 1, 1, 1,...\n## $ actor1                                       &lt;chr&gt; \"Protesters (Paki...\n## $ assoc_actor_1                                &lt;chr&gt; \"JUI-F: Jamiat Ul...\n## $ inter1                                       &lt;dbl&gt; 6, 3, 6, 3, 2, 6,...\n## $ actor2                                       &lt;chr&gt; NA, \"Civilians (P...\n## $ assoc_actor_2                                &lt;chr&gt; NA, NA, NA, NA, N...\n## $ inter2                                       &lt;dbl&gt; 0, 7, 0, 1, 1, 0,...\n## $ interaction                                  &lt;dbl&gt; 60, 37, 60, 13, 1...\n## $ region                                       &lt;chr&gt; \"Southern Asia\", ...\n## $ country                                      &lt;chr&gt; \"Pakistan\", \"Paki...\n## $ admin1                                       &lt;chr&gt; \"FATA\", \"FATA\", \"...\n## $ admin2                                       &lt;chr&gt; \"Khyber Agency\", ...\n## $ admin3                                       &lt;chr&gt; \"Landi Kotal\", \"S...\n## $ location                                     &lt;chr&gt; \"Charwazgai\", \"Sa...\n## $ latitude                                     &lt;dbl&gt; 34.0239, 32.4742,...\n## $ longitude                                    &lt;dbl&gt; 71.0621, 70.0026,...\n## $ geo_precision                                &lt;dbl&gt; 1, 1, 1, 1, 2, 1,...\n## $ source                                       &lt;chr&gt; \"Daily Times\", \"D...\n## $ source_scale                                 &lt;chr&gt; \"National\", \"Nati...\n## $ notes                                        &lt;chr&gt; \"On May 22nd, tri...\n## $ timestamp                                    &lt;dbl&gt; 1542756386, 15394...\n## $ iso3                                         &lt;chr&gt; \"PAK\", \"PAK\", \"PA...\n## $ `Battle-Government regains territory`        &lt;dbl&gt; 0, 0, 0, 0, 0, 0,...\n## $ `Battle-No change of territory`              &lt;dbl&gt; 0, 0, 0, 0, 6, 0,...\n## $ `Battle-Non-state actor overtakes territory` &lt;dbl&gt; 0, 0, 0, 0, 0, 0,...\n## $ `Remote violence`                            &lt;dbl&gt; 0, 0, 0, 0, 0, 0,...\n## $ `Riots/Protests`                             &lt;dbl&gt; 0, 0, 0, 0, 0, 0,...\n## $ `Violence against civilians`                 &lt;dbl&gt; 0, 1, 0, 0, 0, 0,...</code></pre>\n</div>\n<div id=\"step-6-group-values\" class=\"section level4\">\n<h4>Step 6: Group Values</h4>\n<pre class=\"r\"><code class=\"hljs\">by_admin_year &lt;- fata_wide %&gt;% group_by(admin2, year) %&gt;% summarise(\n            n = n(),\n            riots = sum(`Riots/Protests`),\n            civilians = sum(`Violence against civilians`),\n            remote_violence = sum(`Remote violence`)\n          )\nby_admin_year</code></pre>\n<pre><code class=\"hljs\">## # A tibble: 91 x 6\n## # Groups:   admin2 [?]\n##    admin2         year     n riots civilians remote_violence\n##    &lt;chr&gt;         &lt;dbl&gt; &lt;int&gt; &lt;dbl&gt;     &lt;dbl&gt;           &lt;dbl&gt;\n##  1 Bajaur Agency  2010    92     0        71             116\n##  2 Bajaur Agency  2011    18     0         3              16\n##  3 Bajaur Agency  2012    25     0        20              35\n##  4 Bajaur Agency  2013    39     0         2               7\n##  5 Bajaur Agency  2014    55     0         6              38\n##  6 Bajaur Agency  2015    49     2         5              26\n##  7 Bajaur Agency  2016    48     0         6               6\n##  8 Bajaur Agency  2017    30     0         0              12\n##  9 Bajaur Agency  2018    23     0         0               2\n## 10 FR Bannu       2015     1     0         0               0\n## # ... with 81 more rows</code></pre>\n<pre class=\"r\"><code class=\"hljs\"><span class=\"hljs-comment\">#write.csv(by_admin_year, file = \"data/by_admin_year.csv\", row.names=FALSE)</span></code></pre>\n</div>\n</div>\n</div>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/r-stuff/r-stuff.component.scss":
/*!************************************************!*\
  !*** ./src/app/r-stuff/r-stuff.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Itc3R1ZmYvci1zdHVmZi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/r-stuff/r-stuff.component.ts":
/*!**********************************************!*\
  !*** ./src/app/r-stuff/r-stuff.component.ts ***!
  \**********************************************/
/*! exports provided: RStuffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RStuffComponent", function() { return RStuffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RStuffComponent = /** @class */ (function () {
    function RStuffComponent() {
    }
    RStuffComponent.prototype.ngOnInit = function () {
    };
    RStuffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-r-stuff',
            template: __webpack_require__(/*! ./r-stuff.component.html */ "./src/app/r-stuff/r-stuff.component.html"),
            styles: [__webpack_require__(/*! ./r-stuff.component.scss */ "./src/app/r-stuff/r-stuff.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RStuffComponent);
    return RStuffComponent;
}());



/***/ }),

/***/ "./src/app/trouble-shoot/trouble-shoot.component.html":
/*!************************************************************!*\
  !*** ./src/app/trouble-shoot/trouble-shoot.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center; margin-bottom:20px\">\n  <p>If you see this, select no</p>\n  <img src=\"/assets/img/compilation.png\">\n</div>\n<div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"15px\">\n  <a href=\"/assets/data/wmd-td.csv\" mat-raised-button color=\"warn\" download=\"wmdt.csv\" >Download\n    WMD-TD</a>\n  <a href=\"/assets/data/afghanistan.csv\" mat-raised-button color=\"warn\" download=\"afghanistan.csv\" >Download\n    Afghanistan Survey</a>\n</div>\n<br>\n<br>\n"

/***/ }),

/***/ "./src/app/trouble-shoot/trouble-shoot.component.scss":
/*!************************************************************!*\
  !*** ./src/app/trouble-shoot/trouble-shoot.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 80%;\n  height: auto;\n  display: block;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJvdWJsZS1zaG9vdC9DOlxcVXNlcnNcXGNhcmxvXFxEZXNrdG9wXFxXZWIgRGV2ZWxvcG1lbnRcXGdlZWtvdXQyMDE5L3NyY1xcYXBwXFx0cm91YmxlLXNob290XFx0cm91YmxlLXNob290LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdHJvdWJsZS1zaG9vdC90cm91YmxlLXNob290LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46YXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/trouble-shoot/trouble-shoot.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/trouble-shoot/trouble-shoot.component.ts ***!
  \**********************************************************/
/*! exports provided: TroubleShootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TroubleShootComponent", function() { return TroubleShootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TroubleShootComponent = /** @class */ (function () {
    function TroubleShootComponent() {
    }
    TroubleShootComponent.prototype.ngOnInit = function () {
    };
    TroubleShootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trouble-shoot',
            template: __webpack_require__(/*! ./trouble-shoot.component.html */ "./src/app/trouble-shoot/trouble-shoot.component.html"),
            styles: [__webpack_require__(/*! ./trouble-shoot.component.scss */ "./src/app/trouble-shoot/trouble-shoot.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TroubleShootComponent);
    return TroubleShootComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Hello everyone, I'm Carlos R. Colon but you can just call me Raffy. Below are ways to get in touch with me if you want to further discuss and explore the topics covered during this workshop. Also, please remember to sign in so that the university knows we actually do stuff.</p>\n<ol class=\"size18\" style=\"margin-top:20px\">\n    <li>\n      <span style=\"color:red;\">Please Sign In to the META Lab!</span> (<a href=\"https://docs.google.com/forms/d/e/1FAIpQLScKHzelJT7Vif5rNRo-YgvRk0WHpPd78ZZDmYDo3EMQEdf0lw/viewform?usp=sf_link\" target=\"_blank\">click here to be redirected to Form</a>)</li>\n\n    <li>You can email me at:\n      <a href=\"mailto:ccolon@miis.edu\">ccolon@miis.edu</a>\n    </li>\n    <li>To schedule appointments go here:\n      <a href=\"http://sites.miis.edu/metalab/appointments/\" target=\"_blank\">http://sites.miis.edu/metalab/appointments/</a>\n    </li>\n    <li>You can also follow me on twitter:\n        <a href=\"https://twitter.com/ccolondeveloper\" target=\"_blank\">https://twitter.com/ccolondeveloper</a>\n      </li>\n  </ol>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\carlo\Desktop\Web Development\geekout2019\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map