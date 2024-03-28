"use strict";
(self["webpackChunkemporium"] = self["webpackChunkemporium"] || []).push([["src_app_admin_itsupportadmin_itsupportadmin_module_ts"],{

/***/ 429:
/*!***********************************************************************!*\
  !*** ./src/app/admin/itsupportadmin/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 4073:
/*!***************************************************************!*\
  !*** ./src/app/admin/itsupportadmin/itsupportadmin.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "ItsupportadminModule": () => (/* binding */ ItsupportadminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _listerrorissuelog_listerrorissuelog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listerrorissuelog/listerrorissuelog.component */ 4347);
/* harmony import */ var _startingpage_startingpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startingpage/startingpage.component */ 8017);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 429);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ 7483);
/* harmony import */ var src_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/auth.guard */ 7397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);












const routes = [
    { path: '', redirectTo: 'itsupportadmin', pathMatch: 'full' },
    { path: 'listerrorissuelog', component: _listerrorissuelog_listerrorissuelog_component__WEBPACK_IMPORTED_MODULE_1__.ListerrorissuelogComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard], allowedRoles: [6] },
    { path: 'startingpage', component: _startingpage_startingpage_component__WEBPACK_IMPORTED_MODULE_2__.StartingpageComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard], allowedRoles: [6] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard], allowedRoles: [6] },
];
class ItsupportadminModule {
}
ItsupportadminModule.ɵfac = function ItsupportadminModule_Factory(t) { return new (t || ItsupportadminModule)(); };
ItsupportadminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ItsupportadminModule });
ItsupportadminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.NgxPaginationModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ItsupportadminModule, { declarations: [_listerrorissuelog_listerrorissuelog_component__WEBPACK_IMPORTED_MODULE_1__.ListerrorissuelogComponent,
        _startingpage_startingpage_component__WEBPACK_IMPORTED_MODULE_2__.StartingpageComponent,
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.NgxPaginationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule] }); })();


/***/ }),

/***/ 4347:
/*!***************************************************************************************!*\
  !*** ./src/app/admin/itsupportadmin/listerrorissuelog/listerrorissuelog.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListerrorissuelogComponent": () => (/* binding */ ListerrorissuelogComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/ok-dialog/ok-dialog.component */ 891);
/* harmony import */ var src_app_shared_confirmdownload_dialog_confirmdownload_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/confirmdownload-dialog/confirmdownload-dialog.component */ 6943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token-storage.service */ 1573);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 7483);



















function ListerrorissuelogComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListerrorissuelogComponent_div_22_Template_a_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const content_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r3.downloadFile(content_r2.logId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("matTooltip", content_r2.logMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](3, 7, content_r2.logMessage, 0, 40), " ", content_r2.logMessage.length > 40 ? "" : " ", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("matTooltip", content_r2.additionalInformation);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](6, 11, content_r2.additionalInformation, 0, 40), " ", content_r2.additionalInformation.length > 40 ? "" : " ", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](content_r2.fullName);
} }
function ListerrorissuelogComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "pagination-controls", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function ListerrorissuelogComponent_div_25_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class ListerrorissuelogComponent {
    constructor(http, appService, dialog, snackBar, tokenStorage, router, appSettings) {
        this.http = http;
        this.appService = appService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.appSettings = appSettings;
        this.ErrorList = [];
        this.NewErrorList = [];
        this.count = 8;
    }
    ngOnInit() {
        this.getallerrorissuelog();
    }
    ///getallerrorissuelog
    getallerrorissuelog() {
        this.appService.getallerrorissuelog("api/ErrorAuditLog/GetAllErrorAuditLog").subscribe(data => {
            this.ErrorList = data;
            this.NewErrorList = data;
        });
    }
    /// editbuttonclick
    onEditClick(event, content) {
        if (content.approved) {
            event.preventDefault();
        }
    }
    ///pagination
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
    ///Search
    Search() {
        if (this.title === "") {
            this.getallerrorissuelog();
        }
        else {
            this.ErrorList = this.NewErrorList.filter(res => {
                return (res.logMessage.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
                    res.additionalInformation.toLocaleLowerCase().includes(this.title.toLocaleLowerCase())
                    || res.fullName.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()));
            });
            this.page = 1;
        }
    }
    ///Download Error File
    downloadFile(logId) {
        const dialogRef = this.dialog.open(src_app_shared_confirmdownload_dialog_confirmdownload_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmdownloadDialogComponent, {
            maxWidth: "400px",
            disableClose: true,
            data: {
                title: "Confirm Action",
                message: "Are you sure to want to download?"
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__.OkDialogComponent, {
                    maxWidth: "500px",
                    disableClose: true,
                    data: {
                        title: "Download Action",
                        message: "Downloaded Successfully!"
                    }
                });
                this.appService.getById(`api/ErrorAuditLog/GetErrorAuditLogById?logId=`, logId).subscribe((data) => {
                    const filePath = data.filepath;
                    downloadErrorFile(filePath, "ErrorLogId_" + logId);
                });
            }
        });
    }
}
ListerrorissuelogComponent.ɵfac = function ListerrorissuelogComponent_Factory(t) { return new (t || ListerrorissuelogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__.AppSettings)); };
ListerrorissuelogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ListerrorissuelogComponent, selectors: [["app-listerrorissuelog"]], decls: 26, vars: 9, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap ", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2", "crdhead"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [1, "tblsearch"], [1, "tdsearch"], [1, "fa", "fa-search", "searchtext-icon"], ["matInput", "", "type", "text", "placeholder", "Search ...", "name", "title", 1, "searchtext", 3, "ngModel", "ngModelChange", "input", "keyup"], [1, "mat-table", "admin-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["fxFlex.gt-sm", "10", 1, "mat-header-cell", "text-center"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "mat-row"], ["matTooltipPosition", "below", "matTooltipClass", "custom-tooltip", 1, "mat-cell", 3, "matTooltip"], [1, "mat-cell"], ["fxFlex.gt-sm", "10", 1, "mat-cell", "text-center"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Download", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-download"], ["fxLayout", "row wrap"], ["fxFlex", "100", 1, "p-1"], [1, "p-0", "text-center", "nobxshbrd"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function ListerrorissuelogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00A0 Error / Issue Log List");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ListerrorissuelogComponent_Template_input_ngModelChange_10_listener($event) { return ctx.title = $event; })("input", function ListerrorissuelogComponent_Template_input_input_10_listener() { return ctx.Search(); })("keyup", function ListerrorissuelogComponent_Template_input_keyup_10_listener() { return ctx.Search(); })("ngModelChange", function ListerrorissuelogComponent_Template_input_ngModelChange_10_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ListerrorissuelogComponent_div_22_Template, 12, 15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](23, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ListerrorissuelogComponent_div_25_Template, 4, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](23, 3, ctx.ErrorList, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](6, _c0, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.ErrorList.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutAlignDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatAnchor, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0ZXJyb3Jpc3N1ZWxvZy5jb21wb25lbnQuY3NzIn0= */"] });
function downloadErrorFile(url, fileName) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(a.href);
        a.remove();
    })
        .catch(error => {
        console.error('Error downloading file:', error);
    });
}


/***/ }),

/***/ 8017:
/*!*****************************************************************************!*\
  !*** ./src/app/admin/itsupportadmin/startingpage/startingpage.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartingpageComponent": () => (/* binding */ StartingpageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class StartingpageComponent {
    constructor() { }
    ngOnInit() {
    }
}
StartingpageComponent.ɵfac = function StartingpageComponent_Factory(t) { return new (t || StartingpageComponent)(); };
StartingpageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartingpageComponent, selectors: [["app-startingpage"]], decls: 2, vars: 0, template: function StartingpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "startingpage works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydGluZ3BhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 891:
/*!*********************************************************!*\
  !*** ./src/app/shared/ok-dialog/ok-dialog.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OkDialogComponent": () => (/* binding */ OkDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



class OkDialogComponent {
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
OkDialogComponent.ɵfac = function OkDialogComponent_Factory(t) { return new (t || OkDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
OkDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OkDialogComponent, selectors: [["app-confirm-dialog"]], decls: 12, vars: 2, consts: [[1, "mat-dialog-title"], [1, "mat-dialog-content"], [1, "txt-cen"], ["src", "assets/images/bg/save3.gif", "alt", "Delete ?", 1, "img1", 2, "width", "115px", "border-radius", "10%"], ["mat-dialog-actions", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "w-100", 2, "text-align", "center"], ["mat-raised-button", "", "color", "primary", 1, "crbtn", "conf2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-tick"]], template: function OkDialogComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OkDialogComponent_Template_button_click_9_listener() { return ctx.onDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.message);
    } }, styles: [".app.blue[_ngcontent-%COMP%]   .mat-flat-button.mat-warn[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-raised-button.mat-warn[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-fab.mat-warn[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-mini-fab.mat-warn[_ngcontent-%COMP%] {\n  background-color: #ff5252;\n}\n\n.app.blue[_ngcontent-%COMP%]   .mat-flat-button.mat-primary[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-raised-button.mat-primary[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-fab.mat-primary[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n}\n\n.crbtn[_ngcontent-%COMP%] {\n  line-height: 28px !important;\n}\n\n.conf1[_ngcontent-%COMP%] {\n  background-color: #ff5252;\n  color: white;\n  border: none;\n  padding: 0 10px;\n  border-radius: 4px;\n  float: right;\n  margin-top: 10px !important;\n  width: 65px;\n}\n\n.conf2[_ngcontent-%COMP%] {\n  background-color: #33c041;\n  color: white;\n  border: none;\n  padding: 0 10px;\n  border-radius: 4px;\n  margin-top: 10px !important;\n  width: 65px;\n}\n\n.txt-cen[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9rLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtBQUVKOztBQUNBO0VBQ0ksNEJBQUE7QUFFSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSw2QkFBQTtBQUVKIiwiZmlsZSI6Im9rLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAuYmx1ZSAubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLCAuYXBwLmJsdWUgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLCAuYXBwLmJsdWUgLm1hdC1mYWIubWF0LXdhcm4sIC5hcHAuYmx1ZSAubWF0LW1pbmktZmFiLm1hdC13YXJuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MjUyO1xufVxuLmFwcC5ibHVlIC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksIC5hcHAuYmx1ZSAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnksIC5hcHAuYmx1ZSAubWF0LWZhYi5tYXQtcHJpbWFyeSwgLmFwcC5ibHVlIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG59XG5cbi5jcmJ0bntcbiAgICBsaW5lLWhlaWdodDogMjhweCAhaW1wb3J0YW50O1xufVxuXG4uY29uZjF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTI1MjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNjVweDtcbn1cblxuLmNvbmYye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzM2MwNDE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNjVweDtcbn1cblxuLnR4dC1jZW57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_itsupportadmin_itsupportadmin_module_ts.js.map