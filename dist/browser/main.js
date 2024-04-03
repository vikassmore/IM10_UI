(self["webpackChunkemporium"] = self["webpackChunkemporium"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.settings */ 1182);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 325);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 5314);











class AppComponent {
    constructor(appSettings, router, platformId, translate) {
        this.appSettings = appSettings;
        this.router = router;
        this.platformId = platformId;
        this.translate = translate;
        this.loading = false;
        this.settings = this.appSettings.settings;
        translate.addLangs(['en', 'de', 'fr', 'ru', 'tr']);
        translate.setDefaultLang('en');
        translate.use('en');
    }
    ngOnInit() {
        // this.router.navigate(['']);  //redirect other pages to homepage on browser refresh    
    }
    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
                    window.scrollTo(0, 0);
                }
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 4, consts: [["id", "app", 1, "h-100", "app", 3, "ngClass", "dir"], ["bdColor", "rgba(51,51,51,0.7)", "size", "large", "color", "#fff", "type", "ball-clip-rotate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ngx-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("main-toolbar-fixed", ctx.settings.mainToolbarFixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.settings.theme)("dir", ctx.settings.rtl ? "rtl" : "ltr");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultClassDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Dir, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-spinner */ 5314);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @agm/core */ 1466);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/utils/custom-overlay-container */ 8758);
/* harmony import */ var _theme_utils_scroll_strategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme/utils/scroll-strategy */ 6025);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ 325);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/http-loader */ 9476);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ 2937);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ 6738);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/pages.component */ 7664);
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ 9473);
/* harmony import */ var _theme_components_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/components/top-menu/top-menu.component */ 7718);
/* harmony import */ var _theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme/components/menu/menu.component */ 8469);
/* harmony import */ var _theme_components_sidenav_menu_sidenav_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme/components/sidenav-menu/sidenav-menu.component */ 2521);
/* harmony import */ var _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme/components/breadcrumb/breadcrumb.component */ 2333);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.settings */ 1182);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.service */ 900);
/* harmony import */ var _theme_utils_app_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./theme/utils/app-interceptor */ 1350);
/* harmony import */ var _theme_components_options_options_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./theme/components/options/options.component */ 7588);
/* harmony import */ var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./theme/components/footer/footer.component */ 5893);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2316);
































function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__.TranslateHttpLoader(httpClient, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url + '/assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [
        _app_settings__WEBPACK_IMPORTED_MODULE_12__.AppSettings,
        _app_service__WEBPACK_IMPORTED_MODULE_13__.AppService,
        { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__.OverlayContainer, useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_0__.CustomOverlayContainer },
        { provide: _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MAT_MENU_SCROLL_STRATEGY, useFactory: _theme_utils_scroll_strategy__WEBPACK_IMPORTED_MODULE_1__.menuScrollStrategy, deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__.Overlay] },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HTTP_INTERCEPTORS, useClass: _theme_utils_app_interceptor__WEBPACK_IMPORTED_MODULE_14__.AppInterceptor, multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_24__.NgxSpinnerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_27__.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyAO7Mg2Cs1qzo_3jkKkZAKY6jtwIlm41-I'
            }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClient]
                }
            }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _app_routing__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent,
        _pages_pages_component__WEBPACK_IMPORTED_MODULE_6__.PagesComponent,
        _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent,
        _theme_components_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_8__.TopMenuComponent,
        _theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__.MenuComponent,
        _theme_components_sidenav_menu_sidenav_menu_component__WEBPACK_IMPORTED_MODULE_10__.SidenavMenuComponent,
        _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbComponent,
        _theme_components_options_options_component__WEBPACK_IMPORTED_MODULE_15__.OptionsComponent,
        _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__.FooterComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_24__.NgxSpinnerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerModule, _agm_core__WEBPACK_IMPORTED_MODULE_27__.AgmCoreModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslateModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _app_routing__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule] }); })();


/***/ }),

/***/ 6738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/pages.component */ 7664);
/* harmony import */ var src_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/auth.guard */ 7397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    { path: 'login/loginpage',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_0__.PagesComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard], children: []
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'admin', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-input-file___ivy_ngcc___fesm2015_ngx-input-file_js-src_app_shared_se-c06a54"), __webpack_require__.e("src_app_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 7095)).then(m => m.AdminModule), data: { allowedRoles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] } },
    { path: '', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("default-node_modules_ngx-input-file___ivy_ngcc___fesm2015_ngx-input-file_js-src_app_shared_se-c06a54"), __webpack_require__.e("common"), __webpack_require__.e("src_app_loginpages_loginpages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./loginpages/loginpages.module */ 5780)).then(m => m.LoginpagesModule) },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules,
                relativeLinkResolution: 'legacy',
                initialNavigation: 'enabled',
                useHash: true,
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 900:
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Data": () => (/* binding */ Data),
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _services_env_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/env-url */ 4352);





class Data {
    constructor() { }
}
class AppService {
    constructor(http, snackBar, _envUrl) {
        this.http = http;
        this.snackBar = snackBar;
        this._envUrl = _envUrl;
        this.Data = new Data();
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + '/assets/data/';
        this.createCompleteRoute = (route, envAddress) => {
            return `${envAddress}/${route}`;
        };
        ///SuperAdmin///
        //Adduser
        this.AddUser = (route, body) => {
            return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
        //Edituser
        this.edituser = (route, body) => {
            return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
        //getuserbyid
        this.getById = (path, serviceId) => {
            return this.http.get(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
        };
        //getalluserlist
        this.getUserList = (route) => {
            return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        //deleteuser
        this.deleteuser = (route, body) => {
            return this.http.delete(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        //adduseplayer
        this.AddUserPlayer = (route, body) => {
            return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
        //Getuserplayerdetails
        this.getAllPlayerDetail = (route) => {
            return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        //Edituser
        this.edituserplayer = (route, body) => {
            return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
        //GetAllUserPlayer
        this.GetAllUserPlayer = (route) => {
            return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        this.getfilteruserId = (route) => {
            return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        ///Content Admin///
        this.getContentList = (route) => {
            return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        this.getcontentList = (route) => {
            return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        this.editplayer = (route, body) => {
            return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
        this.getAllRoles = (route) => {
            return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        this.getAllCategory = (route) => {
            return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        this.getAllSports = (route) => {
            return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        this.getsubAllCategory = (route) => {
            return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        this.getsubAllcontenttype = (route) => {
            return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        //deleteuserplayer
        this.deleteuserplayer = (route, body) => {
            return this.http.delete(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        //ChangePassword
        this.changepassword = (route, body) => {
            return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
        this.getUserId = (route) => {
            return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        //getuserbyid
        this.getPlayerById = (path, serviceId) => {
            return this.http.get(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
        };
        //AddContent
        this.AddContent = (route, body) => {
            return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
        //Editcontent
        this.editcontent = (route, body) => {
            return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
        //getcontentbyid
        this.getContentById = (path, serviceId) => {
            return this.http.get(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
        };
        //getcontentbyid
        this.getContentByPlayerId = (path, serviceId) => {
            return this.http.get(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
        };
        //GetAllContentUpdate
        this.GetAllContentUpdate = (route) => {
            return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        //AddContentUpdate
        this.AddContentUpdate = (route, body) => {
            return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
        //getContentUpdateBycontentIdId
        this.getContentUpdateBycontentIdId = (path, serviceId) => {
            return this.http.get(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
        };
        ///QAAdmin
        //ApproveContent
        this.ApproveContent = (route, body) => {
            return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
        //ApproveAdvContent
        this.ApproveAdvContent = (route, body) => {
            return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
        //Editcontent
        this.ApproveUpdateContent = (route, body) => {
            return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
        ///Salesperson admin
        //getcontentbyid
        this.getAdvContentByPlayerId = (path, serviceId) => {
            return this.http.get(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
        };
        this.getsubAllcountry = (route) => {
            return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        this.getStateById = (route) => {
            return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        this.getCityById = (route) => {
            return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        //     //AddContent
        // public AddAdvContent = (route: string, body: any) => {
        //   return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        // }
        this.AddAdvContent = (route, body) => {
            return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
        //getcontentbyid
        this.getAdvContentById = (path, serviceId) => {
            return this.http.get(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
        };
        //Edituser
        this.denyapprovecontent = (route, body) => {
            return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
        this.Addlisting = (route, body) => {
            return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
        //getcontentbyid
        this.getAdvtContentByPlayerId = (path, serviceId) => {
            return this.http.get(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
        };
        this.getPlayerDetailsById = (path, serviceId) => {
            return this.http.get(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
        };
        //getContentUpdateByPlayerId
        this.getContentUpdateByPlayerId = (path, serviceId) => {
            return this.http.get(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
        };
        //getPlatyerbyid
        this.getPlatyerbyid = (path, serviceId) => {
            return this.http.get(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
        };
        //getCommentByPlayerId
        this.getCommentByPlayerId = (path, serviceId) => {
            return this.http.get(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
        };
        //  //Edituser
        //  public AddComment = (route: string, body: any) => {
        //   return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        // }
        this.AddComment = (route, body) => {
            return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
        ///get error / issue log list
        this.getallerrorissuelog = (route) => {
            return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress));
        };
        //AddContentUpdate
        this.AddCampaign = (route, body) => {
            return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
        ///Endorsment admin
        //getcontentbyid
        this.getCompanyPlayerId = (path, serviceId) => {
            return this.http.get(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
        };
        this.AddPlayerEndorsment = (route, body) => {
            return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
        //getPlayerEndorsmentPlayerId
        this.getPlayerEndorsmentPlayerId = (path, serviceId) => {
            return this.http.get(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
        };
        //getPlayerEndorsementById
        this.getPlayerEndorsementById = (path, serviceId) => {
            return this.http.get(this.createCompleteRoute(path + serviceId, this._envUrl.urlAddress));
        };
        //editPlayerEndorsement
        this.editPlayerEndorsement = (route, body) => {
            return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, { responseType: 'text' });
        };
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_env_url__WEBPACK_IMPORTED_MODULE_1__.EnvironmentUrlService)); };
AppService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac });


/***/ }),

/***/ 1182:
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Settings": () => (/* binding */ Settings),
/* harmony export */   "AppSettings": () => (/* binding */ AppSettings)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class Settings {
    constructor(name, theme, rtl, adminSidenavIsOpened, adminSidenavIsPinned, adminSidenavUserBlock, mainToolbarFixed) {
        this.name = name;
        this.theme = theme;
        this.rtl = rtl;
        this.adminSidenavIsOpened = adminSidenavIsOpened;
        this.adminSidenavIsPinned = adminSidenavIsPinned;
        this.adminSidenavUserBlock = adminSidenavUserBlock;
        this.mainToolbarFixed = mainToolbarFixed;
    }
}
class AppSettings {
    constructor() {
        this.settings = new Settings('IM 10', // theme name
        'green', // green, blue, red, pink, purple, grey
        false, // true = rtl, false = ltr
        true, // adminSidenavIsOpened
        true, // adminSidenavIsPinned 
        true, // adminSidenavUserBlock 
        false // mainToolbarFixed
        );
    }
}
AppSettings.ɵfac = function AppSettings_Factory(t) { return new (t || AppSettings)(); };
AppSettings.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppSettings, factory: AppSettings.ɵfac });


/***/ }),

/***/ 9473:
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 781);








class NotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goHome() {
        if (this.router.routerState.snapshot.url.includes("/admin")) {
            this.router.navigate(['/admin']);
        }
        else {
            this.router.navigate(['/']);
        }
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 25, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "h-100"], ["fxFlex", "80", "fxFlex.gt-sm", "30", "fxFlex.sm", "60"], [1, "p-0", "mat-elevation-z6", "box"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "bg-primary", "box-header"], [1, "mat-icon-xlg"], [1, "error"], ["fxLayout", "column", "fxLayoutAlign", "end center", 1, "box-content"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "mat-elevation-z8", "box-content-inner"], [1, "box-text"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "placeholder", "Enter search keyword..."], [1, "box-footer"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "mat-elevation-z8", 3, "click"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Opps, it seems that this page does not exist.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "If you are sure it should, search for it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Search keyword");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_button_click_19_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_button_click_22_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton], styles: [".box[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%] {\n  height: 180px;\n}\n.box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 12px;\n}\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n}\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .box-content-inner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -34px;\n  left: 34px;\n  right: 34px;\n  height: 180px;\n}\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .box-content-header[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .box-content-header.server-error[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  text-align: center;\n}\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]::last-child {\n  margin-bottom: 15px;\n}\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .box-footer[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 16px;\n}\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .box-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 70px;\n  margin: 0 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7QUFFUjtBQURRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBR1o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQUVSO0FBRFE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFHWjtBQURRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFHWjtBQUZZO0VBQ0ksbUJBQUE7QUFJaEI7QUFEUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFHWjtBQUZZO0VBQ0ksbUJBQUE7QUFJaEI7QUFEUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUdaO0FBRlk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUloQiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94e1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgLmJveC1oZWFkZXJ7XG4gICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgIC5lcnJvcntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJveC1jb250ZW50e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogMTgwcHg7ICAgICBcbiAgICAgICAgLmJveC1jb250ZW50LWlubmVye1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtMzRweDtcbiAgICAgICAgICAgIGxlZnQ6IDM0cHg7XG4gICAgICAgICAgICByaWdodDogMzRweDtcbiAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJveC1jb250ZW50LWhlYWRlcntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgICAgICAgICAgJi5zZXJ2ZXItZXJyb3J7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYm94LXRleHR7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgJjo6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5ib3gtZm9vdGVye1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 7664:
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesComponent": () => (/* binding */ PagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme/components/sidenav-menu/sidenav-menu.service */ 7283);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.settings */ 1182);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ 900);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _theme_components_sidenav_menu_sidenav_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/components/sidenav-menu/sidenav-menu.component */ 2521);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var _theme_components_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/components/top-menu/top-menu.component */ 7718);
/* harmony import */ var _theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/components/menu/menu.component */ 8469);
/* harmony import */ var _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/components/breadcrumb/breadcrumb.component */ 2333);




















const _c0 = ["sidenav"];
function PagesComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PagesComponent_div_29_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r2.scrollToTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class PagesComponent {
    constructor(appSettings, appService, sidenavMenuService, router, platformId) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.sidenavMenuService = sidenavMenuService;
        this.router = router;
        this.platformId = platformId;
        this.showBackToTop = false;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.sidenavMenuItems = this.sidenavMenuService.getSidenavMenuItems();
        setTimeout(() => {
            this.settings.theme = 'green';
        });
    }
    changeTheme(theme) {
        this.settings.theme = theme;
    }
    stopClickPropagate(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    search() { }
    scrollToTop() {
        var scrollDuration = 200;
        var scrollStep = -window.pageYOffset / (scrollDuration / 20);
        var scrollInterval = setInterval(() => {
            if (window.pageYOffset != 0) {
                window.scrollBy(0, scrollStep);
            }
            else {
                clearInterval(scrollInterval);
            }
        }, 10);
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformBrowser)(this.platformId)) {
                    window.scrollTo(0, 0);
                }
            });
        }
    }
    onWindowScroll($event) {
        const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        let header_toolbar = document.getElementById('header-toolbar');
        if (header_toolbar) {
            if (scrollTop >= header_toolbar.clientHeight) {
                this.settings.mainToolbarFixed = true;
            }
            else {
                if (!document.documentElement.classList.contains('cdk-global-scrollblock')) {
                    this.settings.mainToolbarFixed = false;
                }
            }
        }
        else {
            this.settings.mainToolbarFixed = true;
        }
        ($event.target.documentElement.scrollTop > 300) ? this.showBackToTop = true : this.showBackToTop = false;
    }
    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd) {
                this.sidenav.close();
            }
        });
        this.sidenavMenuService.expandActiveSubMenu(this.sidenavMenuService.getSidenavMenuItems());
    }
    closeSubMenus() {
        if (window.innerWidth < 960) {
            this.sidenavMenuService.closeAllSubMenus();
        }
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_0__.SidenavMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID)); };
PagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], viewQuery: function PagesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, hostBindings: function PagesComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("scroll", function PagesComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_0__.SidenavMenuService])], decls: 30, vars: 5, consts: [["mode", "over", 1, "sidenav", "mat-elevation-z6", 3, "opened"], ["sidenav", ""], ["mat-icon-button", "", "color", "warn", 1, "close", 3, "click"], ["color", "warn"], [1, "divider"], [3, "menuItems", "menuParentId"], [1, "text-center", "py-2"], ["viewBox", "0 0 24 24", 1, "social-icon"], ["d", "M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z"], ["d", "M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z"], ["d", "M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M19.5,12H18V10.5H17V12H15.5V13H17V14.5H18V13H19.5V12M9.65,11.36V12.9H12.22C12.09,13.54 11.45,14.83 9.65,14.83C8.11,14.83 6.89,13.54 6.89,12C6.89,10.46 8.11,9.17 9.65,9.17C10.55,9.17 11.13,9.56 11.45,9.88L12.67,8.72C11.9,7.95 10.87,7.5 9.65,7.5C7.14,7.5 5.15,9.5 5.15,12C5.15,14.5 7.14,16.5 9.65,16.5C12.22,16.5 13.96,14.7 13.96,12.13C13.96,11.81 13.96,11.61 13.89,11.36H9.65Z"], ["color", "primary", "id", "header-toolbar", 2, "height", "20px"], ["fxLayoutAlign", "space-between center", 1, "top-toolbar", "theme-container"], ["fxShow", "false", "fxShow.gt-sm", ""], ["fxLayoutAlign", "space-between center", 1, "logo-toolbar", "theme-container"], ["fxFlex", "20", 2, "padding-left", "500px"], ["routerLink", "/", 1, "logo", 3, "click"], [1, "theme-container", "main"], ["fxLayout", "row", "fxLayoutAlign", "center center", "class", "back-to-top transition", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "back-to-top", "transition", 3, "click"]], template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PagesComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "app-sidenav-menu", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-toolbar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-toolbar-row", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "app-top-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-toolbar-row", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PagesComponent_Template_a_click_23_listener() { return ctx.closeSubMenus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Startup-x");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "app-menu", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, PagesComponent_div_29_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("opened", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("menuItems", ctx.sidenavMenuItems)("menuParentId", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]("WELCOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showBackToTop);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenav, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _theme_components_sidenav_menu_sidenav_menu_component__WEBPACK_IMPORTED_MODULE_3__.SidenavMenuComponent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarRow, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__.DefaultShowHideDirective, _theme_components_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_4__.TopMenuComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultFlexDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent, _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutDirective], styles: [".main[_ngcontent-%COMP%] {\n  min-height: 400px;\n  min-height: calc(100vh - 288px);\n  padding: 16px;\n  box-sizing: border-box;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 202px;\n  padding: 8px 16px;\n  position: fixed;\n}\n\n.sidenav[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin-left: 178px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\n.cart-items-count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -3px;\n  left: 26px;\n  background: #f44336;\n  height: 18px;\n  width: 18px;\n  line-height: 18px;\n  border-radius: 50%;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQURJO0VBQ0ksa0JBQUE7QUFHUjs7QUFESTtFQUNJLGFBQUE7QUFHUjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFHSiIsImZpbGUiOiJwYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyODhweCk7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnNpZGVuYXZ7XG4gICAgd2lkdGg6IDIwMnB4O1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAuY2xvc2V7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNzhweDtcbiAgICB9XG4gICAgLmRpdmlkZXJ7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgfVxufVxuLmNhcnQtaXRlbXMtY291bnR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTNweDtcbiAgICBsZWZ0OiAyNnB4O1xuICAgIGJhY2tncm91bmQ6ICNmNDQzMzY7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IDExcHg7XG59Il19 */"] });


/***/ }),

/***/ 4352:
/*!*************************************!*\
  !*** ./src/app/services/env-url.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnvironmentUrlService": () => (/* binding */ EnvironmentUrlService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class EnvironmentUrlService {
    constructor() {
        this.urlAddress = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlAddress;
    }
}
EnvironmentUrlService.ɵfac = function EnvironmentUrlService_Factory(t) { return new (t || EnvironmentUrlService)(); };
EnvironmentUrlService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EnvironmentUrlService, factory: EnvironmentUrlService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6943:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/confirmdownload-dialog/confirmdownload-dialog.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmdownloadDialogComponent": () => (/* binding */ ConfirmdownloadDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 781);





class ConfirmdownloadDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onConfirm() {
        this.dialogRef.close(true);
    }
    onDismiss() {
        this.dialogRef.close(false);
    }
}
ConfirmdownloadDialogComponent.ɵfac = function ConfirmdownloadDialogComponent_Factory(t) { return new (t || ConfirmdownloadDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ConfirmdownloadDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmdownloadDialogComponent, selectors: [["app-confirmdownload-dialog"]], decls: 15, vars: 2, consts: [[1, "mat-dialog-title"], [1, "mat-dialog-content"], [1, "txt-cen"], ["src", "assets/images/bg/download.gif", "alt", "Delete ?", 1, "img1", 2, "width", "85px"], ["mat-dialog-actions", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "w-100"], ["mat-raised-button", "", "color", "primary", 1, "crbtn", "conf2", 2, "background-color", "#33c041", "color", "white", "border", "none", "padding", "0 10px", "border-radius", "4px", "float", "left", "margin-top", "10px !important", "width", "65px", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["mat-raised-button", "", "color", "primary", 1, "crbtn", "conf1", 2, "background-color", "#ff5252", "color", "white", "border", "none", "padding", "0 10px", "border-radius", "4px", "float", "right", "margin-top", "10px !important", "width", "65px", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times"]], template: function ConfirmdownloadDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmdownloadDialogComponent_Template_button_click_9_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmdownloadDialogComponent_Template_button_click_12_listener() { return ctx.onDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.message);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton], styles: [".app.blue[_ngcontent-%COMP%]   .mat-flat-button.mat-warn[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-raised-button.mat-warn[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-fab.mat-warn[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-mini-fab.mat-warn[_ngcontent-%COMP%] {\n     background-color: #ff5252;\n }\n .app.blue[_ngcontent-%COMP%]   .mat-flat-button.mat-primary[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-raised-button.mat-primary[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-fab.mat-primary[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n     background-color: #1976d2;\n }\n .crbtn[_ngcontent-%COMP%]{\n     line-height: 28px !important;\n }\n .conf1[_ngcontent-%COMP%]{\n     background-color: #ff5252;\n     color: white;\n     border: none;\n     padding: 0 10px;\n     border-radius: 4px;\n     float: right;\n     margin-top: 10px !important;\n     width: 65px;\n }\n .conf2[_ngcontent-%COMP%]{\n     background-color: #33c041;\n     color: white;\n     border: none;\n     padding: 0 10px;\n     border-radius: 4px;\n     float: left;\n     margin-top: 10px !important;\n     width: 65px;\n }\n .txt-cen[_ngcontent-%COMP%]{\n     text-align: center !important;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1kb3dubG9hZC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLHlCQUF5QjtDQUM3QjtDQUNBO0tBQ0kseUJBQXlCO0NBQzdCO0NBRUE7S0FDSSw0QkFBNEI7Q0FDaEM7Q0FFQTtLQUNJLHlCQUF5QjtLQUN6QixZQUFZO0tBQ1osWUFBWTtLQUNaLGVBQWU7S0FDZixrQkFBa0I7S0FDbEIsWUFBWTtLQUNaLDJCQUEyQjtLQUMzQixXQUFXO0NBQ2Y7Q0FFQTtLQUNJLHlCQUF5QjtLQUN6QixZQUFZO0tBQ1osWUFBWTtLQUNaLGVBQWU7S0FDZixrQkFBa0I7S0FDbEIsV0FBVztLQUNYLDJCQUEyQjtLQUMzQixXQUFXO0NBQ2Y7Q0FFQTtLQUNJLDZCQUE2QjtDQUNqQyIsImZpbGUiOiJjb25maXJtZG93bmxvYWQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLmJsdWUgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwgLmFwcC5ibHVlIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiwgLmFwcC5ibHVlIC5tYXQtZmFiLm1hdC13YXJuLCAuYXBwLmJsdWUgLm1hdC1taW5pLWZhYi5tYXQtd2FybiB7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjUyNTI7XG4gfVxuIC5hcHAuYmx1ZSAubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LCAuYXBwLmJsdWUgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LCAuYXBwLmJsdWUgLm1hdC1mYWIubWF0LXByaW1hcnksIC5hcHAuYmx1ZSAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IHtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiB9XG4gXG4gLmNyYnRue1xuICAgICBsaW5lLWhlaWdodDogMjhweCAhaW1wb3J0YW50O1xuIH1cbiBcbiAuY29uZjF7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjUyNTI7XG4gICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgYm9yZGVyOiBub25lO1xuICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgIHdpZHRoOiA2NXB4O1xuIH1cbiBcbiAuY29uZjJ7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzM2MwNDE7XG4gICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgYm9yZGVyOiBub25lO1xuICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgd2lkdGg6IDY1cHg7XG4gfVxuIFxuIC50eHQtY2Vue1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiB9Il19 */"] });


/***/ }),

/***/ 9760:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/token-storage.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenStorageService": () => (/* binding */ TokenStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }
}
TokenStorageService.ɵfac = function TokenStorageService_Factory(t) { return new (t || TokenStorageService)(); };
TokenStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenStorageService, factory: TokenStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-swiper-wrapper */ 2320);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 325);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 8662);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ 5924);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ 3894);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ 9243);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 2937);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 2323);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ 5937);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/radio */ 5644);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slider */ 3616);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sort */ 5381);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/stepper */ 8210);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 9150);
/* harmony import */ var _confirmdownload_dialog_confirmdownload_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmdownload-dialog/confirmdownload-dialog.component */ 6943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);







































const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true,
    suppressScrollX: true
};
// @NgModule({
//   imports: [CommonModule, AppModule], // <-- import the main module here
//   declarations: [SharedModule],
// })
// import { PipesModule } from '../theme/pipes/pipes.module';
// import { RatingComponent } from './rating/rating.component';
// import { ControlsComponent } from './controls/controls.component';
// import { MainCarouselComponent } from './main-carousel/main-carousel.component';
// import { BrandsCarouselComponent } from './brands-carousel/brands-carousel.component';
// import { ProductsCarouselComponent } from './products-carousel/products-carousel.component';
// import { ProductDialogComponent } from './products-carousel/product-dialog/product-dialog.component';
// import { BannersComponent } from './banners/banners.component';
// import { CategoryListComponent } from './category-list/category-list.component';
// import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
// import { LangComponent } from './lang/lang.component';
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__.PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__.SwiperModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__.MatButtonToggleModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatRippleModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSliderModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__.MatSortModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatTableModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__.MatToolbarModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltipModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__.MatStepperModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__.PerfectScrollbarModule,
        ], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__.SwiperModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltipModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__.MatStepperModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__.PerfectScrollbarModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_confirmdownload_dialog_confirmdownload_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmdownloadDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__.SwiperModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltipModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__.MatStepperModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__.PerfectScrollbarModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__.SwiperModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltipModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__.MatStepperModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__.PerfectScrollbarModule] }); })();


/***/ }),

/***/ 2333:
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/components/sidenav-menu/sidenav-menu.service */ 7283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ 1182);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 2529);











function BreadcrumbComponent_div_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BreadcrumbComponent_div_0_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r3.closeSubMenus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Homepage");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function BreadcrumbComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", i_r6 == ctx_r2.breadcrumbs.length - 1)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, breadcrumb_r5.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](breadcrumb_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", i_r6 != ctx_r2.breadcrumbs.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](breadcrumb_r5.name);
} }
function BreadcrumbComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BreadcrumbComponent_div_0_a_3_Template, 5, 0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BreadcrumbComponent_div_0_div_4_Template, 6, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.router.url != "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.breadcrumbs);
} }
class BreadcrumbComponent {
    constructor(appSettings, router, activatedRoute, title, sidenavMenuService) {
        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.sidenavMenuService = sidenavMenuService;
        this.breadcrumbs = [];
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                this.breadcrumbs = [];
                this.parseRoute(this.router.routerState.snapshot.root);
                this.pageTitle = "";
                this.breadcrumbs.forEach(breadcrumb => {
                    this.pageTitle += ' > ' + breadcrumb.name;
                });
                this.title.setTitle(this.settings.name + this.pageTitle);
            }
        });
    }
    parseRoute(node) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                let urlSegments = [];
                node.pathFromRoot.forEach(routerState => {
                    urlSegments = urlSegments.concat(routerState.url);
                });
                let url = urlSegments.map(urlSegment => {
                    return urlSegment.path;
                }).join('/');
                if (node.params.name) {
                    this.breadcrumbs.push({
                        name: node.params.name,
                        url: '/' + url
                    });
                }
                else {
                    this.breadcrumbs.push({
                        name: node.data['breadcrumb'],
                        url: '/' + url
                    });
                }
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }
    closeSubMenus() {
        if (window.innerWidth < 960) {
            this.sidenavMenuService.closeAllSubMenus();
        }
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_0__.SidenavMenuService)); };
BreadcrumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_0__.SidenavMenuService])], decls: 1, vars: 1, consts: [["fxLayout", "row wrap", 4, "ngIf"], ["fxLayout", "row wrap"], ["fxFlex", "100"], ["fxLayout", "row", 1, "breadcrumb", "light-block"], ["routerLink", "/", "class", "breadcrumb-item", "fxLayout", "row", "fxLayoutAlign", "start center", 3, "click", 4, "ngIf"], ["class", "breadcrumb-item", "fxLayout", "row", "fxLayoutAlign", "start center", 4, "ngFor", "ngForOf"], ["routerLink", "/", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "breadcrumb-item", 3, "click"], [1, "breadcrumb-title"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "breadcrumb-item"], [3, "hidden", "routerLink"], [1, "breadcrumb-title", "active", 3, "hidden"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BreadcrumbComponent_div_0_Template, 5, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.router.url != "/");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon], styles: ["@charset \"UTF-8\";\n.breadcrumb[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  box-shadow: none;\n  margin-bottom: 16px;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .breadcrumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-decoration: none;\n  color: inherit;\n}\n.breadcrumb[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n  padding: 0 6px;\n  opacity: 0.7;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-title.active[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]:before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  content: \"\u00BB\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQURJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUdSO0FBREk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUdSO0FBREk7RUFDSSx5QkFBQTtBQUdSO0FBREk7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBR1IiLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5icmVhZGNydW1iIHtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uYnJlYWRjcnVtYiBhLCAuYnJlYWRjcnVtYiBzcGFuIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLmJyZWFkY3J1bWIgLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBwYWRkaW5nOiAwIDZweDtcbiAgb3BhY2l0eTogMC43O1xufVxuLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItdGl0bGUuYWN0aXZlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgY29udGVudDogXCLCu1wiO1xufSJdfQ== */"] });


/***/ }),

/***/ 5893:
/*!*************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ 1466);








class FooterComponent {
    constructor() {
        this.lat = 40.678178;
        this.lng = -73.944158;
        this.zoom = 12;
    }
    ngOnInit() { }
    subscribe() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 76, vars: 7, consts: [[1, "bg-primary", "footer"], ["fxLayout", "column", "fxLayout.gt-sm", "row wrap", "fxLayoutAlign", "center center", 1, "border-bottom-mute", "subscribe-block", "theme-container"], ["fxFlex", "100", "fxFlex.gt-sm", "40", "fxLayout", "column", "fxLayoutAlign", "center center"], [1, "fw-500"], [1, "fw-300", "secondary-color"], ["method", "get", "fxLayout", "row", "fxFlex", "100", "fxFlex.gt-sm", "42.4", "ngClass.sm", "mt-2", "ngClass.xs", "mt-2", 1, "subscribe-search-form"], ["type", "text", "placeholder", "Your email address...", "fxFlex", ""], ["mat-raised-button", "", "color", "accent", "type", "button", 1, "mat-elevation-z0", "text-muted", 3, "click"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between", 1, "py-3", "border-bottom-mute", "theme-container"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "40"], [1, "col-title"], [1, "mt-2"], ["href", "javascript:void(0);", 1, "link", "secondary-color"], [1, "mt-1"], ["routerLink", "/contact", 1, "link", "secondary-color"], ["routerLink", "/compare", 1, "link", "secondary-color"], ["routerLink", "/wishlist", 1, "link", "secondary-color"], ["routerLink", "/checkout", 1, "link", "secondary-color"], ["fxFlex", "100", "fxFlex.gt-sm", "30", "fxFlex.sm", "60", "ngClass.xs", "mt-2", 1, "contact-information"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "mt-2", "secondary-color"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "mt-1", "secondary-color"], ["fxFlex", "100", "fxFlex.gt-sm", "50", "ngClass.sm", "mt-2", "ngClass.xs", "mt-2"], [3, "latitude", "longitude", "zoom", "mapTypeControl"], [3, "latitude", "longitude", "markerDraggable"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "space-between center", 1, "copyright", "secondary-color", "theme-container"], ["ngClass.xs", "mt-1"], ["mat-button", "", "href", "http://themeseason.com/", "target", "_blank"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Subscribe our Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Stay up to date with our latest new and products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_9_listener() { return ctx.subscribe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "USEFUL LINKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "CONTACT INFORMATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "location_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2903 Avenue Z, Brooklyn, NY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "(212) 457-2308");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "mail_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "contact@emporium.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Mon - Sun / 9:00AM - 8:00PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "directions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Get directions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "directions_bus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Routes to us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "agm-map", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "agm-marker", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Copyright \u00A9 2018 All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Designed & Developed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "ThemeSeason");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("mapTypeControl", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("markerDraggable", true);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__.DefaultClassDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _agm_core__WEBPACK_IMPORTED_MODULE_7__.AgmMap, _agm_core__WEBPACK_IMPORTED_MODULE_7__.AgmMarker, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor], styles: [".footer[_ngcontent-%COMP%] {\n  min-height: 100px;\n  padding: 16px 16px 0;\n}\n.footer[_ngcontent-%COMP%]   .subscribe-block[_ngcontent-%COMP%] {\n  padding: 16px 0 32px 0;\n  text-align: center;\n}\n.footer[_ngcontent-%COMP%]   .subscribe-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .subscribe-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n.footer[_ngcontent-%COMP%]   .subscribe-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n.footer[_ngcontent-%COMP%]   .subscribe-block[_ngcontent-%COMP%]   .subscribe-search-form[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 0 16px;\n}\n.footer[_ngcontent-%COMP%]   .subscribe-block[_ngcontent-%COMP%]   .subscribe-search-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  border: 0;\n  outline: none;\n  padding: 0 25px;\n  font-size: 16px;\n}\n.footer[_ngcontent-%COMP%]   .subscribe-block[_ngcontent-%COMP%]   .subscribe-search-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 0 24px;\n  border-radius: 0;\n}\n.footer[_ngcontent-%COMP%]   .col-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.footer[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 21px;\n  line-height: 21px;\n}\n.footer[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.footer[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.footer[_ngcontent-%COMP%]   .contact-information[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 300;\n}\n@media (max-width: 575px) {\n  .footer[_ngcontent-%COMP%]   .subscribe-block[_ngcontent-%COMP%]   .subscribe-search-form[_ngcontent-%COMP%] {\n    height: 40px;\n    margin-top: 16px;\n  }\n  .footer[_ngcontent-%COMP%]   .subscribe-block[_ngcontent-%COMP%]   .subscribe-search-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n    padding: 0 8px;\n    font-size: 14px;\n    width: 100%;\n  }\n  .footer[_ngcontent-%COMP%]   .subscribe-block[_ngcontent-%COMP%]   .subscribe-search-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 0 16px;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .footer[_ngcontent-%COMP%]   .subscribe-block[_ngcontent-%COMP%]   .subscribe-search-form[_ngcontent-%COMP%] {\n    margin-top: 16px;\n  }\n}\n.sebm-google-map-container[_ngcontent-%COMP%] {\n  height: 220px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUFJO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQUVSO0FBRFE7RUFDSSxjQUFBO0FBR1o7QUFEUTtFQUNJLGtCQUFBO0FBR1o7QUFEUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBR1o7QUFGWTtFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFJaEI7QUFGWTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJaEI7QUFBSTtFQUNJLGdCQUFBO0FBRVI7QUFBSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUVSO0FBQUk7RUFDSSxxQkFBQTtBQUVSO0FBRFE7RUFDSSwwQkFBQTtBQUdaO0FBQ1E7RUFDSSxrQkFBQTtBQUNaO0FBRUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUlBO0VBRVE7SUFDSSxZQUFBO0lBQ0EsZ0JBQUE7RUFGVjtFQUdVO0lBQ0ksY0FBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0VBRGQ7RUFHVTtJQUNJLGVBQUE7SUFDQSxlQUFBO0VBRGQ7QUFDRjtBQU1BO0VBRVE7SUFDSSxnQkFBQTtFQUxWO0FBQ0Y7QUFTQTtFQUNJLGFBQUE7QUFQSiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDE2cHggMTZweCAwO1xuICAgIC5zdWJzY3JpYmUtYmxvY2t7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMCAzMnB4IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaDEsIGgze1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIH1cbiAgICAgICAgaDF7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnN1YnNjcmliZS1zZWFyY2gtZm9ybXtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF17XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAyNHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNvbC10aXRsZXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLm1hdC1pY29ue1xuICAgICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIH1cbiAgICAubGlua3tcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRhY3QtaW5mb3JtYXRpb257XG4gICAgICAgIC5tYXQtaWNvbntcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY29weXJpZ2h0e1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICAuZm9vdGVyIC5zdWJzY3JpYmUtYmxvY2t7XG4gICAgICAgIC5zdWJzY3JpYmUtc2VhcmNoLWZvcm17XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHsgICAgXG4gICAgLmZvb3RlciAuc3Vic2NyaWJlLWJsb2Nre1xuICAgICAgICAuc3Vic2NyaWJlLXNlYXJjaC1mb3Jte1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlYm0tZ29vZ2xlLW1hcC1jb250YWluZXIge1xuICAgIGhlaWdodDogMjIwcHg7XG59Il19 */"] });


/***/ }),

/***/ 8469:
/*!*********************************************************!*\
  !*** ./src/app/theme/components/menu/menu.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class MenuComponent {
    constructor() { }
    ngOnInit() { }
    openMegaMenu() {
        let pane = document.getElementsByClassName('cdk-overlay-pane');
        [].forEach.call(pane, function (el) {
            if (el.children.length > 0) {
                if (el.children[0].classList.contains('mega-menu')) {
                    el.classList.add('mega-menu-pane');
                }
            }
        });
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 0, vars: 0, template: function MenuComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7588:
/*!***************************************************************!*\
  !*** ./src/app/theme/components/options/options.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsComponent": () => (/* binding */ OptionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app.settings */ 1182);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 298);









const _c0 = function (a0) { return { "show": a0 }; };
class OptionsComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.showOptions = false;
        this.settings = this.appSettings.settings;
    }
    changeTheme(theme) {
        this.settings.theme = theme;
    }
}
OptionsComponent.ɵfac = function OptionsComponent_Factory(t) { return new (t || OptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings)); };
OptionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OptionsComponent, selectors: [["app-options"]], decls: 14, vars: 3, consts: [[1, "options", "transition", 3, "ngClass"], ["mat-raised-button", "", 1, "options-icon", "mat-elevation-z0", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "space-between center"], [1, "skin-icon", "green", 3, "click"], [1, "skin-icon", "blue", 3, "click"], [1, "skin-icon", "red", 3, "click"], [1, "skin-icon", "pink", 3, "click"], [1, "skin-icon", "purple", 3, "click"], [1, "skin-icon", "grey", 3, "click"], ["mat-mini-fab", "", "color", "warn", "matTooltip", "LTR / RTL", 3, "click"]], template: function OptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OptionsComponent_Template_button_click_1_listener() { return ctx.showOptions = !ctx.showOptions; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "palette");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OptionsComponent_Template_span_click_5_listener() { return ctx.changeTheme("green"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OptionsComponent_Template_span_click_6_listener() { return ctx.changeTheme("blue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OptionsComponent_Template_span_click_7_listener() { return ctx.changeTheme("red"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OptionsComponent_Template_span_click_8_listener() { return ctx.changeTheme("pink"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OptionsComponent_Template_span_click_9_listener() { return ctx.changeTheme("purple"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OptionsComponent_Template_span_click_10_listener() { return ctx.changeTheme("grey"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OptionsComponent_Template_button_click_11_listener() { return ctx.settings.rtl = !ctx.settings.rtl; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "swap_horiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx.showOptions));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__.DefaultClassDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip], styles: [".options[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 300px;\n  position: fixed;\n  top: 100px;\n  right: -62px;\n  z-index: 9999;\n}\n.options[_ngcontent-%COMP%]   .options-icon[_ngcontent-%COMP%] {\n  padding: 0;\n  position: absolute;\n  top: 12px;\n  left: -36px;\n  min-width: 38px;\n  z-index: 1;\n  box-shadow: -2px 3px 1px -2px rgba(0, 0, 0, 0.2), -2px 2px 2px 0 rgba(0, 0, 0, 0.14), -2px 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.options[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 14px;\n  width: 100%;\n  height: 100%;\n}\n.options.show[_ngcontent-%COMP%] {\n  right: -2px;\n}\n.options[_ngcontent-%COMP%]   .skin-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n}\n.options[_ngcontent-%COMP%]   .skin-icon.green[_ngcontent-%COMP%] {\n  background-color: #37993f;\n}\n.options[_ngcontent-%COMP%]   .skin-icon.blue[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n}\n.options[_ngcontent-%COMP%]   .skin-icon.red[_ngcontent-%COMP%] {\n  background-color: #d32f2f;\n}\n.options[_ngcontent-%COMP%]   .skin-icon.pink[_ngcontent-%COMP%] {\n  background-color: #c2185b;\n}\n.options[_ngcontent-%COMP%]   .skin-icon.purple[_ngcontent-%COMP%] {\n  background-color: #7b1fa2;\n}\n.options[_ngcontent-%COMP%]   .skin-icon.grey[_ngcontent-%COMP%] {\n  background-color: #455a64;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDSjtBQUFJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHdIQUFBO0FBRVI7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQVI7QUFFSTtFQUNJLFdBQUE7QUFBUjtBQUVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQVI7QUFDUTtFQUNJLHlCQUFBO0FBQ1o7QUFDUTtFQUNJLHlCQUFBO0FBQ1o7QUFDUTtFQUNJLHlCQUFBO0FBQ1o7QUFDUTtFQUNJLHlCQUFBO0FBQ1o7QUFDUTtFQUNJLHlCQUFBO0FBQ1o7QUFDUTtFQUNJLHlCQUFBO0FBQ1oiLCJmaWxlIjoib3B0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpb25ze1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMTAwcHg7XG4gICAgcmlnaHQ6IC02MnB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgLm9wdGlvbnMtaWNvbntcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgIGxlZnQ6IC0zNnB4O1xuICAgICAgICBtaW4td2lkdGg6IDM4cHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGJveC1zaGFkb3c6IC0ycHggM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCBcbiAgICAgICAgICAgICAgICAgICAgLTJweCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCBcbiAgICAgICAgICAgICAgICAgICAgLTJweCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuICAgIH1cbiAgICAubWF0LWNhcmR7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcGFkZGluZzogMTRweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgJi5zaG93e1xuICAgICAgICByaWdodDogLTJweDtcbiAgICB9XG4gICAgLnNraW4taWNvbntcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgICAgICAgXG4gICAgICAgICYuZ3JlZW57XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc5OTNmO1xuICAgICAgICB9XG4gICAgICAgICYuYmx1ZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gICAgICAgIH1cbiAgICAgICAgJi5yZWR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyZjJmO1xuICAgICAgICB9XG4gICAgICAgICYucGlua3tcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMjE4NWI7XG4gICAgICAgIH1cbiAgICAgICAgJi5wdXJwbGV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IxZmEyO1xuICAgICAgICB9XG4gICAgICAgICYuZ3JleXtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTVhNjQ7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 2521:
/*!*************************************************************************!*\
  !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavMenuComponent": () => (/* binding */ SidenavMenuComponent)
/* harmony export */ });
/* harmony import */ var _sidenav_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav-menu.service */ 7283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 325);









const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return { exact: true }; };
function SidenavMenuComponent_div_0_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavMenuComponent_div_0_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onClick(menu_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, menu_r1.routerLink))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1))("id", "menu-item-" + menu_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, menu_r1.title));
} }
function SidenavMenuComponent_div_0_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavMenuComponent_div_0_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onClick(menu_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "menu-item-" + menu_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("href", menu_r1.href || "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("target", menu_r1.target || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, menu_r1.title));
} }
function SidenavMenuComponent_div_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavMenuComponent_div_0_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.onClick(menu_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "menu-item-" + menu_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, menu_r1.title));
} }
function SidenavMenuComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-sidenav-menu", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "sub-menu-" + menu_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menuItems", ctx_r5.menuItems)("menuParentId", menu_r1.id);
} }
function SidenavMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidenavMenuComponent_div_0_a_1_Template, 4, 9, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidenavMenuComponent_div_0_a_2_Template, 4, 6, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidenavMenuComponent_div_0_a_3_Template, 6, 4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SidenavMenuComponent_div_0_div_4_Template, 2, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menu_r1.routerLink && !menu_r1.hasSubMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menu_r1.href && !menu_r1.subMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menu_r1.hasSubMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menu_r1.hasSubMenu);
} }
class SidenavMenuComponent {
    constructor(sidenavMenuService) {
        this.sidenavMenuService = sidenavMenuService;
    }
    ngOnInit() {
        this.parentMenu = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
    onClick(menuId) {
        this.sidenavMenuService.toggleMenuItem(menuId);
        this.sidenavMenuService.closeOtherSubMenus(this.menuItems, menuId);
    }
}
SidenavMenuComponent.ɵfac = function SidenavMenuComponent_Factory(t) { return new (t || SidenavMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_0__.SidenavMenuService)); };
SidenavMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidenavMenuComponent, selectors: [["app-sidenav-menu"]], inputs: { menuItems: "menuItems", menuParentId: "menuParentId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_0__.SidenavMenuService])], decls: 1, vars: 1, consts: [["class", "menu-item", 4, "ngFor", "ngForOf"], [1, "menu-item"], ["mat-button", "", "fxLayout", "row", "fxLayoutAlign", "start center", "routerLinkActive", "active-link", 3, "routerLink", "routerLinkActiveOptions", "id", "click", 4, "ngIf"], ["mat-button", "", "fxLayout", "row", "fxLayoutAlign", "start center", 3, "id", "click", 4, "ngIf"], ["class", "sub-menu", 3, "id", 4, "ngIf"], ["mat-button", "", "fxLayout", "row", "fxLayoutAlign", "start center", "routerLinkActive", "active-link", 3, "routerLink", "routerLinkActiveOptions", "id", "click"], [1, "menu-title"], ["mat-button", "", "fxLayout", "row", "fxLayoutAlign", "start center", 3, "id", "click"], [1, "menu-expand-icon", "transition-2"], [1, "sub-menu", 3, "id"], [3, "menuItems", "menuParentId"]], template: function SidenavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SidenavMenuComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.parentMenu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, SidenavMenuComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: [".menu-expand-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.menu-item[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.menu-item[_ngcontent-%COMP%]   .mat-button.expanded[_ngcontent-%COMP%]   .menu-expand-icon[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.menu-item[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\n\n.sub-menu[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n\n.sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  padding-left: 56px;\n}\n\n.sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  padding-left: 76px;\n}\n\n.sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  padding-left: 96px;\n}\n\n.sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  padding-left: 116px;\n}\n\n.sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  padding-left: 136px;\n}\n\n.sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  padding-left: 156px;\n}\n\n.sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  padding-left: 176px;\n}\n\n.sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  padding-left: 196px;\n}\n\n.sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  padding-left: 216px;\n}\n\n.sub-menu[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  padding-left: 36px;\n}\n\n.sub-menu.show[_ngcontent-%COMP%] {\n  max-height: 500px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYtbWVudS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBREo7O0FBS0k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUZSOztBQUlZO0VBR0kseUJBQUE7QUFGaEI7O0FBTUk7RUFDSSxrQkFBQTtBQUpSOztBQVFBO0VBRUksYUFBQTtFQUNBLGdCQUFBO0VBR0EscUNBQUE7QUFOSjs7QUN0QlE7RUFDSSxrQkFBQTtBRHdCWjs7QUN6QlE7RUFDSSxrQkFBQTtBRDJCWjs7QUM1QlE7RUFDSSxrQkFBQTtBRDhCWjs7QUMvQlE7RUFDSSxtQkFBQTtBRGlDWjs7QUNsQ1E7RUFDSSxtQkFBQTtBRG9DWjs7QUNyQ1E7RUFDSSxtQkFBQTtBRHVDWjs7QUN4Q1E7RUFDSSxtQkFBQTtBRDBDWjs7QUMzQ1E7RUFDSSxtQkFBQTtBRDZDWjs7QUM5Q1E7RUFDSSxtQkFBQTtBRGdEWjs7QUFwQkk7RUFDSSxrQkFBQTtBQXNCUjs7QUFwQkk7RUFDSSxpQkFBQTtFQUdBLG9DQUFBO0FBc0JSIiwiZmlsZSI6InNpZGVuYXYtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvbWl4aW5zXCI7XG5cbi5tZW51LWV4cGFuZC1pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG59XG5cbi5tZW51LWl0ZW17XG4gICAgLm1hdC1idXR0b257XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAmLmV4cGFuZGVke1xuICAgICAgICAgICAgLm1lbnUtZXhwYW5kLWljb257XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICB9ICAgIFxufVxuXG4uc3ViLW1lbnV7XG4gICAgQGluY2x1ZGUgbWVudS1sZXZlbC1wYWRkaW5nKCk7XG4gICAgbWF4LWhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxuICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICAgIFxuICAgIC5tYXQtYnV0dG9ue1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDM2cHg7ICAgICAgXG4gICAgfSBcbiAgICAmLnNob3d7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcbiAgICB9ICAgIFxufSIsIkBtaXhpbiBtZW51LWxldmVsLXBhZGRpbmcoKXtcbiAgICAkZWxlbTogJyc7XG4gICAgQGZvciAkaSBmcm9tIDIgdGhyb3VnaCAxMCB7XG4gICAgICAgICRlbGVtOiBpZigkaSA9PSAyLCBcIi5zdWItbWVudVwiLCBzZWxlY3Rvci1uZXN0KCRlbGVtLCBcIi5zdWItbWVudVwiKSk7ICAgICAgXG4gICAgICAgICN7JGVsZW0gKyAnIC5tYXQtYnV0dG9uJ30geyBcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweCArICgyMHB4ICogJGkpOyBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGFkbWluLW1lbnUtbGV2ZWwtcGFkZGluZygkZGlyZWN0aW9uKXtcbiAgICAkZWxlbTogJyc7XG4gICAgQGZvciAkaSBmcm9tIDIgdGhyb3VnaCAxMCB7XG4gICAgICAgICRlbGVtOiBpZigkaSA9PSAyLCBcIi5zdWItbWVudVwiLCBzZWxlY3Rvci1uZXN0KCRlbGVtLCBcIi5zdWItbWVudVwiKSk7ICAgICAgXG4gICAgICAgICN7JGVsZW0gKyAnIC5tYXQtYnV0dG9uJ30geyBcbiAgICAgICAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwicnRsXCIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHggKiAkaTsgXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgQGVsc2V7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4ICogJGk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 323:
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.model.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavMenu": () => (/* binding */ SidenavMenu)
/* harmony export */ });
class SidenavMenu {
    constructor(id, title, routerLink, href, target, hasSubMenu, parentId) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
    }
}


/***/ }),

/***/ 7283:
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavMenuService": () => (/* binding */ SidenavMenuService)
/* harmony export */ });
/* harmony import */ var _sidenav_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav-menu */ 6419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);




class SidenavMenuService {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    getSidenavMenuItems() {
        return _sidenav_menu__WEBPACK_IMPORTED_MODULE_0__.sidenavMenuItems;
    }
    expandActiveSubMenu(menu) {
        let url = this.location.path();
        let routerLink = decodeURIComponent(url);
        let activeMenuItem = menu.filter(item => item.routerLink === routerLink);
        if (activeMenuItem[0]) {
            let menuItem = activeMenuItem[0];
            while (menuItem.parentId != 0) {
                let parentMenuItem = menu.filter(item => item.id == menuItem.parentId)[0];
                menuItem = parentMenuItem;
                this.toggleMenuItem(menuItem.id);
            }
        }
    }
    toggleMenuItem(menuId) {
        let menuItem = document.getElementById('menu-item-' + menuId);
        let subMenu = document.getElementById('sub-menu-' + menuId);
        if (subMenu) {
            if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
            }
            else {
                subMenu.classList.add('show');
                menuItem.classList.add('expanded');
            }
        }
    }
    closeOtherSubMenus(menu, menuId) {
        let currentMenuItem = menu.filter(item => item.id == menuId)[0];
        menu.forEach(item => {
            if ((item.id != menuId && item.parentId == currentMenuItem.parentId) || (currentMenuItem.parentId == 0 && item.id != menuId)) {
                let subMenu = document.getElementById('sub-menu-' + item.id);
                let menuItem = document.getElementById('menu-item-' + item.id);
                if (subMenu) {
                    if (subMenu.classList.contains('show')) {
                        subMenu.classList.remove('show');
                        menuItem.classList.remove('expanded');
                    }
                }
            }
        });
    }
    closeAllSubMenus() {
        _sidenav_menu__WEBPACK_IMPORTED_MODULE_0__.sidenavMenuItems.forEach(item => {
            let subMenu = document.getElementById('sub-menu-' + item.id);
            let menuItem = document.getElementById('menu-item-' + item.id);
            if (subMenu) {
                if (subMenu.classList.contains('show')) {
                    subMenu.classList.remove('show');
                    menuItem.classList.remove('expanded');
                }
            }
        });
    }
}
SidenavMenuService.ɵfac = function SidenavMenuService_Factory(t) { return new (t || SidenavMenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
SidenavMenuService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SidenavMenuService, factory: SidenavMenuService.ɵfac });


/***/ }),

/***/ 6419:
/*!***************************************************************!*\
  !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidenavMenuItems": () => (/* binding */ sidenavMenuItems)
/* harmony export */ });
/* harmony import */ var _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav-menu.model */ 323);

const sidenavMenuItems = [
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(1, 'NAV.HOME', '/', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(2, 'Fashion', null, null, null, true, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(10, 'Women', null, null, null, true, 2),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(11, 'Dresses & Skirts', '/products/dresses & skirts', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(12, 'Jackets', '/products/jackets', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(13, 'Tops & Blouses', '/products/tops & blouses', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(14, 'Shoes & Boots', '/products/shoes & boots', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(15, 'Knitwear', '/products/knitwear', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(20, 'Men', null, null, null, true, 2),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(21, 'T-shirts & Polos', '/products/t-shirts & polos', null, null, false, 20),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(22, 'Shoe & Boots', '/products/shoe & boots', null, null, false, 20),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(23, 'Jeans', '/products/jeans', null, null, false, 20),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(24, 'Coats', '/products/coats', null, null, false, 20),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(30, 'Kids', null, null, null, true, 2),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(31, 'Top', '/products/top', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(32, 'Pants & Shorts', '/products/pants & shorts', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(33, 'Dresses', '/products/dresses', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(34, 'Skirts', '/products/skirts', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(35, 'Set & Body', '/products/set & body', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(40, 'Accessories', null, null, null, true, 2),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(41, 'Watches', '/products/watches', null, null, false, 40),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(42, 'Bags & Wallet', '/products/bags & wallet', null, null, false, 40),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(43, 'Sunglasses', '/products/sunglasses', null, null, false, 40),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(44, 'Belts & Hats', '/products/belts & hats', null, null, false, 40),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(50, 'Jewellery', '/products/jewellery', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(51, 'Electronics', '/products/electronics', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(52, 'Sports', '/products/sports', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(60, 'NAV.PAGES', null, null, null, true, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(61, 'NAV.SHOP', null, null, null, true, 60),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(62, 'NAV.ALL_PRODUCTS', '/products', null, null, false, 61),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(63, 'NAV.PRODUCT_DETAIL', '/products/2/PC All-in-One', null, null, false, 61),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(64, 'NAV.CART', '/cart', null, null, false, 61),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(65, 'NAV.CHECKOUT', '/checkout', null, null, false, 61),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(70, 'LOGIN', '/sign-in', null, null, false, 60),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(71, 'NAV.404_PAGE', '/404', null, null, false, 60),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(72, 'NAV.LANDING', '/landing', null, null, false, 60),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(80, 'NAV.CONTACT', '/contact', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(90, 'NAV.ADMIN', '/admin', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(140, 'Level 1', null, null, null, true, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(141, 'Level 2', null, null, null, true, 140),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(142, 'Level 3', null, null, null, true, 141),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(143, 'Level 4', null, null, null, true, 142),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(144, 'Level 5', null, 'http://themeseason.com', null, false, 143),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__.SidenavMenu(200, 'NAV.EXTERNAL_LINK', null, 'http://themeseason.com', '_blank', false, 0)
];


/***/ }),

/***/ 7718:
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/top-menu/top-menu.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuComponent": () => (/* binding */ TopMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app.settings */ 1182);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.service */ 900);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 325);




class TopMenuComponent {
    constructor(appSettings, appService, translateService) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.translateService = translateService;
        this.currencies = ['USD', 'EUR'];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.currency = this.currencies[0];
    }
    changeCurrency(currency) {
        this.currency = currency;
    }
    changeLang(lang) {
        this.translateService.use(lang);
    }
    getLangText(lang) {
        if (lang == 'de') {
            return 'German';
        }
        else if (lang == 'fr') {
            return 'French';
        }
        else if (lang == 'ru') {
            return 'Russian';
        }
        else if (lang == 'tr') {
            return 'Turkish';
        }
        else {
            return 'English';
        }
    }
}
TopMenuComponent.ɵfac = function TopMenuComponent_Factory(t) { return new (t || TopMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService)); };
TopMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TopMenuComponent, selectors: [["app-top-menu"]], decls: 0, vars: 0, template: function TopMenuComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 1350:
/*!************************************************!*\
  !*** ./src/app/theme/utils/app-interceptor.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppInterceptor": () => (/* binding */ AppInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 5314);
/* harmony import */ var _shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/token-storage.service */ 9760);






const TOKEN_HEADER_KEY = 'Authorization';
class AppInterceptor {
    constructor(spinner, token) {
        this.spinner = spinner;
        this.token = token;
    }
    intercept(req, next) {
        this.spinner.show();
        const token = this.token.getToken();
        let authReq = req;
        if (token != null) {
            // for Spring Boot back-end     
            authReq = req.clone({
                headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
            });
        }
        return next.handle(authReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {
                this.spinner.hide();
            }
            return event;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            const started = Date.now();
            const elapsed = Date.now() - started;
            console.log(`Request for ${req.urlWithParams} failed after ${elapsed} ms.`);
            this.spinner.hide();
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
        }));
    }
}
AppInterceptor.ɵfac = function AppInterceptor_Factory(t) { return new (t || AppInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService)); };
AppInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AppInterceptor, factory: AppInterceptor.ɵfac });


/***/ }),

/***/ 8758:
/*!*********************************************************!*\
  !*** ./src/app/theme/utils/custom-overlay-container.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomOverlayContainer": () => (/* binding */ CustomOverlayContainer)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class CustomOverlayContainer extends _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__.OverlayContainer {
    _createContainer() {
        let container = document.createElement('div');
        container.classList.add('cdk-overlay-container');
        document.getElementById('app').appendChild(container);
        this._containerElement = container;
    }
}
CustomOverlayContainer.ɵfac = /*@__PURE__*/ function () { let ɵCustomOverlayContainer_BaseFactory; return function CustomOverlayContainer_Factory(t) { return (ɵCustomOverlayContainer_BaseFactory || (ɵCustomOverlayContainer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CustomOverlayContainer)))(t || CustomOverlayContainer); }; }();
CustomOverlayContainer.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomOverlayContainer, factory: CustomOverlayContainer.ɵfac });


/***/ }),

/***/ 6025:
/*!************************************************!*\
  !*** ./src/app/theme/utils/scroll-strategy.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuScrollStrategy": () => (/* binding */ menuScrollStrategy)
/* harmony export */ });
function menuScrollStrategy(overlay) {
    return () => overlay.scrollStrategies.block();
}


/***/ }),

/***/ 7397:
/*!***************************!*\
  !*** ./src/auth.guard.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/shared/services/token-storage.service */ 9760);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



class AuthGuard {
    constructor(tokenStorage, router) {
        this.tokenStorage = tokenStorage;
        this.router = router;
    }
    canActivate(route, state) {
        const userRole = this.tokenStorage.getUser().roleId;
        if (userRole) {
            if (route.data.allowedRoles.includes(userRole)) {
                return true;
            }
            else {
                // Redirect to login if user not have access to page
                // this.router.navigate(['/login']);
                return false;
            }
        }
        // Redirect to login if user not authenticated
        this.router.navigate(['/login']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: '',
    // urlAddress: 'https://localhost:5001'
    urlAddress: 'https://im10api.meshbagroup.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular  ACLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map