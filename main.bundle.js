webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/adminlogin/adminlogin.component.css":
/***/ (function(module, exports) {

module.exports = ".adminform{\r\n    width: 300px;\r\n    margin: 0 auto;\r\n    background: #333;\r\n    padding: 10px;\r\n    text-align: center;\r\n    margin-top: 18%;\r\n}\r\n.adminform .form_groups{\r\n    margin: 10px 0px;\r\n}\r\n.adminform .form_groups label{\r\n    width: 100%;\r\n    float: left;\r\n    text-align: left;\r\n}\r\n.adminform .form_groups input{\r\n    width: 100%;\r\n}\r\n.btn-success{\r\n    background:#2f6f49\r\n}"

/***/ }),

/***/ "./src/app/adminlogin/adminlogin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"adminform\"><from>\n  <label style=\"font-size:30px;\">Login</label>\n  <div class=\"form_groups\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"user.name\">\n  </div>\n  <div class=\"form_groups\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"user.password\">\n  </div>\n  <button class=\"btn btn-success\" (click)=\"moveToDashboard(user)\">Login</button>\n</from>\n</div>"

/***/ }),

/***/ "./src/app/adminlogin/adminlogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminloginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminloginComponent = /** @class */ (function () {
    function AdminloginComponent(router) {
        this.router = router;
    }
    AdminloginComponent.prototype.ngOnInit = function () {
        this.user = {};
        sessionStorage.setItem('adminlogin', 'false');
    };
    AdminloginComponent.prototype.moveToDashboard = function (user) {
        if (user.name == 'admin' && user.password == 'admin123@') {
            this.router.navigate(['coinlist/']);
            sessionStorage.setItem('adminlogin', 'true');
        }
        else {
            sessionStorage.setItem('adminlogin', 'false');
            alert('You are not Autherised!');
        }
    };
    AdminloginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adminlogin',
            template: __webpack_require__("./src/app/adminlogin/adminlogin.component.html"),
            styles: [__webpack_require__("./src/app/adminlogin/adminlogin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminloginComponent);
    return AdminloginComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_signup_signup_component__ = __webpack_require__("./src/app/main/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_content_coinlist_coinlist_component__ = __webpack_require__("./src/app/main/content/coinlist/coinlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_content_coinpage_coinpage_component__ = __webpack_require__("./src/app/main/content/coinpage/coinpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_content_exchange_exchange_component__ = __webpack_require__("./src/app/main/content/exchange/exchange.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_content_portfolio_portfolio_component__ = __webpack_require__("./src/app/main/content/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_adminlogin_adminlogin_component__ = __webpack_require__("./src/app/adminlogin/adminlogin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'adminlogin', component: __WEBPACK_IMPORTED_MODULE_9__app_adminlogin_adminlogin_component__["a" /* AdminloginComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__app_adminlogin_adminlogin_component__["a" /* AdminloginComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__main_main_component__["a" /* MainComponent */],
        children: [
            { path: '', redirectTo: 'coinlist', pathMatch: 'full' },
            { path: 'coinlist', component: __WEBPACK_IMPORTED_MODULE_5__main_content_coinlist_coinlist_component__["a" /* CoinlistComponent */] },
            { path: 'coinlist/:ud', component: __WEBPACK_IMPORTED_MODULE_5__main_content_coinlist_coinlist_component__["a" /* CoinlistComponent */], data: [{ isProd: true }] },
            { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__main_signup_signup_component__["a" /* SignupComponent */] },
            { path: 'coinpage/:id', component: __WEBPACK_IMPORTED_MODULE_6__main_content_coinpage_coinpage_component__["a" /* CoinpageComponent */] },
            { path: 'exchange', component: __WEBPACK_IMPORTED_MODULE_7__main_content_exchange_exchange_component__["a" /* ExchangeComponent */] },
            { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_8__main_content_portfolio_portfolio_component__["a" /* PortfolioComponent */] }
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"makeInactive\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comp_data_sharing_service__ = __webpack_require__("./src/app/comp-data-sharing.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { GoogleService, GoogleObj } from './google.services';
var AppComponent = /** @class */ (function () {
    function AppComponent(shareData) {
        this.shareData = shareData;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        sessionStorage.removeItem('favouriteCoins');
        // this.setup();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__comp_data_sharing_service__["a" /* CompDataSharingService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__ = __webpack_require__("./node_modules/angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_order_pipe__ = __webpack_require__("./node_modules/ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_nouislider__ = __webpack_require__("./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ion_range_slider__ = __webpack_require__("./node_modules/ng2-ion-range-slider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ion_range_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_ion_range_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__comp_data_sharing_service__ = __webpack_require__("./src/app/comp-data-sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_header_header_component__ = __webpack_require__("./src/app/main/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_theme_header_theme_header_component__ = __webpack_require__("./src/app/main/theme-header/theme-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__main_advertisement_advertisement_component__ = __webpack_require__("./src/app/main/advertisement/advertisement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_content_coinlist_coinlist_component__ = __webpack_require__("./src/app/main/content/coinlist/coinlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__main_content_portfolio_portfolio_component__ = __webpack_require__("./src/app/main/content/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__main_content_exchange_exchange_component__ = __webpack_require__("./src/app/main/content/exchange/exchange.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__main_content_coinpage_coinpage_component__ = __webpack_require__("./src/app/main/content/coinpage/coinpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__main_signup_signup_component__ = __webpack_require__("./src/app/main/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__main_content_content_component__ = __webpack_require__("./src/app/main/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__main_footer_nav_footer_nav_component__ = __webpack_require__("./src/app/main/footer-nav/footer-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__amcharts_amcharts3_angular__ = __webpack_require__("./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_accordion__ = __webpack_require__("./node_modules/ng2-accordion/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ng2_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_order_pipe__ = __webpack_require__("./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_search_filter__ = __webpack_require__("./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__main_tv_chart_container_tv_chart_container_component__ = __webpack_require__("./src/app/main/tv-chart-container/tv-chart-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng4_social_login__ = __webpack_require__("./node_modules/ng4-social-login/ng4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_ng4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__common_service_service__ = __webpack_require__("./src/app/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__app_directives_emailvalidation_directive__ = __webpack_require__("./src/app/directives/emailvalidation.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__app_directives_onlyalphabets_directive__ = __webpack_require__("./src/app/directives/onlyalphabets.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__adminlogin_adminlogin_component__ = __webpack_require__("./src/app/adminlogin/adminlogin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































function getAuthServiceConfigs() {
    var CONFIG = new __WEBPACK_IMPORTED_MODULE_29_ng4_social_login__["AuthServiceConfig"]([
        {
            id: __WEBPACK_IMPORTED_MODULE_29_ng4_social_login__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_29_ng4_social_login__["GoogleLoginProvider"]('159813331128-dp0r136uk0f866u09g5o4cl95pn999lp.apps.googleusercontent.com')
        },
        {
            id: __WEBPACK_IMPORTED_MODULE_29_ng4_social_login__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_29_ng4_social_login__["FacebookLoginProvider"]('340367406489469')
        },
        {
            id: __WEBPACK_IMPORTED_MODULE_29_ng4_social_login__["LinkedinLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_29_ng4_social_login__["LinkedinLoginProvider"]('81cfwlcwom5acc')
        }
    ], true);
    return CONFIG;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_12__main_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__main_theme_header_theme_header_component__["a" /* ThemeHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__main_advertisement_advertisement_component__["a" /* AdvertisementComponent */],
                __WEBPACK_IMPORTED_MODULE_15__main_content_coinlist_coinlist_component__["a" /* CoinlistComponent */],
                __WEBPACK_IMPORTED_MODULE_16__main_content_portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_17__main_content_exchange_exchange_component__["a" /* ExchangeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__main_content_coinpage_coinpage_component__["a" /* CoinpageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__main_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_21__main_content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_28__main_tv_chart_container_tv_chart_container_component__["a" /* TvChartContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_23__main_footer_nav_footer_nav_component__["a" /* FooterNavComponent */],
                __WEBPACK_IMPORTED_MODULE_32__app_directives_emailvalidation_directive__["a" /* EmailvalidationDirective */],
                __WEBPACK_IMPORTED_MODULE_33__app_directives_onlyalphabets_directive__["a" /* OnlyalphabetsDirective */],
                __WEBPACK_IMPORTED_MODULE_35__adminlogin_adminlogin_component__["a" /* AdminloginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_34_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7_ng2_nouislider__["NouisliderModule"],
                __WEBPACK_IMPORTED_MODULE_27_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_22__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_26_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_29_ng4_social_login__["SocialLoginModule"],
                __WEBPACK_IMPORTED_MODULE_25_ng2_accordion__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_3_ng2_order_pipe__["Ng2OrderModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24__amcharts_amcharts3_angular__["a" /* AmChartsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_ion_range_slider__["IonRangeSliderModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot(),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__comp_data_sharing_service__["a" /* CompDataSharingService */], {
                    provide: __WEBPACK_IMPORTED_MODULE_29_ng4_social_login__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                },
                __WEBPACK_IMPORTED_MODULE_30__common_service_service__["a" /* CommonServiceService */],
                __WEBPACK_IMPORTED_MODULE_31_ngx_cookie_service__["a" /* CookieService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comp_data_sharing_service__ = __webpack_require__("./src/app/comp-data-sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommonServiceService = /** @class */ (function () {
    function CommonServiceService(cookieService, http, router, shareData) {
        this.cookieService = cookieService;
        this.http = http;
        this.router = router;
        this.shareData = shareData;
    }
    CommonServiceService.prototype.userRegistration = function (userReg) {
        var _this = this;
        if (Object.keys(userReg).length < 4) {
            return true;
        }
        else {
            userReg.loginType = 'Manual';
            this.http.post('http://54.165.36.80:5687/user/register', userReg).subscribe(function (data) {
                localStorage.setItem('userToken', data['access_token']);
                localStorage.setItem('userName', data['userName']);
                if (sessionStorage.getItem('favouriteCoins')) {
                    var favcoin = JSON.parse(sessionStorage.getItem('favouriteCoins'));
                    if (favcoin.length > 0) {
                        var tokenV = localStorage.getItem('userToken');
                        _this.http.put('http://54.165.36.80:5687/api/userSetting/update', { favourites: favcoin, token: tokenV }).
                            subscribe(function (data) {
                            console.log(data);
                        });
                    }
                }
                if (_this.router.url == '/login') {
                    _this.router.navigate(['coinlist/', data]);
                }
                else {
                    _this.shareData.userProfile_filter();
                    _this.shareData.portfolio_Data_filter();
                    _this.shareData.trigger_successMessagePopUp_filter('You have successfully Registered');
                }
                _this.shareData.isLoggedIn_filter(data);
            }, function (err) {
                if (typeof err.error == 'string') {
                    _this.shareData.trigger_errorMessagePopUp_filter(err.error);
                }
                else if (typeof err.error == 'object') {
                    _this.shareData.trigger_errorMessagePopUp_filter(err.error.message);
                }
            });
            return false;
        }
    };
    CommonServiceService.prototype.userLogin = function (userLogin) {
        var _this = this;
        if (Object.keys(userLogin).length < 2) {
            return true;
        }
        else {
            this.http.post('http://54.165.36.80:5687/user/login', userLogin).subscribe(function (data) {
                localStorage.setItem('userToken', data['access_token']);
                localStorage.setItem('userName', data['userName']);
                var lang = "/en/" + data['siteLanguage'];
                lang = lang.replace(/%/g, "");
                _this.cookieService.set('googtrans', lang);
                if (sessionStorage.getItem('favouriteCoins')) {
                    var favcoin = JSON.parse(sessionStorage.getItem('favouriteCoins'));
                    if (favcoin.length > 0) {
                        var tokenV = localStorage.getItem('userToken');
                        _this.http.put('http://54.165.36.80:5687/api/userSetting/update', { favourites: favcoin, token: tokenV }).
                            subscribe(function (data) {
                            console.log(data);
                        });
                    }
                }
                if (_this.router.url == '/login') {
                    _this.router.navigate(['coinlist/', data]);
                }
                else {
                    _this.shareData.portfolio_Data_filter();
                    _this.shareData.userProfile_filter();
                    _this.shareData.trigger_successMessagePopUp_filter('Welcome ' + data['userName']);
                }
                _this.shareData.isLoggedIn_filter(data);
            }, function (err) {
                if (typeof err.error == 'string') {
                    _this.shareData.trigger_errorMessagePopUp_filter(err.error);
                }
                else if (typeof err.error == 'object') {
                    _this.shareData.trigger_errorMessagePopUp_filter(err.error.message);
                }
            });
            return false;
        }
    };
    CommonServiceService.prototype.sociallogInAction = function (userData) {
        var _this = this;
        var userReg = {};
        userReg['loginId'] = userData.id;
        userReg['loginType'] = userData.provider;
        userReg['userName'] = userData.name;
        this.http.post('http://54.165.36.80:5687/user/socialLogin', userReg).subscribe(function (data) {
            localStorage.setItem('userToken', data['access_token']);
            localStorage.setItem('userName', data['userName']);
            var lang = "/en/" + data['siteLanguage'];
            _this.cookieService.set('googtrans', lang);
            if (sessionStorage.getItem('favouriteCoins')) {
                var favcoin = JSON.parse(sessionStorage.getItem('favouriteCoins'));
                if (favcoin.length > 0) {
                    var tokenV = localStorage.getItem('userToken');
                    _this.http.put('http://54.165.36.80:5687/api/userSetting/update', { favourites: favcoin, token: tokenV }).
                        subscribe(function (data) {
                        console.log(data);
                    });
                }
            }
            if (_this.router.url == '/login') {
                _this.router.navigate(['coinlist/', data]);
            }
            else {
                _this.shareData.trigger_successMessagePopUp_filter('Welcome ' + data['userName']);
                _this.shareData.userProfile_filter();
                _this.shareData.portfolio_Data_filter();
            }
            _this.shareData.isLoggedIn_filter(data);
        }, function (err) {
            _this.shareData.trigger_errorMessagePopUp_filter(err.error);
        });
    };
    CommonServiceService.prototype.checkEmpty = function (formIdc) {
        var i;
        var elem;
        var status = false;
        var formId = document.getElementById(formIdc);
        elem = formId.getElementsByClassName('required');
        for (i = 0; i < elem.length; i++) {
            if (!elem[i].classList.contains('error')) {
                if (elem[i].value == "") {
                    elem[i].classList.add('error');
                    status = true;
                }
            }
            else if (elem[i].value == "") {
                status = true;
            }
            else {
                elem[i].classList.remove('error');
            }
        }
        return status;
    };
    CommonServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__comp_data_sharing_service__["a" /* CompDataSharingService */]])
    ], CommonServiceService);
    return CommonServiceService;
}());



/***/ }),

/***/ "./src/app/comp-data-sharing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompDataSharingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompDataSharingService = /** @class */ (function () {
    function CompDataSharingService() {
        this.refresh = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.searchData = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.customizeCol = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.isLoggedInSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.makeLogOut = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.currencyVal = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.makeDefaultTheme = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.getAllCoinsLogOut = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.getAloonFavCoins = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.trigger_login = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.trigger_successMes = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.trigger_errorMes = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.trigger_social_login = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.userProfile = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.userTheme = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.portFolio = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.portFolio_clear = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.clear_interval = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.amchart_theme = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.advFilter = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.resetadvFilter = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.exchange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.changeGraphTheme = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]("default message");
        this.currentMessage = this.changeGraphTheme.asObservable();
    }
    /* Refresh Rate  */
    CompDataSharingService.prototype.refreshRateListen = function () {
        return this.refresh.asObservable();
    };
    CompDataSharingService.prototype.refreshRateFilter = function (filterBy) {
        this.refresh.next(filterBy);
    };
    /* Global Search */
    CompDataSharingService.prototype.searchCoinExchange = function () {
        return this.searchData.asObservable();
    };
    CompDataSharingService.prototype.searchDataFilter = function (text) {
        this.searchData.next(text);
    };
    /* Column Customization  */
    CompDataSharingService.prototype.customizeColumns_listener = function () {
        return this.customizeCol.asObservable();
    };
    CompDataSharingService.prototype.customizeColumns_filter = function (text) {
        this.customizeCol.next(text);
    };
    /*Is logged In */
    CompDataSharingService.prototype.isLoggedIn_listener = function () {
        return this.isLoggedInSub.asObservable();
    };
    CompDataSharingService.prototype.isLoggedIn_filter = function (data) {
        this.isLoggedInSub.next(data);
    };
    /*Social Log out */
    CompDataSharingService.prototype.callLogOut_listener = function () {
        return this.makeLogOut.asObservable();
    };
    CompDataSharingService.prototype.callLogOut_filter = function () {
        this.makeLogOut.next();
    };
    /*Currency Converter*/
    CompDataSharingService.prototype.currencyConverter_listener = function () {
        return this.currencyVal.asObservable();
    };
    CompDataSharingService.prototype.currencyConverter_filter = function (currencyRate) {
        this.currencyVal.next(currencyRate);
    };
    /*Make Default Theme */
    CompDataSharingService.prototype.changeTo_default_theme_listener = function () {
        return this.makeDefaultTheme.asObservable();
    };
    CompDataSharingService.prototype.changeTo_default_theme_filter = function () {
        this.makeDefaultTheme.next();
    };
    /*Get Default Data*/
    CompDataSharingService.prototype.get_all_coins_listener = function () {
        return this.getAllCoinsLogOut.asObservable();
    };
    CompDataSharingService.prototype.get_all_coins_filter = function () {
        this.getAllCoinsLogOut.next();
    };
    CompDataSharingService.prototype.get_favAndNormal_coins_listener = function () {
        return this.getAloonFavCoins.asObservable();
    };
    CompDataSharingService.prototype.get_favAndNormal_coins_filter = function () {
        this.getAloonFavCoins.next();
    };
    CompDataSharingService.prototype.trigger_loginPopUp_listener = function () {
        return this.trigger_login.asObservable();
    };
    CompDataSharingService.prototype.trigger_loginPopUp_filter = function () {
        this.trigger_login.next();
    };
    CompDataSharingService.prototype.trigger_successMessagePopUp_listener = function () {
        return this.trigger_successMes.asObservable();
    };
    CompDataSharingService.prototype.trigger_successMessagePopUp_filter = function (msg) {
        this.trigger_successMes.next(msg);
    };
    CompDataSharingService.prototype.trigger_errorMessagePopUp_listener = function () {
        return this.trigger_errorMes.asObservable();
    };
    CompDataSharingService.prototype.trigger_errorMessagePopUp_filter = function (msg) {
        this.trigger_errorMes.next(msg);
    };
    CompDataSharingService.prototype.trigger_signUpwithSocial_listener = function () {
        return this.trigger_social_login.asObservable();
    };
    CompDataSharingService.prototype.trigger_signUpwithSocial_filter = function (type) {
        this.trigger_social_login.next(type);
    };
    CompDataSharingService.prototype.userProfile_listener = function () {
        return this.userProfile.asObservable();
    };
    CompDataSharingService.prototype.userProfile_filter = function () {
        this.userProfile.next();
    };
    CompDataSharingService.prototype.user_theme_listener = function () {
        return this.userTheme.asObservable();
    };
    CompDataSharingService.prototype.user_theme_filter = function (theme) {
        this.userTheme.next(theme);
    };
    CompDataSharingService.prototype.portfolio_Data_listener = function () {
        return this.portFolio.asObservable();
    };
    CompDataSharingService.prototype.portfolio_Data_filter = function () {
        this.portFolio.next();
    };
    CompDataSharingService.prototype.exchange_data_listener = function () {
        return this.exchange.asObservable();
    };
    CompDataSharingService.prototype.exchange_data_filter = function () {
        this.exchange.next();
    };
    CompDataSharingService.prototype.clear_portfolio_Data_listener = function () {
        return this.portFolio_clear.asObservable();
    };
    CompDataSharingService.prototype.clear_portfolio_Data_filter = function () {
        this.portFolio_clear.next();
    };
    CompDataSharingService.prototype.clear_interval_filter = function () {
        this.clear_interval.next();
    };
    CompDataSharingService.prototype.clear_interval_listener = function () {
        return this.clear_interval.asObservable();
    };
    CompDataSharingService.prototype.chnageTheme_of_amchart_filter = function (theme) {
        this.amchart_theme.next(theme);
    };
    CompDataSharingService.prototype.chnageTheme_of_amchart_listener = function () {
        return this.amchart_theme.asObservable();
    };
    CompDataSharingService.prototype.advancedFilter_filter = function (theme) {
        this.advFilter.next(theme);
    };
    CompDataSharingService.prototype.advancedFilter_listener = function () {
        return this.advFilter.asObservable();
    };
    CompDataSharingService.prototype.reset_advancedFilter_filter = function () {
        this.resetadvFilter.next();
    };
    CompDataSharingService.prototype.reset_advancedFilter_listener = function () {
        return this.resetadvFilter.asObservable();
    };
    CompDataSharingService.prototype.changeMessage = function (message) {
        this.changeGraphTheme.next(message);
    };
    CompDataSharingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CompDataSharingService);
    return CompDataSharingService;
}());



/***/ }),

/***/ "./src/app/directives/emailvalidation.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailvalidationDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailvalidationDirective = /** @class */ (function () {
    function EmailvalidationDirective() {
    }
    EmailvalidationDirective.prototype.validateEmail = function (event) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var email = event.target.value;
        if (reg.test(email) == false) {
            if (!event.target.classList.contains("error")) {
                event.target.classList.add("error");
                event.target.parentNode.insertAdjacentHTML('beforeend', '<div class="error_mes">Not a valid Email!</div>');
            }
        }
        else if (event.target.classList.contains("error")) {
            event.target.classList.remove("error");
            var childNo = event.target.parentNode.childNodes.length - 1;
            event.target.parentNode.childNodes[childNo].remove();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], EmailvalidationDirective.prototype, "validateEmail", null);
    EmailvalidationDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appEmailvalidation]'
        }),
        __metadata("design:paramtypes", [])
    ], EmailvalidationDirective);
    return EmailvalidationDirective;
}());



/***/ }),

/***/ "./src/app/directives/onlyalphabets.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlyalphabetsDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnlyalphabetsDirective = /** @class */ (function () {
    function OnlyalphabetsDirective() {
    }
    OnlyalphabetsDirective.prototype.onlyAlphabets = function (event) {
        var key = event.keyCode;
        if ((key >= 65 && key <= 90) || key == 8 || key == 32 || key == 9) {
            return true;
        }
        else {
            return false;
        }
    };
    OnlyalphabetsDirective.prototype.notNull = function (event) {
        var val = event.target.value;
        if (val == "") {
            console.log(event.target.classList.contains('error'));
            if (!event.target.classList.contains('error')) {
                event.target.classList.add("error");
                event.target.parentNode.insertAdjacentHTML('beforeend', '<div class="error_mes">Name is mandatory!</div>');
            }
        }
        else if (event.target.classList.contains('error')) {
            event.target.classList.remove("error");
            event.target.parentNode.childNodes[event.target.parentNode.childNodes.length - 1].remove();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OnlyalphabetsDirective.prototype, "onlyAlphabets", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OnlyalphabetsDirective.prototype, "notNull", null);
    OnlyalphabetsDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appOnlyalphabets]'
        }),
        __metadata("design:paramtypes", [])
    ], OnlyalphabetsDirective);
    return OnlyalphabetsDirective;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login-frm-main .container {  padding: 0px;}\r\n.sign_login {  display: -webkit-box;  display: -ms-flexbox;  display: flex;  padding:30px 20px 20px 20px;}\r\n.sign_login_tab { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row;}\r\n.sign_login_left { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; background: #1a1a1a; }\r\n.sign_login_left .email_mg img { width: 100%;  max-width: 300px;}\r\n.sign_login_left ul li img{ width:100%; max-width: 270px;}\r\n.sign_login_left ul li {  padding-bottom: 10px;}\r\n.log_pg ul, .log_pg a {  -ms-flex-item-align: center;  -ms-grid-row-align: center;  align-self: center;}\r\n.log_pg { display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%;   -webkit-box-orient: vertical;   -webkit-box-direction: normal;   -ms-flex-direction: column;   flex-direction: column; -ms-flex-item-align: center; align-self: center;\r\ntext-align: center; padding-bottom: 15px;}\r\n.log_pg h3{font-size: 18px;}\r\n.log_pg h3 a{color:#6bfffe;}\r\n.sign_login_right {margin-top:30px;}\r\n.sign_login_right h2 {color:#6bfffe;}\r\n.log_pg span { -ms-flex-item-align: center; -ms-grid-row-align: center; align-self: center; padding: 12px; font-family: 'ProximaNova-Bold';  font-size: 21px;}\r\n.login_logo .logo span { font-size: 25px;  line-height: 86px; color: #6bfffe;font-family: ProximaNova-Bold;   text-transform: uppercase;\r\n}\r\n.login_logo {  display: -webkit-box;  display: -ms-flexbox;  display: flex;  -webkit-box-pack: center;  -ms-flex-pack: center;  justify-content: center;border-bottom:5px solid #fff;  padding: 20px;\r\n  width: 100%;}\r\n.sign_title {  display: -webkit-box;  display: -ms-flexbox;  display: flex;  -webkit-box-pack: center;  -ms-flex-pack: center;  justify-content: center;border-bottom:5px solid #fff;\r\n    width: 100%; padding: 20px;}\r\n.sign_title a { color: #6bfffe; }\r\n.sign_title h2{ margin-bottom: 0px !important;}\r\n.sign_login_right h2 { font-size: 25px;  padding-bottom: 17px; text-align: center; width: 80%;}\r\n.sign_login_right ul {margin-left:3%;margin-bottom: 20px;}\r\n.sign_login_right ul li { font-size: 25px; list-style-type: circle; color: #6bfffe;line-height: 33px;\r\n  text-transform: uppercase;\r\n  width: 80%;}\r\n.sign_login_right ul li p { font-size: 16px;  margin-bottom: 0px !important; color: #fff;}\r\n.sign_login_tab {margin-bottom: 20px;}\r\n.sign_login_tab li { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -ms-flex: 1; flex: 1;  background: #eae9e9; border: 1px solid #eae9e9;\r\n -webkit-box-pack: center;\r\n     -ms-flex-pack: center;\r\n         justify-content: center;  margin: 1px; line-height: 49px;   padding-bottom: 0px !important;\r\n  font-size: 22px;}\r\n.sign_login_tab li a{color: #333;}\r\n.sign_login_tab li.active {  background: #1a1a1a;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center; border: 1px solid #eae9e9;}\r\n.sign_login_tab li.active a{  color: #eae9e9;}\r\n.log_pg h3 {line-height: 28px;}\r\n@media only screen and (min-width:320px) and (max-width:979px)\r\n{\r\n    .sign_login{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;}\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"load_spinner\" *ngIf=\"showLoadSpinner\"><span class=\"fa fa-spinner fa-spin fa-2x\"></span></div>\r\n<div class=\"login-frm-main\">\r\n    <div class=\"container\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n            <div class=\"row\">\r\n                <div class=\"login_logo\">\r\n                    <a href=\"#\" class=\"logo notranslate\">\r\n                        <img src=\"/assets/images/logo.png\" alt=\"Coinwave\" />\r\n                        <span>Coin\r\n                            <b>wave</b>\r\n                        </span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"sign_title\">\r\n                    <h2>Sign Up A\r\n                        <a>100% FREE</a> Account & Save Your Site Settings</h2>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 sign_login\">\r\n            <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-5\">\r\n                <div class=\"sign_login_left\">\r\n                    \r\n                    <ul class=\"sign_login_tab\">\r\n                        <!-- <li class=\"active\"><a href=\"#\">Sign Up</a></li> -->\r\n                        <li>\r\n                            <a>Login</a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"log_pg\">\r\n                        <h3>Sign Up a\r\n                            <a>FREE</a> account & Save\r\n                            <br/> Your Site Preferences and Coins</h3>\r\n\r\n                        <a class=\"email_mg\" id=\"googleSignIn\" (click)=\"loginform.show()\">\r\n                            <a class=\"loginWithEmail\"><label class=\"fa fa-envelope\"></label><label>Login with Email</label></a>\r\n                        </a>\r\n                        <span>Or Sign With:</span>\r\n                        <ul>\r\n                            <li>\r\n                                <a (click)=\"signInWithFB()\" class=\"logInWithFacebook\"><label class=\"fa fa-facebook\"></label><label>Login with Facebook</label></a>\r\n                            </li>\r\n                            <li>\r\n                                <a (click)=\"signInWithGoogle()\" class=\"googlePlusLogin\">\r\n                                       <label class=\"fa fa-google-plus\"></label><label>Login with Gmail</label>\r\n                                   \r\n                                </a>\r\n                            </li>\r\n                            <!-- <li><a (click)=\"getHomeTimeline()\"><img src=\"/assets/images/login_twitter.png\" alt=\"Twitter\"/></a></li> -->\r\n                            <li>\r\n                               <a (click)=\"signInWithLinkedIN()\" class=\"linkedInLogin\"><label  class=\"fa fa-linkedin\"></label><label>Login with LinkedIn</label></a>\r\n                                    \r\n                               \r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-xs-12 col-sm-12 col-md-7 col-lg-7\">\r\n                <div class=\"sign_login_right\">\r\n                    <h2>Free Features:</h2>\r\n                    <ul>\r\n                        <li>\r\n                            <p>Add Coins To Your Portfolio</p>\r\n                        </li>\r\n                        <li>\r\n                            <p>Save & Edit The Frequency</li>\r\n                        <li>\r\n                            <p>Save Your Favorite Coins</li>\r\n                        <li>\r\n                            <p>SAVE YOUR CHART/GRAPH SETTINGS</p>\r\n                        </li>\r\n                        <li>\r\n                            <p>SAVE YOUR SITE COLOR/p></li>\r\n                        <li>\r\n                            <p>SAVE WHICH DATA POINTS ARE DISPLAYED</p>\r\n                        </li>\r\n                        <li>\r\n                            <p>Save Your Advanced Search Filters</p>\r\n                        </li>\r\n                        <li>\r\n                            <p>SAVE ALL CUSTOM SITE VIEW OPTIONS</p>\r\n                        </li>\r\n                        <li>\r\n                            <p>ALL SETTINGS WILL VERTICALLY INTEGRATE BETWEEN DESKTOP, TABLET, MOBILE, & iOS / ADROID (coming\r\n                                soon)</p>\r\n                        </li>\r\n                    </ul>\r\n                    <p>You can keep track of your favorite coins, pricing, and exchanges all from one central location</p>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--Modal: Login Form-->\r\n<div mdbModal #loginform=\"mdb-modal\" class=\" modal fade\" id=\"modalLogin\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: false}\">\r\n    <div class=\"modal-dialog cascading-modal\" role=\"document\">\r\n        <!--Content-->\r\n        <div class=\"modal-content\">\r\n\r\n            <!--Header-->\r\n            <div class=\"modal-header light-blue darken-3 white-text\">\r\n                <h4 class=\"title\">\r\n                    <i class=\"fa fa-user\"></i> Log in</h4>\r\n                <button type=\"button\" class=\"close waves-effect waves-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"loginform.hide()\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n            <!--Body-->\r\n            \r\n            <div class=\"modal-body\">\r\n                    <label style=\"color:red;\" *ngIf=\"errormessageLogin\">Please Enter all mandatory fields</label>\r\n                <form id=\"loginCredentials\">\r\n\r\n                \r\n                <div class=\"md-form form-sm\">\r\n                    <i class=\"fa fa-envelope prefix\"></i>\r\n                    <input type=\"text\" name=\"emailId\" [(ngModel)]=\"userLogin.emailId\" class=\"required form-control\" placeholder=\"Enter Email *\" appEmailvalidation>\r\n                    \r\n                </div>\r\n\r\n                <div class=\"md-form form-sm\">\r\n                    <i class=\"fa fa-lock prefix\"></i>\r\n                    <input type=\"password\" name=\"password\" [(ngModel)]=\"userLogin.password\" class=\"required form-control\" placeholder=\"Enter password *\" >\r\n                </div>\r\n\r\n                <div class=\"text-center mt-2\">\r\n                    \r\n                    <button class=\"btn btn-info waves-light\" (click)=\"loginWithMail(userLogin)\" mdbWavesEffect>Log in\r\n                        <i class=\"fa fa-sign-in ml-1\"></i>\r\n                    </button>\r\n                </div>\r\n                </form>\r\n            </div>\r\n            <!--Footer-->\r\n            <div class=\"modal-footer\">\r\n                <div class=\"options text-center text-md-right mt-1\">\r\n                    <p>Not a member?\r\n                        <a (click)=\"loginform.hide();registerform.show()\">Sign Up</a>\r\n                    </p>\r\n                </div>\r\n               \r\n            </div>\r\n        </div>\r\n        <!--/.Content-->\r\n    </div>\r\n</div>\r\n<!--Modal: Login Form-->\r\n\r\n<!--Modal: Register Form-->\r\n<div mdbModal #registerform=\"mdb-modal\" class=\"modal fade\" id=\"modalRegister2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: false}\">\r\n    <div class=\"modal-dialog cascading-modal\" role=\"document\">\r\n        <!--Content-->\r\n        <div class=\"modal-content\">\r\n\r\n            <!--Header-->\r\n            <div class=\"modal-header light-blue darken-3 white-text\">\r\n                <h4 class=\"title\">\r\n                    <i class=\"fa fa-user-plus\"></i> Register</h4>\r\n                <button type=\"button\" class=\"close waves-effect waves-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"registerform.hide()\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n            <!--Body-->\r\n            <div class=\"modal-body\">\r\n               \r\n\r\n                \r\n                    <label style=\"color:red;\" *ngIf=\"errormessageSignUp\">Please Enter all mandatory fields</label>\r\n                <form id=\"signuPCredentials\">\r\n                     <div class=\"md-form form-sm\">\r\n                    <i class=\"fa fa-user prefix\"></i>\r\n                    <input type=\"text\" name=\"userName\" appOnlyalphabets [(ngModel)]=\"userReg.userName\" class=\"form-control required\" placeholder=\"User Name *\">\r\n                </div>\r\n                <div class=\"md-form form-sm\">\r\n                    <i class=\"fa fa-envelope prefix\"></i>\r\n                    <input type=\"text\" name=\"emailId\" appEmailvalidation [(ngModel)]=\"userReg.emailId\" class=\"form-control required\" placeholder=\"Enter Email *\">\r\n                </div>\r\n\r\n                <div class=\"md-form form-sm\">\r\n                    <i class=\"fa fa-lock prefix\"></i>\r\n                    <input type=\"password\" name=\"password\" [(ngModel)]=\"userReg.password\" (blur)=\"confirmPassword()\"class=\"form-control required\" placeholder=\"Enter Password *\">\r\n                    \r\n                </div>\r\n\r\n                <div class=\"md-form form-sm\">\r\n                    <i class=\"fa fa-lock prefix\"></i>\r\n                    <input type=\"password\" name=\"confirmPassword\" [(ngModel)]=\"userReg.confrmPswrd\" (blur)=\"confirmPassword()\"  class=\"form-control required\" placeholder=\"Confirm Password *\">\r\n                    \r\n                </div>\r\n\r\n                <div class=\"text-center mt-2\">\r\n                    <button class=\"btn btn-info waves-light\" (click)=\"signUpWithMail(userReg)\" mdbWavesEffect>Sign up\r\n                        <i class=\"fa fa-sign-in ml-1\"></i>\r\n                    </button>\r\n                </div>\r\n            </form>\r\n            </div>\r\n            <!--Footer-->\r\n            <div class=\"modal-footer\">\r\n                <div class=\"options text-center text-md-right mt-1\">\r\n                    <p>Already have an account?\r\n                        <a (click)=\"registerform.hide();loginform.show()\">Log In</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--/.Content-->\r\n    </div>\r\n</div>\r\n<!--Modal: Register Form-->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_social_login__ = __webpack_require__("./node_modules/ng4-social-login/ng4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comp_data_sharing_service__ = __webpack_require__("./src/app/comp-data-sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_service_service__ = __webpack_require__("./src/app/common-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(commonService, authService, http, router, changeGraphTheme) {
        var _this = this;
        this.commonService = commonService;
        this.authService = authService;
        this.http = http;
        this.router = router;
        this.changeGraphTheme = changeGraphTheme;
        this.userReg = {};
        this.userLogin = {};
        this.changeGraphTheme.callLogOut_listener().subscribe(function () {
            _this.signOut();
        });
        this.changeGraphTheme.trigger_signUpwithSocial_listener().subscribe(function (message) {
            if (message == 'facebook') {
                _this.signInWithFB();
            }
            else if (message == 'linkedin') {
                _this.signInWithLinkedIN();
            }
            else if (message == 'google') {
                _this.signInWithGoogle();
            }
        });
    }
    LoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_4_ng4_social_login__["GoogleLoginProvider"].PROVIDER_ID).then(function (userData) {
            _this.commonService.sociallogInAction(userData);
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.signInWithFB = function () {
        var _this = this;
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_4_ng4_social_login__["FacebookLoginProvider"].PROVIDER_ID).then(function (userData) {
            _this.commonService.sociallogInAction(userData);
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.signInWithLinkedIN = function () {
        var _this = this;
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_4_ng4_social_login__["LinkedinLoginProvider"].PROVIDER_ID).then(function (userData) {
            _this.commonService.sociallogInAction(userData);
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = (user != null);
        });
    };
    LoginComponent.prototype.confirmPassword = function () { };
    LoginComponent.prototype.signUpWithMail = function (userReg) {
        var status = this.commonService.checkEmpty('signuPCredentials');
        if (!status) {
            this.commonService.userRegistration(userReg);
        }
        else {
            this.errormessageSignUp = true;
        }
    };
    LoginComponent.prototype.loginWithMail = function (userLogin) {
        if (userLogin.emailId == 'admin@gmail.com' && userLogin.password == 'admin123') {
            this.router.navigate(['coinlist']);
            return;
        }
        var status = this.commonService.checkEmpty('loginCredentials');
        if (!status) {
            this.commonService.userLogin(userLogin);
        }
        else {
            this.errormessageLogin = true;
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__common_service_service__["a" /* CommonServiceService */], __WEBPACK_IMPORTED_MODULE_4_ng4_social_login__["AuthService"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__comp_data_sharing_service__["a" /* CompDataSharingService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/advertisement/advertisement.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/advertisement/advertisement.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"advertisment_add\">\r\n  <ul>\r\n    <li>\r\n      <a href=\"#\">\r\n        <img src=\"/assets/images/advisement_1.png\" />\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#\">\r\n        <img src=\"/assets/images/advisement_2.png\" />\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/main/advertisement/advertisement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertisementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdvertisementComponent = /** @class */ (function () {
    function AdvertisementComponent() {
    }
    AdvertisementComponent.prototype.ngOnInit = function () {
    };
    AdvertisementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-advertisement',
            template: __webpack_require__("./src/app/main/advertisement/advertisement.component.html"),
            styles: [__webpack_require__("./src/app/main/advertisement/advertisement.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvertisementComponent);
    return AdvertisementComponent;
}());



/***/ }),

/***/ "./src/app/main/content/coinlist/coinlist.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/coinlist/coinlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sort_content_section\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"sort_with_table\">\r\n\r\n      <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2 coin_list_lft\">\r\n        <div class=\"row \">\r\n          <div class=\"sort_by sort_by_block\">\r\n            <h1 class=\"sort_by_head\">Sort By\r\n              <i class=\"fa fa-chevron-down sort_by_icon\" aria-hidden=\"true\"></i>\r\n              <!--<img src=\"/assets/images/sort_arw.png\" class=\"sort_by_icon\"/>-->\r\n            </h1>\r\n            <ul>\r\n              <li (click)=\"sortTable('name')\">\r\n                <a>Coins</a>\r\n              </li>\r\n              <li (click)=\"sortTable('price')\">\r\n                <a>Price</a>\r\n              </li>\r\n              <li (click)=\"sortTable('dayPrice')\">\r\n                <a>24 Hr (%) </a>\r\n              </li>\r\n              <li (click)=\"sortTable('weeklyChange')\">\r\n                <a>7 Day (%) </a>\r\n              </li>\r\n              <li (click)=\"sortTable('dayVolume')\">\r\n                <a>Volume (24H) </a>\r\n              </li>\r\n\r\n              <li (click)=\"sortTable('marketCapValue')\">\r\n                <a>Market Cap </a>\r\n              </li>\r\n              <li (click)=\"sortTable('highestPrice')\">\r\n                <a>24 Hr High/Low </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          \r\n          <div class=\"sort_by\">\r\n            <h1 class=\"sort_by_head\">\r\n              <i class=\"fa fa-filter advance_filter float-left\" aria-hidden=\"true\"></i>\r\n              Advance\r\n              <span>Search Filters</span>\r\n             \r\n              <i class=\"fa float-right undosymbol mobileViewAdvFltr\" [ngClass]=\"{'fa-chevron-up' :  hideInMobileView == true , 'fa-chevron-down' : hideInMobileView == false }\" (click)=\"hideInMobileView = !hideInMobileView\"></i>\r\n              <i class=\"fa fa-undo float-right undosymbol\" (click)=\"resetAdvFilter()\"></i>\r\n            </h1>\r\n           \r\n            <accordion id=\"advancedSearchFilter\" [closeOthers]=\"false\" [hidden]=\"!hideInMobileView\">\r\n              <accordion-group heading=\"PRICE\" [isOpened]=\"true\" >\r\n                  <div (click)=\"refreshRateChange()\" id=\"priceNoUiSlider\">\r\n                      <nouislider #priceSliderRef [config]=\"someRange2config\" [tooltips]=\"[true, true]\" [(ngModel)]=\"someRange\" (ngModelChange)=\"priceFilter(someRange)\"></nouislider>\r\n                  </div>\r\n                <!-- <ion-range-slider #priceVal type=\"double\" [min]=\"0\" [max]=\"maxPrice\" from_min=\"0\" [from_max]=\"maxPrice\" from_shadow=\"false\"\r\n                  [to]=\"maxPrice\" to_min=\"0\" [to_max]=\"maxPrice\" to_shadow=\"true\" grid=\"true\" [postfix]=\"parameterPrice\" decorate_both=\"false\"\r\n                  (onChange)=\"priceFilter($event)\"></ion-range-slider> -->\r\n              </accordion-group>\r\n              <accordion-group heading=\"24 HR (%)\" [isOpened]=\"false\">\r\n                <ion-range-slider #dayChange type=\"double\" min=\"-100\" max=\"100\" from_shadow=\"false\" to_shadow=\"true\" grid=\"true\" grid_num=\"4\"\r\n                  postfix=\"%\" decorate_both=\"false\" (onChange)=\"dayfilter($event)\"></ion-range-slider>\r\n              </accordion-group>\r\n              <accordion-group heading=\"7 DAY (%)\" [isOpened]=\"false\">\r\n                <ion-range-slider #weeklyChange type=\"double\" [min]=\"-100\" max=\"100\" to_shadow=\"true\" grid=\"true\" grid_num=\"4\" postfix=\"%\"\r\n                  decorate_both=\"false\" (onChange)=\"weeklyFilter($event)\"></ion-range-slider>\r\n              </accordion-group>\r\n              <accordion-group heading=\"VOLUME (24H)\" [isOpened]=\"true\">\r\n                  <div  id=\"volumeNoUiSlider\">\r\n                      <nouislider [config]=\"volumeConfig\" [tooltips]=\"[true, true]\" [(ngModel)]=\"volumeRange\" (ngModelChange)=\"dayVolumeFilter(volumeRange)\"></nouislider>\r\n                  </div>\r\n                <!-- <ion-range-slider #volume24H type=\"double\" [min]=\"0\" [max]=\"maxVolume\" from_min=\"0\" [from_max]=\"maxVolume\" from_shadow=\"false\"\r\n                [to]=\"maxVolume\" to_min=\"0\" [to_max]=\"maxVolume\" to_shadow=\"true\" grid=\"true\" [postfix]=\" parameterVol\" decorate_both=\"false\"\r\n                  (onChange)=\"dayVolumeFilter($event)\"></ion-range-slider> -->\r\n              </accordion-group>\r\n              <accordion-group heading=\"MARKET CAP\" [isOpened]=\"true\">\r\n                  <div  id=\"marketCapNoUiSlider\">\r\n                      <nouislider [config]=\"marketCapConfig\" [tooltips]=\"[true, true]\" [(ngModel)]=\"marketRange\" (ngModelChange)=\"marketCapFilter(marketRange)\"></nouislider>\r\n                  </div>\r\n                <!-- <ion-range-slider #marketCap type=\"double\" min=\"0\" [max]=\"marketCapVal\"  from_min=\"0\" [from_max]=\"marketCapVal\" from_shadow=\"false\" [to]=\"marketCapVal\"\r\n                  to_min=\"0\" [to_max]=\"marketCapVal\" to_shadow=\"true\" grid=\"true\" grid_num=\"4\" [postfix]=\" parameterMarkCap\" decorate_both=\"false\"\r\n                  (onChange)=\"marketCapFilter($event)\"></ion-range-slider> -->\r\n              </accordion-group>\r\n            </accordion>\r\n          </div>\r\n          <div class=\"w-100 mt-1\" *ngIf=\"hideInMobileView\">\r\n            <button class=\"pull-right advSearchBtn\" (click)=\"advancedSearchFilter()\">Search</button>\r\n          </div>\r\n          <app-advertisement class=\"sort_by_block\"></app-advertisement>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-12 col-xs-12 col-md-10 col-lg-10 rgt-coin-tab\">\r\n        <!-- <data-table-sort-expands></data-table-sort-expands> -->\r\n        <!-- <app-graph-section #component1></app-graph-section> -->\r\n        <app-tv-chart-container  #component1></app-tv-chart-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/coinlist/coinlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ion_range_slider__ = __webpack_require__("./node_modules/ng2-ion-range-slider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ion_range_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_ion_range_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comp_data_sharing_service__ = __webpack_require__("./src/app/comp-data-sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_service_service__ = __webpack_require__("./src/app/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_timers__ = __webpack_require__("./node_modules/timers-browserify/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_timers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_nouislider__ = __webpack_require__("./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_nouislider__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CoinlistComponent = /** @class */ (function () {
    function CoinlistComponent(commonService, changeGraphTheme, http, location, aroute) {
        var _this = this;
        this.commonService = commonService;
        this.changeGraphTheme = changeGraphTheme;
        this.http = http;
        this.location = location;
        this.aroute = aroute;
        this.changeGraphTheme.currencyConverter_listener().subscribe(function (value) {
            _this.currencyValue = parseFloat(value);
            _this.maxPrice = (_this.maxPrice * _this.currencyValue).toFixed(2) + 100;
        });
    }
    // special params:
    CoinlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.someRange = [0, 499];
        // this.marketRange= 0;
        this.someRange2config = {
            behaviour: 'drag',
            connect: true,
            start: [0, 499],
            keyboard: true,
            step: 0.1,
            pageSteps: 10,
            range: {
                'min': 0,
                '25%': 0.5,
                '50%': 1,
                '75%': 100,
                'max': 500,
            },
            pips: {
                mode: 'count',
                density: 2,
                values: 5,
                stepped: true
            }
        };
        this.volumeConfig = {
            behaviour: 'drag',
            connect: true,
            start: [0, 499],
            keyboard: true,
            step: 0.1,
            pageSteps: 10,
            range: {
                'min': 0,
                '25%': 1,
                '50%': 5,
                '75%': 100,
                'max': 500,
            },
            pips: {
                mode: 'count',
                density: 2,
                values: 5,
                stepped: true
            }
        };
        this.marketCapConfig = {
            behaviour: 'drag',
            connect: true,
            start: [0, 499],
            keyboard: true,
            step: 0.1,
            pageSteps: 10,
            range: {
                'min': 0,
                '25%': 25,
                '50%': 50,
                '75%': 100,
                'max': 500,
            },
            pips: {
                mode: 'count',
                density: 2,
                values: 5,
                stepped: true
            }
        };
        if (window.screen.width > 990) {
            this.hideInMobileView = true;
        }
        else {
            this.hideInMobileView = false;
        }
        this.currencyValue = 1;
        if (!(localStorage.getItem('userToken'))) {
            this.aroute.params.subscribe(function (params) {
                _this.userDetails = params;
            });
        }
        this.location.replaceState('/coinlist');
        this.advFilter = [];
        this.http.get('http://54.165.36.80:5687/exchange/getMax').map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.maxPrice = ((data[0].maxPrice + data[0].maxPrice * 20 / 100) * _this.currencyValue).toFixed(2);
            // this.maxPrice = this.makeNumber(this.maxPrice,'price');
            _this.maxVolume = ((data[0].maxVolume + data[0].maxVolume * 20 / 100) * _this.currencyValue).toFixed(2);
            _this.maxVolume = _this.makeNumber(_this.maxVolume, 'volume');
            _this.marketCapVal = ((data[0].marketCapValue + data[0].marketCapValue * 20 / 100) * _this.currencyValue).toFixed(2);
            // this.marketCapVal = this.makeNumber(this.marketCapVal,'marketCap');
        });
        Object(__WEBPACK_IMPORTED_MODULE_7_timers__["setTimeout"])(function () {
            var valueArray = ['0', '$.50', '$1', '$100', '>$500'];
            var elemen = document.getElementById('priceNoUiSlider');
            var arrayL = elemen.getElementsByClassName('noUi-value');
            for (var m = 0; m < valueArray.length; m++) {
                arrayL[m].textContent = valueArray[m];
            }
            var valueArray1 = ['0', '25M', '50M', '100M', '>500M'];
            var elemen1 = document.getElementById('marketCapNoUiSlider');
            var arrayL1 = elemen1.getElementsByClassName('noUi-value');
            for (var m = 0; m < valueArray1.length; m++) {
                arrayL1[m].textContent = valueArray1[m];
            }
            var valueArray2 = ['$0', '$1M', '$5M', '$100M', '>$500M'];
            var elemen2 = document.getElementById('volumeNoUiSlider');
            var arrayL2 = elemen2.getElementsByClassName('noUi-value');
            for (var m = 0; m < valueArray2.length; m++) {
                arrayL2[m].textContent = valueArray2[m];
            }
        }, 1000);
        // setTimeout(() => {
        // }, 1000)
    };
    CoinlistComponent.prototype.sortTable = function (key) {
        this.component1.sort(key);
    };
    CoinlistComponent.prototype.priceFilter = function (event) {
        var elemen = document.getElementById('priceNoUiSlider');
        var arrayL = elemen.getElementsByClassName('noUi-value');
        var getfilterdData = {};
        if (event[0] < 500 && event[1] < 500) {
            getfilterdData = {
                "price": {
                    "from": event[0],
                    "to": event[1]
                }
            };
            Object(__WEBPACK_IMPORTED_MODULE_7_timers__["setTimeout"])(function () {
                var elemen = document.getElementById('priceNoUiSlider');
                elemen.getElementsByClassName('noUi-tooltip')[0].innerHTML = '$' + event[0];
                elemen.getElementsByClassName('noUi-tooltip')[1].innerHTML = '$' + event[1];
            }, 200);
        }
        else {
            getfilterdData = {
                "price": {
                    "from": event[0]
                }
            };
            Object(__WEBPACK_IMPORTED_MODULE_7_timers__["setTimeout"])(function () {
                // this.priceSliderRef.slider.set([ 500,500 ]);
                var elemen = document.getElementById('priceNoUiSlider');
                elemen.getElementsByClassName('noUi-tooltip')[0].innerHTML = '$' + event[0];
                elemen.getElementsByClassName('noUi-tooltip')[1].innerHTML = '$500+';
            }, 200);
        }
        var toVal = parseFloat((event.to / this.currencyValue).toFixed(2));
        this.isThere = false;
        for (var i = 0; i < this.advFilter.length; i++) {
            if (this.advFilter[i].price) {
                this.isThere = true;
                this.advFilter.splice(i, 1);
                this.advFilter.push(getfilterdData);
            }
        }
        if (!this.isThere) {
            this.advFilter.push(getfilterdData);
        }
        // setTimeout(()=>{
        //   if(event[0] < 500 && event[1] < 500){
        //     debugger
        //      let elemen = document.getElementById('priceNoUiSlider');
        //      elemen.getElementsByClassName('noUi-tooltip')[0].innerHTML = '$'+event[0]
        //      elemen.getElementsByClassName('noUi-tooltip')[1].innerHTML = '$'+event[1]
        //   }
        //   else if(event[0] == 500 || event[1] == 500){
        //     let elemen = document.getElementById('priceNoUiSlider');
        //     let arrayL1 = elemen.getElementsByClassName('noUi-tooltip')[0].innerHTML = '$500+'
        //     elemen.getElementsByClassName('noUi-tooltip')[1].innerHTML = '$500+'
        //   }
        //   //  this.priceSliderRef.slider.set([1,100 ]);
        // },200)
    };
    CoinlistComponent.prototype.dayfilter = function (event) {
        var getfilterdData = {
            "dayPricePercent": {
                "from": event.from,
                "to": event.to
            }
        };
        this.isThere = false;
        for (var i = 0; i < this.advFilter.length; i++) {
            if (this.advFilter[i].dayPricePercent) {
                this.isThere = true;
                this.advFilter.splice(i, 1);
                this.advFilter.push(getfilterdData);
            }
        }
        if (!this.isThere) {
            this.advFilter.push(getfilterdData);
        }
    };
    CoinlistComponent.prototype.weeklyFilter = function (event) {
        var getfilterdData = {
            "weeklyChangePercent": {
                "from": event.from,
                "to": event.to
            }
        };
        this.isThere = false;
        for (var i = 0; i < this.advFilter.length; i++) {
            if (this.advFilter[i].weeklyChangePercent) {
                this.isThere = true;
                this.advFilter.splice(i, 1);
                this.advFilter.push(getfilterdData);
            }
        }
        if (!this.isThere) {
            this.advFilter.push(getfilterdData);
        }
    };
    CoinlistComponent.prototype.dayVolumeFilter = function (event) {
        var events = [];
        events[0] = event[0] * 1000000;
        events[1] = event[1] * 1000000;
        var getfilterdData = {};
        if (event[0] < 500 && event[1] < 500) {
            getfilterdData = {
                "dayVolume": {
                    "from": events[0],
                    "to": events[1]
                }
            };
            Object(__WEBPACK_IMPORTED_MODULE_7_timers__["setTimeout"])(function () {
                var elemen1 = document.getElementById('volumeNoUiSlider');
                elemen1.getElementsByClassName('noUi-tooltip')[0].innerHTML = '$' + event[0] + 'M';
                elemen1.getElementsByClassName('noUi-tooltip')[1].innerHTML = '$' + event[1] + 'M';
            }, 200);
        }
        else {
            getfilterdData = {
                "dayVolume": {
                    "from": events[0]
                }
            };
            Object(__WEBPACK_IMPORTED_MODULE_7_timers__["setTimeout"])(function () {
                var elemen1 = document.getElementById('volumeNoUiSlider');
                elemen1.getElementsByClassName('noUi-tooltip')[0].innerHTML = '$' + event[0] + ' M';
                elemen1.getElementsByClassName('noUi-tooltip')[1].innerHTML = '$500M+';
            }, 200);
        }
        // let getfilterdData = {
        //   "dayVolume": {
        //     "from": event.from,
        //     "to": event.to
        //   }
        // }
        this.isThere = false;
        for (var i = 0; i < this.advFilter.length; i++) {
            if (this.advFilter[i].dayVolume) {
                this.isThere = true;
                this.advFilter.splice(i, 1);
                this.advFilter.push(getfilterdData);
            }
        }
        if (!this.isThere) {
            this.advFilter.push(getfilterdData);
        }
    };
    CoinlistComponent.prototype.marketCapFilter = function (event) {
        var events = [];
        events[0] = event[0] * 1000000;
        events[1] = event[1] * 1000000;
        var getfilterdData = {};
        if (event[0] < 500 && event[1] < 500) {
            getfilterdData = {
                "marketCapValue": {
                    "from": events[0],
                    "to": events[1]
                }
            };
            Object(__WEBPACK_IMPORTED_MODULE_7_timers__["setTimeout"])(function () {
                var elemen1 = document.getElementById('marketCapNoUiSlider');
                elemen1.getElementsByClassName('noUi-tooltip')[0].innerHTML = event[0] + 'M';
                elemen1.getElementsByClassName('noUi-tooltip')[1].innerHTML = event[1] + 'M';
            }, 200);
        }
        else {
            getfilterdData = {
                "marketCapValue": {
                    "from": events[0]
                }
            };
            Object(__WEBPACK_IMPORTED_MODULE_7_timers__["setTimeout"])(function () {
                var elemen1 = document.getElementById('marketCapNoUiSlider');
                elemen1.getElementsByClassName('noUi-tooltip')[0].innerHTML = event[0] + 'M';
                elemen1.getElementsByClassName('noUi-tooltip')[1].innerHTML = 500 + 'M+';
            }, 200);
        }
        this.isThere = false;
        for (var i = 0; i < this.advFilter.length; i++) {
            if (this.advFilter[i].marketCapValue) {
                this.isThere = true;
                this.advFilter.splice(i, 1);
                this.advFilter.push(getfilterdData);
            }
        }
        if (!this.isThere) {
            // document.getElementsByClassName('noUi-tooltip')[0].innerHTML = this.changeRefreshRate;
            this.advFilter.push(getfilterdData);
        }
    };
    CoinlistComponent.prototype.resetAdvFilter = function () {
        if (this.advFilter.length > 0) {
            this.changeGraphTheme.reset_advancedFilter_filter();
            if (localStorage.getItem('userToken')) {
                this.component1.userWithFavCoins();
            }
            else {
                this.component1.userNormalData();
            }
            this.someRange = [0, 499];
            this.marketRange = [0, 499];
            this.volumeRange = [0, 499];
            // this.priceSliderRef.slider.set([0,499 ]);
            //this.priceVal.update({ from: 0, to: this.maxPrice });
            this.dayChange.update({ from: -100, to: 100 });
            this.weeklyChange.update({ from: -100, to: 100 });
            this.volume24H.update({ from: 0, to: this.maxVolume });
        }
    };
    CoinlistComponent.prototype.advancedSearchFilter = function () {
        if (this.advFilter.length > 0) {
            this.changeGraphTheme.advancedFilter_filter(this.advFilter);
        }
    };
    CoinlistComponent.prototype.makeNumber = function (labelValue, type) {
        if (Math.abs(Number(labelValue)) >= 1.0e+9) {
            if (type == 'price') {
                this.parameterPrice = 'M';
            }
            else if (type == 'volume') {
                this.parameterVol = 'M';
            }
            else if (type == 'marketCap') {
                this.parameterMarkCap = 'M';
            }
            return Math.abs(Number(labelValue)) / 1.0e+9;
        }
        else if (Math.abs(Number(labelValue)) >= 1.0e+6) {
            if (type == 'price') {
                this.parameterPrice = 'B';
            }
            else if (type == 'volume') {
                this.parameterVol = 'B';
            }
            else if (type == 'marketCap') {
                this.parameterMarkCap = 'B';
            }
            return Math.abs(Number(labelValue)) / 1.0e+6;
        }
        else if (Math.abs(Number(labelValue)) >= 1.0e+3) {
            if (type == 'price') {
                this.parameterPrice = 'K';
            }
            else if (type == 'volume') {
                this.parameterVol = 'K';
            }
            else if (type == 'marketCap') {
                this.parameterMarkCap = 'K';
            }
            return Math.abs(Number(labelValue)) / 1.0e+3;
        }
        else {
            return Math.abs(Number(labelValue)).toFixed(2);
        }
        // Nine Zeroes for Billions
    };
    CoinlistComponent.prototype.refreshRateChange = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("component1"),
        __metadata("design:type", Object)
    ], CoinlistComponent.prototype, "component1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('priceVal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng2_ion_range_slider__["IonRangeSliderComponent"])
    ], CoinlistComponent.prototype, "priceVal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dayChange'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng2_ion_range_slider__["IonRangeSliderComponent"])
    ], CoinlistComponent.prototype, "dayChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('weeklyChange'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng2_ion_range_slider__["IonRangeSliderComponent"])
    ], CoinlistComponent.prototype, "weeklyChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('volume24H'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng2_ion_range_slider__["IonRangeSliderComponent"])
    ], CoinlistComponent.prototype, "volume24H", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('marketCap'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng2_ion_range_slider__["IonRangeSliderComponent"])
    ], CoinlistComponent.prototype, "marketCap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('priceSliderRef'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ng2_nouislider__["NouisliderComponent"])
    ], CoinlistComponent.prototype, "priceSliderRef", void 0);
    CoinlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-coinlist',
            template: __webpack_require__("./src/app/main/content/coinlist/coinlist.component.html"),
            styles: [__webpack_require__("./src/app/main/content/coinlist/coinlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__common_service_service__["a" /* CommonServiceService */], __WEBPACK_IMPORTED_MODULE_5__comp_data_sharing_service__["a" /* CompDataSharingService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], CoinlistComponent);
    return CoinlistComponent;
}());



/***/ }),

/***/ "./src/app/main/content/coinpage/coinpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/coinpage/coinpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"load_spinner\" *ngIf=\"showLoadSpinner\"><span class=\"fa fa-spinner fa-spin fa-2x\"></span></div>\r\n\r\n<div class=\"sort_content_section coinpage\" id=\"showloop\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"coinpage-head col-sm-12 col-xs-12 col-md-12 col-lg-12\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n        <img src=\"{{imgSrc}}\" class=\"bitcoin_logo\" />\r\n\r\n        <ul class=\"add_lst\">\r\n          <li (click)=\"buyCoin()\">\r\n            <a>\r\n              <button class=\"buyCoinsBtn\">Buy {{coinName}} <span><img class=\"coinImage\" src=\"http://54.165.36.80:5687/upload/{{coinImage}}\" ></span></button>\r\n            </a>\r\n          </li>\r\n          <li (click)=\"addToPortfolio()\">\r\n            <a>\r\n              <img src=\"/assets/images/prtfolio.png\" />\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <div *ngIf=\"isOpened\" class=\"buyCoinList\">\r\n          <ul>\r\n            <li>\r\n              <a href=\"https://mail.google.com/mail/u/0/#inbox\" target=\"_blank\">Google</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://www.linkedin.com/\" target=\"_blank\">LInked In</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://mail.google.com/mail/u/0/#inbox\" target=\"_blank\">Google</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://www.linkedin.com/\" target=\"_blank\">LInked In</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://mail.google.com/mail/u/0/#inbox\" target=\"_blank\">Google</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://www.linkedin.com/\" target=\"_blank\">LInked In</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://mail.google.com/mail/u/0/#inbox\" target=\"_blank\">Google</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://www.linkedin.com/\" target=\"_blank\">LInked In</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://mail.google.com/mail/u/0/#inbox\" target=\"_blank\">Google</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://www.linkedin.com/\" target=\"_blank\">LInked In</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3 dollar\">\r\n        <label> USD:\r\n          <span class=\"red\"> $8,489.70 </span>\r\n        </label>\r\n      </div>\r\n\r\n      <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3 dollar\">\r\n        <label> BTC:\r\n          <span class=\"green\">1.0000001 </span>\r\n        </label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 coin-page-lft\">\r\n      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"table-responsive\">\r\n        <thead>\r\n          <tr>\r\n            <th>24 Hour Change</th>\r\n            <th>7 Day Change</th>\r\n            <th>30 Day Change</th>\r\n            <th>24 Hour Volume</th>\r\n            <th>24 HR High/Low</th>\r\n            <th>Market Cap</th>\r\n            <th>Circulating Supply</th>\r\n            <th>Total Supply</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let coinDetails of coinData;let i = index\" [style.background] = \"coinDetails.hexavalues\">\r\n            <td style=\"back:coinDetails.hexavalues\" class=\"cp_24four_change column-price\">{{coinDetails.dayPrice * currencyVal | number : '.0-2'}}</td>\r\n            <td class=\"cp_7day_change column-HRchange\">{{coinDetails.weeklyChange * this.currencyVal | number : '.0-2'}}</td>\r\n            <td class=\"cp_30day_change column-dayChange\">{{10 * (i+1) * this.currencyVal | number : '.0-2'}}</td>\r\n            <td>{{30 * (i+1) * this.currencyVal | number : '.0-2'}}</td>\r\n            <td>{{coinDetails.highestPrice * this.currencyVal | number : '.0-2'}} / {{coinDetails.lowestPrice * this.currencyVal | number : '.0-2'}}</td>\r\n            <td>{{2 * (i+1) * this.currencyVal | number : '.0-2'}}</td>\r\n            <td>{{2 * (i+1) * this.currencyVal | number : '.0-2'}}</td>\r\n            <td>{{100 * (i+1) * this.currencyVal | number : '.0-2'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <div class=\"sort_with_table coinpage-data\">\r\n\r\n      <div class=\"col-sm-12 col-xs-12 col-md-10 col-lg-10 rgt-coin-tab \">\r\n\r\n\r\n        <div class=\"graph\">\r\n           <label class=\"typeChangeBtn \"><button  class=\" btn\" [ngClass]=\"{'active' : btnActive  == 'candlestick' }\" (click)=\"changeType('candlestick');\">Candlestick</button></label>\r\n          <label class=\"typeChangeBtn\"><button class=\" btn\" [ngClass]=\"{'active' : btnActive  == 'ohlc' }\" (click)=\"changeType('ohlc');\">OHLC</button></label>\r\n          <label class=\"typeChangeBtn\"><button class=\" btn\" [ngClass]=\"{'active' : btnActive  == 'line' }\" (click)=\"changeType('line');\">Line</button></label>\r\n          <label class=\"typeChangeBtn\"><button class=\" btn\" [ngClass]=\"{'active' : btnActive  == 'smoothedLine' }\" (click)=\"changeType('smoothedLine');\">Advanced</button></label>\r\n          <!-- <label><button (click)=\"changeTheme('');\">Area</button></label> -->\r\n          <!-- <label><button (click)=\"changeTheme('dark');\">Theme</button></label>\r\n          <label><button [disabled]=\"disabled\" (click)=\"vwapaaaa();\">VWAP</button></label> -->\r\n          <!-- <div class=\"app-tv-chart-container app-tv-chart-container_single\" id=\"coinDetails_tv\"></div> -->\r\n          <div id=\"candleStickChart\" [ngStyle]=\"{'background-color': backgroundColor  }\"  [style.height.px]=\"650\" style=\"width:100%;float:left;margin-right:10px;\" ></div>\r\n          <!-- <div id=\"coinDataChart\" [ngStyle]=\"{'background-color': backgroundColor  }\" [style.width.%]=\"100\" [style.height.px]=\"550\" style=\"float:left;margin-right:10px;\" ></div> -->\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2 coin_list_lft coin-page-rgt\">\r\n        <div class=\"row\">\r\n          <app-advertisement></app-advertisement>\r\n          <div class=\"advertisment_add\">\r\n            <ul>\r\n              <li>\r\n                <a href=\"#\">\r\n                  <img src=\"/assets/images/advisement_1.png\" />\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/coinpage/coinpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comp_data_sharing_service__ = __webpack_require__("./src/app/comp-data-sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__ = __webpack_require__("./node_modules/angular-bootstrap-md/utils/facade/browser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service_service__ = __webpack_require__("./src/app/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_charting_library_charting_library_min__ = __webpack_require__("./src/assets/charting_library/charting_library.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_charting_library_charting_library_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_charting_library_charting_library_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__amcharts_amcharts3_angular__ = __webpack_require__("./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_timers__ = __webpack_require__("./node_modules/timers-browserify/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_timers__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CoinpageComponent = /** @class */ (function () {
    function CoinpageComponent(AmCharts, commonService, http, aroute, changeGraphTheme) {
        var _this = this;
        this.AmCharts = AmCharts;
        this.commonService = commonService;
        this.http = http;
        this.aroute = aroute;
        this.changeGraphTheme = changeGraphTheme;
        this._symbol = 'AAPL';
        this._interval = '60';
        // BEWARE: no trailing slash is expected in feed URL
        this._datafeedUrl = 'https://demo_feed.tradingview.com';
        this._libraryPath = '/assets/charting_library/';
        this._chartsStorageUrl = 'https://saveload.tradingview.com';
        this._chartsStorageApiVersion = '1.1';
        this._clientId = 'tradingview.com';
        this._userId = 'public_user_id';
        this._fullscreen = false;
        this._autosize = true;
        this._containerId = 'tv_chart_container';
        this.userLogin = {};
        this.userReg = {};
        this.key = 'name';
        this.reverse = false;
        this.changeGraphTheme.user_theme_listener().subscribe(function (theme) {
            _this.graphTheme = theme.theme;
            _this.toolsBgDyn = theme.toolsBg;
            _this.volumeTheme = theme.volumeTheme;
            _this.refreshRate = theme.refreshrate;
        });
        this.changeGraphTheme.chnageTheme_of_amchart_listener().subscribe(function (theme) {
            if (theme == 'black') {
                _this.backgroundColor = '#000';
                _this.themeType = 'dark';
                _this.greenColor = '#00FE2A';
                _this.redColor = '#DA0202';
            }
            else if (theme == 'white') {
                _this.backgroundColor = '#fff';
                _this.themeType = 'light';
                _this.greenColor = '#00C300';
                _this.redColor = '#E70000';
            }
        });
    }
    Object.defineProperty(CoinpageComponent.prototype, "symbol", {
        set: function (symbol) {
            this._symbol = symbol || this._symbol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoinpageComponent.prototype, "interval", {
        set: function (interval) {
            this._interval = interval || this._interval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoinpageComponent.prototype, "datafeedUrl", {
        set: function (datafeedUrl) {
            this._datafeedUrl = datafeedUrl || this._datafeedUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoinpageComponent.prototype, "libraryPath", {
        set: function (libraryPath) {
            this._libraryPath = libraryPath || this._libraryPath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoinpageComponent.prototype, "chartsStorageUrl", {
        set: function (chartsStorageUrl) {
            this._chartsStorageUrl = chartsStorageUrl || this._chartsStorageUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoinpageComponent.prototype, "chartsStorageApiVersion", {
        set: function (chartsStorageApiVersion) {
            this._chartsStorageApiVersion = chartsStorageApiVersion || this._chartsStorageApiVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoinpageComponent.prototype, "clientId", {
        set: function (clientId) {
            this._clientId = clientId || this._clientId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoinpageComponent.prototype, "userId", {
        set: function (userId) {
            this._userId = userId || this._userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoinpageComponent.prototype, "fullscreen", {
        set: function (fullscreen) {
            this._fullscreen = fullscreen || this._fullscreen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoinpageComponent.prototype, "autosize", {
        set: function (autosize) {
            this._autosize = autosize || this._autosize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoinpageComponent.prototype, "containerId", {
        set: function (containerId) {
            this._containerId = containerId || this._containerId;
        },
        enumerable: true,
        configurable: true
    });
    CoinpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.graphThemeColor = {
        //     theme: '',
        //     bgColor: ''
        // }
        this.btnActive = 'candlestick';
        this.changeGraphTheme.currentMessage.subscribe(function (message) { return _this.graphThemeColor = message; });
        this.currencyVal = localStorage.getItem('currencyRate');
        this.isOpened = false;
        // this.volume_white = {
        //     "volume.volume.color.0": "#000",
        //     "volume.volume.color.1": "#fff",
        //     "volume.volume.transparency": 70,
        //     "volume.volume ma.color": "#FF0000",
        //     "volume.volume ma.transparency": 30,
        //     "volume.volume ma.linewidth": 5,
        //     "volume.show ma": true,
        //     "bollinger bands.median.color": "#33FF88",
        //     "bollinger bands.upper.linewidth": 7
        // }
        this.aroute.params.subscribe(function (params) {
            _this.coinKey = params['id'];
        });
        this.http.get("http://54.165.36.80:5687/exchange/getusd/" + this.coinKey).map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.coinName = data[0].name;
            _this.coinImage = data[0].image;
            _this.coinData = data;
        });
        console.log(this.graphThemeColor);
        this.themeType = this.graphThemeColor.theme;
        this.backgroundColor = this.graphThemeColor.bgColor;
        this.setIntervalTime = 300000;
        this.overrides_obj = this.graphThemeColor;
        // this.generateGraph(this.coinKey);
        this.http.post('http://54.165.36.80:5687/exchange/getChart', { pair: this.coinKey, interval: 30, range: 100 }).map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.chartDataProvider = data;
            _this.themeDo('candleStickChart', _this.chartDataProvider, 'coin');
        });
    };
    CoinpageComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    CoinpageComponent.prototype.generateGraph = function (coinToken) {
        this.udf_datafeed = {
            onReady: function (callback) {
                var config = {
                    configurationData: {
                        supports_search: true,
                        supports_group_request: false,
                        supported_resolutions: ['1', '60', '1D', '1W', '1M', '3M', '6M', '1Y'],
                        supports_marks: false,
                        supports_timescale_marks: false,
                        exchanges: []
                    }
                };
                callback(parseJSONorNot(config));
            },
            resolveSymbol: function (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
                var config2 = {
                    "name": coinToken.toUpperCase(),
                    "timezone": "Asia/Kolkata",
                    "pricescale": 1000000,
                    "minmov": 1,
                    "minmov2": 0,
                    "ticker": "TEST:TEST",
                    // "description": "test description",
                    "session": "24x7",
                    "type": "bitcoin",
                    "exchange-traded": "",
                    "exchange-listed": "",
                    "has_intraday": true,
                    "intraday_multipliers": ['1', '60'],
                    "has_weekly_and_monthly": false,
                    "has_no_volume": false,
                    "regular_session": "24x7"
                    // "data_status":"streaming"
                };
                onSymbolResolvedCallback(parseJSONorNot(config2));
            },
            getBars: function (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) {
                jQuery.ajax({
                    method: 'POST',
                    async: true,
                    url: 'http://54.165.36.80:5687/exchange/getChart',
                    data: { pair: coinToken },
                    success: function (response) {
                        onHistoryCallback(response, { noData: true });
                    },
                    error: function (res) {
                        return 'F';
                    }
                });
            },
            subscribeBars: function (symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
                var configData;
                Object(__WEBPACK_IMPORTED_MODULE_9_timers__["setInterval"])(function () {
                    jQuery.ajax({
                        method: 'POST',
                        async: true,
                        url: 'http://54.165.36.80:5687/exchange/getLastSecData',
                        data: { pair: coinToken },
                        success: function (response) {
                            onRealtimeCallback(parseJSONorNot(response[0]));
                        },
                        error: function (res) {
                            return 'F';
                        }
                    });
                }, 1000);
            }
        };
        function parseJSONorNot(mayBeJSON) {
            if (typeof mayBeJSON === 'string') {
                return JSON.parse(mayBeJSON);
            }
            else {
                return mayBeJSON;
            }
        }
        function getLanguageFromURL() {
            var regex = new RegExp('[\\?&]lang=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
        }
        this.overrides_obj = this.graphThemeColor.theme;
        this.toolsBg = this.graphThemeColor.toolsBg;
        var widgetOptions = {
            symbol: this._symbol,
            loading_screen: { backgroundColor: '#000' },
            datafeed: this.udf_datafeed,
            interval: this._interval,
            container_id: 'coinDetails_tv',
            library_path: this._libraryPath,
            locale: getLanguageFromURL() || 'en',
            disabled_features: [
                'header_saveload',
                'header_indicators',
                'header_settings',
                'header_resolutions',
                'context_menus',
                'legend_context_menu',
                'pane_context_menu',
                'scales_context_menu',
                'header_symbol_search',
                'compare_symbol',
                'header_compare',
                'study_buttons_in_legend',
                'hide_last_na_study_output',
                'show_interval_dialog_on_key_press',
                'header_undo_redo',
                'chart_property_page_style',
                'header_screenshot',
                'header_fullscreen_button',
                'timeframes_toolbar',
                'header_interval_dialog_button',
                'use_localstorage_for_settings',
                'header_chart_type',
                'edit_buttons_in_legend',
                'show_hide_button_in_legend',
                'format_button_in_legend',
                'delete_button_in_legend',
                'symbol_info',
                'save_chart_properties_to_local_storage',
            ],
            enabled_features: ['disable_resolution_rebuild', 'disable_resolution_rebuild', 'dont_show_boolean_study_arguments', 'hide_last_na_study_output', 'header_indicators'],
            charts_storage_url: this._chartsStorageUrl,
            charts_storage_api_version: this._chartsStorageApiVersion,
            client_id: this._clientId,
            user_id: this._userId,
            toolbar_bg: this.toolsBg,
            // debug: true,
            studies_overrides: this.graphThemeColor.volumeTheme,
            fullscreen: this._fullscreen,
            autosize: this._autosize,
            overrides: this.overrides_obj
        };
        var tvWidget = new __WEBPACK_IMPORTED_MODULE_5__assets_charting_library_charting_library_min__["widget"](widgetOptions);
        tvWidget.onChartReady(function () {
            tvWidget.createButton()
                .attr('title', "1 Hour")
                .on('click', function (e) {
                tvWidget.chart().setResolution("60", function () {
                    console.log("set resolution callback");
                });
            }).append($('<span>1 Hour</span>'));
            tvWidget.createButton()
                .attr('title', "6Hours")
                .on('click', function (e) {
                tvWidget.chart().setResolution("360", function () {
                    console.log("set resolution callback");
                });
            }).append($('<span>6 Hours</span>'));
            tvWidget.createButton()
                .attr('title', "1day")
                .on('click', function (e) {
                tvWidget.chart().setResolution("1D", function () {
                    console.log("set resolution callback");
                });
            }).append($('<span>1Day</span>'));
            tvWidget.createButton()
                .attr('title', "1week")
                .on('click', function (e) {
                tvWidget.chart().setResolution("1W", function () {
                    console.log("set resolution callback");
                });
            }).append($('<span>1Week</span>'));
            tvWidget.createButton()
                .attr('title', "1 Month")
                .on('click', function (e) {
                tvWidget.chart().setResolution("1M", function () {
                    console.log("set resolution callback");
                });
            }).append($('<span>1Month</span>'));
            tvWidget.createButton()
                .attr('title', "1 Year")
                .on('click', function (e) {
                tvWidget.chart().setResolution("12M", function () {
                    console.log("set resolution callback");
                });
            }).append($('<span>1Year</span>'));
            tvWidget.createButton()
                .attr('title', "1 Year")
                .on('click', function (e) {
                tvWidget.chart().setResolution("60M", function () {
                    console.log("set resolution callback");
                });
            }).append($('<span>MAX</span>'));
            tvWidget.createButton({ align: "right" })
                .attr('title', "Area")
                .addClass('customBtnGraph')
                .on('click', function (e) {
                tvWidget.chart().setChartType(3);
            }).append($('<span>Area</span>'));
            tvWidget.createButton({ align: "right" })
                .attr('title', "Advanced Chart")
                .addClass('customBtnGraph')
                .on('click', function (e) {
                tvWidget.chart().setChartType(10);
            }).append($('<span>Advanced Chart</span>'));
            tvWidget.createButton({ align: "right" })
                .attr('title', "Candle Stick")
                .addClass('customBtnGraph')
                .on('click', function (e) {
                tvWidget.chart().setChartType(1);
            }).append($('<span>Candle Stick</span>'));
            tvWidget.createButton({ align: "right" })
                .attr('title', "Line")
                .on('click', function (e) {
                tvWidget.chart().setChartType(2);
            }).append($('<span>Line</span>'));
            tvWidget.chart().setChartType(1);
        });
    };
    CoinpageComponent.prototype.addToPortfolio = function () {
        var _this = this;
        if (localStorage.getItem('userToken')) {
            this.showLoadSpinner = true;
            var tokenV = localStorage.getItem('userToken');
            this.http.put('http://54.165.36.80:5687/api/userSetting/update', { portfolio: this.coinKey, token: tokenV }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.showLoadSpinner = false;
                _this.changeGraphTheme.trigger_successMessagePopUp_filter('Successfully added to Portfolio List');
            }, function (error) {
                _this.showLoadSpinner = false;
                _this.changeGraphTheme.trigger_errorMessagePopUp_filter(error.error);
            });
        }
        else {
            this.showLoadSpinner = false;
            this.changeGraphTheme.trigger_loginPopUp_filter();
        }
    };
    CoinpageComponent.prototype.buyCoin = function () {
        this.isOpened = !this.isOpened;
    };
    CoinpageComponent.prototype.themeDo = function (chartId, chartData, coinToken) {
        var isTheme = __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementsByTagName('body')[0].classList.contains('black-theme');
        if (isTheme) {
            this.greenColor = '#00FE2A';
            this.redColor = '#DA0202';
        }
        else {
            this.greenColor = '#00C300';
            this.redColor = '#E70000';
        }
        //   AmCharts.addMovingAverage(this.chartConfig.dataSets[0], this.chartConfig.panels[0], 'value', {
        //     useDataSetColors: false,
        //     color: "#ccffcc",
        //     title: "Moving average"
        // });
        this.amchartVariable = this.AmCharts.makeChart(chartId, {
            "type": "stock",
            "mouseWheelZoomEnabled": true,
            "theme": 'dark',
            "glueToTheEnd": true,
            "categoryAxesSettings": {
                "minPeriod": "mm",
                // "groupToPeriods": ["15mm"],
                "equalSpacing": true,
                "parseDates": false,
            },
            "dataSets": [{
                    "fieldMappings": [{
                            "fromField": "open",
                            "toField": "open"
                        }, {
                            "fromField": "close",
                            "toField": "close"
                        }, {
                            "fromField": "high",
                            "toField": "high"
                        }, {
                            "fromField": "low",
                            "toField": "low"
                        }, {
                            "fromField": "volume",
                            "toField": "volume"
                        }, {
                            "fromField": "value",
                            "toField": "value"
                        }],
                    "color": "#7f8da9",
                    "dataProvider": chartData,
                    "title": "West Stock",
                    "categoryField": "date"
                },
                // , {
                //   "fieldMappings": [ {
                //     "fromField": "vwap",
                //     "toField": "vwap"
                //   },
                //   {
                //     "fromField": "date",
                //     "toField": "date"
                //   } ],
                //   "color": "#fac314",
                //   "dataProvider": this.vwaparray,
                //   "compared": true,
                //   "title": "East Stock",
                //   "categoryField": "date"
                // } 
                {
                    "showCategoryAxis": true,
                    "title": "VWAP",
                    "fieldMappings": [{
                            "fromField": "vwap",
                            "toField": "vwap"
                        }],
                    //   dataProvider: this.vwaparray,
                    "categoryField": "date",
                    "compared": true
                }
            ],
            "zoomControl": {
                "maxZoomLevel": 64,
                "minZoomLevel": 1,
                "left": 1
            },
            "panels": [{
                    "title": "Value",
                    "showCategoryAxis": true,
                    "marginRight": 0,
                    "percentHeight": 70,
                    "recalculateToPercents": "never",
                    "valueAxes": [{
                            "id": "v1",
                            "dashLength": 5,
                            "gridThickness": 1,
                            "position": "right",
                            "ignoreAxisWidth": true,
                        }],
                    "categoryAxis": {
                        "minPeriod": 'ss',
                        "autoWrap": true,
                        "gridPosition": "start",
                        "labelRotation": 35,
                        "dashLength": 1,
                        "labelFrequency": 6,
                        "autoGridCount": false,
                        "gridThickness": 1,
                        "alwaysGroup": false,
                        "minHorizontalGap": 40,
                        "ignoreAxisWidth": true,
                        "labelsEnabled": true,
                        "startOnAxis": false,
                        "dateFormats": [{ period: 'fff', format: 'JJ:NN:SS' }, { period: 'ss', format: 'JJ:NN:SS' }, { period: 'mm', format: 'MMM DD JJ:NN' }, { period: 'hh', format: 'JJ:NN' }, { period: 'DD', format: 'MMM DD' }, { period: 'WW', format: 'MMM DD' }, { period: 'MM', format: 'MMM' }, { period: 'YYYY', format: 'YYYY' }]
                    },
                    "stockGraphs": [{
                            "type": "candlestick",
                            "id": "g1",
                            "balloonText": "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
                            "openField": "open",
                            "closeField": "close",
                            "highField": "high",
                            "lowField": "low",
                            "valueField": "close",
                            "lineColor": this.greenColor,
                            "fillColors": this.greenColor,
                            "negativeLineColor": this.redColor,
                            "negativeFillColors": this.redColor,
                            "lineAlpha": 0.7,
                            "fillAlphas": 1,
                            "useDataSetColors": false,
                            "comparable": true,
                            "compareField": "value",
                            "showBalloon": true,
                            "proCandlesticks": true
                        }],
                    "stockLegend": {
                        "valueTextRegular": undefined,
                        "periodValueTextComparing": "[[percents.value.close]]%"
                    },
                    "drawingIconsEnabled": true
                },
            ],
            "chartScrollbarSettings": {
                "graph": "g1",
                "graphType": "line",
                "usePeriod": "mm",
                "height": 1,
            },
            "chartCursor": {
                "categoryBalloonDateFormat": "DD MMMM",
                "cursorPosition": "middle",
            },
            "valueAxesSettings": {
                "inside": false,
                "showLastLabel": true
            },
            "panelsSettings": {
                "marginRight": 50,
                "marginTop": 30,
                "marginBottom": 40
            },
            "chartCursorSettings": {
                "valueLineBalloonEnabled": true,
                "valueLineEnabled": true,
                "cursorColor": "#fff",
                "valueBalloonsEnabled": true,
                "dateFormats": [{ period: 'fff', format: 'JJ:NN:SS' }, { period: 'ss', format: 'JJ:NN:SS' }, { period: 'mm', format: 'MMM DD JJ:NN' }, { period: 'hh', format: 'JJ:NN' }, { period: 'DD', format: 'MMM DD' }, { period: 'WW', format: 'MMM DD' }, { period: 'MM', format: 'MMM' }, { period: 'YYYY', format: 'YYYY' }]
                //   "categoryBalloonDateFormats": [ {
                //     "period": "mm",
                //     "format": "NN:SS"
                //   }, {
                //     "period": "hh",
                //     "format": "NN:SS:QQQ"
                //   } ]
            },
            "export": {
                "enabled": true,
                "position": "top-left"
            },
            "event": "zoomed",
            "method": '',
        });
        // this.amchartVariable.dataProvider = chartData;
        // setInterval(() => {
        //     this.AutoUpdateOfChart();
        // }, 3000)
    };
    CoinpageComponent.prototype.chartDispal = function (coinToken, intervalTime, rangeVal, btn) {
        var _this = this;
        if (this.amchartVariable[coinToken][btn]) {
            this.amchartVariable[coinToken].dataProvider = [];
            var data = this.amchartVariable[coinToken][btn];
            this.amchartVariable[coinToken].dataSets[0].dataProvider = data;
            // this.amchartVariable[coinToken].dataProvider = data;
            this.amchartVariable[coinToken].zoomOut();
            this.amchartVariable[coinToken].validateData();
            this.amchartVariable[coinToken].zoomOut();
        }
        else {
            this.http.post('http://54.165.36.80:5687/exchange/getChart', { pair: coinToken, interval: intervalTime, range: rangeVal }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.amchartVariable[coinToken][btn] = data;
                _this.amchartVariable[coinToken].dataProvider = [];
                _this.amchartVariable[coinToken].dataSets[0].dataProvider = data;
                // this.amchartVariable[coinToken].dataProvider = data;
                _this.amchartVariable[coinToken].zoomOut();
                _this.amchartVariable[coinToken].validateData();
                _this.amchartVariable[coinToken].zoomOut();
            });
        }
        // this.isBtnClicked = btn
    };
    // AutoUpdateOfChart() {
    //     for (let propt in this.amchartVariable) {
    //         this.http.post('http://54.165.36.80:5687/exchange/getLastSecData', { pair: propt }).map(response => response.json()).subscribe(data => {
    //             // this.chartDataProvider.push(data);
    //             let k = this.AmCharts;
    //             data[0]['date'] = new Date().toISOString();
    //             if (data.length > 0) {
    //                 console.log(this.amchartVariable.dataProvider.length)
    //                 // this.chartDataProvider.push(data[0]);
    //                 this.amchartVariable.dataSets[0].dataProvider.push(data[0])
    //                 this.amchartVariable.dataProvider.shift();
    //                 this.amchartVariable.validateData();
    //             }
    //         })
    //     }
    // }
    CoinpageComponent.prototype.changeType = function (type, variable) {
        if (type) {
            // this.btnActive= type;
            this.amchartVariable.panels[0].stockGraphs[0].type = type;
            if (type == 'line') {
                this.amchartVariable.panels[0].stockGraphs[0].fillAlphas = 0;
                this.amchartVariable.validateData();
            }
            else if (type == 'candlestick') {
                this.amchartVariable.panels[0].stockGraphs[0].fillAlphas = 1;
                this.amchartVariable.validateData();
            }
        }
        // this.amchartVariable.validateNow();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('successMessage'),
        __metadata("design:type", Object)
    ], CoinpageComponent.prototype, "successModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('errorMessage'),
        __metadata("design:type", Object)
    ], CoinpageComponent.prototype, "errorModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loginform'),
        __metadata("design:type", Object)
    ], CoinpageComponent.prototype, "loginModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('registerform'),
        __metadata("design:type", Object)
    ], CoinpageComponent.prototype, "signUpModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CoinpageComponent.prototype, "symbol", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CoinpageComponent.prototype, "interval", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], CoinpageComponent.prototype, "datafeedUrl", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CoinpageComponent.prototype, "libraryPath", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CoinpageComponent.prototype, "chartsStorageUrl", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CoinpageComponent.prototype, "chartsStorageApiVersion", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CoinpageComponent.prototype, "clientId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CoinpageComponent.prototype, "userId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CoinpageComponent.prototype, "fullscreen", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CoinpageComponent.prototype, "autosize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CoinpageComponent.prototype, "containerId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CoinpageComponent.prototype, "graphId", void 0);
    CoinpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-coinpage',
            template: __webpack_require__("./src/app/main/content/coinpage/coinpage.component.html"),
            styles: [__webpack_require__("./src/app/main/content/coinpage/coinpage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__amcharts_amcharts3_angular__["b" /* AmChartsService */], __WEBPACK_IMPORTED_MODULE_4__common_service_service__["a" /* CommonServiceService */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__comp_data_sharing_service__["a" /* CompDataSharingService */]])
    ], CoinpageComponent);
    return CoinpageComponent;
}());



/***/ }),

/***/ "./src/app/main/content/content.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/main/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-content',
            template: __webpack_require__("./src/app/main/content/content.component.html"),
            styles: [__webpack_require__("./src/app/main/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/main/content/exchange/exchange.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n#exchange_list tbody tr td::first-letter {\r\n    text-transform: capitalize;\r\n  }"

/***/ }),

/***/ "./src/app/main/content/exchange/exchange.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"load_spinner\" *ngIf=\"showLoadSpinner\"><span class=\"fa fa-spinner fa-spin fa-2x\"></span></div>\r\n\r\n<div class=\"exchanges_page\">\r\n  <div class=\"container\">\r\n <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 table-responsive coin-page-lft list_view_table\">\r\n  <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"  class=\"table-responsive\" id=\"exchange_list\">\r\n  <thead>\r\n    <tr>\r\n        <th>#</th>\r\n        <th (click)=\"sort('name')\">Exchange</th>\r\n        <th (click)=\"sort('NoOfCoins')\">No of coins</th>\r\n        <th (click)=\"sort('name')\">Volume</th>\r\n        <th (click)=\"sort('name')\">Volume%</th>\r\n        <th >Trade</th>\r\n      </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n     <tr *ngFor=\"let exchanges of exchangeData | filter: searchText | orderBy: key : reverse;let i = index\">\r\n      <td>{{i +1}}</td>\r\n      <td class=\"exchange_clr\">{{exchanges.name}}</td>\r\n      <td>{{exchanges.NoOfCoins}}</td>\r\n      <td>{{exchanges.volume | number : '.0-2'}}</td>\r\n      <td>{{exchanges.volumePercent | number : '.0-2'}}</td>\r\n      <td class=\"trade_btn\"><button>Trade </button></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<div *ngIf=\"noData\" class=\"noDataFound\">No Data found!</div>\r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/exchange/exchange.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comp_data_sharing_service__ = __webpack_require__("./src/app/comp-data-sharing.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExchangeComponent = /** @class */ (function () {
    function ExchangeComponent(http, changeGraphTheme) {
        var _this = this;
        this.http = http;
        this.changeGraphTheme = changeGraphTheme;
        this.key = 'name';
        this.reverse = false;
        this.changeGraphTheme.searchCoinExchange().subscribe(function (searchT) {
            _this.searchText = searchT;
        });
        this.changeGraphTheme.exchange_data_listener().subscribe(function () {
            _this.exchangeData = [];
            _this.exchangeDatas();
        });
    }
    ExchangeComponent.prototype.ngOnInit = function () {
        this.clearInterval = true;
        this.noData = true;
        this.showLoadSpinner = true;
        this.exchangeDatas();
    };
    ExchangeComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    ExchangeComponent.prototype.exchangeDatas = function () {
        var _this = this;
        this.http.get("http://54.165.36.80:5687/exchange/exchangeSummary").map(function (response) { return response.json(); }).subscribe(function (data) {
            if (data.length > 0) {
                _this.noData = false;
            }
            console.log(data);
            _this.exchangeData = data;
            _this.showLoadSpinner = false;
        });
    };
    ExchangeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-exchange',
            template: __webpack_require__("./src/app/main/content/exchange/exchange.component.html"),
            styles: [__webpack_require__("./src/app/main/content/exchange/exchange.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__comp_data_sharing_service__["a" /* CompDataSharingService */]])
    ], ExchangeComponent);
    return ExchangeComponent;
}());



/***/ }),

/***/ "./src/app/main/content/portfolio/portfolio.component.css":
/***/ (function(module, exports) {

module.exports = ".addPortfolio{\r\n    background: #e67e22;\r\n    padding: 7px 30px;\r\n    border-radius: 5px;\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n    font-family: 'ProximaNova-Bold';\r\n    color: #fff !important;\r\n    border: 0px;\r\n}\r\n.addCoin_btn{\r\n    background: #6bfffe;\r\n    padding: 7px 30px;\r\n    border-radius: 5px;\r\n    float: right;\r\n    font-size: 14px;\r\n    white-space: nowrap;\r\n    text-transform: uppercase;\r\n    font-family: 'ProximaNova-Bold';\r\n    color: #333 !important;\r\n    border: 0px;\r\n    margin-right: 1%;\r\n}\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 24px;\r\n    margin-top: 6px;\r\n    float: right;\r\n    top: 0;\r\n  }\r\n.switch input {display:none;}\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\nspan.opt_arw span {\r\n  float: right;\r\n  text-align: right;\r\n  width: 100%;\r\n  position: absolute;\r\n  right: 0px;\r\n  font-size: 14px;\r\n  border-top: 1px solid #fff;\r\n  top: 0px;\r\n  line-height: 24px;\r\n}\r\n.opt_arw label {\r\n  margin: 0px;\r\n \r\n  font-size: 14px;\r\n  padding-left: 4px;\r\n  line-height: 28px;\r\n}\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 24px;\r\n    width: 24px;\r\n    right: 35px;\r\n    bottom: 0px;\r\n    background-color: #32dfdd;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\ninput:checked + .slider {\r\n    background-color: #dadada;\r\n  }\r\ninput:focus + .slider {\r\n    -webkit-box-shadow: 0 0 1px #2196F3;\r\n            box-shadow: 0 0 1px #2196F3;\r\n  }\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(36px);\r\n    transform: translateX(36px);\r\n  }\r\n/* Rounded sliders */\r\n.slider.round {\r\n    border-radius: 34px;\r\n  }\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n.select_dropdown{\r\n    width: 100%;\r\n    outline: none;\r\n    background: #000;\r\n    color: #fff;\r\n    border: 0;\r\n    border-bottom: 1px solid #fff;\r\n    padding-bottom: 5px;\r\n }\r\n.select_dropdown:after{\r\n     content: \"\\f0d7\";\r\n     font: 'normal normal normal 14px/1 FontAwesome'\r\n }"

/***/ }),

/***/ "./src/app/main/content/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"load_spinner\" *ngIf=\"showLoadSpinner\">\r\n  <span class=\"fa fa-spinner fa-spin fa-2x\"></span>\r\n</div>\r\n<div class=\"portfolio_main\">\r\n  <div class=\"container\">\r\n    <div class=\"grid_view_head\">\r\n      <h6>\r\n        <b>{{userName}}</b>\r\n      </h6>\r\n      <div class=\"price_data\">\r\n        <h2>$2,000.00\r\n          <i class=\"fa fa-arrows-v\" aria-hidden=\"true\"></i>\r\n        </h2>\r\n      </div>\r\n      <div class=\"grid_list_tab\">\r\n        <ul>\r\n          <li style=\"cursor:pointer\">\r\n            <button (click)=\"addCoin.show()\" *ngIf=\"isLoggedin\" class=\"addCoin_btn\">Add Coins</button>\r\n          </li>\r\n          <!-- <li (click)=\"changeGridView('list_view')\" style=\"cursor:pointer\" class=\"active\" id=\"list_view\">\r\n            <i class=\"fa fa-list-ul\" aria-hidden=\"true\"></i>\r\n            <span>List View</span> \r\n          </li>\r\n          <li (click)=\"changeGridView('grid_view')\" style=\"cursor:pointer\" id=\"grid_view\">\r\n            <i class=\"fa fa-table\" aria-hidden=\"true\"></i>\r\n           <span>Grid View</span> \r\n          </li> -->\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <!--grid_view-->\r\n    <div class=\"grid_view\" *ngIf=\"gridSelected\">\r\n      <div class=\"grid_view_details\">\r\n        <div class=\" col-xs-12 col-sm-12 col-md-4 col-lg-4\" *ngFor=\"let coins of portfoliogrid | filter: searchText \">\r\n          <div class=\"bitsoin\">\r\n            <h2> {{coins.name | uppercase}}</h2>\r\n            <ul>\r\n              <li>\r\n                <p>\r\n                  <label>PRICE </label>\r\n                  <span class=\"price_head\">{{ coins.price }}</span>\r\n                </p>\r\n              </li>\r\n              <li>\r\n                <p>\r\n                  <label>24 HR Change </label>\r\n                  <span>{{coins.dayPrice | number : '.0-2'}}</span>\r\n                </p>\r\n              </li>\r\n              <li>\r\n                <p>\r\n                  <label>7 Day Chnage </label>\r\n                  <span>{{coins.weeklyChange | number : '.0-2'}} ({{coins.weeklyChangePercent | number : '.0-2'}}%)</span>\r\n                </p>\r\n              </li>\r\n              <li>\r\n                <p>\r\n                  <label>24 HR Volume</label>\r\n                  <span>{{coins.dayVolume | number : '.0-2'}}</span>\r\n                </p>\r\n              </li>\r\n              <li>\r\n                <p>\r\n                  <label>Market Cap</label>\r\n                  <span>{{coins.marketCapValue | number : '.0-2'}}</span>\r\n                </p>\r\n              </li>\r\n\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--grid_view-->\r\n\r\n    <!--list_view-->\r\n    \r\n    <div class=\"table-responsive col-sm-12 col-xs-12 col-md-12 col-lg-12 coin-page-lft list_view_table\" *ngIf=\"listSelected\">\r\n      <app-tv-chart-container  #component1></app-tv-chart-container>\r\n    </div>\r\n    <!--list_view-->\r\n    <div *ngIf=\"noData\" class=\"noDataFound\">You have not yet added any data to portfolio!</div>\r\n    <div *ngIf=\"getLoggedIn\" class=\"noDataFound\">Please Log in To Get Portfolio List</div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div mdbModal #addCoin=\"mdb-modal\" class=\"modal fade\" id=\"addPortfolio_popup\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: false}\">\r\n  <div class=\"modal-dialog cascading-modal\" role=\"document\">\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n\r\n      <!--Header-->\r\n      <!-- <div class=\"modal-header light-blue darken-3 white-text\">\r\n                <h4 class=\"title\">\r\n                    <i class=\"fa fa-user-plus\"></i> Register</h4>\r\n                <button type=\"button\" class=\"close waves-effect waves-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"registerform.hide()\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div> -->\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <label style=\"color:red;\" *ngIf=\"errormessageSignUp\">Please Enter all mandatory fields</label>\r\n        <form id=\"signuPCredentials\">\r\n          <div class=\"md-form form-sm\">\r\n            <select class=\"select_dropdown\" id=\"selectDropDown\"  (change)=\"getCurrencyDetails($event.target.value)\">\r\n              <option disabled value=\"name\">Name of Coin</option>\r\n              <option *ngFor=\"let currency of currencyList;let i = index;\" value=\"{{currency.symbol}}\">{{currency.name}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"md-form form-sm\">\r\n            <!-- <i class=\"fa fa-envelope prefix\"></i> -->\r\n            <input type=\"text\" name=\"total_coins\" [(ngModel)]=\"addCoinModel.total_coins\" class=\"form-control required placeholder_color\" placeholder=\"Quantity\">\r\n          </div>\r\n          <div class=\"md-form form-sm\">\r\n            <!-- <i class=\"fa fa-envelope prefix\"></i> -->\r\n            <input type=\"text\" name=\"price_paid\" [(ngModel)]=\"addCoinModel.price_paid\" class=\"form-control required placeholder_color\" placeholder=\"Price Paid\">\r\n          </div>\r\n          <!-- <div class=\"placeholder_color\">\r\n            <input type=\"checkbox\" > Calculate Average Price.\r\n          </div> -->\r\n          <div class=\"md-form form-sm\">\r\n            <!-- <i class=\"fa fa-envelope prefix\"></i> -->\r\n            <!-- <input type=\"date\" name=\"trade_date\" [(ngModel)]=\"addCoinModel.trade_date\" class=\"form-control required placeholder_color\" placeholder=\"Date of Purchase\"> -->\r\n            <div class=\"col-xs-12  form-group\">\r\n              <input type=\"text\" [(ngModel)]=\"addCoinModel.trade_date\"\r\n                     placeholder=\"Datepicker\"\r\n                     class=\"form-control\"\r\n                     bsDatepicker>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-center mt-2\">\r\n            <button class=\"btn btn-info waves-light\" (click)=\"AddCoinIntoPortfolio(addCoinModel)\" mdbWavesEffect>Add Coin\r\n              <!-- <i class=\"fa fa-sign-in ml-1\"></i> -->\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comp_data_sharing_service__ = __webpack_require__("./src/app/comp-data-sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_bootstrap_md_utils_facade_browser__ = __webpack_require__("./node_modules/angular-bootstrap-md/utils/facade/browser.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(http, changeGraphTheme) {
        var _this = this;
        this.http = http;
        this.changeGraphTheme = changeGraphTheme;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Subject */]();
        this.key = 'name';
        this.reverse = false;
        this.gridSelected = false;
        this.listSelected = true;
        this.changeGraphTheme.searchCoinExchange().subscribe(function (searchT) {
            // clearInterval(this.runningInterval);
            _this.clearInterval = false;
            _this.coinList = [];
            _this.coinList = searchT;
        });
        this.changeGraphTheme.clear_portfolio_Data_listener().subscribe(function () {
            _this.isLoggedin = false;
            // this.isLoggedin = true;
        });
        this.changeGraphTheme.portfolio_Data_listener().subscribe(function () {
            _this.clearInterval = true;
            _this.isLoggedin = true;
            // this.getLoggedIn = true;
            // this.isLoggedin = true;
            _this.coinList = [];
        });
    }
    PortfolioComponent.prototype.changeGridView = function (ev) {
        if (ev == 'list_view') {
            this.gridSelected = false;
            this.listSelected = true;
            __WEBPACK_IMPORTED_MODULE_4_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementById('list_view').classList.add('active');
            __WEBPACK_IMPORTED_MODULE_4_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementById('grid_view').classList.remove('active');
        }
        else if (ev == 'grid_view') {
            this.gridSelected = true;
            this.listSelected = false;
            __WEBPACK_IMPORTED_MODULE_4_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementById('list_view').classList.remove('active');
            __WEBPACK_IMPORTED_MODULE_4_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementById('grid_view').classList.add('active');
        }
    };
    PortfolioComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    PortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accordionData = [];
        this.addCoinModel = {};
        this.coinList = [];
        this.clearInterval = true;
        // this.showLoadSpinner = false;
        if (localStorage.getItem('userToken')) {
            //  this.showLoadSpinner = true;
            this.userName = localStorage.getItem('userName');
            this.isLoggedin = true;
        }
        else {
            this.isLoggedin = false;
        }
        this.http.post('http://54.165.36.80:5687/exchange/coinNames', '').map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.currencyList = data;
        });
    };
    // getPortfolioList() {
    //   if (localStorage.getItem('userToken') && this.clearInterval) {
    //     let tokenV = localStorage.getItem('userToken');
    //     this.runningInterval =  this.http.post('http://54.165.36.80:5687/api/coins/getPortfolio', { token: tokenV }).map(
    //       response => response.json()).subscribe(
    //       data => {
    //         console.log(JSON.stringify(data))
    //         if(data.length == 0){
    //           this.noData = true;
    //         }
    //         if( this.coinList.length > 0){
    //             this.updatePortfolio(data)
    //         }
    //         else{
    //            this.showLoadSpinner = false;
    //         this.coinList = data;
    //         this.portfoliogrid = data;
    //         }
    //       },
    //       err => {
    //         this.showLoadSpinner = false;
    //         this.noData = true;
    //       })
    //   }
    //   else{
    //     this.showLoadSpinner = false;
    //     this.getLoggedIn = true;
    //   }
    // }
    PortfolioComponent.prototype.getCurrencyDetails = function (value) {
        var _this = this;
        this.http.get("http://54.165.36.80:5687/exchange/getusd/" + value).map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.coinDetails = data;
            console.log(data);
        });
    };
    PortfolioComponent.prototype.AddCoinIntoPortfolio = function (model) {
        var _this = this;
        var objects = {};
        objects['name'] = this.coinDetails[0].name;
        objects['pair'] = this.coinDetails[0].pair;
        objects['price_paid'] = model['price_paid'];
        objects['total_coins'] = model['total_coins'];
        objects['trade_date'] = model['trade_date'];
        objects['price'] = this.coinDetails[0].price;
        objects['dayPriceStatus'] = this.coinDetails[0].dayPriceStatus;
        console.log(objects);
        var tokenV = localStorage.getItem('userToken');
        this.http.put('http://54.165.36.80:5687/api/userSetting/addPortfolio', { token: tokenV, portfolioList: objects }).map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.coinList.push(objects);
            _this.addCoin.hide();
            // this.showLoadSpinner = false;
            _this.addCoinModel = {};
            __WEBPACK_IMPORTED_MODULE_4_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementById('selectDropDown').value = 'name';
        });
    };
    PortfolioComponent.prototype.ngOnDestroy = function () {
        // this.runningInterval.unsubscribe()
        // this.ngUnsubscribe.next();
        // this.ngUnsubscribe.complete();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('addCoin'),
        __metadata("design:type", Object)
    ], PortfolioComponent.prototype, "addCoin", void 0);
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__("./src/app/main/content/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("./src/app/main/content/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__comp_data_sharing_service__["a" /* CompDataSharingService */]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/main/footer-nav/footer-nav.component.css":
/***/ (function(module, exports) {

module.exports = ".fixed_footer {\r\n    display: none;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n    .fixed_footer {\r\n        background-color: #6bfffe;\r\n        color: #000000;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        float: left;\r\n        font-weight: 600;\r\n        text-align: center;\r\n        width: 100%;\r\n    }\r\n    .fixed_footer > links {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        width: 100%;\r\n    }\r\n    .fixed_footer ul {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: row;\r\n                flex-direction: row;\r\n        width: 100%;\r\n    }\r\n    .fixed_footer ul li {\r\n        border-right: 2px solid #333333;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-flex: 1;\r\n            -ms-flex: 1 1 0px;\r\n                flex: 1 1 0;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        padding: 20px;\r\n    }\r\n    .fixed_footer ul li img {\r\n        -ms-flex-item-align: center;\r\n            align-self: center;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        float: none;\r\n        max-width: 40px;\r\n        padding-bottom: 14px;\r\n        width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/main/footer-nav/footer-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed_footer\">\r\n  <links>\r\n    <ul>\r\n      <li routerLink=\"/coinlist\">\r\n        <img src=\"/assets/images/footer/coins.png\">\r\n        <span>Coins</span>\r\n      </li>\r\n      <li routerLink=\"/portfolio\">\r\n        <img src=\"/assets/images/footer/portfolio.png\">\r\n        <span>Portfolio</span>\r\n      </li>\r\n      <li routerLink=\"/exchange\">\r\n        <img src=\"/assets/images/footer/lr_arrow.png\">\r\n        <span>Exchange Tools</span>\r\n      </li>\r\n      <li>\r\n        <img src=\"/assets/images/footer/more.png\">\r\n        <span>More</span>\r\n      </li>\r\n    </ul>\r\n  </links>\r\n</div>"

/***/ }),

/***/ "./src/app/main/footer-nav/footer-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterNavComponent = /** @class */ (function () {
    function FooterNavComponent() {
    }
    FooterNavComponent.prototype.ngOnInit = function () {
    };
    FooterNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer-nav',
            template: __webpack_require__("./src/app/main/footer-nav/footer-nav.component.html"),
            styles: [__webpack_require__("./src/app/main/footer-nav/footer-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterNavComponent);
    return FooterNavComponent;
}());



/***/ }),

/***/ "./src/app/main/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <div class=\"container\">\r\n        <mdb-navbar SideClass=\"navbar  navbar-expand-lg navbar-dark scrolling-navbar ie-nav\" [containerInside]=\"false\">\r\n            <logo>\r\n                <a routerLink=\"/coinlist\" class=\"logo\">\r\n                    <img src=\"/assets/images/logo.png\" alt=\"Coinwave\" />\r\n                    <span class=\"coinWaveText notranslate\">Coin\r\n                        <b>wave</b>\r\n                    </span>\r\n                </a>\r\n                <div class=\"login_register mob_top\">\r\n                <ul>\r\n                    <li class=\"\" mdbRippleRadius *ngIf=\"!isLoggedIn\">\r\n                        <div class=\"login_register\">\r\n                            <a (click)=\"goToLogin()\">Login / Register</a>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"\" mdbRippleRadius *ngIf=\"isLoggedIn\" style=\"margin-top:25px;\">\r\n                        <div class=\"\">\r\n                            <a>Welcome</a>\r\n                            <span> {{userName}} |</span>\r\n                            <a (click)=\"logOut()\"> Log out</a>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n                </div>\r\n            </logo>\r\n            <links>\r\n                <ul class=\"navbar-nav nav-lft mr-auto\">\r\n                    <li class=\"nav-item waves-light\" [ngClass]=\"{'active': activeClass == '/coinlist'}\" routerLink=\"/coinlist\" id=\"coins\" (click)=\"makeActive('coins','portfolio','exchanges')\" mdbRippleRadius>\r\n                        <a  class=\"nav-link\">COINS</a>\r\n                    </li>\r\n                    <li class=\"nav-item waves-light\" [ngClass]=\"{'active': activeClass == '/portfolio'}\" routerLink=\"/portfolio\" id=\"portfolio\" (click)=\"makeActive('portfolio','coins','exchanges')\" mdbRippleRadius>\r\n                        <a  class=\"nav-link\">PORTFOLIO</a>\r\n                    </li>\r\n                    <li class=\"nav-item waves-light\" [ngClass]=\"{'active': activeClass == '/exchange'}\" routerLink=\"/exchange\" id=\"exchanges\" (click)=\"makeActive('exchanges','coins','portfolio')\" mdbRippleRadius>\r\n                        <a  class=\"nav-link\">EXCHANGES</a>\r\n                    </li>\r\n                    <!-- <li class=\"nav-item waves-light\" mdbRippleRadius>\r\n              <a routerLink=\"/news\" class=\"nav-link\">NEWS</a>\r\n          </li> -->\r\n                    <!-- <li class=\"nav-item waves-light\" mdbRippleRadius>\r\n              <a class=\"nav-link\">TUTORIALS</a>\r\n          </li>\r\n          <li class=\"nav-item waves-light\" mdbRippleRadius>\r\n              <a class=\"nav-link\">TOOLS</a>\r\n          </li> -->\r\n                </ul>\r\n                <ul class=\"navbar-nav log_reg nav-flex-icons\">\r\n                    <li mdbRippleRadius>\r\n                        <input type=\"search\" #searchText (keyup)=\"globalSearch(searchText.value)\"  placeholder=\"Coin or Exchange\" />\r\n                    </li>\r\n                    <li class=\"\" mdbRippleRadius *ngIf=\"!isLoggedIn\">\r\n                        <div class=\"login_register\">\r\n                            <a (click)=\"goToLogin()\">Login / Register</a>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"\" mdbRippleRadius *ngIf=\"isLoggedIn\" style=\"margin-top:25px;\">\r\n                        <div class=\"\">\r\n                            <a>Welcome</a>\r\n                            <span> {{userName}} |</span>\r\n                            <a (click)=\"logOut()\"> Log out</a>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"follw_us\">\r\n                            <p>Follow us</p>\r\n                            <div class=\"d-flex flex-row\">\r\n                                <a href=\"#\" class=\"facebook\">\r\n                                    <img src=\"/assets/images/facebook_fol_us.png\" alt=\"Facebook \" />\r\n                                </a>\r\n                                <a href=\"#\" class=\"youtube\">\r\n                                    <img src=\"/assets/images/you_tube.png\" alt=\"youtube\" />\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n\r\n                </ul>\r\n            </links>\r\n        </mdb-navbar>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!--Modal: Login Form-->\r\n<div mdbModal #loginform=\"mdb-modal\" class=\" modal fade\" id=\"modalLogin\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: false}\">\r\n    <div class=\"modal-dialog cascading-modal\" role=\"document\">\r\n        <!--Content-->\r\n        <div class=\"modal-content\">\r\n\r\n            <!--Header-->\r\n            <div class=\"modal-header light-blue darken-3 white-text\">\r\n                <h4 class=\"title\">\r\n                    <i class=\"fa fa-user\"></i> Log in</h4>\r\n                <button type=\"button\" class=\"close waves-effect waves-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"loginform.hide()\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n            <!--Body-->\r\n            <div class=\"modal-body\">\r\n                    <label style=\"color:red;\" *ngIf=\"errormessageLogin\">Please Enter all mandatory fields</label>\r\n                <form id=\"loginCredentials\">\r\n                <div class=\"md-form form-sm\">\r\n                    <i class=\"fa fa-envelope prefix\"></i>\r\n                    <input type=\"text\" name=\"emailId\" [(ngModel)]=\"userLogin.emailId\" class=\"form-control required\" placeholder=\"Enter Email *\">\r\n                    \r\n                </div>\r\n\r\n                <div class=\"md-form form-sm\">\r\n                    <i class=\"fa fa-lock prefix\"></i>\r\n                    <input type=\"password\" name=\"password\" [(ngModel)]=\"userLogin.password\" class=\"form-control required\" placeholder=\"Enter Password *\">\r\n                    \r\n                </div>\r\n\r\n                <div class=\"text-center mt-2\">\r\n                    <button class=\"btn btn-info waves-light\" (click)=\"loginWithMail(userLogin)\" mdbWavesEffect>Log in\r\n                        <i class=\"fa fa-sign-in ml-1\"></i>\r\n                    </button>\r\n                </div>\r\n                </form>\r\n            </div>\r\n            <!--Footer-->\r\n            <div class=\"modal-footer\">\r\n                <div class=\"options text-center text-md-right mt-1\">\r\n                    <p>Not a member?\r\n                        <a (click)=\"loginform.hide();registerform.show()\">Sign Up</a>\r\n                    </p>\r\n                    <p class=\"socialAccount_popup\">Login with - \r\n                            <span (click)=\"signInWithFB()\" class=\"fa fa-facebook\"></span>\r\n                            <span (click)=\"signInWithLinkedIN()\" class=\"fa fa-linkedin\"></span>\r\n                            <span (click)=\"signInWithGoogle()\" class=\"fa fa-google-plus\"></span>\r\n                    </p>\r\n                </div>\r\n               \r\n            </div>\r\n        </div>\r\n        <!--/.Content-->\r\n    </div>\r\n</div>\r\n<!--Modal: Login Form-->\r\n\r\n<!--Modal: Register Form-->\r\n<div mdbModal #registerform=\"mdb-modal\" class=\"modal fade\" id=\"modalRegister1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: false}\">\r\n    <div class=\"modal-dialog cascading-modal\" role=\"document\">\r\n        <!--Content-->\r\n        <div class=\"modal-content\">\r\n\r\n            <!--Header-->\r\n            <div class=\"modal-header light-blue darken-3 white-text\">\r\n                <h4 class=\"title\">\r\n                    <i class=\"fa fa-user-plus\"></i> Register</h4>\r\n                <button type=\"button\" class=\"close waves-effect waves-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"registerform.hide()\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n            <!--Body-->\r\n            <div class=\"modal-body\">\r\n                    <label style=\"color:red;\" *ngIf=\"errormessageSignUp\">Please Enter all mandatory fields</label>\r\n                    <form id=\"signuPCredentials\">\r\n                <div class=\"md-form form-sm\">\r\n                    <i class=\"fa fa-user prefix\"></i>\r\n                    <input type=\"text\" name=\"userName\" appOnlyalphabets [(ngModel)]=\"userReg.userName\" class=\"form-control required\" placeholder=\"User Name *\">\r\n                </div>\r\n                <div class=\"md-form form-sm\">\r\n                    <i class=\"fa fa-envelope prefix\"></i>\r\n                    <input type=\"text\" name=\"emailId\" appEmailvalidation [(ngModel)]=\"userReg.emailId\" class=\"form-control required\" placeholder=\"Enter Email * \">\r\n                </div>\r\n\r\n                <div class=\"md-form form-sm\">\r\n                    <i class=\"fa fa-lock prefix\"></i>\r\n                    <input type=\"password\" name=\"password\" [(ngModel)]=\"userReg.password\" (blur)=\"confirmPassword()\"class=\"form-control required\" placeholder=\"Enter Password *\">\r\n                    \r\n                </div>\r\n\r\n                <div class=\"md-form form-sm\">\r\n                    <i class=\"fa fa-lock prefix\"></i>\r\n                    <input type=\"password\" name=\"confrmPswrd\" [(ngModel)]=\"userReg.confrmPswrd\" (blur)=\"confirmPassword()\"  class=\"form-control required\" placeholder=\"Confirm Password *\">\r\n                    \r\n                </div>\r\n\r\n                <div class=\"text-center mt-2\">\r\n                    <button class=\"btn btn-info waves-light\" (click)=\"signUpWithMail(userReg)\" mdbWavesEffect>Sign up\r\n                        <i class=\"fa fa-sign-in ml-1\"></i>\r\n                    </button>\r\n                </div>\r\n                </form>\r\n            \r\n            </div>\r\n            <!--Footer-->\r\n            <div class=\"modal-footer\">\r\n                <div class=\"options text-center text-md-right mt-1\">\r\n                    <p>Already have an account?\r\n                        <a (click)=\"registerform.hide();loginform.show()\">Log In</a>\r\n                    </p>\r\n                    <p class=\"socialAccount_popup\">Already have an account?\r\n                            <span (click)=\"signInWithFB()\" class=\"fa fa-facebook\"></span>\r\n                            <span (click)=\"signInWithLinkedIN()\" class=\"fa fa-linkedin\"></span>\r\n                            <span (click)=\"signInWithGoogle()\" class=\"fa fa-google-plus\"></span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--/.Content-->\r\n    </div>\r\n</div>\r\n<!--Modal: Register Form-->\r\n<div mdbModal #successMessage=\"mdb-modal\" class=\"modal fade right\" id=\"centralModalSm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: false}\">\r\n  <div class=\"modal-dialog modal-side modal-top-right modal-notify modal-warning\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h4 class=\"modal-title w-auto\" id=\"myModalLabel\">{{successMessagePopup}}</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"successMessage.hide()\">\r\n                  <span aria-hidden=\"true\" style=\"margin-left:10px;\">×</span>\r\n              </button>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<!-- Error  Pop Up-->\r\n<div mdbModal #errorMessage=\"mdb-modal\" class=\"modal fade right\" id=\"centralModalSm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: false}\">\r\n  <div class=\"modal-dialog modal-side modal-top-right\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h4 class=\"modal-title w-auto\" id=\"myModalLabel\">{{errorMessagePopup}}</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"errorMessage.hide()\">\r\n                  <span aria-hidden=\"true\">×</span>\r\n              </button>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comp_data_sharing_service__ = __webpack_require__("./src/app/comp-data-sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service_service__ = __webpack_require__("./src/app/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_social_login__ = __webpack_require__("./node_modules/ng4-social-login/ng4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(http, authService, commonService, router, dataShare) {
        var _this = this;
        this.http = http;
        this.authService = authService;
        this.commonService = commonService;
        this.router = router;
        this.dataShare = dataShare;
        this.userLogin = {};
        this.userReg = {};
        this.dataShare.isLoggedIn_listener().subscribe(function (m) {
            _this.isLoggedIn = true;
            _this.userName = m.userName;
        });
        this.dataShare.trigger_loginPopUp_listener().subscribe(function (m) {
            _this.loginModal.show();
        });
        this.dataShare.trigger_successMessagePopUp_listener().subscribe(function (m) {
            _this.successMessagePopup = m;
            _this.signUpModal.hide();
            _this.loginModal.hide();
            _this.successModal.show();
            _this.errorModal.hide();
        });
        this.dataShare.trigger_errorMessagePopUp_listener().subscribe(function (m) {
            // this.signUpModal.hide();
            // this.loginModal.hide();
            _this.errorMessagePopup = m;
            _this.errorModal.show();
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.signUpModal.hide();
        this.loginModal.hide();
        this.successModal.hide();
        this.errorModal.hide();
        this.activeClass = this.router.url;
        this.userName = 'k';
        if (localStorage.getItem('userToken')) {
            this.isLoggedIn = true;
            this.userName = localStorage.getItem('userName');
        }
    };
    HeaderComponent.prototype.makeActive = function (add, remove1, remove2) {
        document.getElementById(add).classList.add('active');
        document.getElementById(remove1).classList.remove('active');
        document.getElementById(remove2).classList.remove('active');
    };
    // loginPage(){
    //     this.router.navigate(['/login'])
    // }
    HeaderComponent.prototype.globalSearch = function (text) {
        var _this = this;
        var page = this.router.url;
        if (text != '') {
            if (page == '/coinlist') {
                if (localStorage.getItem('userToken')) {
                    this.http.post('http://54.165.36.80:5687/exchange/getusd', { search: text, from: 0, to: 1500 }).map(function (response) { return response.json(); }).subscribe(function (data) {
                        _this.dataShare.searchDataFilter(data);
                    });
                }
                else {
                    this.http.post('http://54.165.36.80:5687/exchange/getusd', { search: text }).map(function (response) {
                        return response.json();
                    }).subscribe(function (data) {
                        console.log(data);
                        _this.dataShare.searchDataFilter(data);
                    });
                }
            }
            else if (page == '/portfolio' && localStorage.getItem('userToken')) {
                this.http.post('http://54.165.36.80:5687/api/coins/getPortfolio', { search: text, token: localStorage.getItem('userToken') }).map(function (response) { return response.json(); }).subscribe(function (data) {
                    _this.dataShare.searchDataFilter(data);
                });
            }
            else if (page == '/exchange') {
                // this.http.get("http://54.165.36.80:5687/exchange/exchangeSummary", { search: text }).map(
                //   response => response.json()).subscribe(
                //   data => {
                this.dataShare.searchDataFilter(text);
                //   },
                // );
            }
        }
        else if (localStorage.getItem('userToken')) {
            if (this.router.url == '/coinlist') {
                this.dataShare.get_favAndNormal_coins_filter();
            }
            else if (this.router.url == '/portfolio') {
                this.dataShare.portfolio_Data_filter();
            }
        }
        else {
            if (this.router.url == '/coinlist') {
                this.dataShare.get_all_coins_filter();
            }
            else if (this.router.url == '/portfolio') {
                this.dataShare.portfolio_Data_filter();
            }
            else if (this.router.url == '/exchange') {
                this.dataShare.exchange_data_filter();
            }
        }
        // this.http.post('',{key : text}).map(response => response.json()).subscribe(data => {
        //  this.dataShare.searchDataFilter(data);
        // })
    };
    HeaderComponent.prototype.onlyAplhaBets = function (event) {
        var key = event.keyCode;
        if ((key >= 65 && key <= 90) || key == 8 || key == 32 || key == 9) {
            return true;
        }
        else {
            return false;
        }
    };
    HeaderComponent.prototype.goToLogin = function () {
        this.router.navigate(['/login'], { skipLocationChange: false });
    };
    HeaderComponent.prototype.logOut = function () {
        // let a = document.querySelector("#google_translate_element select");
        // console.log(a)
        // let options = a.getElementsByTagName('option');
        //  for(let i = 0;i <options.length; i++){
        //    if( 'en' == options[i].value){
        //          a.selectedIndex=i;
        //          a.dispatchEvent(new Event('change'));
        //    }
        //  }
        localStorage.removeItem('userToken');
        localStorage.removeItem('userName');
        this.dataShare.callLogOut_filter();
        this.dataShare.changeTo_default_theme_filter();
        this.dataShare.get_all_coins_filter();
        this.dataShare.clear_portfolio_Data_filter();
        this.isLoggedIn = false;
    };
    // signUpWithMail(userReg) {
    //   let error = this.commonService.userRegistration(userReg);
    //   this.errormessageSignUp = error ?  true : false;
    //   if(!error){
    //     this.loginModal.hide();
    //     this.signUpModal.hide();
    //     this.successMessagePopup = 'You have logged in successfully!';
    //     this.successModal.show();
    //   }
    //   else{
    //     this.errorModal.show();
    //   }
    // }
    // loginWithMail(userLogin) {
    //   let error = this.commonService.userLogin(userLogin);
    //   this.errormessageLogin = error ?  true : false;
    //   if(error){
    //     this.loginModal.hide();
    //     this.signUpModal.hide();
    //     this.successMessagePopup = 'You have logged in successfully!';
    //     this.successModal.show();
    //   }
    //   else{
    //     this.loginModal.hide();
    //     this.signUpModal.hide();
    //     this.errorModal.show();
    //   }
    // }
    HeaderComponent.prototype.signUpWithMail = function (userReg) {
        var status = this.commonService.checkEmpty('signuPCredentials');
        if (!status) {
            this.commonService.userRegistration(userReg);
        }
        else {
            this.errormessageSignUp = true;
        }
    };
    HeaderComponent.prototype.loginWithMail = function (userLogin) {
        var status = this.commonService.checkEmpty('loginCredentials');
        if (!status) {
            this.commonService.userLogin(userLogin);
        }
        else {
            this.errormessageLogin = true;
        }
    };
    HeaderComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_4_ng4_social_login__["GoogleLoginProvider"].PROVIDER_ID).then(function (userData) {
            _this.commonService.sociallogInAction(userData);
            _this.loginModal.hide();
            _this.signUpModal.hide();
            _this.successMessagePopup = 'You have logged in successfully!';
            _this.successModal.show();
        }, function (error) {
            _this.errorModal.show();
        });
    };
    HeaderComponent.prototype.signInWithFB = function () {
        var _this = this;
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_4_ng4_social_login__["FacebookLoginProvider"].PROVIDER_ID).then(function (userData) {
            _this.commonService.sociallogInAction(userData);
            _this.loginModal.hide();
            _this.signUpModal.hide();
            _this.successMessagePopup = 'You have logged in successfully!';
            _this.successModal.show();
        }, function (error) {
            _this.errorModal.show();
        });
    };
    HeaderComponent.prototype.signInWithLinkedIN = function () {
        var _this = this;
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_4_ng4_social_login__["LinkedinLoginProvider"].PROVIDER_ID).then(function (userData) {
            _this.commonService.sociallogInAction(userData);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loginform'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "loginModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('registerform'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "signUpModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('successMessage'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "successModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('errorMessage'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "errorModal", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/main/header/header.component.html"),
            styles: [__webpack_require__("./src/app/main/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4_ng4_social_login__["AuthService"], __WEBPACK_IMPORTED_MODULE_3__common_service_service__["a" /* CommonServiceService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__comp_data_sharing_service__["a" /* CompDataSharingService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-theme-header></app-theme-header>\r\n<app-content></app-content>\r\n<app-footer-nav></app-footer-nav>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(router) {
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('adminlogin') != 'true') {
            this.router.navigate(['']);
        }
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/main/main.component.html"),
            styles: [__webpack_require__("./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  signup works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/main/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/main/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/main/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/main/theme-header/theme-header.component.css":
/***/ (function(module, exports) {

module.exports = ".switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 24px;\r\n    margin-top: 6px;\r\n  }\r\n  \r\n  .switch input {display:none;}\r\n  \r\n  .slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n  \r\n  span.opt_arw span {\r\n  float: right;\r\n  text-align: right;\r\n  width: 100%;\r\n  position: absolute;\r\n  right: 0px;\r\n  font-size: 14px;\r\n  border-top: 1px solid #fff;\r\n  top: 0px;\r\n  line-height: 24px;\r\n}\r\n  \r\n  .opt_arw label {\r\n  margin: 0px;\r\n \r\n  font-size: 14px;\r\n  padding-left: 4px;\r\n  line-height: 28px;\r\n}\r\n  \r\n  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 24px;\r\n    width: 24px;\r\n    right: 35px;\r\n    bottom: 0px;\r\n    background-color: #32dfdd;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n  \r\n  input:checked + .slider {\r\n    background-color: #dadada;\r\n  }\r\n  \r\n  input:focus + .slider {\r\n    -webkit-box-shadow: 0 0 1px #2196F3;\r\n            box-shadow: 0 0 1px #2196F3;\r\n  }\r\n  \r\n  input:checked + .slider:before {\r\n    -webkit-transform: translateX(36px);\r\n    transform: translateX(36px);\r\n  }\r\n  \r\n  /* Rounded sliders */\r\n  \r\n  .slider.round {\r\n    border-radius: 34px;\r\n  }\r\n  \r\n  .slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .nowrap_text{\r\n    white-space: nowrap;\r\n  }\r\n  \r\n  .customized-coloum-label{\r\n    padding: 0;\r\n    text-align: center;\r\n    width: 100%;\r\n    display: inline-block;\r\n  }"

/***/ }),

/***/ "./src/app/main/theme-header/theme-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"theme_color_section\" *ngIf=\"hideThemesection\">\r\n    <div class=\"container\">\r\n        <div class=\"sub_theme\">\r\n            <ul>\r\n                <li>\r\n                    <a (click)=\"refreshrate.show()\">\r\n                        <img src=\"/assets/images/price_interval.png\">\r\n                        <span>Refresh Rate</span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a (click)=\"nightmode()\">\r\n                        <img src=\"/assets/images/black_out_color.png\" />\r\n                        <span>Night Mode</span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a>\r\n                        <label class=\"switch\">\r\n                            <input type=\"checkbox\" checked (click)=\"siteColor()\">\r\n                            <span class=\"slider round\"></span>\r\n                        </label>\r\n                        <!-- <img src=\"/assets/images/site_color.png\"/>-->\r\n                        <span>Site Color</span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <span class=\"customize_call nowrap_text\" (click)=\"customize.show()\" mdbWavesEffect>\r\n                        <i class=\"fa fa-columns\" aria-hidden=\"true\"></i>Customize Columns</span>\r\n                </li>\r\n            </ul>\r\n\r\n            <div class=\"sel-term\">\r\n\r\n                <div class=\"in_sel-term1\">\r\n\r\n                    <div class=\"opt_tlt\">\r\n                        <span>{{currencyText}}</span>\r\n                        <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                    <div class=\"opt_lst\">\r\n\r\n                        <span class=\"opt_arw\" [class.active]=\"currencyorder === 'id'\" (click)=\"sort('id')\">\r\n                            <label>Sort </label>\r\n                            <span [hidden]=\"reverse\">▼</span>\r\n                            <span [hidden]=\"!reverse\">▲</span>\r\n                        </span>\r\n                        <div *ngFor=\"let ctL of currencyTypeList | orderBy: key : reverse ;\">\r\n                            <div class=\"opt_tlt\" (click)=\"selectCurrency(ctL.id)\">\r\n                                {{ ctL.id }}</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"in_sel-term1\">\r\n                    <!-- <div class=\"opt_tlt\">\r\n                        <img [src]=\"languageImg\" />\r\n                        <span>{{languageText}}</span>\r\n                        <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                    <div class=\"opt_lst\">\r\n\r\n                        <span class=\"opt_arw\" (click)=\"sort('languagename')\">\r\n                            <label>sort</label>\r\n                            <span [hidden]=\"reverse\">▼</span>\r\n                            <span [hidden]=\"!reverse\">▲</span>\r\n\r\n                        </span>\r\n                        <div *ngFor=\"let row of collection | orderBy: key :reverse\">\r\n\r\n                            <div class=\"opt_tlt\" (click)=\"selectLanguage(row.languagename,row.languageimage)\">\r\n                                <img src={{row.languageimage}}> {{ row.languagename }}</div>\r\n\r\n\r\n                        </div>\r\n                    </div> -->\r\n                    <div id=\"google_translate_element\"></div>\r\n\r\n                </div>\r\n                <button type=\"button\" class=\"button_icon\" (click)=\"saveThemeStructure()\">\r\n                    <i class=\"fa fa-save waves-light \" aria-hidden=\"true\"></i>Save</button>\r\n                <input type=\"search\" placeholder=\"\" class=\"search_icon\" />\r\n                <span class=\"close_icon\">\r\n                    <i (click)=\"themeSectionHide()\" class=\"fa fa-close\" aria-hidden=\"true\"></i>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Refresh Rate -->\r\n\r\n<div mdbModal #refreshrate=\"mdb-modal\" class=\"modal fade\" id=\"centralModalSuccess\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog cascading-modal\" role=\"document\">\r\n        <!--Content-->\r\n        <div class=\"modal-content\">\r\n            <!--Header-->\r\n            <div class=\"modal-header light-blue darken-3 white-text\">\r\n                <h4 class=\"title\"> Refresh Rate</h4>\r\n                <button type=\"button\" class=\"close waves-effect waves-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"refreshrate.hide()\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n            <!--Body-->\r\n            <div class=\"modal-body refresh_rate\">\r\n                <!-- <p class=\"siteRefreshText\">Site will refresh on every {{changeRefreshRate}} </p> -->\r\n                <div (click)=\"refreshRateChange()\">\r\n                    <nouislider [config]=\"someRange2config\" [tooltips]=\"[ false]\" [(ngModel)]=\"someRange\"></nouislider>\r\n                </div>\r\n\r\n            </div>\r\n            <!--Footer-->\r\n            <div class=\"modal-footer\">\r\n                <button *ngIf=\"!enableRefreshBtn\" type=\"button\" class=\"btn btn-outline-info float-left\" data-dismiss=\"modal\" (click)=\"noRefresh()\"\r\n                    mdbWavesEffect>Stop Refresh</button>\r\n                <button *ngIf=\"enableRefreshBtn\" type=\"button\" class=\"btn btn-outline-info float-left\" data-dismiss=\"modal\" (click)=\"doRefresh()\"\r\n                    mdbWavesEffect>Start Refresh</button>\r\n            </div>\r\n        </div>\r\n        <!--/.Content-->\r\n    </div>\r\n</div>\r\n<!-- Refresh Rate -->\r\n\r\n\r\n<!-- Customize -->\r\n\r\n\r\n\r\n\r\n\r\n<!--Modal: customize column-->\r\n<div mdbModal #customize=\"mdb-modal\" class=\"modal fade\" id=\"modalRegister3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog cascading-modal\" role=\"document\">\r\n        <!--Content-->\r\n        <div class=\"modal-content\">\r\n\r\n            <!--Header-->\r\n            <div class=\"modal-header light-blue darken-3 white-text\">\r\n                <h4 class=\"title\">\r\n                    <i class=\"fa fa-columns\" aria-hidden=\"true\"></i> Customize Columns</h4>\r\n                <button type=\"button\" class=\"close waves-effect waves-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"customize.hide()\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n            <!--Body-->\r\n            <div class=\"modal-body customize_main\">\r\n\r\n                <div class=\"customize_col\">\r\n\r\n                    <div class=\"options_list\">\r\n                        <div class=\"desktop_options col-md-4 col-lg-4 col-sm-12 col-xs-12\">\r\n                            <span class=\"lst_tlt\">Desktop</span>\r\n                            <!-- <div class=\"\" *ngIf=\"coinlist_desktop\"> -->\r\n                                <div class=\"\">\r\n                                <span class=\"lst_tlt customized-coloum-label\">Coinlist</span>\r\n                                <div class=\"form-check\" *ngFor=\"let desklist of desktoplists\">\r\n                                    <input class=\"form-check-input\" [(ngModel)]=\"desklist.ischecked\" (change)=\"coulumnCustomization({'desktop': {'coinlist': desktoplists,'portfolio': desktopPlist},'mobile': {'coinlist': mobilelists,'portfolio': mobilePlist},'app': {'coinlist': appList,'portfolio': appPList}},desktoplists)\"\r\n                                        type=\"checkbox\" name=\"listsgroup\">\r\n                                    <label class=\"form-check-label\">{{desklist.label}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"\" *ngIf=\"portfolio_desktop\"> -->\r\n                                <div class=\"\">\r\n                                <span class=\"lst_tlt customized-coloum-label\">Portfolio</span>\r\n                                <div class=\"form-check\" *ngFor=\"let desklist of desktopPlist\">\r\n                                    <input class=\"form-check-input\" [(ngModel)]=\"desklist.ischecked\" (change)=\"coulumnCustomization({'desktop': {'coinlist': desktoplists,'portfolio': desktopPlist},'mobile': {'coinlist': mobilelists,'portfolio': mobilePlist},'app': {'coinlist': appList,'portfolio': appPList}},desktoplists)\"\r\n                                        type=\"checkbox\" name=\"listsgroup\">\r\n                                    <label class=\"form-check-label\">{{desklist.label}}</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"mobile_options col-md-4 col-lg-4 col-sm-12 col-xs-12\">\r\n                           \r\n                            <span class=\"lst_tlt\">Mobile</span>\r\n                         \r\n                                <div class=\"\">\r\n                            <span class=\"lst_tlt customized-coloum-label\">Coinlist</span>\r\n                            <div class=\"form-check\" *ngFor=\"let moblist of mobilelists\">\r\n                                <input class=\"form-check-input\" [(ngModel)]=\"moblist.ischecked\" (change)=\"coulumnCustomization({'desktop': {'coinlist': desktoplists,'portfolio': desktopPlist},'mobile': {'coinlist': mobilelists,'portfolio': mobilePlist},'app': {'coinlist': appList,'portfolio': appPList}},mobilelists)\"\r\n                                    type=\"checkbox\" name=\"listsgroup\">\r\n                                <label class=\"form-check-label\">{{moblist.label}}</label>\r\n                            </div></div>\r\n                           \r\n                                    <div class=\"\">\r\n                            <span class=\"lst_tlt customized-coloum-label\">Portfolio</span>\r\n                            <div class=\"form-check\" *ngFor=\"let moblist of mobilePlist\">\r\n                                <input class=\"form-check-input\" [(ngModel)]=\"moblist.ischecked\" (change)=\"coulumnCustomization({'desktop': {'coinlist': desktoplists,'portfolio': desktopPlist},'mobile': {'coinlist': mobilelists,'portfolio': mobilePlist},'app': {'coinlist': appList,'portfolio': appPList}},mobilelists)\"\r\n                                    type=\"checkbox\" name=\"listsgroup\">\r\n                                <label class=\"form-check-label\">{{moblist.label}}</label>\r\n                            </div>\r\n                        </div>\r\n                        </div>\r\n                        <div class=\"app_options col-md-4 col-lg-4 col-sm-12 col-xs-12\">\r\n                            \r\n                            <span class=\"lst_tlt\">App</span>\r\n                          \r\n                                    <div class=\"\">\r\n                            <span class=\"lst_tlt customized-coloum-label\">Coinlist</span>\r\n                            <div class=\"form-check\" *ngFor=\"let app of appList\">\r\n                                <input class=\"form-check-input\" [(ngModel)]=\"app.ischecked\" (change)=\"coulumnCustomization({'desktop': {'coinlist': desktoplists,'portfolio': desktopPlist},'mobile': {'coinlist': mobilelists,'portfolio': mobilePlist},'app': {'coinlist': appList,'portfolio': appPList}},appList)\"\r\n                                    type=\"checkbox\" name=\"listsgroup\">\r\n                                <label class=\"form-check-label\">{{app.label}}</label>\r\n                            </div></div>\r\n                           \r\n                                    <div class=\"\">\r\n                            <span class=\"lst_tlt customized-coloum-label\">Portfolio</span>\r\n                            <div class=\"form-check\" *ngFor=\"let app of appPList\">\r\n                                <input class=\"form-check-input\" [(ngModel)]=\"app.ischecked\" (change)=\"coulumnCustomization({'desktop': {'coinlist': desktoplists,'portfolio': desktopPlist},'mobile': {'coinlist': mobilelists,'portfolio': mobilePlist},'app': {'coinlist': appList,'portfolio': appPList}},appList)\"\r\n                                    type=\"checkbox\" name=\"listsgroup\">\r\n                                <label class=\"form-check-label\">{{app.label}}</label>\r\n                            </div>\r\n                        </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--/.Content-->\r\n    </div>\r\n</div>\r\n<!--Modal: Customize column Form-->\r\n<!-- popup -->"

/***/ }),

/***/ "./src/app/main/theme-header/theme-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_order_pipe__ = __webpack_require__("./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comp_data_sharing_service__ = __webpack_require__("./src/app/comp-data-sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__ = __webpack_require__("./node_modules/angular-bootstrap-md/utils/facade/browser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_service_service__ = __webpack_require__("./src/app/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ThemeHeaderComponent = /** @class */ (function () {
    function ThemeHeaderComponent(router, cookieService, commonService, http, orderPipe, changeGraphTheme) {
        var _this = this;
        this.router = router;
        this.cookieService = cookieService;
        this.commonService = commonService;
        this.http = http;
        this.orderPipe = orderPipe;
        this.changeGraphTheme = changeGraphTheme;
        // @ViewChild('registerform') public signUpModal;
        this.order = 'info.languagename';
        this.currencyorder = 'info.currencyname';
        // reverse: boolean = false;
        this.collection = [
            { languagename: 'ENG', languageimage: 'assets/images/united-kingdom.png' },
            { languagename: 'FRE', languageimage: 'assets/images/france.png' }
        ];
        this.collection1 = [
            { currencyname: 'USD', currencyimage: 'assets/images/dollar.png' },
            { currencyname: 'INR', currencyimage: 'assets/images/inr.png' },
        ];
        this.themeSettings = {};
        // public coinlist_desktop;
        // public coinlist_mobile;
        // public coinlist_app;
        // public portfolio_desktop;
        // public portfolio_mobile;
        // public portfolio_app;
        this.userLogin = {};
        this.userReg = {};
        this.key = '';
        this.reverse = false;
        this.changeGraphTheme.changeTo_default_theme_listener().subscribe(function () {
            _this.defaultTheme();
        });
        this.changeGraphTheme.userProfile_listener().subscribe(function () {
            _this.userTheme();
        });
    }
    ThemeHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if(this.router.url === '/coinlist'){
        //   this.coinlist_desktop = true;
        //   this.coinlist_app = true;
        //   this.coinlist_mobile = true;
        //   this.portfolio_app = false;
        //   this.portfolio_desktop = false;
        //   this.portfolio_mobile = false;
        // }
        // else if(this.router.url === '/portfolio'){
        //   this.portfolio_app = true;
        //   this.portfolio_desktop = true;
        //   this.portfolio_mobile = true;
        //   this.coinlist_desktop = false;
        //   this.coinlist_app = false;
        //   this.coinlist_mobile = false;
        // }
        this.loadScript();
        this.popUpEnabled = true;
        this.themeBlack = {
            'volumePaneSize': "large",
            'editorFontsList': ['Verdana', 'Courier New', 'Times New Roman', 'Arial'],
            'paneProperties.background': "#000",
            'paneProperties.vertGridProperties.color': "#000",
            ' paneProperties.vertGridProperties.style': 0,
            'paneProperties.horzGridProperties.color': "#000",
            'paneProperties.horzGridProperties.style': 0,
            'paneProperties.crossHairProperties.color': "#989898",
            'paneProperties.crossHairProperties.width': 1,
            'paneProperties.crossHairProperties.style': 2,
            'paneProperties.topMargin': 5,
            'paneProperties.bottomMargin': 5,
            'paneProperties.leftAxisProperties.autoScale': true,
            'paneProperties.leftAxisProperties.autoScaleDisabled': false,
            'paneProperties.leftAxisProperties.percentage': false,
            'paneProperties.leftAxisProperties.percentageDisabled': false,
            'paneProperties.leftAxisProperties.log': false,
            'paneProperties.leftAxisProperties.logDisabled': false,
            'paneProperties.leftAxisProperties.alignLabels': true,
            'scalesProperties.showLeftScale ': false,
            'scalesProperties.showRightScale ': true,
            'scalesProperties.backgroundColor ': "#ffffff",
            'scalesProperties.fontSize': 11,
            'scalesProperties.lineColor ': "#555",
            'scalesProperties.textColor ': "#555",
            'scalesProperties.scaleSeriesOnly ': false,
            'scalesProperties.showSeriesLastValue': true,
            'scalesProperties.showSeriesPrevCloseValue': false,
            'scalesProperties.showStudyLastValue': false,
            'scalesProperties.showStudyPlotLabels': false,
            'scalesProperties.showSymbolLabels': false,
            'timeScale.rightOffset': 5,
            'timezone': "Itc/UTC",
            'mainSeriesProperties.style': 1,
            'mainSeriesProperties.showCountdown': true,
            'mainSeriesProperties.visible': true,
            'mainSeriesProperties.showPriceLine': true,
            'mainSeriesProperties.priceLineWidth': 1,
            'mainSeriesProperties.lockScale': false,
            'mainSeriesProperties.minTick': "default",
            'mainSeriesProperties.priceAxisProperties.autoScale': true,
            'mainSeriesProperties.priceAxisProperties.autoScaleDisabled': false,
            'mainSeriesProperties.priceAxisProperties.percentage': false,
            'mainSeriesProperties.priceAxisProperties.percentageDisabled': false,
            'mainSeriesProperties.priceAxisProperties.log': false,
            'mainSeriesProperties.priceAxisProperties.logDisabled': false,
            'symbolWatermarkProperties.color ': "rgba(0, 0, 0, 0.00)",
            'mainSeriesProperties.candleStyle.upColor': "#1abc9c",
            'mainSeriesProperties.candleStyle.downColor': "#000",
            'mainSeriesProperties.candleStyle.drawWick': true,
            'mainSeriesProperties.candleStyle.drawBorder': true,
            'mainSeriesProperties.candleStyle.borderColor': "#1abc9c",
            'mainSeriesProperties.candleStyle.borderUpColor': "#9b59b6",
            'mainSeriesProperties.candleStyle.borderDownColor': "#9b59b6",
            'mainSeriesProperties.candleStyle.wickUpColor': 'rgba( 115, 115, 117, 1)',
            'mainSeriesProperties.candleStyle.wickDownColor': 'rgba( 115, 115, 117, 1)',
            'mainSeriesProperties.candleStyle.barColorsOnPrevClose': false,
            'mainSeriesProperties.hollowCandleStyle.upColor': "green",
            'mainSeriesProperties.hollowCandleStyle.downColor': "#000",
            'mainSeriesProperties.hollowCandleStyle.drawWick': true,
            'mainSeriesProperties.hollowCandleStyle.drawBorder': true,
            'mainSeriesProperties.hollowCandleStyle.borderColor': "#378658",
            'mainSeriesProperties.hollowCandleStyle.borderUpColor': "#000",
            'mainSeriesProperties.hollowCandleStyle.borderDownColor': "green",
            'mainSeriesProperties.hollowCandleStyle.wickColor': "#737375",
            "symbolWatermarkProperties.transparency": 100,
            "mainSeriesProperties.lineStyle.color": "yellow",
            "mainSeriesProperties.lineStyle.linestyle": 0,
            "mainSeriesProperties.lineStyle.linewidth": 1,
            "mainSeriesProperties.lineStyle.priceSource": "close",
            "mainSeriesProperties.barStyle.upColor": "#6ba583",
            "mainSeriesProperties.barStyle.downColor": "#d75442",
            "mainSeriesProperties.barStyle.barColorsOnPrevClose": false,
            "mainSeriesProperties.barStyle.dontDrawOpen": false,
        };
        this.themeWhite = {
            'volumePaneSize': "large",
            'editorFontsList': ['Verdana', 'Courier New', 'Times New Roman', 'Arial'],
            'paneProperties.background': "#fff",
            'paneProperties.vertGridProperties.color': "#E6E6E6",
            ' paneProperties.vertGridProperties.style': 0,
            'paneProperties.horzGridProperties.color': "#E6E6E6",
            'paneProperties.horzGridProperties.style': 0,
            'paneProperties.crossHairProperties.color': "#989898",
            'paneProperties.crossHairProperties.width': 1,
            'paneProperties.crossHairProperties.style': 2,
            'paneProperties.topMargin': 5,
            'paneProperties.bottomMargin': 5,
            'paneProperties.leftAxisProperties.autoScale': true,
            'paneProperties.leftAxisProperties.autoScaleDisabled': false,
            'paneProperties.leftAxisProperties.percentage': false,
            'paneProperties.leftAxisProperties.percentageDisabled': false,
            'paneProperties.leftAxisProperties.log': false,
            'paneProperties.leftAxisProperties.logDisabled': false,
            'paneProperties.leftAxisProperties.alignLabels': true,
            'scalesProperties.showLeftScale ': false,
            'scalesProperties.showRightScale ': true,
            'scalesProperties.backgroundColor ': "#ffffff",
            'scalesProperties.fontSize': 11,
            'scalesProperties.lineColor ': "#555",
            'scalesProperties.textColor ': "#555",
            'scalesProperties.scaleSeriesOnly ': false,
            'scalesProperties.showSeriesLastValue': true,
            'scalesProperties.showSeriesPrevCloseValue': false,
            'scalesProperties.showStudyLastValue': false,
            'scalesProperties.showStudyPlotLabels': false,
            'scalesProperties.showSymbolLabels': false,
            'timeScale.rightOffset': 5,
            'timezone': "Etc/UTC",
            'mainSeriesProperties.style': 1,
            'mainSeriesProperties.showCountdown': true,
            'mainSeriesProperties.visible': true,
            'mainSeriesProperties.showPriceLine': true,
            'mainSeriesProperties.priceLineWidth': 1,
            'mainSeriesProperties.lockScale': false,
            'mainSeriesProperties.minTick': "default",
            'mainSeriesProperties.priceAxisProperties.autoScale': true,
            'mainSeriesProperties.priceAxisProperties.autoScaleDisabled': false,
            'mainSeriesProperties.priceAxisProperties.percentage': false,
            'mainSeriesProperties.priceAxisProperties.percentageDisabled': false,
            'mainSeriesProperties.priceAxisProperties.log': false,
            'mainSeriesProperties.priceAxisProperties.logDisabled': false,
            'symbolWatermarkProperties.color ': "rgba(0, 0, 0, 0.00)",
            'mainSeriesProperties.candleStyle.upColor': "#53b987",
            'mainSeriesProperties.candleStyle.downColor': "#eb4d5c",
            'mainSeriesProperties.candleStyle.drawWick': true,
            'mainSeriesProperties.candleStyle.drawBorder': true,
            'mainSeriesProperties.candleStyle.borderColor': "#53b987",
            'mainSeriesProperties.candleStyle.borderUpColor': "#53b987",
            'mainSeriesProperties.candleStyle.borderDownColor': "#eb4d5c",
            'mainSeriesProperties.candleStyle.wickUpColor': 'rgba( 115, 115, 117, 1)',
            'mainSeriesProperties.candleStyle.wickDownColor': 'rgba( 115, 115, 117, 1)',
            'mainSeriesProperties.candleStyle.barColorsOnPrevClose': false,
            'mainSeriesProperties.hollowCandleStyle.upColor': "#6ba583",
            'mainSeriesProperties.hollowCandleStyle.downColor': "#d75442",
            'mainSeriesProperties.hollowCandleStyle.drawWick': true,
            'mainSeriesProperties.hollowCandleStyle.drawBorder': true,
            'mainSeriesProperties.hollowCandleStyle.borderColor': "#378658",
            'mainSeriesProperties.hollowCandleStyle.borderUpColor': "#225437",
            'mainSeriesProperties.hollowCandleStyle.borderDownColor': "#5b1a13",
            'mainSeriesProperties.hollowCandleStyle.wickColor': "#737375",
            "mainSeriesProperties.lineStyle.color": "rgb(60, 120, 216)",
            "mainSeriesProperties.lineStyle.linestyle": 0,
            "mainSeriesProperties.lineStyle.linewidth": 1,
            "mainSeriesProperties.lineStyle.priceSource": "close",
            "mainSeriesProperties.barStyle.upColor": "#6ba583",
            "mainSeriesProperties.barStyle.downColor": "#d75442",
            "mainSeriesProperties.barStyle.barColorsOnPrevClose": false,
            "mainSeriesProperties.barStyle.dontDrawOpen": false,
        };
        this.volume_white = {
            "volume.volume.color.0": "#cbeadb",
            "volume.volume.color.1": "#f9c9ce",
            "volume.volume.transparency": 70,
            "volume.volume ma.color": "#FF0000",
            "volume.volume ma.transparency": 30,
            "volume.volume ma.linewidth": 5,
            "volume.show ma": true,
            "bollinger bands.median.color": "#33FF88",
            "bollinger bands.upper.linewidth": 7
        };
        this.volume_black = {
            "volume.volume.color.0": "#fff",
            "volume.volume.color.1": "#cccccc",
            "volume.volume.transparency": 100,
            "volume.volume ma.color": "#FF0000",
            "volume.volume ma.transparency": 100,
            "volume.volume ma.linewidth": 5,
            "volume.show ma": true,
            "bollinger bands.median.color": "#33FF88",
            "bollinger bands.upper.linewidth": 7
        };
        this.currencyText = 'USD';
        this.enableRefreshBtn = false;
        this.passData2Comp = {};
        this.someRange = 1;
        if (localStorage.getItem('userToken')) {
            this.userTheme();
        }
        else {
            this.defaultTheme();
        }
        this.http.get('http://54.165.36.80:5687/getCurrencies').map(function (response) { return response.json(); }).subscribe(function (data) {
            console.log(data);
            _this.currencyTypeList = data;
        });
        this.sort('currencyname');
        this.sort('languagename');
        this.someRange2config = {
            snap: true,
            animate: true,
            range: {
                'min': 1,
                '25%': 5,
                '50%': 30,
                '75%': 60,
                'max': 300
            },
            pips: {
                mode: 'steps',
                density: 5
            }
        };
        this.changeGraphTheme.currentMessage.subscribe(function (message) { return _this.graphThemeColor = message; });
        this.currencyImg = '/assets/images/dollar.png';
        this.languageText = 'ENG';
        this.languageImg = '/assets/images/united-kingdom.png';
        // this.hideThemesection = true;
        this.hideOptionsection = false;
        this.hideLanguageSection = false;
        if (sessionStorage.getItem('hideThemesection')) {
            this.hideThemesection = JSON.parse(sessionStorage.getItem('hideThemesection'));
        }
        else {
            this.hideThemesection = true;
            sessionStorage.setItem('hideThemesection', 'true');
        }
        setTimeout(function () {
            var valueArray = ['1 Sec', '5 Sec', '30 Sec ', '1 Min', '5 Min'];
            var arrayL = __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementsByClassName('noUi-value');
            for (var m = 0; m < valueArray.length; m++) {
                arrayL[m].textContent = valueArray[m];
            }
        }, 1000);
        // this.changeGraphTheme.customizeColumns_filter(this.desktoplists);
        setTimeout(function () {
            var langDropDown = __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementsByClassName("goog-te-combo")[0];
            langDropDown.addEventListener("change", _this.changeSiteLanguage());
        }, 3000);
    };
    ThemeHeaderComponent.prototype.loadScript = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementById('google_translate_element'));
        if (__WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementById('google_translate_element')) {
            alert();
        }
        else {
            var body = __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__["a" /* document */].body;
            var script = __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__["a" /* document */].createElement('script');
            script.innerHTML = '';
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            script.defer = true;
            body.appendChild(script);
            var scriptLoad = __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__["a" /* document */].createElement('script');
            scriptLoad.innerHTML = "function googleTranslateElementInit() {new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');}";
            body.appendChild(scriptLoad);
        }
    };
    ThemeHeaderComponent.prototype.siteColor = function () {
        var siteColor;
        var body = __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementsByTagName('body')[0];
        var currentList = body.classList.contains('black-theme');
        if (currentList) {
            this.passData2Comp.theme = this.themeWhite;
            this.passData2Comp.volumeTheme = this.volume_white;
            this.passData2Comp.toolsBg = '#fff';
            this.changeGraphTheme.changeMessage(this.passData2Comp);
            this.changeGraphTheme.chnageTheme_of_amchart_filter('white');
            body.classList.remove('black-theme');
            body.classList.add('white-theme');
            siteColor = 'white-theme';
        }
        else {
            this.passData2Comp.theme = this.themeBlack;
            this.passData2Comp.volumeTheme = this.volume_black;
            this.passData2Comp.toolsBg = '#000';
            this.changeGraphTheme.changeMessage(this.passData2Comp);
            this.changeGraphTheme.chnageTheme_of_amchart_filter('black');
            body.classList.add('black-theme');
            body.classList.remove('white-theme');
            siteColor = 'black-theme';
        }
        this.themeSettings['siteColor'] = siteColor;
    };
    ThemeHeaderComponent.prototype.themeSectionHide = function () {
        sessionStorage.setItem('hideThemesection', 'false');
        this.hideThemesection = JSON.parse(sessionStorage.getItem('hideThemesection'));
    };
    ThemeHeaderComponent.prototype.CurrencySelect = function () {
        this.hideOptionsection = !this.hideOptionsection;
    };
    ThemeHeaderComponent.prototype.LanguageSelect = function () {
        this.hideLanguageSection = !this.hideLanguageSection;
    };
    ThemeHeaderComponent.prototype.nightmode = function () {
        var body = __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementsByTagName('body')[0];
        var night_mode;
        if (!(body.classList.contains('night_mode'))) {
            body.classList.add('night_mode');
            night_mode = 'night_mode';
        }
        else {
            body.classList.remove('night_mode');
            night_mode = 'day_mode';
        }
        this.themeSettings['nightMode'] = night_mode;
        this.forceLogin();
    };
    ThemeHeaderComponent.prototype.selectCurrency = function (text, image) {
        var _this = this;
        this.http.post('http://54.165.36.80:5687/currencyConverter', { converter: text }).map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.currencyvalue = data.rate.toFixed(2);
            localStorage.setItem('currencyRate', _this.currencyvalue);
            _this.changeGraphTheme.currencyConverter_filter(_this.currencyvalue);
        });
        this.currencyText = '';
        this.currencyText = text;
        this.currencyImg = image;
        this.hideOptionsection = !this.hideOptionsection;
        this.themeSettings['currencyType'] = text;
        this.forceLogin();
    };
    ThemeHeaderComponent.prototype.selectLanguage = function (text, image) {
        this.languageText = text;
        //this.currencyIcon = icon;
        this.languageImg = image;
        this.hideLanguageSection = !this.hideLanguageSection;
    };
    ThemeHeaderComponent.prototype.refreshRateChange = function () {
        this.enableRefreshBtn = false;
        this.changeRefreshRate = __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementsByClassName('noUi-handle')[0].getAttribute('aria-valuetext').toString();
        this.themeSettings['refreshRate'] = this.changeRefreshRate;
        this.forceLogin();
        if (this.changeRefreshRate > 59) {
            this.changeRefreshRate = (this.changeRefreshRate / 60) + ' Min';
        }
        else {
            this.changeRefreshRate = this.changeRefreshRate + ' Sec';
        }
        __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementsByClassName('noUi-tooltip')[0].innerHTML = this.changeRefreshRate;
        this.changeGraphTheme.refreshRateFilter(__WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementsByClassName('noUi-handle')[0].getAttribute('aria-valuetext'));
    };
    ThemeHeaderComponent.prototype.noRefresh = function () {
        this.changeGraphTheme.refreshRateFilter('false');
        this.enableRefreshBtn = true;
    };
    ThemeHeaderComponent.prototype.doRefresh = function () {
        this.enableRefreshBtn = false;
        this.changeGraphTheme.refreshRateFilter(this.changeRefreshRate);
    };
    ThemeHeaderComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    ThemeHeaderComponent.prototype.coulumnCustomization = function (colList, list) {
        this.changeGraphTheme.customizeColumns_filter(colList);
        this.themeSettings['customizeColumns'] = colList;
        this.forceLogin();
    };
    ThemeHeaderComponent.prototype.saveThemeStructure = function () {
        var _this = this;
        if (localStorage.getItem('userToken')) {
            if (this.themeSettings['customizeColumns']) {
                var list = JSON.stringify(this.themeSettings['customizeColumns']);
                localStorage.setItem('customizeColumns', list);
            }
            if (this.themeSettings['night_mode']) {
                var nightM = this.themeSettings['night_mode'];
                localStorage.setItem('nightM', nightM);
            }
            if (this.themeSettings['siteColor']) {
                var siteC = this.themeSettings['siteColor'];
                localStorage.setItem('siteC', siteC);
            }
            this.themeSettings['token'] = localStorage.getItem('userToken');
            var siteLang = __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementsByClassName("goog-te-combo")[0].value;
            this.themeSettings['siteLanguage'] = siteLang;
            this.http.put('http://54.165.36.80:5687/api/userSetting/update', this.themeSettings).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.changeGraphTheme.trigger_successMessagePopUp_filter('Your Theme Updated Successfully !');
            }, function (error) {
                _this.changeGraphTheme.trigger_errorMessagePopUp_filter(error.error);
            });
        }
        else {
            this.changeGraphTheme.trigger_loginPopUp_filter();
        }
    };
    ThemeHeaderComponent.prototype.changeSiteLanguage = function () {
    };
    ThemeHeaderComponent.prototype.signUpWithMail = function (userReg) {
        this.commonService.userRegistration(userReg);
        this.loginModal.hide();
        this.signUpModal.hide();
    };
    ThemeHeaderComponent.prototype.loginWithMail = function (userLogin) {
        this.commonService.userLogin(userLogin);
        this.loginModal.hide();
        this.signUpModal.hide();
    };
    ThemeHeaderComponent.prototype.userTheme = function () {
        var _this = this;
        console.log('User Theme');
        var tokenV = localStorage.getItem('userToken');
        this.http.post('http://54.165.36.80:5687/api/userSetting/getUserData', { token: tokenV }).map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.desktoplists = data.customizeColumns.desktop.coinlist;
            _this.desktopPlist = data.customizeColumns.desktop.portfolio;
            _this.mobilelists = data.customizeColumns.mobile.coinlist;
            _this.mobilePlist = data.customizeColumns.mobile.portfolio;
            _this.appList = data.customizeColumns.app.coinlist;
            _this.appPList = data.customizeColumns.app.portfolio;
            _this.colorOfSite = data.siteColor;
            _this.changeRefreshRate = data.refreshRate;
            _this.someRange = data.refreshRate;
            _this.currencyText = data.currencyType;
            _this.currencyvalue = data.currency;
            localStorage.setItem('currencyRate', data.currency);
            localStorage.setItem('customizeColumns', data.customizeColumns);
            var body = __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementsByTagName('body')[0];
            body.classList.remove('black-theme');
            var a = __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__["a" /* document */].querySelector("#google_translate_element select");
            console.log(a);
            var options = a.getElementsByTagName('option');
            for (var i = 0; i < options.length; i++) {
                if (data.siteLanguage == options[i].value) {
                    a.selectedIndex = i;
                    a.dispatchEvent(new Event('change'));
                }
            }
            body.classList.add(data.siteColor);
            if (data.siteColor == 'white-theme') {
                _this.passData2Comp['theme'] = _this.themeWhite;
                _this.passData2Comp['refreshrate'] = _this.refreshDefault;
                _this.passData2Comp['volumeTheme'] = _this.volume_white;
                _this.passData2Comp['toolsBg'] = '#fff';
                _this.changeGraphTheme.user_theme_filter(_this.passData2Comp);
                _this.changeGraphTheme.changeMessage(_this.passData2Comp);
            }
            else {
                _this.passData2Comp['theme'] = _this.themeBlack;
                _this.passData2Comp['refreshrate'] = _this.refreshDefault;
                _this.passData2Comp['volumeTheme'] = _this.volume_black;
                _this.passData2Comp['toolsBg'] = '#000';
                _this.changeGraphTheme.user_theme_filter(_this.passData2Comp);
                _this.changeGraphTheme.changeMessage(_this.passData2Comp);
            }
            _this.changeGraphTheme.get_favAndNormal_coins_filter();
            _this.currencyText = data.currencyType;
            localStorage.setItem('currencyRate', _this.currencyvalue);
            _this.changeGraphTheme.customizeColumns_filter(data.customizeColumns);
            var userSiteLang = "/en/" + data['siteLangugae'];
            _this.cookieService.set('googtrans', userSiteLang);
            if (data.nightMode != '') {
                body.classList.add(data.nightMode);
            }
        });
    };
    ThemeHeaderComponent.prototype.defaultTheme = function () {
        this.cookieService.set('googtrans', "/en/en");
        var body = __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementsByTagName('body')[0];
        var currentList = body.classList.add('black-theme');
        var currentList = body.classList.remove('night_mode');
        var currentList = body.classList.remove('white-theme');
        this.someRange = 1;
        this.colorOfSite = 'black-theme';
        this.currencyvalue = 1;
        this.currencyText = 'USD';
        localStorage.setItem('currencyRate', this.currencyvalue);
        this.refreshDefault = '1';
        var data = { "desktop": { "coinlist": [{ "label": "Graph", "ischecked": true, "key": "expand" }, { "label": "Favourite", "ischecked": true, "key": "favourite" }, { "label": "Coin", "ischecked": true, "key": "coin" }, { "label": "Price", "ischecked": true, "key": "price" }, { "label": "24 HR (%)", "ischecked": true, "key": "dayChange" }, { "label": "7 Day (%)", "ischecked": true, "key": "weaklyChange" }, { "label": "Volume (24 H)", "ischecked": true, "key": "dayVolume" }, { "label": "Market Cap", "ischecked": true, "key": "marketCap" }, { "label": "24 HR High/Low", "ischecked": true, "key": "dayHighLow" }, { "label": "Circulation Supply ", "ischecked": false, "key": "circulationSupply" }, { "label": "Total Supply", "ischecked": false, "key": "totalSupply" }, { "label": "Exchanges ", "ischecked": false, "key": "exchanges" }], "portfolio": [{ "label": "Coins", "ischecked": true, "key": "coins" }, { "label": "Totals", "ischecked": true, "key": "total_coins" }, { "label": "Price Paid", "ischecked": true, "key": "price_paid" }, { "label": "Current Price", "ischecked": true, "key": "current_price" }, { "label": "Total Gain/Loss", "ischecked": true, "key": "gain_loss" }, { "label": "Graph", "ischecked": true, "key": "graph" }, { "label": "Trade", "ischecked": true, "key": "trade" }] }, "mobile": { "coinlist": [{ "label": "Graph", "ischecked": true, "key": "expand" }, { "label": "Favourite", "ischecked": true, "key": "favourite" }, { "label": "Coin", "ischecked": true, "key": "coin" }, { "label": "Price", "ischecked": true, "key": "price" }, { "label": "24 HR (%)", "ischecked": false, "key": "dayChange" }, { "label": "7 Day (%)", "ischecked": false, "key": "weaklyChange" }, { "label": "Volume (24 H)", "ischecked": false, "key": "dayVolume" }, { "label": "Market Cap", "ischecked": false, "key": "marketCap" }, { "label": "24 HR High/Low", "ischecked": false, "key": "dayHighLow" }, { "label": "Circulation Supply ", "ischecked": false, "key": "circulationSupply" }, { "label": "Total Supply", "ischecked": false, "key": "totalSupply" }, { "label": "Exchanges ", "ischecked": false, "key": "exchanges" }], "portfolio": [{ "label": "Coins", "ischecked": true, "key": "coins" }, { "label": "Totals", "ischecked": true, "key": "total_coins" }, { "label": "Price Paid", "ischecked": true, "key": "price_paid" }, { "label": "Current Price", "ischecked": true, "key": "current_price" }, { "label": "Total Gain/Loss", "ischecked": true, "key": "gain_loss" }, { "label": "Graph", "ischecked": true, "key": "graph" }, { "label": "Trade", "ischecked": true, "key": "trade" }] }, "app": { "coinlist": [{ "label": "Graph", "ischecked": true, "key": "expand" }, { "label": "Favourite", "ischecked": true, "key": "favourite" }, { "label": "Coin", "ischecked": true, "key": "coin" }, { "label": "Price", "ischecked": true, "key": "price" }, { "label": "24 HR (%)", "ischecked": false, "key": "dayChange" }, { "label": "7 Day (%)", "ischecked": false, "key": "weaklyChange" }, { "label": "Volume (24 H)", "ischecked": false, "key": "dayVolume" }, { "label": "Market Cap", "ischecked": false, "key": "marketCap" }, { "label": "24 HR High/Low", "ischecked": false, "key": "dayHighLow" }, { "label": "Circulation Supply ", "ischecked": false, "key": "circulationSupply" }, { "label": "Total Supply", "ischecked": false, "key": "totalSupply" }, { "label": "Exchanges ", "ischecked": false, "key": "exchanges" }], "portfolio": [{ "label": "Coins", "ischecked": true, "key": "coins" }, { "label": "Totals", "ischecked": true, "key": "total_coins" }, { "label": "Price Paid", "ischecked": true, "key": "price_paid" }, { "label": "Current Price", "ischecked": true, "key": "current_price" }, { "label": "Total Gain/Loss", "ischecked": true, "key": "gain_loss" }, { "label": "Graph", "ischecked": true, "key": "graph" }, { "label": "Trade", "ischecked": true, "key": "trade" }] } };
        var dataS = JSON.stringify(data);
        localStorage.setItem('customizeColumns', dataS);
        this.changeGraphTheme.customizeColumns_filter(data);
        this.desktoplists = data.desktop.coinlist;
        this.desktopPlist = data.desktop.portfolio;
        this.mobilelists = data.mobile.coinlist;
        this.mobilePlist = data.mobile.portfolio;
        this.appList = data.app.coinlist;
        this.appPList = data.app.portfolio;
        this.passData2Comp['theme'] = this.themeBlack;
        this.passData2Comp['refreshrate'] = this.refreshDefault;
        this.passData2Comp['volumeTheme'] = this.volume_black;
        this.passData2Comp['toolsBg'] = '#000';
        this.changeGraphTheme.user_theme_filter(this.passData2Comp);
        this.changeGraphTheme.changeMessage(this.passData2Comp);
    };
    ThemeHeaderComponent.prototype.forceLogin = function () {
        var _this = this;
        if (Object.keys(this.themeSettings).length == 2) {
            if (this.popUpEnabled) {
                this.popUpEnabled = false;
                setTimeout(function () {
                    _this.changeGraphTheme.trigger_loginPopUp_filter();
                }, 30000);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loginform'),
        __metadata("design:type", Object)
    ], ThemeHeaderComponent.prototype, "loginModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('registerform'),
        __metadata("design:type", Object)
    ], ThemeHeaderComponent.prototype, "signUpModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('successMessage'),
        __metadata("design:type", Object)
    ], ThemeHeaderComponent.prototype, "successMessageModal", void 0);
    ThemeHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-theme-header',
            template: __webpack_require__("./src/app/main/theme-header/theme-header.component.html"),
            styles: [__webpack_require__("./src/app/main/theme-header/theme-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_7_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_6__common_service_service__["a" /* CommonServiceService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ngx_order_pipe__["b" /* OrderPipe */], __WEBPACK_IMPORTED_MODULE_2__comp_data_sharing_service__["a" /* CompDataSharingService */]])
    ], ThemeHeaderComponent);
    return ThemeHeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/tv-chart-container/tv-chart-container.component.css":
/***/ (function(module, exports) {

module.exports = ".app-tv-chart-container_multi {\r\n\theight: calc(100vh - 80px);\r\n}\r\n.hidingNow{\r\n    display: none;\r\n}\r\n.showingNow{\r\n    display: table-row;\r\n}\r\n.coin_list_table{\r\n    width:100%;\r\n    text-align: center;\r\n}\r\n.buttons_perio_sel0{\r\n    width: 100%;\r\n    float: left;\r\n    margin-top: 20px;\r\n}\r\n.buttons_perio_sel0 button{\r\n    float: left;\r\n    border: 0px;\r\n    width: 16.666%;\r\n    padding: 3px 0px;\r\n    background: #333;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/tv-chart-container/tv-chart-container.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"load_spinner\" *ngIf=\"showLoadSpinner\">\r\n  <span class=\"fa fa-spinner fa-spin fa-2x\"></span>\r\n</div> -->\r\n<div class=\"table-responsive\" *ngIf=\"coinlist_table\">\r\n  <table  id=\"coin_list_table\" class=\"coin_list_table table table-condensed table-bordered data-table \" style=\"white-space:nowrap;\">\r\n    <thead>\r\n      <th width=\"50px\">#</th>\r\n      <th width=\"100px\" *ngIf=\"resolutionColumn.coin\" (click)=\"sort('name');\">Coins\r\n        <span class=\"fa sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'fa-sort-up':reverseValue,'fa-sort-down':!reverseValue}\"></span>\r\n      </th>\r\n      <th *ngIf=\"resolutionColumn.price\" (click)=\"sort('price')\" style=\"width:130px;\">Price\r\n        <span class=\"fa sort-icon\" *ngIf=\"key =='price'\" [ngClass]=\"{'fa-sort-up':reverseValue,'fa-sort-down':!reverseValue}\"></span>\r\n      </th>\r\n      <th *ngIf=\"resolutionColumn.expand\">Graph</th>\r\n      <th *ngIf=\"resolutionColumn.favourite\" style=\"width:40px;pointer-events:none;\">\r\n        <span class=\"fa fa-star fa-2x colorYellowStar\"></span>\r\n      </th>\r\n      <th *ngIf=\"resolutionColumn.dayChange\" (click)=\"sort('dayPrice')\" style=\"width:130px;\">24 HR (%)\r\n        <span class=\"fa sort-icon\" *ngIf=\"key =='dayPrice'\" [ngClass]=\"{'fa-sort-up':reverseValue,'fa-sort-down':!reverseValue}\"></span>\r\n      </th>\r\n      <th *ngIf=\"resolutionColumn.weaklyChange\" (click)=\"sort('weeklyChange')\" style=\"width:130px;\">7 Days (%)\r\n        <span class=\"fa sort-icon\" *ngIf=\"key =='weeklyChange'\" [ngClass]=\"{'fa-sort-up':reverseValue,'fa-sort-down':!reverseValue}\"></span>\r\n      </th>\r\n      <th *ngIf=\"resolutionColumn.dayVolume\" style=\"width:100px;\" (click)=\"sort('dayVolume')\"> Volume (24H)\r\n        <span class=\"fa sort-icon\" *ngIf=\"key =='dayVolume'\" [ngClass]=\"{'fa-sort-up':reverseValue,'fa-sort-down':!reverseValue}\"></span>\r\n      </th>\r\n      <th *ngIf=\"resolutionColumn.marketCap\" (click)=\"sort('marketCapValue')\">Market CAP\r\n        <span class=\"fa sort-icon\" *ngIf=\"key =='marketCapValue'\" [ngClass]=\"{'fa-sort-up':reverseValue,'fa-sort-down':!reverseValue}\"></span>\r\n      </th>\r\n      <th *ngIf=\"resolutionColumn.dayHighLow\" (click)=\"sort('highestPrice')\">24 HR High / Low\r\n        <span class=\"fa sort-icon\" *ngIf=\"key =='highestPrice'\" [ngClass]=\"{'fa-sort-up':reverseValue,'fa-sort-down':!reverseValue}\"></span>\r\n      </th>\r\n      <!-- <th (click)=\"sort('lowestPrice')\">24 LOW HIGH  <span class=\"fa sort-icon\" *ngIf=\"key =='lowestPrice'\" [ngClass]=\"{'fa-sort-up':reverseValue,'fa-sort-down':!reverseValue}\"></span></th> -->\r\n    </thead>\r\n\r\n    <tbody *ngFor=\"let coins of favCoinsList; let i = index\" class=\"favourite_coins\">\r\n      <tr style=\"cursor:pointer\">\r\n        <td>{{i+1}}</td>\r\n        <td *ngIf=\"resolutionColumn.coin\" (click)=\"coinDetails(coins.pair)\" class=\"coinBlock\">\r\n          <span class=\"notranslate\">\r\n            <img class=\"coinLogo\" src=\"http://54.165.36.80:5687/upload/{{coins.image}}\"> {{coins.name }}</span>\r\n        </td>\r\n        <td *ngIf=\"resolutionColumn.price\" (click)=\"coinDetails(coins.pair)\" class=\"column-price\" [ngClass]=\"{'colorGreen': coins.priceStatus === 'true','colorRed': coins.priceStatus === 'false'}\">\r\n          <b>{{coins.price * currencyValue | number:'.0-2'}}</b>\r\n          <span class=\"fa upDownSymbol\" [ngClass]=\"{'arrow-up': coins.priceStatus === 'true','arrow-down': coins.priceStatus === 'false'}\"></span>\r\n        </td>\r\n        <td *ngIf=\"resolutionColumn.expand\" (click)=\"expandGraph(event,i,coins.pair,coins.name,'tv_chart_containerFav','expandFav')\" class=\"graphTabledata\">\r\n          <i class=\"fa fa-arrows-alt\" ></i>\r\n        </td>\r\n        <td *ngIf=\"resolutionColumn.favourite\">\r\n          <!-- <input type=\"checkbox\" class=\"favorite_coin\" (click)=\"favCoinFunctionality(coins.pair,'fav')\" checked > -->\r\n          <span class=\"fa fa-star fa-2x colorYellowStar\" (click)=\"favCoinFunctionality(coins.pair,'fav',coins)\"></span>\r\n        </td>\r\n        <td *ngIf=\"resolutionColumn.dayChange\" (click)=\"coinDetails(coins.pair)\" class=\"\" [ngClass]=\"{'colorGreen': coins.dayPriceStatus === 'true','colorRed': coins.dayPriceStatus === 'false'}\">{{coins.dayPrice *currencyValue | number:'.0-2'}} ({{coins.dayPricePercent | number:'.0-2'}})\r\n          <span class=\"fa upDownSymbol\" [ngClass]=\"{'arrow-up': coins.dayPriceStatus === 'true','arrow-down': coins.dayPriceStatus === 'false'}\"></span>\r\n        </td>\r\n        <td *ngIf=\"resolutionColumn.weaklyChange\" (click)=\"coinDetails(coins.pair)\" class=\" \" [ngClass]=\"{'colorGreen': coins.weeklyChangeStatus === 'true','colorRed': coins.weeklyChangeStatus === 'false'}\">{{coins.weeklyChange * currencyValue | number:'.0-2'}} ({{coins.weeklyChangePercent | number:'.0-2'}})\r\n          <span class=\"fa upDownSymbol\" [ngClass]=\"{'arrow-up': coins.weeklyChangeStatus === 'true','arrow-down': coins.weeklyChangeStatus === 'false'}\"></span>\r\n        </td>\r\n        <td *ngIf=\"resolutionColumn.dayVolume\" (click)=\"coinDetails(coins.pair)\">{{coins.dayVolume * currencyValue | number:'.0-2'}}</td>\r\n        <td *ngIf=\"resolutionColumn.marketCap\" (click)=\"coinDetails(coins.pair)\">{{coins.marketCapValue * currencyValue | number:'.0-2'}}</td>\r\n        <td *ngIf=\"resolutionColumn.dayHighLow\" (click)=\"coinDetails(coins.pair)\">{{coins.high * currencyValue | number:'.0-2'}} / {{coins.low * currencyValue | number:'.0-2'}}</td>\r\n      </tr>\r\n      <tr id=\"expandFav{{i}}\" class=\"hidingNow\">\r\n        <td colspan=\"11\" height=\"300px;\" width=\"100%\">\r\n          <!-- <div class=\"app-tv-chart-container app-tv-chart-container_multi\" id=\"tv_chart_containerFav{{i}}\"></div>\r\n          <!-- <div class=\"app-tv-chart-container\" id=\"tv_chart_container2{{i}}\"></div>\r\n          <div class=\"col-md-2 float-right chart_rgt_cont\">\r\n            <ul>\r\n              <li>\r\n                <label>Currency</label>\r\n                <div class=\"in_sel-term\">\r\n                  <select>\r\n                    <option>USD</option>\r\n                  </select>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <label>Low/High 24h</label>\r\n                <span>{{coins.highestPrice * currencyValue | number:'.0-2'}} / {{coins.lowestPrice * currencyValue | number:'.0-2'}}</span>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </td> -->\r\n        <label class=\"typeChangeBtn \"><button  class=\" btn active\"  (click)=\"changeType('candlestick',coins.pair);\">Candlestick</button></label>\r\n        <!-- <label class=\"typeChangeBtn\"><button class=\" btn\" [ngClass]=\"{'active' : btnActive  == 'ohlc' }\" (click)=\"changeType('ohlc',coins.pair);\">OHLC</button></label> -->\r\n        <label class=\"typeChangeBtn\"><button class=\" btn\"  (click)=\"changeType('line',coins.pair);\">Line</button></label>\r\n        <!-- <label class=\"typeChangeBtn\"><button class=\" btn\" [ngClass]=\"{'active' : btnActive  == 'advanced' }\" (click)=\"changeType('advanced',coins.pair);\">Advanced</button></label> -->\r\n        <div id=\"candleStick{{i}}\" [ngStyle]=\"{'background-color': backgroundColor  }\"  [style.height.px]=\"350\" style=\"width:98%;float:left;margin-right:10px;\" ></div>\r\n           <!-- <div class=\"col-md-2 float-right chart_rgt_cont\">\r\n              <ul>\r\n                <li><label>Currency</label><div class=\"in_sel-term\"><select><option>USD</option></select></div></li>\r\n                <li><label>Low/High 24h</label><span>$0.08903-$0.09261</span></li>\r\n              </ul>\r\n          </div> -->\r\n           <!-- <div id=\"lineChart{{i}}\" [ngStyle]=\"{'background-color': backgroundColor  }\"  [style.height.px]=\"350\" style=\"width:48%;float:left;margin-right:10px;\" ></div> -->\r\n      </tr>\r\n    </tbody>\r\n    <tbody  *ngFor=\"let coins of coinList | filter: searchText ; let i = index \">\r\n      <tr style=\"cursor:pointer\">\r\n        <td>{{favCoinsList.length+i+1}}</td>\r\n        <td *ngIf=\"resolutionColumn.coin\" (click)=\"coinDetails(coins.pair)\" class=\"coinBlock\">\r\n          <span title=\"{{coins.pair}}\" class=\"notranslate\">\r\n            <img class=\"coinLogo\" src=\"http://54.165.36.80:5687/upload/{{coins.image}}\"> {{coins.name }}</span>\r\n        </td>\r\n        <td *ngIf=\"resolutionColumn.price\" (click)=\"coinDetails(coins.pair)\" class=\"column-price\" [ngClass]=\"{'colorGreen': coins.priceStatus === 'true','colorRed': coins.priceStatus === 'false'}\">\r\n          <b>{{coins.price * currencyValue | number:'.0-2'}}</b>\r\n          <span class=\"fa upDownSymbol\" [ngClass]=\"{'arrow-up': coins.priceStatus === 'true','arrow-down': coins.priceStatus === 'false'}\"></span>\r\n        </td>\r\n        <td *ngIf=\"resolutionColumn.expand\" (click)=\"expandGraph(event,favCoinsList.length+i,coins.pair,coins.name,'chart1div','expand')\" class=\"graphTabledata\">\r\n          <i class=\"fa fa-arrows-alt\" ></i>\r\n        </td>\r\n       <!--  <td *ngIf=\"resolutionColumn.expand\" (click)=\"expandGraph(event,favCoinsList.length+i,coins.pair,coins.name,'tv_chart_container','expand')\" class=\"graphTabledata\">\r\n            <i class=\"fa fa-arrows-alt\" ></i>\r\n          </td> -->\r\n        <td *ngIf=\"resolutionColumn.favourite\">\r\n          <span class=\"fa fa-star fa-2x colorWhiteStar\" (click)=\"favCoinFunctionality(coins.pair,'normal',coins)\"></span>\r\n          <!-- <input type=\"checkbox\" class=\"favorite_coin\"  [(ngModel)]=\"coins.checked\"> -->\r\n        </td>\r\n        <td *ngIf=\"resolutionColumn.dayChange\" (click)=\"coinDetails(coins.pair)\" class=\"\" [ngClass]=\"{'colorGreen': coins.dayPriceStatus === 'true','colorRed': coins.dayPriceStatus === 'false'}\">{{coins.dayPrice *currencyValue | number:'.0-2'}} ({{coins.dayPricePercent | number:'.0-2'}})\r\n          <span class=\"fa upDownSymbol\" [ngClass]=\"{'arrow-up': coins.dayPriceStatus === 'true','arrow-down': coins.dayPriceStatus === 'false'}\"></span>\r\n        </td>\r\n        <td *ngIf=\"resolutionColumn.weaklyChange\" (click)=\"coinDetails(coins.pair)\" class=\" \" [ngClass]=\"{'colorGreen': coins.weeklyChangeStatus === 'true','colorRed': coins.weeklyChangeStatus === 'false'}\">{{coins.weeklyChange * currencyValue | number:'.0-2'}} ({{coins.weeklyChangePercent | number:'.0-2'}})\r\n          <span class=\"fa upDownSymbol\" [ngClass]=\"{'arrow-up': coins.weeklyChangeStatus === 'true','arrow-down': coins.weeklyChangeStatus === 'false'}\"></span>\r\n        </td>\r\n        <td *ngIf=\"resolutionColumn.dayVolume\" (click)=\"coinDetails(coins.pair)\">{{coins.dayVolume * currencyValue | number:'.0-2'}}</td>\r\n        <td *ngIf=\"resolutionColumn.marketCap\" (click)=\"coinDetails(coins.pair)\">{{coins.marketCapValue * currencyValue | number:'.0-2'}}</td>\r\n        <td *ngIf=\"resolutionColumn.dayHighLow\" (click)=\"coinDetails(coins.pair)\">{{coins.high | number:'.0-2'}} / {{coins.low | number:'.0-2'}}</td>\r\n      </tr>\r\n      <tr id=\"expand{{favCoinsList.length+i}}\" class=\"hidingNow\">\r\n        <td colspan=\"11\" height=\"300px;\" width=\"100%\">\r\n          <!-- <div class=\"app-tv-chart-container app-tv-chart-container_multi\" id=\"tv_chart_container{{favCoinsList.length+i}}\"></div>\r\n          <div class=\"col-md-2 float-right chart_rgt_cont\">\r\n            <ul>\r\n              <li>\r\n                <label>Currency</label>\r\n                <div class=\"in_sel-term\">\r\n                  <select>\r\n                    <option>USD</option>\r\n                  </select>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <label>Low/High 24h</label>\r\n                <span>{{coins.highestPrice * currencyValue | number:'.0-2'}} / {{coins.lowestPrice * currencyValue | number:'.0-2'}}</span>\r\n              </li>\r\n            </ul>\r\n          </div> -->\r\n          <label class=\"typeChangeBtn \"><button  class=\" btn active\"  (click)=\"changeType('candlestick',coins.pair);\">Candlestick</button></label>\r\n          <!-- <label class=\"typeChangeBtn\"><button class=\" btn\" [ngClass]=\"{'active' : btnActive  == 'ohlc' }\" (click)=\"changeType('ohlc' , favCoinsList.length+i);\">OHLC</button></label> -->\r\n          <label class=\"typeChangeBtn\"><button class=\" btn\"  (click)=\"changeType('line', coins.pair);\">Line</button></label>\r\n          <!-- <label class=\"typeChangeBtn\"><button class=\" btn\" [ngClass]=\"{'active' : btnActive  == 'advanced' }\" (click)=\"changeType('advanced', favCoinsList.length+i);\">Advanced</button></label> -->\r\n          <div id=\"candleStick{{favCoinsList.length+i}}\" [ngStyle]=\"{'background-color': backgroundColor  }\"  [style.height.px]=\"450\" style=\"width:99%;float:left;padding:10px;\" ></div>\r\n           <!-- <div class=\"col-md-2 float-right chart_rgt_cont\">\r\n              <ul>\r\n                <li><label>Currency</label><div class=\"in_sel-term\"><select><option>USD</option></select></div></li>\r\n                <li><label>Low/High 24h</label><span>$0.08903-$0.09261</span></li>\r\n              </ul>\r\n          </div> -->\r\n         <!-- <div class=\"buttons_perio_sel0\">\r\n            <button type=\"button\" [ngClass]=\"{'btnActive': isBtnClicked == 'onehour'}\" (click)=\"chartDispal(coins.pair,15,6,'onehour')\">1 Hour</button>\r\n            <button type=\"button\" [ngClass]=\"{'btnActive': isBtnClicked == 'sixhour'}\" (click)=\"chartDispal(coins.pair,30,5,'sixhour')\">6 Hour</button>\r\n            <button type=\"button\" [ngClass]=\"{'btnActive': isBtnClicked == 'oneweek'}\" (click)=\"chartDispal(coins.pair,30,100,'oneweek')\">1 Week</button>\r\n            <button type=\"button\" [ngClass]=\"{'btnActive': isBtnClicked == 'onemonth'}\" (click)=\"chartDispal(coins.pair,30,365,'onemonth')\">1 Month</button>\r\n            <button type=\"button\" [ngClass]=\"{'btnActive': isBtnClicked == 'oneyear'}\" (click)=\"chartDispal(coins.pair,30,365,'oneyear')\">1 Year</button>\r\n            <button type=\"button\" [ngClass]=\"{'btnActive': isBtnClicked == 'max'}\" (click)=\"chartDispal(coins.pair,30,365,'max')\">MAX</button>\r\n         </div> -->\r\n           <!-- <div id=\"lineChart{{favCoinsList.length+i}}\" [ngStyle]=\"{'background-color': backgroundColor  }\"  [style.height.px]=\"350\" style=\"width:48%;float:left;margin-right:10px;\" ></div> -->\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  \r\n  <div *ngIf=\"noData\" class=\"noDataFound\">No Data found!</div>\r\n</div>\r\n\r\n<!-- <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"table-responsive\">\r\n    <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <th (click)=\"sort('name')\">Coins\r\n          <span class=\"fa sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'fa-sort-up':reverse,'fa-sort-down':!reverse}\">\r\n          </span>\r\n        </th>\r\n        <th (click)=\"sort('total_coins')\">Totals\r\n          <span class=\"fa sort-icon\" *ngIf=\"key =='total_coins'\" [ngClass]=\"{'fa-sort-up':reverse,'fa-sort-down':!reverse}\"></span>\r\n        </th>\r\n        <th (click)=\"sort('price_paid')\">Price Paid\r\n          <span class=\"fa sort-icon\" *ngIf=\"key =='price_paid'\" [ngClass]=\"{'fa-sort-up':reverse,'fa-sort-down':!reverse}\"></span>\r\n        </th>\r\n        <th (click)=\"sort('price')\">Current Price\r\n            <span class=\"fa sort-icon\" *ngIf=\"key =='price'\" [ngClass]=\"{'fa-sort-up':reverse,'fa-sort-down':!reverse}\"></span>\r\n          </th>\r\n        <th (click)=\"sort('dayPrice')\">Total Gain/Loss\r\n          <span class=\"fa sort-icon\" *ngIf=\"key =='dayPrice'\" [ngClass]=\"{'fa-sort-up':reverse,'fa-sort-down':!reverse}\"></span>\r\n        </th>\r\n        <th>Trade</th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr *ngFor=\"let coins of coinList ; let i = index\">\r\n        <td>{{i+1}}</td>\r\n        <td>{{coins.name}}</td>\r\n        <td class=\"ls_price\">{{coins.total_coins | number : '.0-2'}}</td>\r\n        <td class=\"ls_price\">{{coins.price_paid | number : '.0-2'}}</td>\r\n        <td *ngIf=\"resolutionColumn.expand\" (click)=\"expandGraph(event,i,coins.pair,coins.name,'tv_chart_containerFav','expandFav')\" class=\"graphTabledata\">\r\n            <i class=\"fa fa-arrows-alt\" ></i>\r\n          </td>\r\n        <td class=\"ls_price\" [ngClass]=\"{'colorGreen': coins.dayPriceStatus === 'true','colorRed': coins.dayPriceStatus === 'false'}\">{{coins.price | number : '.0-2'}} \r\n            <span class=\"fa upDownSymbol\" [ngClass]=\"{'arrow-up': coins.dayPriceStatus === 'true','arrow-down': coins.dayPriceStatus === 'false'}\"></span>\r\n          </td>\r\n        <td class=\"\" [ngClass]=\"{'colorGreen': coins.price_paid < coins.price * coins.total_coins,'colorRed': coins.price_paid > coins.price *coins.total_coins}\">{{ coins.price * coins.total_coins - coins.price_paid}}\r\n          <span class=\"fa upDownSymbol\" [ngClass]=\"{'arrow-up': coins.price_paid  < coins.price * coins.total_coins,'arrow-down': coins.price_paid > coins.price * coins.total_coins}\"></span>\r\n        </td>\r\n        <td class=\"trade_btn\">\r\n          <button>Trade </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table> -->\r\n\r\n\r\n<div class=\"table-responsive\" *ngIf=\"portfolio_table\">\r\n    <table  id=\"coin_list_table\" class=\" coin_list_tabletable table-condensed table-bordered data-table \" style=\"white-space:nowrap;\">\r\n      <thead>\r\n        <th width=\"50px\">#</th>\r\n        <th width=\"100px\" *ngIf=\"resolutionColumn.coins\" (click)=\"sort('name');\">Coins\r\n          <span class=\"fa sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'fa-sort-up':reverseValue,'fa-sort-down':!reverseValue}\"></span>\r\n        </th>\r\n        <th width=\"100px\" *ngIf=\"resolutionColumn.total_coins\" (click)=\"sort('total_coins');\">Totals\r\n            <span class=\"fa sort-icon\" *ngIf=\"key =='total_coins'\" [ngClass]=\"{'fa-sort-up':reverseValue,'fa-sort-down':!reverseValue}\"></span>\r\n          </th>\r\n        <th *ngIf=\"resolutionColumn.price_paid\" (click)=\"sort('price_paid')\" style=\"width:130px;\">Price Paid\r\n          <span class=\"fa sort-icon\" *ngIf=\"key =='price_paid'\" [ngClass]=\"{'fa-sort-up':reverseValue,'fa-sort-down':!reverseValue}\"></span>\r\n        </th>\r\n        <th *ngIf=\"resolutionColumn.graph\">Graph</th>\r\n        <th (click)=\"sort('price')\" *ngIf=\"resolutionColumn.current_price\">Current Price\r\n            <span class=\"fa sort-icon\" *ngIf=\"key =='price'\" [ngClass]=\"{'fa-sort-up':reverse,'fa-sort-down':!reverse}\"></span>\r\n          </th>\r\n        <th  *ngIf=\"resolutionColumn.gain_loss\">Total Gain/Loss\r\n          <span class=\"fa sort-icon\" *ngIf=\"key =='gain_loss'\" [ngClass]=\"{'fa-sort-up':reverse,'fa-sort-down':!reverse}\"></span>\r\n        </th>\r\n        <th  *ngIf=\"resolutionColumn.trade\">Trade</th>\r\n        <!-- <th (click)=\"sort('lowestPrice')\">24 LOW HIGH  <span class=\"fa sort-icon\" *ngIf=\"key =='lowestPrice'\" [ngClass]=\"{'fa-sort-up':reverseValue,'fa-sort-down':!reverseValue}\"></span></th> -->\r\n      </thead>\r\n      <tbody  *ngFor=\"let coins of portfolioList | filter: searchText; let i = index \">\r\n        <tr style=\"cursor:pointer\">\r\n            <td>{{i+1}}</td>\r\n            <td *ngIf=\"resolutionColumn.coins\" (click)=\"coinDetails(coins.pair)\">{{coins.name}}</td>\r\n            <td *ngIf=\"resolutionColumn.total_coins\" (click)=\"coinDetails(coins.pair)\" class=\"ls_price\">{{coins.total_coins | number : '.0-2'}}</td>\r\n            <td *ngIf=\"resolutionColumn.price_paid\" (click)=\"coinDetails(coins.pair)\" class=\"ls_price\">{{coins.price_paid | number : '.0-2'}}</td>\r\n            <td *ngIf=\"resolutionColumn.graph\"  (click)=\"expandGraph(event,favCoinsList.length+i,coins.pair,coins.name,'chart1div','expand')\" class=\"graphTabledata\">\r\n              <i class=\"fa fa-arrows-alt\" ></i>\r\n            </td>\r\n            <td *ngIf=\"resolutionColumn.current_price\" (click)=\"coinDetails(coins.pair)\" class=\"ls_price\" [ngClass]=\"{'colorGreen': coins.dayPriceStatus === 'true','colorRed': coins.dayPriceStatus === 'false'}\">{{coins.price | number : '.0-2'}} \r\n                <span class=\"fa upDownSymbol\" [ngClass]=\"{'arrow-up': coins.dayPriceStatus === 'true','arrow-down': coins.dayPriceStatus === 'false'}\"></span>\r\n            </td>\r\n            <td *ngIf=\"resolutionColumn.gain_loss\" (click)=\"coinDetails(coins.pair)\" class=\"\" [ngClass]=\"{'colorGreen': coins.price_paid < coins.price * coins.total_coins,'colorRed': coins.price_paid > coins.price *coins.total_coins}\">{{ coins.price * coins.total_coins - coins.price_paid | number : '.0-2'}}\r\n              <span class=\"fa upDownSymbol\" [ngClass]=\"{'arrow-up': coins.price_paid  < coins.price * coins.total_coins,'arrow-down': coins.price_paid > coins.price * coins.total_coins}\"></span>\r\n            </td>\r\n            <td *ngIf=\"resolutionColumn.trade\"  class=\"trade_btn\">\r\n              <button>Trade </button>\r\n            </td>\r\n        </tr>\r\n        <tr id=\"expand{{favCoinsList.length+i}}\" class=\"hidingNow\">\r\n          <td colspan=\"11\" height=\"300px;\" width=\"100%\">\r\n            <!-- <div class=\"app-tv-chart-container app-tv-chart-container_multi\" id=\"tv_chart_container{{favCoinsList.length+i}}\"></div>\r\n            <div class=\"col-md-2 float-right chart_rgt_cont\">\r\n              <ul>\r\n                <li>\r\n                  <label>Currency</label>\r\n                  <div class=\"in_sel-term\">\r\n                    <select>\r\n                      <option>USD</option>\r\n                    </select>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <label>Low/High 24h</label>\r\n                  <span>{{coins.highestPrice * currencyValue | number:'.0-2'}} / {{coins.lowestPrice * currencyValue | number:'.0-2'}}</span>\r\n                </li>\r\n              </ul>\r\n            </div> -->\r\n            <label class=\"typeChangeBtn \"><button  class=\" btn active\"  (click)=\"changeType('candlestick',coins.pair);\">Candlestick</button></label>\r\n            <!-- <label class=\"typeChangeBtn\"><button class=\" btn\" [ngClass]=\"{'active' : btnActive  == 'ohlc' }\" (click)=\"changeType('ohlc' , favCoinsList.length+i);\">OHLC</button></label> -->\r\n            <label class=\"typeChangeBtn\"><button class=\" btn\"  (click)=\"changeType('line', coins.pair);\">Line</button></label>\r\n            <!-- <label class=\"typeChangeBtn\"><button class=\" btn\" [ngClass]=\"{'active' : btnActive  == 'advanced' }\" (click)=\"changeType('advanced', favCoinsList.length+i);\">Advanced</button></label> -->\r\n            <div id=\"candleStick{{favCoinsList.length+i}}\" [ngStyle]=\"{'background-color': backgroundColor  }\"  [style.height.px]=\"450\" style=\"width:99%;float:left;padding:10px;\" ></div>\r\n             <!-- <div class=\"col-md-2 float-right chart_rgt_cont\">\r\n                <ul>\r\n                  <li><label>Currency</label><div class=\"in_sel-term\"><select><option>USD</option></select></div></li>\r\n                  <li><label>Low/High 24h</label><span>$0.08903-$0.09261</span></li>\r\n                </ul>\r\n            </div> -->\r\n           <!-- <div class=\"buttons_perio_sel0\">\r\n              <button type=\"button\" [ngClass]=\"{'btnActive': isBtnClicked == 'onehour'}\" (click)=\"chartDispal(coins.pair,15,6,'onehour')\">1 Hour</button>\r\n              <button type=\"button\" [ngClass]=\"{'btnActive': isBtnClicked == 'sixhour'}\" (click)=\"chartDispal(coins.pair,30,5,'sixhour')\">6 Hour</button>\r\n              <button type=\"button\" [ngClass]=\"{'btnActive': isBtnClicked == 'oneweek'}\" (click)=\"chartDispal(coins.pair,30,100,'oneweek')\">1 Week</button>\r\n              <button type=\"button\" [ngClass]=\"{'btnActive': isBtnClicked == 'onemonth'}\" (click)=\"chartDispal(coins.pair,30,365,'onemonth')\">1 Month</button>\r\n              <button type=\"button\" [ngClass]=\"{'btnActive': isBtnClicked == 'oneyear'}\" (click)=\"chartDispal(coins.pair,30,365,'oneyear')\">1 Year</button>\r\n              <button type=\"button\" [ngClass]=\"{'btnActive': isBtnClicked == 'max'}\" (click)=\"chartDispal(coins.pair,30,365,'max')\">MAX</button>\r\n           </div> -->\r\n             <!-- <div id=\"lineChart{{favCoinsList.length+i}}\" [ngStyle]=\"{'background-color': backgroundColor  }\"  [style.height.px]=\"350\" style=\"width:48%;float:left;margin-right:10px;\" ></div> -->\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div *ngIf=\"getLoggedIn\"  class=\"noDataFound\">Please Log in to get portfolio list</div>\r\n    <div *ngIf=\"noData\" class=\"noDataFound\">No Data found!</div>\r\n  </div>"

/***/ }),

/***/ "./src/app/main/tv-chart-container/tv-chart-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvChartContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comp_data_sharing_service__ = __webpack_require__("./src/app/comp-data-sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_service_service__ = __webpack_require__("./src/app/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_charting_library_charting_library_min__ = __webpack_require__("./src/assets/charting_library/charting_library.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_charting_library_charting_library_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_charting_library_charting_library_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md_utils_facade_browser__ = __webpack_require__("./node_modules/angular-bootstrap-md/utils/facade/browser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_timers__ = __webpack_require__("./node_modules/timers-browserify/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_timers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__amcharts_amcharts3_angular__ = __webpack_require__("./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*AmChart Func  */

/*AmChart Func  */
var TvChartContainerComponent = /** @class */ (function () {
    function TvChartContainerComponent(AmCharts, commonService, http, router, changeGraphTheme) {
        var _this = this;
        this.AmCharts = AmCharts;
        this.commonService = commonService;
        this.http = http;
        this.router = router;
        this.changeGraphTheme = changeGraphTheme;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Subject */]();
        this._symbol = 'AAPL';
        this._interval = '60';
        // BEWARE: no trailing slash is expected in feed URL
        this._datafeedUrl = 'https://demo_feed.tradingview.com';
        this._libraryPath = '/assets/charting_library/';
        this._chartsStorageUrl = 'https://saveload.tradingview.com';
        this._chartsStorageApiVersion = '1.1';
        this._clientId = 'tradingview.com';
        this._userId = 'public_user_id';
        this._fullscreen = false;
        this._autosize = true;
        this._containerId = 'tv_chart_container';
        this.column = {};
        this.resolutionColumn = {};
        this.userLogin = {};
        this.userReg = {};
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["b" /* Subscription */]();
        this.changeGraphTheme.clear_portfolio_Data_listener().subscribe(function () {
            _this.getLoggedIn = true;
            _this.portfolioList = [];
        });
        this.changeGraphTheme.portfolio_Data_listener().subscribe(function () {
            _this.clearInterval = true;
            _this.getLoggedIn = false;
            _this.getLoggedIn = true;
            _this.coinList = [];
            _this.getPortfolioList();
        });
        this.changeGraphTheme.refreshRateListen().subscribe(function (m) {
            _this.refreshRateIntervalChange(m);
        });
        this.changeGraphTheme.searchCoinExchange().subscribe(function (searchT) {
            // this.searchText = searchT;
            clearInterval(_this.runningInterval);
            _this.clearInterval = false;
            _this.coinList = [];
            _this.coinList = searchT;
        });
        this.changeGraphTheme.currencyConverter_listener().subscribe(function (value) {
            _this.updateCurrency(value);
        });
        this.changeGraphTheme.customizeColumns_listener().subscribe(function (value) {
            _this.customizeColUpdate(value);
        });
        this.changeGraphTheme.get_all_coins_listener().subscribe(function () {
            _this.coinList = [];
            _this.favCoinsList = [];
            _this.showLoadSpinner = true;
            _this.clearInterval = true;
            _this.getCoinList();
            _this.favCoinsList = [];
        });
        this.changeGraphTheme.get_favAndNormal_coins_listener().subscribe(function () {
            _this.coinList = [];
            _this.favCoinsList = [];
            _this.showLoadSpinner = true;
            _this.clearInterval = true;
            _this.getAlongFavCoins();
        });
        this.changeGraphTheme.clear_interval_listener().subscribe(function () {
            _this.clearInterval = false;
            clearInterval(_this.runningInterval);
        });
        this.changeGraphTheme.advancedFilter_listener().subscribe(function (data) {
            _this.advFilter = data;
            _this.advancedSearchFilter(data);
        });
        this.changeGraphTheme.reset_advancedFilter_listener().subscribe(function () {
            _this.advFilter = [];
        });
        this.changeGraphTheme.chnageTheme_of_amchart_listener().subscribe(function (theme) {
            if (theme == 'black') {
                _this.backgroundColor = '#000';
                _this.themeType = 'dark';
                _this.greenColor = '#00FE2A';
                _this.redColor = '#DA0202';
            }
            else if (theme == 'white') {
                _this.backgroundColor = '#fff';
                _this.themeType = 'light';
                _this.greenColor = '#00C300';
                _this.redColor = '#E70000';
            }
        });
    }
    Object.defineProperty(TvChartContainerComponent.prototype, "symbol", {
        set: function (symbol) {
            this._symbol = symbol || this._symbol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TvChartContainerComponent.prototype, "interval", {
        set: function (interval) {
            this._interval = interval || this._interval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TvChartContainerComponent.prototype, "datafeedUrl", {
        set: function (datafeedUrl) {
            this._datafeedUrl = datafeedUrl || this._datafeedUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TvChartContainerComponent.prototype, "libraryPath", {
        set: function (libraryPath) {
            this._libraryPath = libraryPath || this._libraryPath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TvChartContainerComponent.prototype, "chartsStorageUrl", {
        set: function (chartsStorageUrl) {
            this._chartsStorageUrl = chartsStorageUrl || this._chartsStorageUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TvChartContainerComponent.prototype, "chartsStorageApiVersion", {
        set: function (chartsStorageApiVersion) {
            this._chartsStorageApiVersion = chartsStorageApiVersion || this._chartsStorageApiVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TvChartContainerComponent.prototype, "clientId", {
        set: function (clientId) {
            this._clientId = clientId || this._clientId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TvChartContainerComponent.prototype, "userId", {
        set: function (userId) {
            this._userId = userId || this._userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TvChartContainerComponent.prototype, "fullscreen", {
        set: function (fullscreen) {
            this._fullscreen = fullscreen || this._fullscreen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TvChartContainerComponent.prototype, "autosize", {
        set: function (autosize) {
            this._autosize = autosize || this._autosize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TvChartContainerComponent.prototype, "containerId", {
        set: function (containerId) {
            this._containerId = containerId || this._containerId;
        },
        enumerable: true,
        configurable: true
    });
    TvChartContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.amchartVariable = {};
        this.subscriptionOfHttp1 = [];
        if (this.router.url == '/coinlist') {
            this.coinlist_table = true;
            this.portfolio_table = false;
            this.isBtnClicked = 'btnActive';
            this.subscriptionOfHttp1 = [];
            this.key = 'marketCapValue';
            this.sortingKey = this.key;
            this.reverse = -1;
            this.reverseValue = this.reverse == 1 ? true : false;
            this.weeklyData = [];
            this.themeType = 'dark';
            this.backgroundColor = '#000';
            //this.chartData1 =[{"date":"2012-10-26T18:30:00.000Z","open":125,"close":134,"high":134,"low":123,"volume":316,"value":113},{"date":"2012-10-27T18:30:00.000Z","open":104,"close":105,"high":105,"low":100,"volume":1049,"value":117},{"date":"2012-10-28T18:30:00.000Z","open":118,"close":124,"high":125,"low":117,"volume":584,"value":118},{"date":"2012-10-29T18:30:00.000Z","open":103,"close":106,"high":107,"low":98,"volume":305,"value":117},{"date":"2012-10-30T18:30:00.000Z","open":113,"close":117,"high":119,"low":108,"volume":496,"value":126},{"date":"2012-10-31T18:30:00.000Z","open":115,"close":123,"high":124,"low":112,"volume":585,"value":125},{"date":"2012-11-01T18:30:00.000Z","open":105,"close":110,"high":111,"low":102,"volume":741,"value":127},{"date":"2012-11-02T18:30:00.000Z","open":116,"close":118,"high":119,"low":113,"volume":796,"value":110},{"date":"2012-11-03T18:30:00.000Z","open":122,"close":124,"high":126,"low":119,"volume":132,"value":118},{"date":"2012-11-04T18:30:00.000Z","open":113,"close":121,"high":121,"low":108,"volume":110,"value":130},{"date":"2012-11-05T18:30:00.000Z","open":110,"close":114,"high":118,"low":109,"volume":238,"value":116},{"date":"2012-11-06T18:30:00.000Z","open":115,"close":118,"high":120,"low":114,"volume":831,"value":108},{"date":"2012-11-07T18:30:00.000Z","open":109,"close":104,"high":113,"low":104,"volume":641,"value":113},{"date":"2012-11-08T18:30:00.000Z","open":118,"close":126,"high":129,"low":118,"volume":287,"value":116},{"date":"2012-11-09T18:30:00.000Z","open":122,"close":127,"high":132,"low":120,"volume":1095,"value":113},{"date":"2012-11-10T18:30:00.000Z","open":104,"close":101,"high":105,"low":99,"volume":435,"value":124},{"date":"2012-11-11T18:30:00.000Z","open":109,"close":123,"high":127,"low":108,"volume":886,"value":103},{"date":"2012-11-12T18:30:00.000Z","open":116,"close":128,"high":128,"low":114,"volume":470,"value":117},{"date":"2012-11-13T18:30:00.000Z","open":109,"close":110,"high":110,"low":108,"volume":267,"value":119},{"date":"2012-11-14T18:30:00.000Z","open":116,"close":125,"high":127,"low":112,"volume":508,"value":129},{"date":"2012-11-15T18:30:00.000Z","open":119,"close":132,"high":135,"low":116,"volume":1025,"value":121},{"date":"2012-11-16T18:30:00.000Z","open":100,"close":100,"high":101,"low":97,"volume":1092,"value":125},{"date":"2012-11-17T18:30:00.000Z","open":113,"close":119,"high":120,"low":112,"volume":303,"value":102},{"date":"2012-11-18T18:30:00.000Z","open":106,"close":109,"high":110,"low":102,"volume":716,"value":112},{"date":"2012-11-19T18:30:00.000Z","open":113,"close":114,"high":119,"low":113,"volume":860,"value":110}];
            // this.variable  =  [{"date":"2012-11-20T18:30:00.000Z","open":119,"close":125,"high":125,"low":119,"volume":206,"value":111},{"date":"2012-11-21T18:30:00.000Z","open":129,"close":127,"high":134,"low":125,"volume":975,"value":116},{"date":"2012-11-22T18:30:00.000Z","open":117,"close":119,"high":122,"low":114,"volume":184,"value":124},{"date":"2012-11-23T18:30:00.000Z","open":100,"close":108,"high":108,"low":99,"volume":502,"value":127},{"date":"2012-11-24T18:30:00.000Z","open":126,"close":135,"high":135,"low":122,"volume":1104,"value":102},{"date":"2012-11-25T18:30:00.000Z","open":128,"close":128,"high":130,"low":126,"volume":390,"value":122}]
            this.showScrollTop = false;
            __WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md_utils_facade_browser__["c" /* window */].addEventListener('scroll', this.getLimitedCoins());
            this.forceLogin = true;
            this.clearInterval = true;
            this.showLoadSpinner = true;
            this.coinList = [];
            this.favCoinsList = [];
            this.currencyValue = localStorage.getItem('currencyRate');
            this.changeGraphTheme.currentMessage.subscribe(function (message) { return _this.graphThemeColor = message; });
            this.setIntervalTime = parseInt(this.graphThemeColor.refreshrate + '000');
            this.overrides_obj = this.graphThemeColor.theme;
            this.toolsBg = this.graphThemeColor.toolsBg;
            if (localStorage.getItem('userToken')) {
                this.coinList = [];
                this.favCoinsList = [];
                var tokenV = localStorage.getItem('userToken');
                this.http.post('http://54.165.36.80:5687/api/userSetting/getUserData', { token: tokenV }).map(function (response) { return response.json(); }).subscribe(function (data) {
                    _this.changeGraphTheme.customizeColumns_filter(data.customizeColumns);
                    _this.customizeColUpdate(data.customizeColumns);
                    _this.setIntervalTime = data.refreshRate + '000';
                    _this.userWithFavCoins();
                });
            }
            else {
                this.coinList = [];
                this.favCoinsList = [];
                var cols = localStorage.getItem('customizeColumns');
                this.customizeColUpdate(JSON.parse(cols));
                this.getCoinList();
            }
        }
        else if (this.router.url == '/portfolio') {
            this.coinlist_table = false;
            this.portfolio_table = true;
            this.key = 'name';
            this.sortingKey = this.key;
            this.reverse = -1;
            this.reverseValue = this.reverse == 1 ? true : false;
            if (localStorage.getItem('userToken')) {
                this.coinList = [];
                var tokenV = localStorage.getItem('userToken');
                this.http.post('http://54.165.36.80:5687/api/userSetting/getUserData', { token: tokenV }).map(function (response) { return response.json(); }).subscribe(function (data) {
                    _this.changeGraphTheme.customizeColumns_filter(data.customizeColumns);
                    _this.customizeColUpdate(data.customizeColumns);
                    _this.setIntervalTime = data.refreshRate + '000';
                    _this.favCoinsList = [];
                    _this.portfolioList = [];
                    _this.getPortfolioList();
                    _this.getLoggedIn = false;
                });
            }
            else {
                this.getLoggedIn = true;
                this.portfolioList = [];
                this.coinList = [];
                this.favCoinsList = [];
                var cols = localStorage.getItem('customizeColumns');
                this.customizeColUpdate(JSON.parse(cols));
                this.getCoinList();
            }
        }
    };
    TvChartContainerComponent.prototype.getAlongFavCoins = function () {
        var _this = this;
        var tokenV = localStorage.getItem('userToken');
        if (tokenV && this.clearInterval) {
            var toL = this.favCoinsList.length + this.coinList.length > 0 ? this.favCoinsList.length + this.coinList.length : 20;
            console.log(this.sortingKey);
            console.log(toL);
            this.subscriptionOfHttp = this.http.post('http://54.165.36.80:5687/api/coins/getFavourites', { token: tokenV, from: 0, to: toL, sort: { key: this.sortingKey, value: this.reverse } }).map(function (response) { return response.json(); }).subscribe(function (data) {
                if (_this.clearInterval && data.length <= 2) {
                    if (_this.favCoinsList.length > 0 && _this.coinList.length > 0) {
                        _this.noData = false;
                        for (var n = 0; n < data.length; n++) {
                            if (data[n].favourite == true) {
                                _this.updateFavCoinsData(data[n].data);
                            }
                            else if (data[n].favourite == false) {
                                _this.updateAllCoinsData(data[n].data);
                            }
                        }
                    }
                    else {
                        _this.noData = false;
                        _this.showLoadSpinner = false;
                        for (var n = 0; n < data.length; n++) {
                            if (data[n].favourite == true) {
                                _this.favCoinsList = data[n].data;
                            }
                            else if (data[n].favourite == false) {
                                _this.coinList = data[n].data;
                            }
                        }
                        // this.favCoinsList = data[0].data;
                        // this.coinList = data[1].data;
                        // if (parseInt(this.setIntervalTime) >= 1000) {
                        //     this.runningInterval = setInterval(() => {
                        //         this.getAlongFavCoins();
                        //     }, this.setIntervalTime);
                        // }
                    }
                }
                else {
                    _this.coinList = data;
                }
            });
            // let toL = this.coinList.length > 0 ? this.coinList.length : 20;
            // this.subscriptionOfHttp = this.http.post('http://54.165.36.80:5687/api/coins/getCoins', { from: 0, to: toL, token: tokenV }).map(response => response.json()).subscribe(data => {
            //     if (this.clearInterval) {
            //         if (this.coinList.length > 0 && this.clearInterval) {
            //             this.noData = false;
            //             this.updateAllCoinsData(data);
            //         }
            //         else {
            //             this.noData = false;
            //             this.showLoadSpinner = false;
            //             this.coinList = data;
            //             if (parseInt(this.setIntervalTime) >= 1000) {
            //                 this.runningInterval = setInterval(() => {
            //                     this.getAlongFavCoins();
            //                 }, this.setIntervalTime);
            //             }
            //         }
            //     }
            // })
        }
    };
    TvChartContainerComponent.prototype.getCoinListNew = function () {
        var _this = this;
        this.http.get('https://sypd4mnp3j.execute-api.us-east-2.amazonaws.com/preprod/GetExchangeList').map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.coinList = data;
        });
        if (this.coinList.length == 0) {
            if (parseInt(this.setIntervalTime) >= 1000) {
                console.log(this.setIntervalTime);
                this.runningInterval = Object(__WEBPACK_IMPORTED_MODULE_8_timers__["setInterval"])(function () {
                    _this.getCoinListNew();
                }, this.setIntervalTime);
            }
        }
    };
    TvChartContainerComponent.prototype.getCoinList = function () {
        var _this = this;
        if (!localStorage.getItem('userToken') && this.clearInterval) {
            var upData = void 0;
            var toL = this.coinList.length > 0 ? this.coinList.length : 20;
            console.log(this.sortingKey);
            upData = { from: 0, to: toL, sort: { key: this.sortingKey, value: this.reverse } };
            var request = this.http.post('http://54.165.36.80:5687/exchange/getusd', upData).map(function (response) { return response.json(); }).subscribe(function (data) {
                if (_this.clearInterval) {
                    _this.getallCoins = data;
                    if (data.length == 0) {
                        _this.noData = true;
                    }
                    if (_this.coinList.length > 0 && _this.clearInterval) {
                        _this.noData = false;
                        _this.updateAllCoinsData(_this.getallCoins);
                    }
                    else {
                        _this.noData = false;
                        _this.showLoadSpinner = false;
                        clearInterval(_this.favCoinInterval);
                        _this.coinList = _this.getallCoins;
                        if (parseInt(_this.setIntervalTime) >= 1000) {
                            console.log(_this.setIntervalTime);
                            _this.runningInterval = Object(__WEBPACK_IMPORTED_MODULE_8_timers__["setInterval"])(function () {
                                _this.getCoinList();
                            }, _this.setIntervalTime);
                        }
                    }
                }
            });
            // this.subscriptions.add(request);
            this.subscriptionOfHttp1.push(request);
        }
    };
    TvChartContainerComponent.prototype.updateAllCoinsData = function (allCoins) {
        var _loop_1 = function (i) {
            var checkIsThere = true;
            var obj = this_1.coinList.findIndex(function (coin) { return allCoins[i].pair === coin.pair; });
            if (obj != -1) {
                this_1.coinList[obj].price = allCoins[i].price;
                this_1.coinList[obj].priceStatus = allCoins[i].priceStatus;
                this_1.coinList[obj].dayPricePercent = allCoins[i].dayPricePercent;
                this_1.coinList[obj].dayPrice = allCoins[i].dayPrice;
                this_1.coinList[obj].dayPriceStatus = allCoins[i].dayPriceStatus;
                this_1.coinList[obj].weeklyChangeStatus = allCoins[i].weeklyChangeStatus;
                this_1.coinList[obj].weeklyChange = allCoins[i].weeklyChange;
                this_1.coinList[obj].weeklyChangePercent = allCoins[i].weeklyChangePercent;
                this_1.coinList[obj].dayVolume = allCoins[i].dayVolume;
                this_1.coinList[obj].highestPrice = allCoins[i].highestPrice;
                this_1.coinList[obj].lowestPrice = allCoins[i].lowestPrice;
            }
            // else {
            //     this.coinList.push(allCoins[i]);
            // }
        };
        var this_1 = this;
        for (var i = 0; i < allCoins.length; i++) {
            _loop_1(i);
        }
    };
    TvChartContainerComponent.prototype.updateFavCoinsData = function (allCoins) {
        var _loop_2 = function (i) {
            var checkIsThere = true;
            var obj = this_2.favCoinsList.findIndex(function (coin) { return allCoins[i].pair === coin.pair; });
            if (obj != -1) {
                this_2.favCoinsList[obj].price = allCoins[i].price;
                console.log(this_2.favCoinsList[obj].price, allCoins[i].price);
                this_2.favCoinsList[obj].priceStatus = allCoins[i].priceStatus;
                console.log(this_2.favCoinsList[obj].priceStatus, allCoins[i].priceStatus);
                this_2.favCoinsList[obj].dayPricePercent = allCoins[i].dayPricePercent;
                this_2.favCoinsList[obj].dayPrice = allCoins[i].dayPrice;
                this_2.favCoinsList[obj].dayPriceStatus = allCoins[i].dayPriceStatus;
                this_2.favCoinsList[obj].weeklyChangeStatus = allCoins[i].weeklyChangeStatus;
                this_2.favCoinsList[obj].weeklyChange = allCoins[i].weeklyChange;
                this_2.favCoinsList[obj].weeklyChangePercent = allCoins[i].weeklyChangePercent;
                this_2.favCoinsList[obj].dayVolume = allCoins[i].dayVolume;
                this_2.favCoinsList[obj].highestPrice = allCoins[i].highestPrice;
                this_2.favCoinsList[obj].lowestPrice = allCoins[i].lowestPrice;
            }
            // else {
            //     this.favCoinsList.push(allCoins[i]);
            // }
        };
        var this_2 = this;
        for (var i = 0; i < allCoins.length; i++) {
            _loop_2(i);
        }
    };
    // updateNormalCoinsData(allCoins) {
    //     for (let i = 0; i < allCoins.length; i++) {
    //         let checkIsThere = true;
    //         let obj = this.coinList.findIndex(coin => allCoins[i].pair === coin.pair);
    //         if (obj != -1) {
    //             this.favCoinsList[obj].price = allCoins[i].price;
    //             this.favCoinsList[obj].priceStatus = allCoins[i].priceStatus;
    //             this.favCoinsList[obj].dayPricePercent = allCoins[i].dayPricePercent;
    //             this.favCoinsList[obj].dayPrice = allCoins[i].dayPrice;
    //             this.favCoinsList[obj].dayPriceStatus = allCoins[i].dayPriceStatus;
    //             this.favCoinsList[obj].weeklyChangeStatus = allCoins[i].weeklyChangeStatus;
    //             this.favCoinsList[obj].weeklyChange = allCoins[i].weeklyChange;
    //             this.favCoinsList[obj].weeklyChangePercent = allCoins[i].weeklyChangePercent;
    //             this.favCoinsList[obj].dayVolume = allCoins[i].dayVolume;
    //             this.favCoinsList[obj].highestPrice = allCoins[i].highestPrice;
    //             this.favCoinsList[obj].lowestPrice = allCoins[i].lowestPrice;
    //         }
    //         else {
    //             this.favCoinsList.push(allCoins[i]);
    //         }
    //     }
    // }
    TvChartContainerComponent.prototype.customizeColUpdate = function (value) {
        if (this.router.url == '/coinlist') {
            if (__WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md_utils_facade_browser__["c" /* window */].screen.width > 990) {
                this.columnsList = value['desktop']['coinlist'];
            }
            else {
                this.columnsList = value['mobile']['coinlist'];
            }
            for (var i = 0; i < this.columnsList.length; i++) {
                this.resolutionColumn[this.columnsList[i].key] = this.columnsList[i].ischecked;
            }
        }
        if (this.router.url == '/portfolio') {
            if (__WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md_utils_facade_browser__["c" /* window */].screen.width > 990) {
                this.columnsList = value['desktop']['portfolio'];
            }
            else {
                this.columnsList = value['mobile']['portfolio'];
            }
            for (var i = 0; i < this.columnsList.length; i++) {
                this.resolutionColumn[this.columnsList[i].key] = this.columnsList[i].ischecked;
            }
        }
    };
    TvChartContainerComponent.prototype.expandGraph = function (ev, i, coinToken, coinName, chartId, rowId) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementById(rowId + i).classList.contains('showingNow')) {
            __WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementById(rowId + i).classList.remove('showingNow');
            __WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementById(rowId + i).classList.add('hidingNow');
            var parentElementPath = __WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementById(rowId + i).parentElement.children[0];
            var elementPath = parentElementPath.getElementsByTagName('td');
            var HtmlColl = Array.prototype.slice.call(elementPath);
            var eleInd = HtmlColl.indexOf(__WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementsByClassName('graphTabledata')[i]);
            var elementExp = parentElementPath.children[eleInd].children[0].classList;
            if (elementExp.contains('fa-arrows')) {
                elementExp.add('fa-arrows-alt');
                elementExp.remove('fa-arrows');
            }
            console.log(Object.keys(this.amchartVariable).length);
            if (Object.keys(this.amchartVariable).length > 0) {
                delete this.amchartVariable[coinToken];
                console.log(Object.keys(this.amchartVariable).length);
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementById(rowId + i).classList.add('showingNow');
            __WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementById(rowId + i).classList.remove('hidingNow');
            var parentElementPath = __WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementById(rowId + i).parentElement.children[0];
            var elementPath = parentElementPath.getElementsByTagName('td');
            var HtmlColl = Array.prototype.slice.call(elementPath);
            var eleInd = HtmlColl.indexOf(__WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementsByClassName('graphTabledata')[i]);
            var elementExp = parentElementPath.children[eleInd].children[0].classList;
            if (elementExp.contains('fa-arrows-alt')) {
                elementExp.add('fa-arrows');
                elementExp.remove('fa-arrows-alt');
                this.http.post('http://54.165.36.80:5687/exchange/getChart', { pair: coinToken, interval: 30, range: 300 }).map(function (response) { return response.json(); }).subscribe(function (data) {
                    console.log(data);
                    _this.themeDo(i, data, coinToken);
                    _this.barsData = data;
                    //this.generateData(30, 1, coinToken);
                });
                // this.generateGraph(chartId+i,coinToken,coinName)
            }
        }
    };
    TvChartContainerComponent.prototype.sort = function (key) {
        var _this = this;
        this.clearInterval = false;
        clearInterval(this.subscriptionOfHttp);
        // this.subscriptions.unsubscribe();
        if (this.subscriptionOfHttp1.length > 0) {
            for (var m = 0; m < this.subscriptionOfHttp1.length; m++) {
                if (!this.subscriptionOfHttp1[m].closed) {
                    this.subscriptionOfHttp1[m].unsubscribe();
                }
            }
        }
        this.sortingKey = key;
        this.key = key;
        this.reverse = this.reverse == -1 ? 1 : -1;
        this.reverseValue = this.reverse == -1 ? false : true;
        if (this.router.url == '/coinlist') {
            if (localStorage.getItem('userToken')) {
                var tokenV = localStorage.getItem('userToken');
                var toL = this.coinList.length > 0 ? this.coinList.length : 20;
                var request = this.http.post('http://54.165.36.80:5687/api/coins/getFavourites', { token: tokenV, filter: this.advFilter, from: 0, to: toL, sort: { key: this.sortingKey, value: this.reverse } }).map(function (response) { return response.json(); }).subscribe(function (data) {
                    if (data.length <= 2) {
                        _this.noData = false;
                        _this.showLoadSpinner = false;
                        for (var n = 0; n < data.length; n++) {
                            if (data[n].favourite == true) {
                                _this.favCoinsList = data[n].data;
                            }
                            else if (data[n].favourite == false) {
                                _this.coinList = data[n].data;
                            }
                        }
                        // this.favCoinsList = data[0].data;
                        // this.coinList = data[1].data;
                        if (parseInt(_this.setIntervalTime) >= 1000) {
                            _this.runningInterval = Object(__WEBPACK_IMPORTED_MODULE_8_timers__["setInterval"])(function () {
                                _this.getAlongFavCoins();
                            }, _this.setIntervalTime);
                        }
                    }
                    else {
                        _this.coinList = data;
                    }
                });
                this.subscriptionOfHttp1.push(request);
            }
            else {
                this.coinList = [];
                var toL = this.coinList.length > 0 ? this.coinList.length : 20;
                var request = this.http.post('http://54.165.36.80:5687/exchange/getusd', { filter: this.advFilter, from: 0, to: toL, sort: { key: this.sortingKey, value: this.reverse } }).map(function (response) { return response.json(); }).subscribe(function (data) {
                    _this.portfolioList = [];
                    _this.portfolioList = data;
                    Object(__WEBPACK_IMPORTED_MODULE_8_timers__["setInterval"])(function () {
                        _this.clearInterval = true;
                        _this.getCoinList();
                    }, _this.setIntervalTime);
                });
                this.subscriptionOfHttp1.push(request);
            }
        }
        else if (this.router.url == '/portfolio') {
            this.portfolioList = [];
            var toL = this.coinList.length > 0 ? this.coinList.length : 20;
            var token = localStorage.getItem('userToken');
            this.http.post('http://54.165.36.80:5687/api/coins/getPortfolio', { token: token, filter: this.advFilter, from: 0, to: toL, sort: { key: this.sortingKey, value: this.reverse } }).map(function (response) { return response.json(); }).subscribe(function (data) {
                var lucky = data.portfolioList.filter(function (item) {
                    return item.pair == 'btcusd';
                });
                _this.portfolioList = [];
                _this.portfolioList = data.portfolioList;
                Object(__WEBPACK_IMPORTED_MODULE_8_timers__["setInterval"])(function () {
                    _this.clearInterval = true;
                    _this.portfolioList();
                }, _this.setIntervalTime);
            });
        }
    };
    TvChartContainerComponent.prototype.generateGraph = function (id, coinToken, coinName) {
        this.udf_datafeed = {
            onReady: function (callback) {
                var config = {
                    configurationData: {
                        supports_search: true,
                        supports_group_request: false,
                        supported_resolutions: [],
                        supports_marks: false,
                        supports_timescale_marks: false,
                        exchanges: []
                    }
                };
                callback(parseJSONorNot(config));
            },
            resolveSymbol: function (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
                var config2 = {
                    "name": coinToken.toUpperCase(),
                    "timezone": "Asia/Kolkata",
                    "pricescale": 100,
                    "minmov": 1,
                    "minmov2": 0,
                    "ticker": "TEST:TEST",
                    // "description": "test description",
                    "session": "24x7",
                    "type": "bitcoin",
                    "exchange-traded": "",
                    "exchange-listed": "",
                    "has_intraday": true,
                    "intraday_multipliers": ['1', '60'],
                    "has_weekly_and_monthly": false,
                    "has_no_volume": false,
                };
                onSymbolResolvedCallback(parseJSONorNot(config2));
            },
            getBars: function (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) {
                jQuery.ajax({
                    method: 'POST',
                    async: true,
                    url: 'http://54.165.36.80:5687/exchange/getChart',
                    data: { pair: coinToken },
                    success: function (response) {
                        console.log(response);
                        onHistoryCallback(response, { noData: true, nextTime: 'unix time' });
                    },
                    error: function (res) {
                        return 'F';
                    }
                });
                // this.subscriptionOfHttp.add(getBars)
            },
            subscribeBars: function (symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
                var configData;
                console.log('subscribe ' + symbolInfo);
                Object(__WEBPACK_IMPORTED_MODULE_8_timers__["setInterval"])(function () {
                    jQuery.ajax({
                        method: 'POST',
                        async: true,
                        url: 'http://54.165.36.80:5687/exchange/getLastSecData',
                        data: { pair: coinToken },
                        success: function (response) {
                            onRealtimeCallback(parseJSONorNot(response[0]));
                        },
                        error: function (res) {
                            return 'F';
                        }
                    });
                }, 30000);
            }
        };
        function parseJSONorNot(mayBeJSON) {
            if (typeof mayBeJSON === 'string') {
                return JSON.parse(mayBeJSON);
            }
            else {
                return mayBeJSON;
            }
        }
        function chartDataUpdate() {
            jQuery.ajax({
                method: 'POST',
                async: true,
                url: 'http://54.165.36.80:5687/exchange/getChart',
                data: { pair: coinToken },
                success: function (response) {
                    return response;
                },
                error: function (res) {
                    return 'F';
                }
            });
        }
        function getLanguageFromURL() {
            var regex = new RegExp('[\\?&]lang=([^&#]*)');
            var results = regex.exec(__WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md_utils_facade_browser__["b" /* location */].search);
            return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
        }
        this.overrides_obj = this.graphThemeColor.theme;
        this.toolsBg = this.graphThemeColor.toolsBg;
        var k = this.graphThemeColor.volumeTheme;
        var widgetOptions = {
            symbol: this._symbol,
            loading_screen: { backgroundColor: this.toolsBg },
            datafeed: this.udf_datafeed,
            interval: this._interval,
            container_id: id,
            library_path: this._libraryPath,
            locale: getLanguageFromURL() || 'en',
            disabled_features: [
                'header_saveload',
                'header_indicators',
                'header_settings',
                'header_resolutions',
                'pane_context_menu',
                'scales_context_menu',
                'legend_context_menu',
                'header_symbol_search',
                'compare_symbol',
                'header_compare',
                'study_buttons_in_legend',
                'hide_last_na_study_output',
                'show_interval_dialog_on_key_press',
                'header_undo_redo',
                'chart_property_page_style',
                'header_screenshot',
                'header_fullscreen_button',
                'timeframes_toolbar',
                'header_interval_dialog_button',
                'use_localstorage_for_settings',
                'header_chart_type',
                'control-bar',
                'edit_buttons_in_legend',
                'show_hide_button_in_legend',
                'format_button_in_legend',
                'delete_button_in_legend',
                'symbol_info',
                'save_chart_properties_to_local_storage'
            ],
            enabled_features: ['disable_resolution_rebuild', 'disable_resolution_rebuild', 'dont_show_boolean_study_arguments', 'hide_last_na_study_output', 'header_indicators'],
            charts_storage_url: this._chartsStorageUrl,
            charts_storage_api_version: this._chartsStorageApiVersion,
            client_id: this._clientId,
            user_id: this._userId,
            toolbar_bg: this.toolsBg,
            debug: true,
            studies_overrides: k,
            fullscreen: this._fullscreen,
            autosize: this._autosize,
            overrides: this.overrides_obj,
        };
        console.log("Created option Graph");
        var tvWidget = new __WEBPACK_IMPORTED_MODULE_6__assets_charting_library_charting_library_min__["widget"](widgetOptions);
        tvWidget.onChartReady(function () {
            console.log("Ploting  Graph");
            tvWidget.createButton()
                .attr('title', "1 Hour")
                .on('click', function (e) {
                tvWidget.chart().setResolution("1", function () {
                    console.log("set resolution callback");
                });
            }).append($('<span>1 Hour</span>'));
            tvWidget.createButton()
                .attr('title', "6Hours")
                .on('click', function (e) {
                tvWidget.chart().setResolution("360", function () {
                    console.log("set resolution callback");
                });
            }).append($('<span>6 Hours</span>'));
            tvWidget.createButton()
                .attr('title', "1day")
                .on('click', function (e) {
                tvWidget.chart().setResolution("1D", function () {
                    console.log("set resolution callback");
                });
            }).append($('<span>1Day</span>'));
            tvWidget.createButton()
                .attr('title', "1week")
                .on('click', function (e) {
                tvWidget.chart().setResolution("1W", function () {
                    console.log("set resolution callback");
                });
            }).append($('<span>1Week</span>'));
            tvWidget.createButton()
                .attr('title', "1 Month")
                .on('click', function (e) {
                tvWidget.chart().setResolution("1M", function () {
                    console.log("set resolution callback");
                });
            }).append($('<span>1Month</span>'));
            tvWidget.createButton()
                .attr('title', "1 Year")
                .on('click', function (e) {
                tvWidget.chart().setResolution("12M", function () {
                    console.log("set resolution callback");
                });
            }).append($('<span>1Year</span>'));
            tvWidget.createButton()
                .attr('title', "1 Year")
                .on('click', function (e) {
                tvWidget.chart().setResolution("60M", function () {
                    console.log("set resolution callback");
                });
            }).append($('<span>MAX</span>'));
            tvWidget.createButton({ align: "right" })
                .attr('title', "Candle Stick")
                .addClass('customBtnGraph')
                .on('click', function (e) {
                tvWidget.chart().setChartType(1);
            }).append($('<span>Candle Stick</span>'));
            tvWidget.createButton({ align: "right" })
                .attr('title', "Line")
                .on('click', function (e) {
                tvWidget.chart().setChartType(2);
                tvWidget.chart().setResolution('1D', function () { });
            }).append($('<span>Line</span>'));
            // let line = document.getElementById('lineChart'+i).addEventListener('click',function(){
            //     tvWidget.chart().setChartType(2);
            // })
            // let candle = document.getElementById('candleStick'+i).addEventListener('click',function(){
            //     tvWidget.chart().setChartType(2);
            // })
            tvWidget.chart().setChartType(1);
        });
    };
    TvChartContainerComponent.prototype.coinDetails = function (id) {
        this.router.navigate(['coinpage/', id]);
    };
    TvChartContainerComponent.prototype.advancedTableFilter = function (data) {
        if (data.length > 0) {
            this.noData = false;
            this.coinList = data;
        }
        else {
            clearInterval(this.runningInterval);
            this.coinList = [];
            this.noData = true;
        }
    };
    TvChartContainerComponent.prototype.refreshRateIntervalChange = function (m) {
        var _this = this;
        if (m != 'false') {
            clearInterval(this.runningInterval);
            this.setIntervalTime = m + '000';
            this.runningInterval = Object(__WEBPACK_IMPORTED_MODULE_8_timers__["setInterval"])(function () {
                _this.getCoinList();
            }, this.setIntervalTime);
        }
        else {
            clearInterval(this.runningInterval);
        }
    };
    TvChartContainerComponent.prototype.decreaseTime = function (date, dec) {
        date = new Date(new Date().setMinutes(new Date().getMinutes() + dec)).toISOString();
        return date;
    };
    TvChartContainerComponent.prototype.favCoinFunctionality = function (pair, type, coins) {
        var _this = this;
        if (localStorage.getItem('userToken')) {
            var tokenV = localStorage.getItem('userToken');
            this.http.put('http://54.165.36.80:5687/api/userSetting/update', { favourites: [pair], token: tokenV }).map(function (response) { return response.json(); }).
                subscribe(function (data) {
                var message;
                if (type == 'normal') {
                    message = 'Added to Favourites list Successfully';
                }
                else if (type == 'fav') {
                    message = 'Removed from Favourites list Successfully  ';
                }
                _this.changeGraphTheme.trigger_successMessagePopUp_filter(message);
                var tokenV = localStorage.getItem('userToken');
                _this.getUserCoins(tokenV);
            }, function (error) {
                _this.changeGraphTheme.trigger_errorMessagePopUp_filter(error.error);
            });
        }
        else {
            var favCoins = pair;
            localStorage.setItem('favcoins', 'pair');
            if (type == 'normal') {
                if (sessionStorage.getItem('favouriteCoins')) {
                    var k = JSON.parse(sessionStorage.getItem('favouriteCoins'));
                    k.push(pair);
                    sessionStorage.setItem('favouriteCoins', JSON.stringify(k));
                }
                else {
                    var k = [];
                    k.push(pair);
                    sessionStorage.setItem('favouriteCoins', JSON.stringify(k));
                }
                // sessionStorage.setItem('favouriteCoins',)
                var obj = this.coinList.findIndex(function (coin) { return coins.pair === coin.pair; });
                this.coinList.splice(obj, 1);
                console.log(this.coinList.length);
                var coinList = this.coinList;
                this.favCoinsList.push(coins);
                this.favCoinsList = this.favCoinsList;
                this.coinList = [];
                coinList.forEach(function (element) {
                    _this.coinList.push(element);
                });
                // this.coinList = this.coinList;
            }
            else if (type == 'fav') {
                if (sessionStorage.getItem('favouriteCoins')) {
                    var k = JSON.parse(sessionStorage.getItem('favouriteCoins'));
                    k.pop(pair);
                    sessionStorage.setItem('favouriteCoins', JSON.stringify(k));
                }
                else {
                    // let k = [];
                    // k.push(pair);
                    // sessionStorage.setItem('favouriteCoins',JSON.stringify(k));
                }
                var obj = this.favCoinsList.findIndex(function (coin) { return coins.pair === coin.pair; });
                this.favCoinsList.splice(obj, 1);
                var coinList = this.favCoinsList;
                this.coinList.push(coins);
                this.coinList = this.coinList;
                this.favCoinsList = [];
                coinList.forEach(function (element) {
                    _this.favCoinsList.push(element);
                });
                this.favCoinsList = coinList;
            }
            if (this.forceLogin) {
                this.forceLogin = false;
                Object(__WEBPACK_IMPORTED_MODULE_8_timers__["setTimeout"])(function () {
                    _this.changeGraphTheme.trigger_loginPopUp_filter();
                }, 30000);
            }
        }
    };
    TvChartContainerComponent.prototype.getUserCoins = function (tokenV) {
        var _this = this;
        var toL = this.coinList.length + this.favCoinsList.length > 0 ? this.coinList.length + this.favCoinsList.length : 20;
        console.log(this.sortingKey);
        this.subscriptionOfHttp = this.http.post('http://54.165.36.80:5687/api/coins/getFavourites', { token: tokenV, from: 0, to: toL, sort: { key: this.sortingKey, value: this.reverse } }).map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.noData = false;
            _this.showLoadSpinner = false;
            for (var n = 0; n < data.length; n++) {
                if (data[n].favourite == true) {
                    _this.favCoinsList = data[n].data;
                }
                else if (data[n].favourite == false) {
                    _this.coinList = data[n].data;
                }
            }
        }, function (err) {
            _this.favCoinsList = [];
            _this.coinList = [];
        });
    };
    TvChartContainerComponent.prototype.signUpWithMail = function (userReg) {
        this.commonService.userRegistration(userReg);
        this.loginModal.hide();
        this.signUpModal.hide();
    };
    TvChartContainerComponent.prototype.loginWithMail = function (userLogin) {
        this.commonService.userLogin(userLogin);
        this.loginModal.hide();
        this.signUpModal.hide();
    };
    TvChartContainerComponent.prototype.userWithFavCoins = function () {
        this.isAdvFilter = false;
        this.clearInterval = true;
        this.coinList = [];
        this.favCoinsList = [];
        this.getAlongFavCoins();
        // if (parseInt(this.setIntervalTime) >= 1000) {
        //     this.runningInterval = setInterval(() => {
        //         this.getAlongFavCoins();
        //     }, this.setIntervalTime);
        // }
    };
    TvChartContainerComponent.prototype.userNormalData = function () {
        this.isAdvFilter = false;
        this.coinList = [];
        this.clearInterval = true;
        this.getCoinList();
    };
    TvChartContainerComponent.prototype.updateCurrency = function (value) {
        this.currencyValue = value;
    };
    TvChartContainerComponent.prototype.getLimitedCoins = function () {
    };
    TvChartContainerComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptionOfHttp1) {
            for (var m = 0; m < this.subscriptionOfHttp1.length; m++) {
                if (!this.subscriptionOfHttp1[m].closed) {
                    this.subscriptionOfHttp1[m].unsubscribe();
                }
            }
        }
        this.clearInterval = false;
        // this.subscriptions.unsubscribe();
        clearInterval(this.runningInterval);
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    // @HostListener("window:scroll", ['$event'])
    // onWindowScroll(event) {
    //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //         if (localStorage.getItem('userToken')) {
    //             this.url = 'http://54.165.36.80:5687/api/coins/getFavourites';
    //             let tokenv = localStorage.getItem('userToken');
    //             this.subscriptionOfHttp = this.http.post(this.url, { token: tokenv, from: this.coinList.length + this.favCoinsList.length, to: 20 }).map(
    //                 response => response.json()).subscribe(
    //                 data => {
    //                     if (this.clearInterval && data.length <= 2) {
    //                         for (let n = 0; n < data.length; n++) {
    //                             if (data[n].favourite == true) {
    //                                 data[n].data.forEach(element => {
    //                                     this.favCoinsList.push(element)
    //                                 });
    //                             }
    //                             else if (data[n].favourite == false) {
    //                                 data[n].data.forEach(element => {
    //                                     this.coinList.push(element)
    //                                 });
    //                                 //this.updateAllCoinsData(data[n].data);
    //                             }
    //                         }
    //                     }
    //                     else {
    //                         data.forEach(element => {
    //                             this.coinList.push(element)
    //                         });
    //                     }
    //                     this.showLoadSpinner = false;
    //                 },
    //                 err => {
    //                     console.log(err)
    //                 })
    //         }
    //         else {
    //             this.url = 'http://54.165.36.80:5687/exchange/getusd';
    //             this.subscriptionOfHttp = this.http.post(this.url, { from: this.coinList.length + 1, to: 21, token: localStorage.getItem('userToken') ? localStorage.getItem('userToken') : '' }).map(
    //                 response => response.json()).subscribe(
    //                 data => {
    //                     data.forEach(element => {
    //                         this.coinList.push(element)
    //                     });
    //                     this.showLoadSpinner = false;
    //                 },
    //                 err => {
    //                     console.log(err)
    //                 })
    //         }
    //         this.showLoadSpinner = true;
    //         this.showScrollTop = true;
    //     }
    // }
    /*AmChart Implementation */
    TvChartContainerComponent.prototype.themeDo = function (chartId, chartData, coinToken) {
        var isTheme = __WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md_utils_facade_browser__["a" /* document */].getElementsByTagName('body')[0].classList.contains('black-theme');
        if (isTheme) {
            this.greenColor = '#00FE2A';
            this.redColor = '#DA0202';
        }
        else {
            this.greenColor = '#00C300';
            this.redColor = '#E70000';
        }
        //   AmCharts.addMovingAverage(this.chartConfig.dataSets[0], this.chartConfig.panels[0], 'value', {
        //     useDataSetColors: false,
        //     color: "#ccffcc",
        //     title: "Moving average"
        // });
        this.amchartVariable[coinToken] = this.AmCharts.makeChart('candleStick' + chartId, {
            "type": "stock",
            "mouseWheelZoomEnabled": true,
            "theme": 'dark',
            "glueToTheEnd": true,
            "categoryAxesSettings": {
                "minPeriod": "mm",
                // "groupToPeriods": ["15mm"],
                "equalSpacing": true,
                "parseDates": false,
            },
            "dataSets": [{
                    "fieldMappings": [{
                            "fromField": "open",
                            "toField": "open"
                        }, {
                            "fromField": "close",
                            "toField": "close"
                        }, {
                            "fromField": "high",
                            "toField": "high"
                        }, {
                            "fromField": "low",
                            "toField": "low"
                        }, {
                            "fromField": "volume",
                            "toField": "volume"
                        }, {
                            "fromField": "value",
                            "toField": "value"
                        }],
                    "color": "#7f8da9",
                    "dataProvider": chartData,
                    "title": "West Stock",
                    "categoryField": "date"
                },
                // , {
                //   "fieldMappings": [ {
                //     "fromField": "vwap",
                //     "toField": "vwap"
                //   },
                //   {
                //     "fromField": "date",
                //     "toField": "date"
                //   } ],
                //   "color": "#fac314",
                //   "dataProvider": this.vwaparray,
                //   "compared": true,
                //   "title": "East Stock",
                //   "categoryField": "date"
                // } 
                {
                    "showCategoryAxis": true,
                    "title": "VWAP",
                    "fieldMappings": [{
                            "fromField": "vwap",
                            "toField": "vwap"
                        }],
                    //   dataProvider: this.vwaparray,
                    "categoryField": "date",
                    "compared": true
                }
            ],
            "zoomControl": {
                "maxZoomLevel": 64,
                "minZoomLevel": 1,
                "left": 1
            },
            "panels": [{
                    "title": "Value",
                    "showCategoryAxis": true,
                    "marginRight": 0,
                    "percentHeight": 70,
                    "recalculateToPercents": "never",
                    "valueAxes": [{
                            "id": "v1",
                            "dashLength": 5,
                            "gridThickness": 1,
                            "position": "right",
                            "ignoreAxisWidth": true,
                        }],
                    "categoryAxis": {
                        "minPeriod": 'ss',
                        "autoWrap": true,
                        "gridPosition": "start",
                        "labelRotation": 35,
                        "dashLength": 1,
                        "labelFrequency": 6,
                        "autoGridCount": false,
                        "gridThickness": 1,
                        "alwaysGroup": false,
                        "minHorizontalGap": 40,
                        "ignoreAxisWidth": true,
                        "labelsEnabled": true,
                        "startOnAxis": false,
                        "dateFormats": [{ period: 'fff', format: 'JJ:NN:SS' }, { period: 'ss', format: 'JJ:NN:SS' }, { period: 'mm', format: 'MMM DD JJ:NN' }, { period: 'hh', format: 'JJ:NN' }, { period: 'DD', format: 'MMM DD' }, { period: 'WW', format: 'MMM DD' }, { period: 'MM', format: 'MMM' }, { period: 'YYYY', format: 'YYYY' }]
                    },
                    "stockGraphs": [{
                            "type": "candlestick",
                            "id": "g1",
                            "balloonText": "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
                            "openField": "open",
                            "closeField": "close",
                            "highField": "high",
                            "lowField": "low",
                            "valueField": "close",
                            "lineColor": this.greenColor,
                            "fillColors": this.greenColor,
                            "negativeLineColor": this.redColor,
                            "negativeFillColors": this.redColor,
                            "lineAlpha": 0.7,
                            "fillAlphas": 1,
                            "useDataSetColors": false,
                            "comparable": true,
                            "compareField": "value",
                            "showBalloon": true,
                            "proCandlesticks": true
                        }],
                    "stockLegend": {
                        "valueTextRegular": undefined,
                        "periodValueTextComparing": "[[percents.value.close]]%"
                    },
                    "drawingIconsEnabled": true
                },
            ],
            "chartScrollbarSettings": {
                "graph": "g1",
                "graphType": "line",
                "usePeriod": "mm",
                "height": 1,
            },
            "chartCursor": {
                "categoryBalloonDateFormat": "DD MMMM",
                "cursorPosition": "middle",
            },
            "valueAxesSettings": {
                "inside": false,
                "showLastLabel": true
            },
            "panelsSettings": {
                "marginRight": 50,
                "marginTop": 30,
                "marginBottom": 40
            },
            "chartCursorSettings": {
                "valueLineBalloonEnabled": true,
                "valueLineEnabled": true,
                "cursorColor": "#fff",
                "valueBalloonsEnabled": true,
                "dateFormats": [{ period: 'fff', format: 'JJ:NN:SS' }, { period: 'ss', format: 'JJ:NN:SS' }, { period: 'mm', format: 'MMM DD JJ:NN' }, { period: 'hh', format: 'JJ:NN' }, { period: 'DD', format: 'MMM DD' }, { period: 'WW', format: 'MMM DD' }, { period: 'MM', format: 'MMM' }, { period: 'YYYY', format: 'YYYY' }]
                //   "categoryBalloonDateFormats": [ {
                //     "period": "mm",
                //     "format": "NN:SS"
                //   }, {
                //     "period": "hh",
                //     "format": "NN:SS:QQQ"
                //   } ]
            },
            "export": {
                "enabled": true,
                "position": "top-left"
            },
            "event": "zoomed",
            "method": '',
        });
        this.amchartVariable[coinToken].dataProvider = chartData;
        console.log(this.weeklyData);
        // setInterval(() => {
        //     this.AutoUpdateOfChart();
        // }, 3000)
    };
    TvChartContainerComponent.prototype.chartDispal = function (coinToken, intervalTime, rangeVal, btn) {
        var _this = this;
        if (this.amchartVariable[coinToken][btn]) {
            this.amchartVariable[coinToken].dataProvider = [];
            var data = this.amchartVariable[coinToken][btn];
            this.amchartVariable[coinToken].dataSets[0].dataProvider = data;
            // this.amchartVariable[coinToken].dataProvider = data;
            this.amchartVariable[coinToken].zoomOut();
            this.amchartVariable[coinToken].validateData();
            this.amchartVariable[coinToken].zoomOut();
        }
        else {
            this.http.post('http://54.165.36.80:5687/exchange/getChart', { pair: coinToken, interval: intervalTime, range: rangeVal }).map(function (response) { return response.json(); }).subscribe(function (data) {
                _this.amchartVariable[coinToken][btn] = data;
                _this.amchartVariable[coinToken].dataProvider = [];
                _this.amchartVariable[coinToken].dataSets[0].dataProvider = data;
                // this.amchartVariable[coinToken].dataProvider = data;
                _this.amchartVariable[coinToken].zoomOut();
                _this.amchartVariable[coinToken].validateData();
                _this.amchartVariable[coinToken].zoomOut();
            });
        }
        this.isBtnClicked = btn;
    };
    TvChartContainerComponent.prototype.AutoUpdateOfChart = function () {
        var _this = this;
        var _loop_3 = function (propt) {
            this_3.http.post('http://54.165.36.80:5687/exchange/getLastSecData', { pair: propt }).map(function (response) { return response.json(); }).subscribe(function (data) {
                // this.chartDataProvider.push(data);
                var k = _this.AmCharts;
                data[0]['date'] = new Date().toISOString();
                if (data.length > 0) {
                    console.log(_this.amchartVariable[propt].dataProvider.length);
                    // this.chartDataProvider.push(data[0]);
                    _this.amchartVariable[propt].dataSets[0].dataProvider.push(data[0]);
                    _this.amchartVariable[propt].dataProvider.shift();
                    _this.amchartVariable[propt].validateData();
                }
            });
        };
        var this_3 = this;
        for (var propt in this.amchartVariable) {
            _loop_3(propt);
        }
    };
    TvChartContainerComponent.prototype.changeType = function (type, variable) {
        if (type) {
            // this.btnActive= type;
            this.amchartVariable[variable].panels[0].stockGraphs[0].type = type;
            if (type == 'line') {
                this.amchartVariable[variable].panels[0].stockGraphs[0].fillAlphas = 0;
                this.amchartVariable[variable].validateData();
            }
            else if (type == 'candlestick') {
                this.amchartVariable[variable].panels[0].stockGraphs[0].fillAlphas = 1;
                this.amchartVariable[variable].validateData();
            }
        }
        // this.amchartVariable[variable].validateNow();
    };
    TvChartContainerComponent.prototype.advancedSearchFilter = function (advFilter) {
        var _this = this;
        if (advFilter.length > 0) {
            this.changeGraphTheme.clear_interval_filter();
            this.http.post('http://54.165.36.80:5687/exchange/getusd', { filter: advFilter, from: 0, to: 1500 }).map(function (response) { return response.json(); }).
                subscribe(function (data) {
                console.log(data);
                _this.advancedTableFilter(data);
            }, function (err) {
                console.log(err);
                var array = [];
                _this.advancedTableFilter(array);
            });
        }
    };
    TvChartContainerComponent.prototype.getPortfolioList = function () {
        var _this = this;
        var token = localStorage.getItem('userToken');
        this.http.post('http://54.165.36.80:5687/api/coins/getPortfolio', { token: token }).map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.getLoggedIn = false;
            var normalisation = [];
            // for(let k = 0 ; k < data.portfolioList.length ; k++){
            //     let obj = data.portfolioList.filter(x => x.pair ==  data.portfolioList[k].pair);
            //     for(let i = 0; i < data.portfolioList.length; i++){
            //         if(data.portfolioList[k].pair == data.portfolioList[i].pair){
            //             delete data.portfolioList[i]
            //         }
            //     }
            // }
            if (_this.portfolioList.length > 0) {
                _this.updatePortfolio(data.portfolioList);
                _this.showLoadSpinner = false;
            }
            else if (data.portfolioList.length == 0) {
                _this.showLoadSpinner = false;
                _this.noData = true;
            }
            else {
                _this.portfolioList = data.portfolioList;
                // for(let k = 0; k < this.portfolioList.length ; k++){
                //     let lucky = data.portfolioList.filter(() => (item) {
                //                 if(item.pair == this.portfolioList[k].pair){
                //                     return item.pair == this.portfolioList[k].pair;
                //                 }
                //     });
                // }
                // for(let m = 0; m < this.portfolioList.length; m++){
                //     let lucky = data.portfolioList.filter(function(item) {
                //         if(item.pair == this.portfolioList[m].pair){
                //             return item.pair == this.portfolioList[m].pair;
                //         }
                //       });
                // }
                console.log(data);
                _this.showLoadSpinner = false;
                _this.runningInterval = Object(__WEBPACK_IMPORTED_MODULE_8_timers__["setInterval"])(function () {
                    _this.getPortfolioList();
                }, _this.setIntervalTime);
            }
        });
    };
    TvChartContainerComponent.prototype.updatePortfolio = function (allCoins) {
        console.log(allCoins);
        var _loop_4 = function (i) {
            var checkIsThere = true;
            var obj = this_4.portfolioList.findIndex(function (coin) { return allCoins[i].pair === coin.pair; });
            if (obj != -1) {
                this_4.portfolioList[obj].price = allCoins[i].price;
                this_4.portfolioList[obj].total_coins = allCoins[i].total_coins;
                this_4.portfolioList[obj].price_paid = allCoins[i].price_paid;
                console.log(this_4.portfolioList[obj].price, allCoins[i].price);
                this_4.portfolioList[obj].priceStatus = allCoins[i].priceStatus;
                this_4.portfolioList[obj].dayPrice = allCoins[i].dayPrice;
                this_4.portfolioList[obj].dayPriceStatus = allCoins[i].dayPriceStatus;
            }
            else {
                this_4.portfolioList.push(allCoins[i]);
            }
        };
        var this_4 = this;
        for (var i = 0; i < allCoins.length; i++) {
            _loop_4(i);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loginform'),
        __metadata("design:type", Object)
    ], TvChartContainerComponent.prototype, "loginModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('registerform'),
        __metadata("design:type", Object)
    ], TvChartContainerComponent.prototype, "signUpModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('successMessage'),
        __metadata("design:type", Object)
    ], TvChartContainerComponent.prototype, "successModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('errorMessage'),
        __metadata("design:type", Object)
    ], TvChartContainerComponent.prototype, "errorModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TvChartContainerComponent.prototype, "symbol", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TvChartContainerComponent.prototype, "interval", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TvChartContainerComponent.prototype, "datafeedUrl", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TvChartContainerComponent.prototype, "libraryPath", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TvChartContainerComponent.prototype, "chartsStorageUrl", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TvChartContainerComponent.prototype, "chartsStorageApiVersion", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TvChartContainerComponent.prototype, "clientId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TvChartContainerComponent.prototype, "userId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TvChartContainerComponent.prototype, "fullscreen", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TvChartContainerComponent.prototype, "autosize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TvChartContainerComponent.prototype, "containerId", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TvChartContainerComponent.prototype, "graphId", void 0);
    TvChartContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tv-chart-container',
            template: __webpack_require__("./src/app/main/tv-chart-container/tv-chart-container.component.html"),
            styles: [__webpack_require__("./src/app/main/tv-chart-container/tv-chart-container.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__amcharts_amcharts3_angular__["b" /* AmChartsService */], __WEBPACK_IMPORTED_MODULE_5__common_service_service__["a" /* CommonServiceService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__comp_data_sharing_service__["a" /* CompDataSharingService */]])
    ], TvChartContainerComponent);
    return TvChartContainerComponent;
}());



/***/ }),

/***/ "./src/assets/charting_library/charting_library.min.js":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.TradingView=t.TradingView||{})}(this,function(t){"use strict";function e(t,o){var i=n({},t);for(var s in o)"object"!=typeof t[s]||null===t[s]||Array.isArray(t[s])?void 0!==o[s]&&(i[s]=o[s]):i[s]=e(t[s],o[s]);return i}function o(){return"1.12 (internal id 7580da73 @ 2018-05-14 05:13:04.428607)"}function i(t){window.addEventListener("DOMContentLoaded",t,!1)}var n=Object.assign||function(t){for(var e,o=arguments,i=1,n=arguments.length;i<n;i++){e=o[i];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},s={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},r={width:800,height:500,symbol:"AA",interval:"D",timezone:"UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"W"},{text:"1y",resolution:"W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}},a=function(){function t(t){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!t.datafeed)throw new Error("Datafeed is not defined");if(this._options=e(r,t),t.preset){var o=s[t.preset];o?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(o.disabled_features):this._options.disabled_features=o.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(o.enabled_features):this._options.enabled_features=o.enabled_features):console.warn("Unknown preset: `"+t.preset+"`")}this._create()}return t.prototype.onChartReady=function(t){this._ready?t.call(this):this._readyHandlers.push(t)},t.prototype.onGrayedObjectClicked=function(t){this._innerAPI().onGrayedObjectClicked(t)},t.prototype.onShortcut=function(t,e){this._innerWindow().createShortcutAction(t,e)},t.prototype.subscribe=function(t,e){this._innerAPI().subscribe(t,e)},t.prototype.unsubscribe=function(t,e){this._innerAPI().unsubscribe(t,e)},t.prototype.chart=function(t){return this._innerAPI().chart(t)},t.prototype.setLanguage=function(t){this.remove(),this._options.locale=t,this._create()},t.prototype.setSymbol=function(t,e,o){this._innerAPI().changeSymbol(t,e+"",o)},t.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id];var t=this._getIFrameElement();t.contentWindow.destroyChart(),t.parentNode&&t.parentNode.removeChild(t)},t.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},t.prototype.selectLineTool=function(t){this._innerAPI().selectLineTool(t)},t.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},t.prototype.save=function(t){this._innerAPI().saveChart(t)},t.prototype.load=function(t,e){this._innerAPI().loadChart({json:t,extendedData:e})},t.prototype.getSavedCharts=function(t){this._innerAPI().getSavedCharts(t)},t.prototype.loadChartFromServer=function(t){this._innerAPI().loadChartFromServer(t)},t.prototype.saveChartToServer=function(t,e,o,i){this._innerAPI().saveChartToServer(t,e,o,i)},t.prototype.removeChartFromServer=function(t,e){this._innerAPI().removeChartFromServer(t,e)},t.prototype.onContextMenu=function(t){this._innerAPI().onContextMenu(t)},t.prototype.createButton=function(t){return this._innerWindow().createButton(t)},t.prototype.showNoticeDialog=function(t){this._innerAPI().showNoticeDialog(t)},t.prototype.showConfirmDialog=function(t){this._innerAPI().showConfirmDialog(t)},t.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},t.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},t.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},t.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},t.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},t.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},t.prototype.addCustomCSSFile=function(t){this._innerWindow().addCustomCSSFile(t)},t.prototype.applyOverrides=function(t){this._options=e(this._options,{overrides:t}),this._innerWindow().applyOverrides(t)},t.prototype.applyStudiesOverrides=function(t){this._innerWindow().applyStudiesOverrides(t)},t.prototype.watchList=function(){return this._innerAPI().watchlist()},t.prototype.activeChart=function(){return this._innerAPI().activeChart()},t.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},t.prototype.layout=function(){return this._innerAPI().layout()},t.prototype.setLayout=function(t){this._innerAPI().setLayout(t)},t.prototype._getIFrameElement=function(){var t=document.getElementById(this._id);if(null===t)throw new Error("There is no such iframe");return t},t.prototype._innerAPI=function(){return this._getIFrameElement().contentWindow.tradingViewApi},t.prototype._innerWindow=function(){return this._getIFrameElement().contentWindow},t.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._getIFrameElement().style.height=window.innerHeight+"px")},t.prototype._create=function(){var t=this,e=this._render(),o=document.getElementById(this._options.container_id);if(null===o)throw new Error("There is no such element - #"+this._options.container_id);o.innerHTML=e;var i=this._getIFrameElement();(this._options.autosize||this._options.fullscreen)&&(i.style.width="100%",this._options.fullscreen||(i.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize();var n=function(){i.removeEventListener("load",n,!1),i.contentWindow.widgetReady(function(){t._ready=!0;for(var e=0,o=t._readyHandlers;e<o.length;e++){o[e].call(t)}i.contentWindow.initializationFinished()})};i.addEventListener("load",n,!1)},t.prototype._render=function(){var t=window;t[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.customFormatters,brokerFactory:this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter},this._options.saved_data&&(t[this._id].chartContent={json:this._options.saved_data});var e=(this._options.library_path||"")+"static/tv-chart.7580da73a91e1354cb09.html#localserver=1&symbol="+encodeURIComponent(this._options.symbol)+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+this._options.toolbar_bg.replace("#",""):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.indicators_file_name?"&indicatorsFile="+encodeURIComponent(this._options.indicators_file_name):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+this._options.debug+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+e+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},t}(),d=a;window.TradingView=window.TradingView||{},window.TradingView.version=o,t.version=o,t.onready=i,t.widget=d,Object.defineProperty(t,"__esModule",{value:!0})});


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map