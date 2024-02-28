"use strict";
(self["webpackChunkemporium"] = self["webpackChunkemporium"] || []).push([["src_app_admin_im10marketingcampaigns_im10marketingcampaigns_module_ts"],{

/***/ 5194:
/*!*********************************************************************************************************!*\
  !*** ./src/app/admin/im10marketingcampaigns/addcampaignsocialmedia/addcampaignsocialmedia.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddcampaignsocialmediaComponent": () => (/* binding */ AddcampaignsocialmediaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/ok-dialog/ok-dialog.component */ 891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 2220);
















function AddcampaignsocialmediaComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter Social Media Views");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcampaignsocialmediaComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Social Media Views at most 100 char long");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcampaignsocialmediaComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Screenshot is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcampaignsocialmediaComponent_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", content_r6.marketingCampaignId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](content_r6.title);
} }
function AddcampaignsocialmediaComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please select Campaign Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/admin/im10marketingcampaigns/listcampaing"]; };
class AddcampaignsocialmediaComponent {
    constructor(dialog, appService, snackBar, route, router, formBuilder, location) {
        this.dialog = dialog;
        this.appService = appService;
        this.snackBar = snackBar;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.location = location;
        this.CampaignTitleList = [];
        this.selectedFile = null;
        this.fileError = false;
        this.fileSizeError = false;
        this.isFileUploaded = false;
        this.selectedFileProfile = null;
        this.isFileUploadedProfile = false;
        this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            marketingcampaignId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            socialMediaViews: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100)]),
        });
    }
    ngOnInit() {
        this.getContentDetailsListByPlayetId();
    }
    ///GetContentDetailsbyPlayerID
    getContentDetailsListByPlayetId() {
        var playerId = window.sessionStorage.getItem("playerId");
        this.appService.getContentByPlayerId("api/CampaignDetail/GetCampaignDetailByPlayerId/", playerId).subscribe(data => {
            this.CampaignTitleList = data;
        });
    }
    ///Select Media file
    handleFileSelectProfile(event) {
        this.fileprofile = event.target.files[0];
        if (this.fileprofile) {
            this.selectedFileProfile = this.fileprofile;
            this.isFileUploadedProfile = true;
            setTimeout(() => {
                this.isFileUploadedProfile = false; // Reset isFileUploaded to false after delay
            });
        }
    }
    ///Addplayer
    AddCampaignSocialMedia(userObject) {
        var formData = new FormData();
        formData.append('socialmediaview', this.uploadForm.value.socialMediaViews);
        formData.append('marketingcampaignId', this.uploadForm.value.marketingcampaignId);
        formData.append('screenShotFilePath', this.fileprofile);
        this.appService.AddContent('api/CampaignSocialMediaDetail/AddCampaignSocialMediaDetail', formData).subscribe(() => {
            const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__.OkDialogComponent, {
                maxWidth: "500px",
                disableClose: true,
                data: {
                    title: "Save Action",
                    message: "Social Media Added Successfully!"
                }
            });
            dialogRef.afterClosed().subscribe(() => {
                window.location.reload();
            });
        });
    }
}
AddcampaignsocialmediaComponent.ɵfac = function AddcampaignsocialmediaComponent_Factory(t) { return new (t || AddcampaignsocialmediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location)); };
AddcampaignsocialmediaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddcampaignsocialmediaComponent, selectors: [["app-addcampaignsocialmedia"]], decls: 46, vars: 9, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap ", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2", "crdhead"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLayoutGap", "10px", 1, "container"], ["fxLayout.gt-sm", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "10px", "fxFlex", "33%", 1, "block-2"], ["fxFlex.gt-sm", "33.33%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["appearance", "outline", 1, "w-100"], ["formControlName", "socialMediaViews", "matInput", "", "required", ""], [4, "ngIf"], ["appearance", "outline", 1, "w-100", "sgln2"], [1, "mat-placeholder-required"], ["type", "file", "accept", "image/*", "required", "", 1, "input1_height", 3, "change"], ["fileInput1", ""], ["style", "font-size: 11px;", 4, "ngIf"], ["formControlName", "marketingcampaignId", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "p-2", "crdfooter"], ["fxLayout", "", "fxLayoutGap", "10px", 1, "container"], ["fxFlex", "50%", 1, "text-left"], ["mat-raised-button", "", "color", "accent", "type", "button", 1, "crbtn", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-circle-left"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "crbtn", 3, "disabled"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["fxFlex", "50%", 1, "text-right"], [1, "crdtip"], [2, "font-size", "11px"], [3, "value"]], template: function AddcampaignsocialmediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00A0Add Social Media View");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddcampaignsocialmediaComponent_Template_form_ngSubmit_6_listener() { return ctx.AddCampaignSocialMedia(ctx.uploadForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Social Media Views ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AddcampaignsocialmediaComponent_mat_error_15_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AddcampaignsocialmediaComponent_mat_error_16_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Screenshot Upload (.jpg/.jpeg/.png)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AddcampaignsocialmediaComponent_Template_input_change_24_listener($event) { return ctx.handleFileSelectProfile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AddcampaignsocialmediaComponent_mat_error_26_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Campaign Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, AddcampaignsocialmediaComponent_mat_option_32_Template, 3, 2, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, AddcampaignsocialmediaComponent_mat_error_33_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\u00A0BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\u00A0SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Tip : (*) fields are mandatory.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.uploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.socialMediaViews.errors == null ? null : ctx.uploadForm.controls.socialMediaViews.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.socialMediaViews.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.selectedFileProfile && !ctx.isFileUploadedProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.CampaignTitleList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.marketingcampaignId.errors == null ? null : ctx.uploadForm.controls.marketingcampaignId.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.uploadForm.valid || !ctx.selectedFileProfile);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.FlexFillDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRjYW1wYWlnbnNvY2lhbG1lZGlhLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5016:
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/im10marketingcampaigns/addeditcampaign/addeditcampaign.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddeditcampaignComponent": () => (/* binding */ AddeditcampaignComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/ok-dialog/ok-dialog.component */ 891);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 2220);















function AddeditcampaignComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddeditcampaignComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Title at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddeditcampaignComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Title at most 100 char long");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddeditcampaignComponent_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", content_r10.contentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](content_r10.title);
} }
function AddeditcampaignComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please select Content Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddeditcampaignComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", content_r11.contentTypeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](content_r11.contentName);
} }
function AddeditcampaignComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please select Content Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddeditcampaignComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddeditcampaignComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Description at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddeditcampaignComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Description at most 200 char long");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AddeditcampaignComponent {
    constructor(dialog, data, appService, router, route) {
        this.dialog = dialog;
        this.data = data;
        this.appService = appService;
        this.router = router;
        this.route = route;
        this.ContentList = [];
        this.ContenttypeList = [];
        this.formdata = {};
        this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            marketingCampaignId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            contentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100)]),
            contentTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(200)]),
        });
    }
    ///Close the mat dialog
    closeDialog() {
        this.dialog.closeAll();
    }
    ngOnInit() {
        this.getCampaignlistbyid(this.data.marketingCampaignId);
        this.getContentDetailsListByPlayerId();
        this.getContenttypenameMaster();
    }
    ///getContentDetailsListByPlayetId
    getContentDetailsListByPlayerId() {
        var playerId = window.sessionStorage.getItem("playerId");
        this.appService.getContentByPlayerId("api/ContentDetail/GetApprovedContentdetailByPlayerId/", playerId).subscribe(data => {
            this.ContentList = data;
        });
    }
    ///getContenttypenameMaster
    getContenttypenameMaster() {
        this.appService.getsubAllcontenttype("api/MasterAPIs/GetAllContentType").subscribe(data => {
            this.ContenttypeList = data;
        });
    }
    ///Submit
    Submit(userObject) {
        var marketingCampaignId = userObject.marketingCampaignId;
        if (marketingCampaignId == "" || marketingCampaignId == undefined) {
            this.AddCampaign(userObject);
        }
        else {
            if (this.uploadForm.valid) {
                this.UpdateCampaign(userObject);
            }
        }
    }
    ///AddCampaign
    AddCampaign(formData) {
        let addcampaignModel = {
            "contentId": formData.contentId,
            // "marketingCampaignId": formData.marketingCampaignId,
            "title": formData.title,
            "contentTypeId": formData.contentTypeId,
            "description": formData.description,
            "playerId": window.sessionStorage.getItem("playerId"),
        };
        this.appService.AddCampaign('api/CampaignDetail/AddCampaignDetail', addcampaignModel).subscribe(() => {
            this.closeDialog();
            const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__.OkDialogComponent, {
                maxWidth: "500px",
                disableClose: true,
                data: {
                    title: "Save Action",
                    message: "Campaign Added Successfully!"
                }
            });
            dialogRef.afterClosed().subscribe(() => {
                window.location.reload();
            });
            this.router.navigate(['/admin/im10marketingcampaigns/listcampaing'], { relativeTo: this.route });
        }, error => {
        });
    }
    ///GetAdvContentMappingByadvContentMapId
    getCampaignlistbyid(marketingCampaignId) {
        if (marketingCampaignId > 0) {
            this.appService.getById("api/CampaignDetail/GetCampaignDetailById/", marketingCampaignId).subscribe(data => {
                this.uploadForm.controls['title'].setValue(data.title);
                this.uploadForm.controls['contentId'].setValue(data.contentId);
                this.uploadForm.controls['contentTypeId'].setValue(data.contentTypeId);
                this.uploadForm.controls['description'].setValue(data.description);
                this.uploadForm.controls['marketingCampaignId'].setValue(marketingCampaignId);
            });
        }
    }
    ///UpdateCampaign
    UpdateCampaign(formData) {
        let editcampaignModel = {
            "contentId": formData.contentId,
            "marketingCampaignId": formData.marketingCampaignId,
            "title": formData.title,
            "contentTypeId": formData.contentTypeId,
            "description": formData.description,
            "playerId": window.sessionStorage.getItem("playerId"),
        };
        this.appService.AddContentUpdate('api/CampaignDetail/AddCampaignDetail', editcampaignModel).subscribe(() => {
            this.closeDialog();
            const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__.OkDialogComponent, {
                maxWidth: "500px",
                disableClose: true,
                data: {
                    title: "Edit Action",
                    message: "Campaign Updated Successfully!"
                }
            });
            dialogRef.afterClosed().subscribe(() => {
                window.location.reload();
            });
            this.router.navigate(['/admin/im10marketingcampaigns/listcampaing'], { relativeTo: this.route });
        }, error => {
        });
    }
}
AddeditcampaignComponent.ɵfac = function AddeditcampaignComponent_Factory(t) { return new (t || AddeditcampaignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
AddeditcampaignComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddeditcampaignComponent, selectors: [["app-addeditcampaign"]], decls: 49, vars: 14, consts: [[1, "mat-dialog-title"], [1, "mat-typography"], [3, "formGroup"], ["fxLayout", "column", 1, "container"], ["fxLayout.gt-sm", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "10px", "fxFlex", "33%", 1, "block-2"], ["fxFlex.gt-sm", "33.33%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["appearance", "outline", 1, "w-100"], ["formControlName", "title", "matInput", "", "required", ""], [4, "ngIf"], ["formControlName", "contentId", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "contentTypeId", "required", ""], ["fxLayout.gt-sm", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "10px", "fxFlex", "33%", 1, "block-2", "mttop20"], ["fxFlex.gt-sm", "100%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["formControlName", "description", "matInput", "", "required", ""], ["formControlName", "marketingCampaignId", "matInput", "", "hidden", ""], ["fxFlex", "50%", 1, "text-left"], ["mat-raised-button", "", "color", "accent", "type", "button", 1, "crbtn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-ban"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "crbtn", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["fxFlex", "50%", 1, "text-right"], [1, "crdtip"], [3, "value"]], template: function AddeditcampaignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AddeditcampaignComponent_mat_error_11_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AddeditcampaignComponent_mat_error_12_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AddeditcampaignComponent_mat_error_13_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Content Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AddeditcampaignComponent_mat_option_19_Template, 3, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AddeditcampaignComponent_mat_error_20_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Content Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AddeditcampaignComponent_mat_option_26_Template, 3, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, AddeditcampaignComponent_mat_error_27_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, AddeditcampaignComponent_mat_error_34_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, AddeditcampaignComponent_mat_error_35_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, AddeditcampaignComponent_mat_error_36_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddeditcampaignComponent_Template_button_click_40_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddeditcampaignComponent_Template_button_click_43_listener() { return ctx.Submit(ctx.uploadForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Tip : (*) fields are mandatory.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.uploadForm.value.marketingCampaignId ? "Edit" : "Add", " Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.uploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.title.errors == null ? null : ctx.uploadForm.controls.title.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.title.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.title.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ContentList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.contentId.errors == null ? null : ctx.uploadForm.controls.contentId.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ContenttypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.contentTypeId.errors == null ? null : ctx.uploadForm.controls.contentTypeId.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.description.errors == null ? null : ctx.uploadForm.controls.description.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.description.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.description.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.uploadForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.uploadForm.value.marketingCampaignId ? "UPDATE" : "SUBMIT", "");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.FlexFillDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption], styles: [".container[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n     margin-bottom: 10px;\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGVkaXRjYW1wYWlnbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0tBQ0ssbUJBQW1CO0dBQ3JCIiwiZmlsZSI6ImFkZGVkaXRjYW1wYWlnbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciAuZ3JpZC1pdGVtIHtcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgIH1cbiAgICJdfQ== */"] });


/***/ }),

/***/ 9498:
/*!*******************************************************************************!*\
  !*** ./src/app/admin/im10marketingcampaigns/dashboard/dashboard.component.ts ***!
  \*******************************************************************************/
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






const _c0 = function () { return ["/admin/im10marketingcampaigns/startingpage"]; };
class DashboardComponent {
    constructor(appService) {
        this.appService = appService;
        this.PlayerDetailsList = [];
    }
    ngOnInit() {
        this.Getplayerdetailsbyplayerid();
    }
    ///Get player details
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

/***/ 1415:
/*!*******************************************************************************!*\
  !*** ./src/app/admin/im10marketingcampaigns/im10marketingcampaigns.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "Im10marketingcampaignsModule": () => (/* binding */ Im10marketingcampaignsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 9498);
/* harmony import */ var _startingpage_startingpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startingpage/startingpage.component */ 7589);
/* harmony import */ var _listcampaign_listcampaign_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listcampaign/listcampaign.component */ 6442);
/* harmony import */ var _addeditcampaign_addeditcampaign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addeditcampaign/addeditcampaign.component */ 5016);
/* harmony import */ var _viewcampaignsocialmedia_viewcampaignsocialmedia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewcampaignsocialmedia/viewcampaignsocialmedia.component */ 924);
/* harmony import */ var _addcampaignsocialmedia_addcampaignsocialmedia_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addcampaignsocialmedia/addcampaignsocialmedia.component */ 5194);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ 7483);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var src_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/auth.guard */ 7397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);

















const routes = [
    { path: '', redirectTo: 'im10marketingcampaigns', pathMatch: 'full' },
    { path: 'addcampaignsocialmedia', component: _addcampaignsocialmedia_addcampaignsocialmedia_component__WEBPACK_IMPORTED_MODULE_6__.AddcampaignsocialmediaComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard], allowedRoles: [11] },
    { path: 'addeditcampaign', component: _addeditcampaign_addeditcampaign_component__WEBPACK_IMPORTED_MODULE_4__.AddeditcampaignComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard], allowedRoles: [11] },
    { path: 'listcampaing', component: _listcampaign_listcampaign_component__WEBPACK_IMPORTED_MODULE_3__.ListcampaignComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard], allowedRoles: [11] },
    { path: 'viewcampaignsocialmedia', component: _viewcampaignsocialmedia_viewcampaignsocialmedia_component__WEBPACK_IMPORTED_MODULE_5__.ViewcampaignsocialmediaComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard], allowedRoles: [11] },
    { path: 'viewcampaignsocialmedia/:id', component: _viewcampaignsocialmedia_viewcampaignsocialmedia_component__WEBPACK_IMPORTED_MODULE_5__.ViewcampaignsocialmediaComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard], allowedRoles: [11] },
    { path: 'startingpage', component: _startingpage_startingpage_component__WEBPACK_IMPORTED_MODULE_2__.StartingpageComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard], allowedRoles: [11] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard], allowedRoles: [11] },
];
class Im10marketingcampaignsModule {
}
Im10marketingcampaignsModule.ɵfac = function Im10marketingcampaignsModule_Factory(t) { return new (t || Im10marketingcampaignsModule)(); };
Im10marketingcampaignsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: Im10marketingcampaignsModule });
Im10marketingcampaignsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.NgxPaginationModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](Im10marketingcampaignsModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        _startingpage_startingpage_component__WEBPACK_IMPORTED_MODULE_2__.StartingpageComponent,
        _listcampaign_listcampaign_component__WEBPACK_IMPORTED_MODULE_3__.ListcampaignComponent,
        _addeditcampaign_addeditcampaign_component__WEBPACK_IMPORTED_MODULE_4__.AddeditcampaignComponent,
        _viewcampaignsocialmedia_viewcampaignsocialmedia_component__WEBPACK_IMPORTED_MODULE_5__.ViewcampaignsocialmediaComponent,
        _addcampaignsocialmedia_addcampaignsocialmedia_component__WEBPACK_IMPORTED_MODULE_6__.AddcampaignsocialmediaComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.NgxPaginationModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule] }); })();


/***/ }),

/***/ 6442:
/*!*************************************************************************************!*\
  !*** ./src/app/admin/im10marketingcampaigns/listcampaign/listcampaign.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListcampaignComponent": () => (/* binding */ ListcampaignComponent)
/* harmony export */ });
/* harmony import */ var _addeditcampaign_addeditcampaign_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addeditcampaign/addeditcampaign.component */ 5016);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 2887);
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
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ 7483);




















const _c0 = function (a1) { return ["../viewcampaignsocialmedia", a1]; };
function ListcampaignComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListcampaignComponent_div_28_Template_a_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const content_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r3.openDialog(content_r2.marketingCampaignId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListcampaignComponent_div_28_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const content_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r5.deleteservice(content_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "i", 26);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", content_r2.contentTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](content_r2.contentTypeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c0, content_r2.marketingCampaignId));
} }
function ListcampaignComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "pagination-controls", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function ListcampaignComponent_div_31_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r6.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class ListcampaignComponent {
    constructor(appService, dialog, snackBar, tokenStorage, router, appSettings, http) {
        this.appService = appService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.appSettings = appSettings;
        this.http = http;
        this.CampaignList = [];
        this.NewCampaignList = [];
        this.ContentListbyPlayerId = [];
        this.count = 8;
    }
    openDialog(marketingCampaignId) {
        this.marketingCampaignId = marketingCampaignId;
        const dialogRef = this.dialog.open(_addeditcampaign_addeditcampaign_component__WEBPACK_IMPORTED_MODULE_0__.AddeditcampaignComponent, {
            width: '150vh',
            disableClose: true,
            data: { marketingCampaignId: marketingCampaignId }
        });
    }
    ngOnInit() {
        this.getContentDetailsListByPlayetId();
    }
    /// Editbuttonclick
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
    //Delete Content
    deleteservice(content) {
        const dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
            maxWidth: "400px",
            disableClose: true,
            data: {
                title: "Confirm Action",
                message: "Are you sure you want delete this?"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const index = this.CampaignList.indexOf(content);
                if (index !== -1) {
                    this.CampaignList.splice(index, 1);
                    const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_2__.OkDialogComponent, {
                        maxWidth: "500px",
                        disableClose: true,
                        data: {
                            title: "Delete Action",
                            message: "Campaign Deleted Successfully!"
                        }
                    });
                    this.appService.deleteuser(`api/CampaignDetail/DeleteCampaignDetail?marketingcampaignId=${content.marketingCampaignId}`, {}).subscribe(data => {
                    });
                }
            }
        });
    }
    ///GetContentDetailsbyPlayerID
    getContentDetailsListByPlayetId() {
        var playerId = window.sessionStorage.getItem("playerId");
        this.appService.getContentByPlayerId("api/CampaignDetail/GetCampaignDetailByPlayerId/", playerId).subscribe(data => {
            this.CampaignList = data;
            this.NewCampaignList = data;
        });
    }
    ///Search
    Search() {
        if (this.title === "") {
            this.getContentDetailsListByPlayetId();
        }
        else {
            this.CampaignList = this.NewCampaignList.filter(res => {
                return (res.title.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
                    res.description.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
                    res.contentTitle.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
                    res.contentTypeName.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()));
            });
            this.page = 1;
        }
    }
}
ListcampaignComponent.ɵfac = function ListcampaignComponent_Factory(t) { return new (t || ListcampaignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient)); };
ListcampaignComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ListcampaignComponent, selectors: [["app-listcampaign"]], inputs: { playerId: "playerId" }, decls: 32, vars: 9, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap ", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2", "crdhead"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [1, "tblsearch"], [1, "tdsearch"], [1, "fa", "fa-search", "searchtext-icon"], ["matInput", "", "type", "text", "placeholder", "Search ...", "name", "title", 1, "searchtext", 3, "ngModel", "ngModelChange", "input", "keyup"], [1, "tdbtn"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "crbtn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "mat-table", "admin-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["fxFlex.gt-sm", "11", 1, "mat-header-cell", "text-center"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "mat-row"], [1, "mat-cell"], [1, "mat-cell", 3, "matTooltip"], ["fxFlex.gt-sm", "11", 1, "mat-cell", "text-center"], ["mat-mini-fab", "", "color", "secondary", "matTooltip", "View", 1, "btnpd", "secondary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Edit", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil"], ["mat-mini-fab", "", "color", "warn", "matTooltip", "Delete", 1, "mx-1", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], ["fxLayout", "row wrap"], ["fxFlex", "100", 1, "p-1"], [1, "p-0", "text-center", "nobxshbrd"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function ListcampaignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00A0 Campaign List");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ListcampaignComponent_Template_input_ngModelChange_10_listener($event) { return ctx.title = $event; })("input", function ListcampaignComponent_Template_input_input_10_listener() { return ctx.Search(); })("keyup", function ListcampaignComponent_Template_input_keyup_10_listener() { return ctx.Search(); })("ngModelChange", function ListcampaignComponent_Template_input_ngModelChange_10_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListcampaignComponent_Template_button_click_12_listener() { return ctx.openDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "\u00A0 ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Content Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Content Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, ListcampaignComponent_div_28_Template, 16, 8, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, ListcampaignComponent_div_31_Template, 4, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](29, 3, ctx.CampaignList, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](6, _c1, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.CampaignList.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginatePipe], styles: [".btnpd[_ngcontent-%COMP%] {\n    margin: 0px 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RjYW1wYWlnbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6Imxpc3RjYW1wYWlnbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bnBkIHtcbiAgICBtYXJnaW46IDBweCA1cHggIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ 7589:
/*!*************************************************************************************!*\
  !*** ./src/app/admin/im10marketingcampaigns/startingpage/startingpage.component.ts ***!
  \*************************************************************************************/
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 2118);











const _c0 = function () { return ["/admin/im10marketingcampaigns/dashboard"]; };
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Sport");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Data 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Born");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Data 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Data 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Debut");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Data 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Titles");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Data 5");
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
    constructor(authservise, sessionStorage, appService, snackBar, route, router, formBuilder) {
        this.authservise = authservise;
        this.sessionStorage = sessionStorage;
        this.appService = appService;
        this.snackBar = snackBar;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.playerSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.PlayerList = [];
    }
    sendPlayerId(id) {
        this.playerId = id;
    }
    onPlayerSelected(playerId) {
        this.playerSelected.emit(playerId);
    }
    ngOnInit() {
        this.sessionuserId = this.sessionStorage.getUser().userId;
        this.getPlayerbyUserId(this.sessionuserId);
    }
    ///getPlayerbyUserId
    getPlayerbyUserId(sessionuserId) {
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
StartingpageComponent.ɵfac = function StartingpageComponent_Factory(t) { return new (t || StartingpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder)); };
StartingpageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StartingpageComponent, selectors: [["app-startingpage"]], outputs: { playerSelected: "playerSelected" }, decls: 3, vars: 1, consts: [["fxLayout", "row wrap"], ["resizedDiv", ""], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50", "class", "p-11 ", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50", 1, "p-11"], [1, "p-0", "Divbg2s", 3, "routerLink", "click"], [1, "flip-card"], [1, "flip-card-inner"], [1, "flip-card-front"], [1, "p-1", "text-center"], ["width", "200", "height", "85", 1, "w-full", "h-full", "rounded-full", "ng-star-inserted", "imgs", 3, "src"], [1, "p-0"], [1, "text-center", "fliphs"], [1, "flip-card-back"], [1, "fliph"], [1, "w100"]], template: function StartingpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, StartingpageComponent_div_2_Template, 55, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.PlayerList);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydGluZ3BhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 924:
/*!***********************************************************************************************************!*\
  !*** ./src/app/admin/im10marketingcampaigns/viewcampaignsocialmedia/viewcampaignsocialmedia.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewcampaignsocialmediaComponent": () => (/* binding */ ViewcampaignsocialmediaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ 7483);


















function ViewcampaignsocialmediaComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", content_r4.contentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](content_r4.title);
} }
function ViewcampaignsocialmediaComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", content_r5.contentTypeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](content_r5.contentName);
} }
function ViewcampaignsocialmediaComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matTooltip", content_r6.socialMediaViews);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 4, content_r6.socialMediaViews, 0, 63), " ", content_r6.socialMediaViews.length > 40 ? "" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", content_r6.screenShotFilePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ViewcampaignsocialmediaComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "pagination-controls", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function ViewcampaignsocialmediaComponent_div_49_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
const _c1 = function () { return ["/admin/im10marketingcampaigns/listcampaing"]; };
class ViewcampaignsocialmediaComponent {
    constructor(dialog, appService, snackBar, route, router, formBuilder, location) {
        this.dialog = dialog;
        this.appService = appService;
        this.snackBar = snackBar;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.location = location;
        this.ContentList = [];
        this.ContenttypeList = [];
        this.SocialMediaList = [];
        this.NewSocialMediaList = [];
        this.count = 4;
        this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            marketingCampaignId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            contentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100)]),
            contentTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(200)]),
        });
    }
    ngOnInit() {
        this.marketingCampaignId = this.route.snapshot.params['id'];
        this.getCampaignlistbyid(this.marketingCampaignId);
        this.getSocialMedia();
        this.getContentDetailsListByPlayerId();
        this.getContenttypenameMaster();
    }
    ///getContentDetailsListByPlayetId
    getContentDetailsListByPlayerId() {
        var playerId = window.sessionStorage.getItem("playerId");
        this.appService.getContentByPlayerId("api/ContentDetail/GetContentdetailByPlayerId/", playerId).subscribe(data => {
            this.ContentList = data;
        });
    }
    ///getContenttypenameMaster
    getContenttypenameMaster() {
        this.appService.getsubAllcontenttype("api/MasterAPIs/GetAllContentType").subscribe(data => {
            this.ContenttypeList = data;
        });
    }
    ///GetAdvContentMappingByadvContentMapId
    getCampaignlistbyid(marketingCampaignId) {
        if (marketingCampaignId > 0) {
            this.appService.getById("api/CampaignDetail/GetCampaignDetailById/", marketingCampaignId).subscribe(data => {
                this.uploadForm.controls['contentId'].setValue(data.contentId);
                this.uploadForm.controls['title'].setValue(data.title);
                this.uploadForm.controls['contentTypeId'].setValue(data.contentTypeId);
                this.uploadForm.controls['description'].setValue(data.description);
                this.uploadForm.controls['marketingCampaignId'].setValue(marketingCampaignId);
            });
        }
    }
    ///getContenttypenameMaster
    getSocialMedia() {
        this.appService.getById("api/CampaignSocialMediaDetail/GetCampaignSocialMediaDetailById/", this.marketingCampaignId).subscribe(data => {
            this.SocialMediaList = data;
            this.NewSocialMediaList = data;
        });
    }
    ///pagination
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
    ///Search
    Search() {
        var username = document.querySelector('.searchtext').value;
        if (username == "") {
            this.getSocialMedia();
        }
        else {
            this.SocialMediaList = this.NewSocialMediaList.filter(res => {
                return (res.socialMediaViews.toLocaleLowerCase().includes(username.toLocaleLowerCase()));
            });
        }
    }
}
ViewcampaignsocialmediaComponent.ɵfac = function ViewcampaignsocialmediaComponent_Factory(t) { return new (t || ViewcampaignsocialmediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location)); };
ViewcampaignsocialmediaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ViewcampaignsocialmediaComponent, selectors: [["app-viewcampaignsocialmedia"]], decls: 57, vars: 13, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap ", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2", "crdhead"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [3, "formGroup"], ["fxLayout", "column", "fxLayoutGap", "10px", 1, "container"], ["fxLayout.gt-sm", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "10px", "fxFlex", "33%", 1, "block-2"], ["fxFlex.gt-sm", "33.33%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["appearance", "outline", 1, "w-100"], ["formControlName", "title", "matInput", "", "required", ""], ["formControlName", "contentId", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "contentTypeId", "required", ""], ["fxLayout.gt-sm", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "10px", "fxFlex", "33%", 1, "block-2", "mttop20"], ["fxFlex.gt-sm", "100%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["formControlName", "description", "matInput", "", "required", ""], [1, "hrd"], ["fxLayout", "row wrap ", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2"], [1, "tblsearch1"], [1, "tdsearch1"], [1, "fa", "fa-search", "searchtext-icon"], ["matInput", "", "type", "text", "placeholder", "Search...", "name", "username", 1, "searchtext", 3, "input", "keyup", "ngModelChange"], [1, "mat-table", "admin-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "p-2", "crdfooter"], ["fxLayout", "", "fxLayoutGap", "10px", 1, "container"], ["fxFlex", "50%", 1, "text-left"], ["mat-raised-button", "", "color", "accent", "type", "button", 1, "crbtn", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-circle-left"], ["fxFlex", "50%", 1, "text-right"], [3, "value"], [1, "mat-row"], ["matTooltipPosition", "below", "matTooltipClass", "custom-tooltip", 1, "mat-cell", 3, "matTooltip"], [1, "mat-cell"], ["target", "_blank", 1, "mat-cell", 2, "color", "#a08820", 3, "href"], ["fxLayout", "row wrap"], ["fxFlex", "100", 1, "p-1"], [1, "p-0", "text-center", "nobxshbrd"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function ViewcampaignsocialmediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00A0 View Campaign Social Media");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Content Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ViewcampaignsocialmediaComponent_mat_option_20_Template, 3, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Content Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ViewcampaignsocialmediaComponent_mat_option_26_Template, 3, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "hr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function ViewcampaignsocialmediaComponent_Template_input_input_39_listener() { return ctx.Search(); })("keyup", function ViewcampaignsocialmediaComponent_Template_input_keyup_39_listener() { return ctx.Search(); })("ngModelChange", function ViewcampaignsocialmediaComponent_Template_input_ngModelChange_39_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Social Media Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Screenshot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, ViewcampaignsocialmediaComponent_div_46_Template, 7, 8, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](47, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, ViewcampaignsocialmediaComponent_div_49_Template, 4, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "\u00A0BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.uploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ContentList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ContenttypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](47, 6, ctx.SocialMediaList, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](9, _c0, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.SocialMediaList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c1));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.FlexFillDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.PaginatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3Y2FtcGFpZ25zb2NpYWxtZWRpYS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_im10marketingcampaigns_im10marketingcampaigns_module_ts.js.map