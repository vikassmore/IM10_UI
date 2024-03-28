"use strict";
(self["webpackChunkemporium"] = self["webpackChunkemporium"] || []).push([["src_app_admin_dashboard_dashboard_module_ts"],{

/***/ 1052:
/*!*****************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ 7483);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-swiper-wrapper */ 2320);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-input-file */ 386);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);










const routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, data: { breadcrumb: 'Dashboard' } },
];
class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule,
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__.SwiperModule,
            ngx_input_file__WEBPACK_IMPORTED_MODULE_8__.InputFileModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__.SwiperModule,
        ngx_input_file__WEBPACK_IMPORTED_MODULE_8__.InputFileModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin_dashboard_dashboard_module_ts.js.map