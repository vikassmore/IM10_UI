"use strict";
(self["webpackChunkemporium"] = self["webpackChunkemporium"] || []).push([["src_app_admin_setting_setting_module_ts"],{

/***/ 2761:
/*!**************************************************************************!*\
  !*** ./src/app/admin/setting/passwordchange/passwordchange.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordchangeComponent": () => (/* binding */ PasswordchangeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ 8955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ 7361);
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/token-storage.service */ 1573);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 781);

















function PasswordchangeComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PasswordchangeComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Password isn't long enough, minimum of 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PasswordchangeComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PasswordchangeComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["../../dashboard"]; };
class PasswordchangeComponent {
    constructor(authservise, sessionStorage, appService, snackBar, route, router, formBuilder) {
        this.authservise = authservise;
        this.sessionStorage = sessionStorage;
        this.appService = appService;
        this.snackBar = snackBar;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.hide = true;
        this.submitted = false;
        this.formdata = {};
        this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', []),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
        });
        this.uploadForm = this.formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6),
            ])),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
            ])),
        }, { validator: (0,src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_0__.matchingPasswords)('password', 'confirmPassword') });
    }
    onSubmit(value) {
        this.changepassword(value);
    }
    validatePassword() {
    }
    changepassword(formData) {
        let SectorModel1 = {
            "userId": this.sessionuserId,
            "password": formData.password
        };
        this.appService.changepassword('api/user/ChangePassword', SectorModel1).subscribe((data) => {
            this.snackBar.open('Password Changed Successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
            this.router.navigate(['../dashboard'], { relativeTo: this.route });
        }, error => {
            this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
        });
    }
    ngOnInit() {
        this.sessionuserId = this.sessionStorage.getUser().userId;
    }
}
PasswordchangeComponent.ɵfac = function PasswordchangeComponent_Factory(t) { return new (t || PasswordchangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder)); };
PasswordchangeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PasswordchangeComponent, selectors: [["app-passwordchange"]], decls: 38, vars: 10, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap ", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2", "crdhead"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLayoutGap", "10px", 1, "container"], ["fxLayout.gt-sm", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "10px", "fxFlex", "33%", 1, "block-2"], ["fxFlex.gt-sm", "50%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["appearance", "outline", 1, "w-100", "mt-1"], ["matInput", "", "placeholder", "Password", "formControlName", "password", "required", "", "type", "password", "minlength", "6", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], [4, "ngIf"], ["matInput", "", "placeholder", "Confirm Password", "formControlName", "confirmPassword", "required", "", "type", "text", "required", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "p-2", "crdfooter"], ["fxLayout", "", "fxLayoutGap", "10px", 1, "container"], ["fxFlex", "50%", 1, "text-left"], ["mat-raised-button", "", "color", "accent", "type", "button", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-circle-left"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["fxFlex", "50%", 1, "text-right"], [1, "crdtip"]], template: function PasswordchangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u00A0 Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function PasswordchangeComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.uploadForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Enter New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PasswordchangeComponent_Template_mat_icon_click_15_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, PasswordchangeComponent_mat_error_17_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, PasswordchangeComponent_mat_error_18_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Confirm New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, PasswordchangeComponent_mat_error_24_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, PasswordchangeComponent_mat_error_25_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Tip : (*) fields are mandatory.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.uploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.password.errors == null ? null : ctx.uploadForm.controls.password.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.password.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.confirmPassword.errors == null ? null : ctx.uploadForm.controls.confirmPassword.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.confirmPassword.hasError("mismatchedPasswords"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.uploadForm.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.FlexFillDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZGNoYW5nZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 4836:
/*!*************************************************!*\
  !*** ./src/app/admin/setting/setting.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "SettingModule": () => (/* binding */ SettingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _passwordchange_passwordchange_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passwordchange/passwordchange.component */ 2761);
/* harmony import */ var _dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard/dashboard/dashboard.component */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    { path: '', redirectTo: 'setting', pathMatch: 'full' },
    { path: 'passwordchange', component: _passwordchange_passwordchange_component__WEBPACK_IMPORTED_MODULE_1__.PasswordchangeComponent },
    { path: 'dashboard', component: _dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent }
];
class SettingModule {
}
SettingModule.ɵfac = function SettingModule_Factory(t) { return new (t || SettingModule)(); };
SettingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SettingModule });
SettingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SettingModule, { declarations: [_passwordchange_passwordchange_component__WEBPACK_IMPORTED_MODULE_1__.PasswordchangeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin_setting_setting_module_ts.js.map