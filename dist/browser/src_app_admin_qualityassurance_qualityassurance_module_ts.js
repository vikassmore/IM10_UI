"use strict";
(self["webpackChunkemporium"] = self["webpackChunkemporium"] || []).push([["src_app_admin_qualityassurance_qualityassurance_module_ts"],{

/***/ 2778:
/*!*************************************************************************!*\
  !*** ./src/app/admin/qualityassurance/dashboard/dashboard.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2118);






const _c0 = function () { return ["/admin/qualityassurance/startingpage"]; };
class DashboardComponent {
    constructor(appService) {
        this.appService = appService;
        this.PlayerDetailsList = [];
    }
    ngOnInit() {
        this.Getplayerdetailsbyplayerid();
    }
    ///Getplayerdetailsbyplayerid
    Getplayerdetailsbyplayerid() {
        var playerId = window.sessionStorage.getItem("playerId");
        this.appService.getContentByPlayerId("api/PlayerDetail/GetPlayerDetailById/", playerId).subscribe(data => {
            this.PlayerDetailsList = data;
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], inputs: { playerDetailsList: "playerDetailsList" }, decls: 19, vars: 4, consts: [["fxLayout", "column", "fxLayoutGap", "10px", 1, "container", "p-1"], ["fxLayout.gt-sm", "row", "fxLayout.lt-md", "column", "fxFlex", "33%", 1, "block-2"], ["fxFlex.gt-sm", "85%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["fxFlex.gt-sm", "15%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "right", "fxFlexFill", "", 1, "grid-item", "text-right"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-user"], ["fxLayout", "row wrap "], ["resizedDiv", ""], ["fxFlex", "100", "fxFlex.gt-sm", "100", "fxFlex.sm", "50", 1, "p-11"], [1, "p-0", "Divbg2s"], [1, "card1"], [1, "p-1", "text-center"], [1, "w-full", "h-full", "rounded-full", "ng-star-inserted", "imgs1", 3, "src"], [1, "p-0"], [1, "text-center", "fliph1"], [1, "fliph11"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00A0\u00A0Change Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.PlayerDetailsList.profileImageFilePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.PlayerDetailsList.playerName, " ");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexFillDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 9097:
/*!***********************************************************************************!*\
  !*** ./src/app/admin/qualityassurance/listadvcontent/listadvcontent.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadvcontentComponent": () => (/* binding */ ListadvcontentComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_approve_dialog_approve_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/approve-dialog/approve-dialog.component */ 6654);
/* harmony import */ var src_app_shared_notapprove_dialog_notapprove_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/notapprove-dialog/notapprove-dialog.component */ 570);
/* harmony import */ var src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ok-dialog/ok-dialog.component */ 891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/token-storage.service */ 1573);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ 7483);





















function ListadvcontentComponent_div_34_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]("Yes");
} }
function ListadvcontentComponent_div_34_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]("No");
} }
function ListadvcontentComponent_div_34_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]("Yes");
} }
function ListadvcontentComponent_div_34_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]("No");
} }
function ListadvcontentComponent_div_34_i_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 37);
} if (rf & 2) {
    const AdvContent_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", AdvContent_r2.comment);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function ListadvcontentComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ListadvcontentComponent_div_34_ng_container_4_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ListadvcontentComponent_div_34_ng_template_5_Template, 1, 1, "ng-template", 22, 23, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ListadvcontentComponent_div_34_ng_container_19_Template, 2, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ListadvcontentComponent_div_34_ng_template_20_Template, 1, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ListadvcontentComponent_div_34_i_26_Template, 1, 1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListadvcontentComponent_div_34_Template_button_click_28_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const AdvContent_r2 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r11.ApproveadvContent(AdvContent_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListadvcontentComponent_div_34_Template_button_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const AdvContent_r2 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r13.AdvContentNotApprove(AdvContent_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const AdvContent_r2 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", AdvContent_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", AdvContent_r2.isGlobal)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", AdvContent_r2.advertiseFilePath, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](12, 17, AdvContent_r2.startDate, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](15, 20, AdvContent_r2.endDate, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](AdvContent_r2.finalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", AdvContent_r2.isFree)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](AdvContent_r2.contentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", AdvContent_r2.approved === true ? "Approved" : AdvContent_r2.approved === false ? "Not Approved" : "Pending", "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", AdvContent_r2.approved !== null && !AdvContent_r2.approved);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matTooltip", AdvContent_r2.approved ? "Already Approved" : "Mark as Approved")("disabled", AdvContent_r2.approved !== null && AdvContent_r2.approved)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](23, _c0, AdvContent_r2.approved !== null && AdvContent_r2.approved));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", AdvContent_r2.approved !== null && !AdvContent_r2.approved)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](25, _c0, AdvContent_r2.approved !== null && !AdvContent_r2.approved));
} }
function ListadvcontentComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-card", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "pagination-controls", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function ListadvcontentComponent_div_37_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r14.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class ListadvcontentComponent {
    constructor(appService, dialog, snackBar, tokenStorage, router, appSettings, http) {
        this.appService = appService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.appSettings = appSettings;
        this.http = http;
        this.ContentAdvList = [];
        this.NewContentAdvList = [];
        this.isApproved = false;
        this.count = 8;
    }
    ngOnInit() {
        this.getAdvContentListByPlayetId();
    }
    ///Search
    Search() {
        if (this.contentName == "") {
            this.getAdvContentListByPlayetId();
        }
        else {
            this.ContentAdvList = this.NewContentAdvList.filter(res => {
                const lowerCaseContentName = this.contentName.toLowerCase();
                const titleIncludes = res.title.toLowerCase().includes(lowerCaseContentName);
                const finalPriceIncludes = res.finalPrice.toLowerCase().includes(lowerCaseContentName);
                const contentNameIncludes = res.contentName.toLowerCase().includes(lowerCaseContentName);
                const approvedStatus = res.approved;
                let approvedLabel = "";
                if (approvedStatus === null) {
                    approvedLabel = "Pending";
                }
                else if (approvedStatus === true) {
                    approvedLabel = "Approved";
                }
                else if (approvedStatus === false) {
                    approvedLabel = "Not Approved";
                }
                const approvedIncludes = approvedLabel.toLowerCase().includes(lowerCaseContentName);
                return (titleIncludes ||
                    finalPriceIncludes ||
                    contentNameIncludes ||
                    approvedIncludes);
            });
            this.page = 1;
        }
    }
    ///pagination
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
    ///getAdvContentListByPlayetId
    getAdvContentListByPlayetId() {
        var playerId = window.sessionStorage.getItem("playerId");
        this.appService.getContentByPlayerId("api/AdvtContentDetail/GetAdvContentByPlayerId/", playerId).subscribe(data => {
            this.ContentAdvList = data;
            this.NewContentAdvList = data;
        });
    }
    ///ApproveadvContent
    ApproveadvContent(content) {
        const dialogRef = this.dialog.open(src_app_shared_approve_dialog_approve_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ApproveDialogComponent, {
            maxWidth: "400px",
            disableClose: true,
            data: {
                title: "Approve Action",
                message: "Are you sure you want approve this?"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_2__.OkDialogComponent, {
                    maxWidth: "500px",
                    disableClose: true,
                    data: {
                        title: "Result",
                        message: "Advt. Content Approved Successfully!"
                    }
                });
                dialogRef.afterClosed().subscribe(okDialogResult => {
                    if (dialogResult) {
                        const index = this.ContentAdvList.indexOf(content);
                        if (index !== -1) {
                            this.ContentAdvList.splice(index, 1);
                            this.appService.ApproveContent(`api/AdvtContentDetail/ApproveAdvContentDetail/${content.advertiseContentId}`, {}).subscribe(data => {
                                window.location.reload();
                            });
                        }
                    }
                    this.getAdvContentListByPlayetId();
                });
            }
        });
    }
    ///Deny Approval
    AdvContentNotApprove(content) {
        const dialogRef = this.dialog.open(src_app_shared_notapprove_dialog_notapprove_dialog_component__WEBPACK_IMPORTED_MODULE_1__.NotApproveDialogComponent, {
            maxWidth: "400px",
            disableClose: true,
            data: {
                title: "Comment",
                message: "Enter comment for why this not approve"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const comment = dialogRef.componentInstance.comment;
                let denyadvcontent = {
                    "advertiseContentId": content.advertiseContentId,
                    "comment": comment,
                };
                this.appService.denyapprovecontent('api/AdvtContentDetail/DeniedAdvContentDetail', denyadvcontent).subscribe(data => {
                    window.location.reload();
                });
            }
        });
    }
}
ListadvcontentComponent.ɵfac = function ListadvcontentComponent_Factory(t) { return new (t || ListadvcontentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient)); };
ListadvcontentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ListadvcontentComponent, selectors: [["app-listadvcontent"]], decls: 38, vars: 9, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap ", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2", "crdhead"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [1, "tblsearch"], [1, "tdsearch"], [1, "fa", "fa-search", "searchtext-icon"], ["matInput", "", "type", "text", "placeholder", "Search ...", "name", "contentName", 1, "searchtext", 3, "ngModel", "ngModelChange", "input", "keyup"], [1, "mat-table", "admin-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["fxFlex.gt-sm", "8", 1, "mat-header-cell", "text-center"], ["fxFlex.gt-sm", "15", 1, "mat-header-cell", "text-center"], ["fxFlex.gt-sm", "12", 1, "mat-header-cell", "text-center"], ["fxFlex.gt-sm", "12", 1, "mat-header-cell"], ["fxFlex.gt-sm", "10", 1, "mat-header-cell", "text-center"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "mat-row"], [1, "mat-cell"], ["fxFlex.gt-sm", "8", 1, "mat-cell", "text-center"], ["style", "margin-left: 5cm", 4, "ngIf", "ngIfElse"], ["style", "margin-left: 5cm"], ["noApproval", ""], ["fxFlex.gt-sm", "15", 1, "mat-cell", "text-center"], ["target", "_blank", 1, "mat-cell", 2, "color", "#a08820", 3, "href"], ["fxFlex.gt-sm", "8", "fxLayout", "row", 1, "mat-cell", "text-center", "blck"], [4, "ngIf", "ngIfElse"], ["fxFlex.gt-sm", "12", 1, "mat-cell", "text-center"], ["fxFlex.gt-sm", "12", "fxLayout", "row", 1, "mat-cell", "text-center"], ["class", "fa fa-info-circle cmtinfo", "aria-hidden", "true", 3, "matTooltip", 4, "ngIf"], ["fxFlex.gt-sm", "10", 1, "mat-cell", "text-center"], ["mat-mini-fab", "", 1, "mx-1", "app-y", 3, "matTooltip", "disabled", "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["mat-mini-fab", "", "matTooltip", "Mark as Not Approved", 1, "mx-1", "app-n", 3, "disabled", "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-close"], [2, "margin-left", "5cm"], ["aria-hidden", "true", 1, "fa", "fa-info-circle", "cmtinfo", 3, "matTooltip"], ["fxLayout", "row wrap"], ["fxFlex", "100", 1, "p-1"], [1, "p-0", "text-center", "nobxshbrd"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function ListadvcontentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00A0 Advertise Content List");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ListadvcontentComponent_Template_input_ngModelChange_10_listener($event) { return ctx.contentName = $event; })("input", function ListadvcontentComponent_Template_input_input_10_listener() { return ctx.Search(); })("keyup", function ListadvcontentComponent_Template_input_keyup_10_listener() { return ctx.Search(); })("ngModelChange", function ListadvcontentComponent_Template_input_ngModelChange_10_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Is Global?");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Advertise Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Final Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Is Free?");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Content Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Approved?");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, ListadvcontentComponent_div_34_Template, 32, 27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](35, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, ListadvcontentComponent_div_37_Template, 4, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.contentName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](35, 3, ctx.ContentAdvList, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](6, _c1, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.ContentAdvList.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__.DefaultClassDirective, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe], styles: [".disabled[_ngcontent-%COMP%] {\n     opacity: 0.5;\n     background-color: gray;\n     cursor: not-allowed;\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhZHZjb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7S0FDSyxZQUFZO0tBQ1osc0JBQXNCO0tBQ3RCLG1CQUFtQjtHQUNyQiIsImZpbGUiOiJsaXN0YWR2Y29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2FibGVkIHtcbiAgICAgb3BhY2l0eTogMC41O1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgfVxuICAgIl19 */"] });


/***/ }),

/***/ 1475:
/*!*****************************************************************************!*\
  !*** ./src/app/admin/qualityassurance/listcontent/listcontent.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListcontentComponent": () => (/* binding */ ListcontentComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_approve_dialog_approve_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/approve-dialog/approve-dialog.component */ 6654);
/* harmony import */ var src_app_shared_notapprove_dialog_notapprove_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/notapprove-dialog/notapprove-dialog.component */ 570);
/* harmony import */ var src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ok-dialog/ok-dialog.component */ 891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/token-storage.service */ 1573);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ 7483);





















function ListcontentComponent_div_30_i_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 30);
} if (rf & 2) {
    const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", content_r2.comment);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function ListcontentComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ListcontentComponent_div_30_i_17_Template, 1, 1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListcontentComponent_div_30_Template_button_click_19_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const content_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r5.ContentApprove(content_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListcontentComponent_div_30_Template_button_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const content_r2 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r7.ContentNotApprove(content_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", content_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", content_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", content_r2.description.slice(0, content_r2.title.length), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", content_r2.thumbnail1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", content_r2.thumbnail_2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", content_r2.categoryName, "/", content_r2.subCategoryName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](content_r2.contentTypeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", content_r2.approved === true ? "Approved" : content_r2.approved === false ? "Not Approved" : "Pending", " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", content_r2.approved !== null && !content_r2.approved);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", content_r2.approved !== null && content_r2.approved)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](14, _c0, content_r2.approved !== null && content_r2.approved));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", content_r2.approved !== null && !content_r2.approved)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](16, _c0, content_r2.approved !== null && !content_r2.approved));
} }
function ListcontentComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-card", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "pagination-controls", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function ListcontentComponent_div_33_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r8.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class ListcontentComponent {
    constructor(appService, dialog, snackBar, tokenStorage, router, appSettings, http) {
        this.appService = appService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.appSettings = appSettings;
        this.http = http;
        this.ContentList = [];
        this.NewContentList = [];
        this.count = 8;
        this.formData = new FormData();
    }
    ngOnInit() {
        this.getContentDetailsListByPlayetId();
    }
    ///GetContentDetailsbyPlayerID
    getContentDetailsListByPlayetId() {
        var playerId = window.sessionStorage.getItem("playerId");
        this.appService.getContentByPlayerId("api/ContentDetail/GetContentdetailByPlayerId/", playerId).subscribe(data => {
            this.ContentList = data;
            this.NewContentList = data;
        });
    }
    ///Search
    Search() {
        if (this.title == "") {
            this.getContentDetailsListByPlayetId();
        }
        else {
            this.ContentList = this.NewContentList.filter(res => {
                const lowerCaseContentName = this.title.toLowerCase();
                const titleIncludes = res.title.toLowerCase().includes(lowerCaseContentName);
                const finalPriceIncludes = res.description.toLowerCase().includes(lowerCaseContentName);
                const contentNameIncludes = res.contentTypeName.toLowerCase().includes(lowerCaseContentName);
                const categoryNameIncludes = res.categoryName.toLowerCase().includes(lowerCaseContentName);
                const subCategoryNameIncludes = res.subCategoryName.toLowerCase().includes(lowerCaseContentName);
                const approvedStatus = res.approved;
                let approvedLabel = "";
                if (approvedStatus === null) {
                    approvedLabel = "Pending";
                }
                else if (approvedStatus === true) {
                    approvedLabel = "Approved";
                }
                else if (approvedStatus === false) {
                    approvedLabel = "Not Approved";
                }
                const approvedIncludes = approvedLabel.toLowerCase().includes(lowerCaseContentName);
                return (titleIncludes ||
                    finalPriceIncludes ||
                    contentNameIncludes ||
                    categoryNameIncludes ||
                    subCategoryNameIncludes ||
                    approvedIncludes);
            });
            this.page = 1;
        }
    }
    ///pagination
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
    ///ContentApprove
    ContentApprove(content) {
        const dialogRef = this.dialog.open(src_app_shared_approve_dialog_approve_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ApproveDialogComponent, {
            maxWidth: "400px",
            disableClose: true,
            data: {
                title: "Approve Action",
                message: "Are you sure you want approve this content?"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                this.appService.AddContentUpdate(`api/ContentDetail/ApproveContentDetail/${content.contentId}`, {}).subscribe(data => {
                    const okDialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_2__.OkDialogComponent, {
                        maxWidth: "500px",
                        disableClose: true,
                        data: {
                            title: "Result",
                            message: "Content Approved Successfully!"
                        }
                    });
                    okDialogRef.afterClosed().subscribe(okDialogResult => {
                        window.location.reload();
                    });
                });
            }
        });
    }
    ///Deny Approval
    ContentNotApprove(content) {
        const dialogRef = this.dialog.open(src_app_shared_notapprove_dialog_notapprove_dialog_component__WEBPACK_IMPORTED_MODULE_1__.NotApproveDialogComponent, {
            maxWidth: "400px",
            disableClose: true,
            data: {
                title: "Comment",
                message: "Enter comment for why this not approve"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const comment = dialogRef.componentInstance.comment;
                let denycontent = {
                    "contentId": content.contentId,
                    "comment": comment,
                };
                this.appService.denyapprovecontent('api/ContentDetail/DeniedContentDetail', denycontent).subscribe(data => {
                    window.location.reload();
                });
            }
        });
    }
}
ListcontentComponent.ɵfac = function ListcontentComponent_Factory(t) { return new (t || ListcontentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient)); };
ListcontentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ListcontentComponent, selectors: [["app-listcontent"]], decls: 34, vars: 9, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap ", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2", "crdhead"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [1, "tblsearch"], [1, "tdsearch"], [1, "fa", "fa-search", "searchtext-icon"], ["matInput", "", "type", "text", "placeholder", "Search ...", "name", "title", 1, "searchtext", 3, "ngModel", "ngModelChange", "input", "keyup"], [1, "mat-table", "admin-table"], [1, "mat-header-row"], [1, "mat-header-cell"], [1, "mat-header-cell", "text-center"], ["fxFlex.gt-sm", "18", 1, "mat-header-cell"], ["fxFlex.gt-sm", "12", 1, "mat-header-cell"], ["fxFlex.gt-sm", "10", 1, "mat-header-cell", "text-center"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "mat-row"], [1, "mat-cell"], [1, "mat-cell", 3, "matTooltip"], [1, "mat-cell", "text-center"], ["target", "_blank", 1, "mat-cell", 2, "color", "#a08820", 3, "href"], ["fxFlex.gt-sm", "18", 1, "mat-cell"], ["fxFlex.gt-sm", "12", "fxLayout", "row", 1, "mat-cell", "text-center"], ["class", "fa fa-info-circle cmtinfo", "aria-hidden", "true", 3, "matTooltip", 4, "ngIf"], ["fxFlex.gt-sm", "10", 1, "mat-cell", "text-center"], ["mat-mini-fab", "", "matTooltip", "Mark as Approved", 1, "mx-1", "app-y", 3, "disabled", "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["mat-mini-fab", "", "matTooltip", "Mark as Not Approved", 1, "mx-1", "app-n", 3, "disabled", "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-close"], ["aria-hidden", "true", 1, "fa", "fa-info-circle", "cmtinfo", 3, "matTooltip"], ["fxLayout", "row wrap"], ["fxFlex", "100", 1, "p-1"], [1, "p-0", "text-center", "nobxshbrd"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function ListcontentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00A0 Content List");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ListcontentComponent_Template_input_ngModelChange_10_listener($event) { return ctx.title = $event; })("input", function ListcontentComponent_Template_input_input_10_listener() { return ctx.Search(); })("keyup", function ListcontentComponent_Template_input_keyup_10_listener() { return ctx.Search(); })("ngModelChange", function ListcontentComponent_Template_input_ngModelChange_10_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Content Part 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Content Part 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Category / Sub-Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Content Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Approved?");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, ListcontentComponent_div_30_Template, 23, 18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, ListcontentComponent_div_33_Template, 4, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](31, 3, ctx.ContentList, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](6, _c1, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.ContentList.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__.DefaultClassDirective, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginatePipe], styles: [".disabled[_ngcontent-%COMP%] {\n     opacity: 0.5;\n     background-color: gray;\n     cursor: not-allowed;\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Rjb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7S0FDSyxZQUFZO0tBQ1osc0JBQXNCO0tBQ3RCLG1CQUFtQjtHQUNyQiIsImZpbGUiOiJsaXN0Y29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2FibGVkIHtcbiAgICAgb3BhY2l0eTogMC41O1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgfVxuICAgIl19 */"] });


/***/ }),

/***/ 7121:
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/qualityassurance/listcontentupdate/listcontentupdate.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListcontentupdateComponent": () => (/* binding */ ListcontentupdateComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_approve_dialog_approve_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/approve-dialog/approve-dialog.component */ 6654);
/* harmony import */ var src_app_shared_notapprove_dialog_notapprove_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/notapprove-dialog/notapprove-dialog.component */ 570);
/* harmony import */ var src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ok-dialog/ok-dialog.component */ 891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token-storage.service */ 1573);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ 7483);




















function ListcontentupdateComponent_div_25_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 24);
} if (rf & 2) {
    const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", content_r2.comment);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function ListcontentupdateComponent_div_25_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListcontentupdateComponent_div_25_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r6.ContentNotApprove(content_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, content_r2.approved));
} }
function ListcontentupdateComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ListcontentupdateComponent_div_25_i_9_Template, 1, 1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListcontentupdateComponent_div_25_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11); const content_r2 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r10.ContentUpdateApprove(content_r2.contentLogId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ListcontentupdateComponent_div_25_button_13_Template, 2, 3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", content_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", content_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", content_r2.description.slice(0, content_r2.title.length), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", content_r2.contentTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", content_r2.approved === true ? "Approved" : content_r2.approved === false ? "Not Approved" : "Pending", " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", content_r2.approved !== null && !content_r2.approved);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", content_r2.approved)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c0, content_r2.approved));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !content_r2.approved);
} }
function ListcontentupdateComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "pagination-controls", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function ListcontentupdateComponent_div_28_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r12.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class ListcontentupdateComponent {
    constructor(dialog, sessionStorage, appService, snackBar, router, appSettings) {
        this.dialog = dialog;
        this.sessionStorage = sessionStorage;
        this.appService = appService;
        this.snackBar = snackBar;
        this.router = router;
        this.appSettings = appSettings;
        this.ContentUpdateList = [];
        this.filteredContentList = [];
        this.filteredContentUpdateList = [];
        this.ContentUpdateListDisplay = [];
        this.NewContentUpdateListDisplay = [];
        this.count = 8;
    }
    ngOnInit() {
        this.GetAllContentUpdateList();
    }
    ///Search
    Search() {
        if (this.title == "") {
            this.GetAllContentUpdateList();
        }
        else {
            this.ContentUpdateListDisplay = this.NewContentUpdateListDisplay.filter(res => {
                const lowerCaseContentName = this.title.toLowerCase();
                const titleIncludes = res.title.toLowerCase().includes(lowerCaseContentName);
                const finalPriceIncludes = res.description.toLowerCase().includes(lowerCaseContentName);
                const contentNameIncludes = res.contentTitle.toLowerCase().includes(lowerCaseContentName);
                const approvedStatus = res.approved;
                let approvedLabel = "";
                if (approvedStatus === null) {
                    approvedLabel = "Pending";
                }
                else if (approvedStatus === true) {
                    approvedLabel = "Approved";
                }
                else if (approvedStatus === false) {
                    approvedLabel = "Not Approved";
                }
                const approvedIncludes = approvedLabel.toLowerCase().includes(lowerCaseContentName);
                return (titleIncludes ||
                    finalPriceIncludes ||
                    contentNameIncludes ||
                    approvedIncludes);
            });
            this.page = 1;
        }
    }
    ///pagination
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
    /// getContentUpdateByPlayerId
    GetAllContentUpdateList() {
        debugger;
        var playerId = window.sessionStorage.getItem("playerId");
        this.appService.getContentUpdateByPlayerId("api/ContentUpdate/GetContentUpdateforQA/", playerId).subscribe(data => {
            this.ContentUpdateListDisplay = data;
            this.NewContentUpdateListDisplay = data;
        });
    }
    ///ContentUpdateApprove
    ContentUpdateApprove(contentLogId) {
        const contentLogIdToFind = contentLogId;
        const contentToUpdate = this.ContentUpdateListDisplay.find(content => content.contentLogId === contentLogIdToFind);
        // var formData = new FormData();
        let editlistcontentupdate = {
            "contentLogId": contentToUpdate.contentLogId,
            "contentId": contentToUpdate.contentId,
            "updatedBy": 0,
            "approved": true,
            "title": contentToUpdate.title,
            "description": contentToUpdate.description,
        };
        const dialogRef = this.dialog.open(src_app_shared_approve_dialog_approve_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ApproveDialogComponent, {
            maxWidth: "400px",
            disableClose: true,
            data: {
                title: "Approve Action",
                message: "Are you sure you want approve this?"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_2__.OkDialogComponent, {
                    maxWidth: "500px",
                    disableClose: true,
                    data: {
                        title: "Result",
                        message: "Content Update Approved Successfully!"
                    }
                });
                dialogRef.afterClosed().subscribe(okDialogResult => {
                    if (dialogResult) {
                        this.appService.ApproveUpdateContent('api/ContentDetail/ContentDetailUpdateByContentLog', editlistcontentupdate).subscribe(() => {
                            this.GetAllContentUpdateList();
                            window.location.reload();
                        }, error => {
                            this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
                        });
                    }
                    this.GetAllContentUpdateList();
                });
            }
        });
    }
    ContentNotApprove(content) {
        const dialogRef = this.dialog.open(src_app_shared_notapprove_dialog_notapprove_dialog_component__WEBPACK_IMPORTED_MODULE_1__.NotApproveDialogComponent, {
            maxWidth: "400px",
            disableClose: true,
            data: {
                title: "Comment",
                message: "Enter comment for why this not approve"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                // const formData = new FormData();
                const comment = dialogRef.componentInstance.comment;
                let denycontent = {
                    "contentLogId": content.contentLogId,
                    "comment": comment,
                };
                this.appService.denyapprovecontent('api/ContentUpdate/DeniedContentUpdateDetail', denycontent).subscribe(data => {
                    window.location.reload();
                });
            }
        });
    }
}
ListcontentupdateComponent.ɵfac = function ListcontentupdateComponent_Factory(t) { return new (t || ListcontentupdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__.AppSettings)); };
ListcontentupdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ListcontentupdateComponent, selectors: [["app-listcontentupdate"]], decls: 29, vars: 9, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap ", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2", "crdhead"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [1, "tblsearch"], [1, "tdsearch"], [1, "fa", "fa-search", "searchtext-icon"], ["matInput", "", "type", "text", "placeholder", "Search ...", "name", "title", 1, "searchtext", 3, "ngModel", "ngModelChange", "input", "keyup"], [1, "mat-table", "admin-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["fxFlex.gt-sm", "12", 1, "mat-header-cell"], ["fxFlex.gt-sm", "10", 1, "mat-header-cell", "text-center"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "mat-row"], [1, "mat-cell"], [1, "mat-cell", 3, "matTooltip"], ["fxFlex.gt-sm", "12", "fxLayout", "row", 1, "mat-cell", "text-center"], ["class", "fa fa-info-circle cmtinfo", "aria-hidden", "true", 3, "matTooltip", 4, "ngIf"], ["fxFlex.gt-sm", "10", 1, "mat-cell", "text-center"], ["mat-mini-fab", "", "matTooltip", "Mark as Approved", 1, "mx-1", "app-y", 3, "disabled", "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["mat-mini-fab", "", "matTooltip", "Mark as Not Approved", "class", "mx-1 app-n", 3, "ngClass", "click", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-info-circle", "cmtinfo", 3, "matTooltip"], ["mat-mini-fab", "", "matTooltip", "Mark as Not Approved", 1, "mx-1", "app-n", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-close"], ["fxLayout", "row wrap"], ["fxFlex", "100", 1, "p-1"], [1, "p-0", "text-center", "nobxshbrd"], ["autoHide", "true", 1, "product-pagination", 3, "pageChange"]], template: function ListcontentupdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00A0 Content Update List");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ListcontentupdateComponent_Template_input_ngModelChange_10_listener($event) { return ctx.title = $event; })("input", function ListcontentupdateComponent_Template_input_input_10_listener() { return ctx.Search(); })("keyup", function ListcontentupdateComponent_Template_input_keyup_10_listener() { return ctx.Search(); })("ngModelChange", function ListcontentupdateComponent_Template_input_ngModelChange_10_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Content Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Approved?");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, ListcontentupdateComponent_div_25_Template, 14, 11, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, ListcontentupdateComponent_div_28_Template, 4, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](26, 3, ctx.ContentUpdateListDisplay, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](6, _c1, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.ContentUpdateListDisplay.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutAlignDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__.DefaultClassDirective, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginatePipe], styles: [".disabled[_ngcontent-%COMP%] {\n     opacity: 0.5;\n     background-color: gray;\n     cursor: not-allowed;\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Rjb250ZW50dXBkYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7S0FDSyxZQUFZO0tBQ1osc0JBQXNCO0tBQ3RCLG1CQUFtQjtHQUNyQiIsImZpbGUiOiJsaXN0Y29udGVudHVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2FibGVkIHtcbiAgICAgb3BhY2l0eTogMC41O1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgfVxuICAgIl19 */"] });


/***/ }),

/***/ 4425:
/*!*******************************************************************!*\
  !*** ./src/app/admin/qualityassurance/qualityassurance.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "QaModule": () => (/* binding */ QaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _listcontent_listcontent_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listcontent/listcontent.component */ 1475);
/* harmony import */ var _listadvcontent_listadvcontent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listadvcontent/listadvcontent.component */ 9097);
/* harmony import */ var _listcontentupdate_listcontentupdate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listcontentupdate/listcontentupdate.component */ 7121);
/* harmony import */ var _startingpage_startingpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./startingpage/startingpage.component */ 6564);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 7483);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 2778);
/* harmony import */ var src_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/auth.guard */ 7397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);














const routes = [
    { path: '', redirectTo: 'qualityassurance', pathMatch: 'full' },
    { path: 'startingpage', component: _startingpage_startingpage_component__WEBPACK_IMPORTED_MODULE_4__.StartingpageComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard], allowedRoles: [8] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard], allowedRoles: [8] },
    { path: 'listcontent', component: _listcontent_listcontent_component__WEBPACK_IMPORTED_MODULE_1__.ListcontentComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard], allowedRoles: [8] },
    { path: 'listadvcontent', component: _listadvcontent_listadvcontent_component__WEBPACK_IMPORTED_MODULE_2__.ListadvcontentComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard], allowedRoles: [8] },
    { path: 'listcontentupdate', component: _listcontentupdate_listcontentupdate_component__WEBPACK_IMPORTED_MODULE_3__.ListcontentupdateComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard], allowedRoles: [8] },
];
class QaModule {
}
QaModule.ɵfac = function QaModule_Factory(t) { return new (t || QaModule)(); };
QaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: QaModule });
QaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](QaModule, { declarations: [_listcontent_listcontent_component__WEBPACK_IMPORTED_MODULE_1__.ListcontentComponent,
        _listadvcontent_listadvcontent_component__WEBPACK_IMPORTED_MODULE_2__.ListadvcontentComponent,
        _listcontentupdate_listcontentupdate_component__WEBPACK_IMPORTED_MODULE_3__.ListcontentupdateComponent,
        _startingpage_startingpage_component__WEBPACK_IMPORTED_MODULE_4__.StartingpageComponent,
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule] }); })();


/***/ }),

/***/ 6564:
/*!*******************************************************************************!*\
  !*** ./src/app/admin/qualityassurance/startingpage/startingpage.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartingpageComponent": () => (/* binding */ StartingpageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ 7361);
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/token-storage.service */ 1573);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);










const _c0 = function () { return ["/admin/qualityassurance/dashboard"]; };
function StartingpageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StartingpageComponent_div_2_Template_mat_card_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const player_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.logPlayerId(player_r2.playerId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Cricket");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "2 Titles");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "1 Trophy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", player_r2.profileImageFilePath, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](player_r2.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](player_r2.fullName);
} }
class StartingpageComponent {
    constructor(authservise, sessionStorage, appService, snackBar, formBuilder) {
        this.authservise = authservise;
        this.sessionStorage = sessionStorage;
        this.appService = appService;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.PlayerList = [];
    }
    ngOnInit() {
        this.sessionuserId = this.sessionStorage.getUser().userId;
        this.getGetAllPlayerList(this.sessionuserId);
    }
    ///getGetAllPlayerList
    getGetAllPlayerList(sessionuserId) {
        this.appService.getPlayerById("api/UserPlayer/GetPlayerByUserId/", sessionuserId).subscribe(data => {
            this.PlayerList = data;
            this.playerId = this.PlayerList;
        });
    }
    logPlayerId(playerId) {
        this.playerId = playerId;
        var id = window.sessionStorage.setItem("playerId", this.playerId);
    }
}
StartingpageComponent.ɵfac = function StartingpageComponent_Factory(t) { return new (t || StartingpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder)); };
StartingpageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StartingpageComponent, selectors: [["app-startingpage"]], decls: 3, vars: 1, consts: [["fxLayout", "row wrap"], ["resizedDiv", ""], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50", "class", "p-11 ", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50", 1, "p-11"], [1, "p-0", "Divbg2s", 3, "routerLink", "click"], [1, "flip-card"], [1, "flip-card-inner"], [1, "flip-card-front"], [1, "p-1", "text-center"], ["width", "200", "height", "85", 1, "w-full", "h-full", "rounded-full", "ng-star-inserted", "imgs", 3, "src"], [1, "p-0"], [1, "text-center", "fliphs"], [1, "flip-card-back"], [1, "fliph"], [1, "w100"], ["colspan", "3"]], template: function StartingpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, StartingpageComponent_div_2_Template, 27, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.PlayerList);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydGluZ3BhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6654:
/*!*******************************************************************!*\
  !*** ./src/app/shared/approve-dialog/approve-dialog.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApproveDialogComponent": () => (/* binding */ ApproveDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



class ApproveDialogComponent {
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
ApproveDialogComponent.ɵfac = function ApproveDialogComponent_Factory(t) { return new (t || ApproveDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ApproveDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApproveDialogComponent, selectors: [["app-confirm-dialog"]], decls: 15, vars: 2, consts: [[1, "mat-dialog-title"], [1, "mat-dialog-content"], [1, "txt-cen"], ["src", "assets/images/bg/approve.gif", "alt", "Approve ?", 1, "img1", 2, "width", "85px"], ["mat-dialog-actions", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "w-100"], ["mat-raised-button", "", "color", "primary", 1, "crbtn", "conf2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["mat-raised-button", "", "color", "primary", 1, "crbtn", "conf1", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times"]], template: function ApproveDialogComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApproveDialogComponent_Template_button_click_9_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApproveDialogComponent_Template_button_click_12_listener() { return ctx.onDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.message);
    } }, styles: [".app.blue[_ngcontent-%COMP%]   .mat-flat-button.mat-warn[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-raised-button.mat-warn[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-fab.mat-warn[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-mini-fab.mat-warn[_ngcontent-%COMP%] {\n  background-color: #ff5252;\n}\n\n.app.blue[_ngcontent-%COMP%]   .mat-flat-button.mat-primary[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-raised-button.mat-primary[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-fab.mat-primary[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n}\n\n.crbtn[_ngcontent-%COMP%] {\n  line-height: 28px !important;\n}\n\n.conf1[_ngcontent-%COMP%] {\n  background-color: #ff5252;\n  color: white;\n  border: none;\n  padding: 0 10px;\n  border-radius: 4px;\n  float: right;\n  margin-top: 10px !important;\n  width: 80px;\n}\n\n.conf2[_ngcontent-%COMP%] {\n  background-color: #33c041;\n  color: white;\n  border: none;\n  padding: 0 10px;\n  border-radius: 4px;\n  float: left;\n  margin-top: 10px !important;\n  width: 80px;\n}\n\n.txt-cen[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHJvdmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0FBRUo7O0FBQ0E7RUFDSSw0QkFBQTtBQUVKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSw2QkFBQTtBQUVKIiwiZmlsZSI6ImFwcHJvdmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC5ibHVlIC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sIC5hcHAuYmx1ZSAubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sIC5hcHAuYmx1ZSAubWF0LWZhYi5tYXQtd2FybiwgLmFwcC5ibHVlIC5tYXQtbWluaS1mYWIubWF0LXdhcm4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjUyNTI7XG59XG4uYXBwLmJsdWUgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwgLmFwcC5ibHVlIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLmFwcC5ibHVlIC5tYXQtZmFiLm1hdC1wcmltYXJ5LCAuYXBwLmJsdWUgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbn1cblxuLmNyYnRue1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb25mMXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MjUyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA4MHB4O1xufVxuXG4uY29uZjJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzYzA0MTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA4MHB4O1xufVxuXG4udHh0LWNlbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ 570:
/*!*************************************************************************!*\
  !*** ./src/app/shared/notapprove-dialog/notapprove-dialog.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotApproveDialogComponent": () => (/* binding */ NotApproveDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



class NotApproveDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formData = new FormData();
        this.comment = '';
    }
    ngOnInit() {
    }
    onTextareaKeyUp(value) {
        this.comment = value;
    }
    onConfirm() {
        this.dialogRef.close(true);
        const comment = this.comment;
        this.formData.append('comment', comment);
    }
    onDismiss() {
        this.dialogRef.close(false);
    }
}
NotApproveDialogComponent.ɵfac = function NotApproveDialogComponent_Factory(t) { return new (t || NotApproveDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
NotApproveDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotApproveDialogComponent, selectors: [["app-confirm-dialog"]], decls: 14, vars: 3, consts: [[1, "mat-dialog-title"], [1, "mat-dialog-content"], ["name", "comment", "rows", "4", "required", "", 1, "cmtrv", 3, "keyup"], ["mat-dialog-actions", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "w-100"], ["mat-raised-button", "", "color", "primary", 1, "crbtn", "conf2", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["mat-raised-button", "", "color", "primary", 1, "crbtn", "conf1", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times"]], template: function NotApproveDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NotApproveDialogComponent_Template_textarea_keyup_5_listener($event) { return ctx.onTextareaKeyUp($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotApproveDialogComponent_Template_button_click_8_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotApproveDialogComponent_Template_button_click_11_listener() { return ctx.onDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.comment.length === 0);
    } }, styles: [".app.blue[_ngcontent-%COMP%]   .mat-flat-button.mat-warn[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-raised-button.mat-warn[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-fab.mat-warn[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-mini-fab.mat-warn[_ngcontent-%COMP%] {\n  background-color: #ff5252;\n}\n\n.app.blue[_ngcontent-%COMP%]   .mat-flat-button.mat-primary[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-raised-button.mat-primary[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-fab.mat-primary[_ngcontent-%COMP%], .app.blue[_ngcontent-%COMP%]   .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n}\n\n.crbtn[_ngcontent-%COMP%] {\n  line-height: 28px !important;\n}\n\n.conf1[_ngcontent-%COMP%] {\n  background-color: #ff5252;\n  color: white;\n  border: none;\n  padding: 0 10px;\n  border-radius: 4px;\n  float: right;\n  margin-top: 10px !important;\n  width: 80px;\n}\n\n.conf2[_ngcontent-%COMP%] {\n  background-color: #33c041;\n  color: white;\n  border: none;\n  padding: 0 10px;\n  border-radius: 4px;\n  float: left;\n  margin-top: 10px !important;\n  width: 80px;\n}\n\n.txt-cen[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.cmtrv[_ngcontent-%COMP%] {\n  width: 95%;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGFwcHJvdmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0FBRUo7O0FBQ0E7RUFDSSw0QkFBQTtBQUVKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSw2QkFBQTtBQUVKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFFSiIsImZpbGUiOiJub3RhcHByb3ZlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAuYmx1ZSAubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLCAuYXBwLmJsdWUgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLCAuYXBwLmJsdWUgLm1hdC1mYWIubWF0LXdhcm4sIC5hcHAuYmx1ZSAubWF0LW1pbmktZmFiLm1hdC13YXJuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MjUyO1xufVxuLmFwcC5ibHVlIC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksIC5hcHAuYmx1ZSAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnksIC5hcHAuYmx1ZSAubWF0LWZhYi5tYXQtcHJpbWFyeSwgLmFwcC5ibHVlIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG59XG5cbi5jcmJ0bntcbiAgICBsaW5lLWhlaWdodDogMjhweCAhaW1wb3J0YW50O1xufVxuXG4uY29uZjF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTI1MjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODBweDtcbn1cblxuLmNvbmYye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzM2MwNDE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODBweDtcbn1cblxuLnR4dC1jZW57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jbXRydntcbiAgICB3aWR0aDogOTUlO1xuICAgIHBhZGRpbmc6IDVweDtcbn0iXX0= */"] });


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
//# sourceMappingURL=src_app_admin_qualityassurance_qualityassurance_module_ts.js.map