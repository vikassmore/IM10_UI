"use strict";
(self["webpackChunkemporium"] = self["webpackChunkemporium"] || []).push([["src_app_loginpages_loginpages_module_ts"],{

/***/ 894:
/*!***********************************************************************!*\
  !*** ./src/app/loginpages/forgotpassword/forgotpassword.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordComponent": () => (/* binding */ ForgotpasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ 8955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ 7361);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 781);














function ForgotpasswordComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ForgotpasswordComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/login"]; };
class ForgotpasswordComponent {
    constructor(_authService, formBuilder, _router, snackBar) {
        this._authService = _authService;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.snackBar = snackBar;
        this.showError = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_0__.emailValidator])],
        }, {});
    }
    // Forgotpassword will send on mail
    forgotUser(loginFormValue) {
        if (this.loginForm.valid) {
            this.email = this.loginForm.value.email;
            this._authService.forgotUser(`api/User/ForgetPassword?email=${loginFormValue.email}`, {}).subscribe(response => {
                if (response == "Email not found. Plese check.") {
                    this.snackBar.open('Email is not registered', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
                }
                else {
                    this.snackBar.open(' We have sent password on your email, Please check', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
                    this._router.navigate(['/login']);
                }
            }, error => {
                this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
            });
        }
    }
}
ForgotpasswordComponent.ɵfac = function ForgotpasswordComponent_Factory(t) { return new (t || ForgotpasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar)); };
ForgotpasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ForgotpasswordComponent, selectors: [["app-forgotpassword"]], decls: 24, vars: 5, consts: [[1, "bgimg"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxFlex.gt-sm", "33.33", 1, "p-2"], ["fxFlex", "100", "fxFlex.gt-sm", "33.33", 1, "p-4"], ["fxFlex", "100", 1, "lgpg", "pt-4"], ["aria-hidden", "true", "matTooltip", "Back To Login", 1, "fa", "fa-arrow-circle-left", 2, "font-size", "25px", 3, "routerLink"], [1, "text-muted", "text-center"], ["src", "assets/lg.png", "alt", "cinque terre", 1, "img1", 2, "width", "200px"], [2, "font-size", "13px"], [1, "text-muted", "text-center", 2, "color", "#7c6100 !important"], ["fxLayout", "row wrap", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "w-100", "mt-2"], ["matInput", "", "placeholder", "Email", "formControlName", "email", "required", ""], [4, "ngIf"], ["fxFlex", "100", 1, "text-center", "mt-2"], ["mat-raised-button", "", "color", "primary", 1, "submit", 2, "background-color", "#d58408"]], template: function ForgotpasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "FORGOT PASSWORD ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ForgotpasswordComponent_Template_form_ngSubmit_11_listener() { return ctx.forgotUser(ctx.loginForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ForgotpasswordComponent_mat_error_16_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ForgotpasswordComponent_mat_error_17_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "CONTINUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.email.errors == null ? null : ctx.loginForm.controls.email.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.email.hasError("invalidEmail"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError], styles: [".mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n    box-shadow: none !important;\n}\n\n.app.blue[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n    border: none;\n}\n\n.lgpg[_ngcontent-%COMP%]{\n    background: #faf2d8 !important;\n    border: 1px solid #8ebedd;\n    padding: 15px;\n    margin-top: 25%;\n}\n\n.bgimg[_ngcontent-%COMP%]{\n    background-image: url('back1.jpg') !important;  \n    background-repeat: no-repeat  !important;  \n    background-size: 100% 100% !important;  \n    height: -webkit-fill-available !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNkNBQXVFO0lBQ3ZFLHdDQUF3QztJQUN4QyxxQ0FBcUM7SUFDckMseUNBQXlDO0FBQzdDIiwiZmlsZSI6ImZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5hcHAuYmx1ZSAubWF0LWNhcmQge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmxncGd7XG4gICAgYmFja2dyb3VuZDogI2ZhZjJkOCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ZWJlZGQ7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAyNSU7XG59XG5cbi5iZ2ltZ3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcvYmFjazEuanBnJykgIWltcG9ydGFudDsgIFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgICFpbXBvcnRhbnQ7ICBcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJSAhaW1wb3J0YW50OyAgXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlICFpbXBvcnRhbnQ7XG59Il19 */"] });


/***/ }),

/***/ 7630:
/*!*****************************************************!*\
  !*** ./src/app/loginpages/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ 7361);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var src_app_shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/token-storage.service */ 9760);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 781);















function LoginComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password isn't long enough, minimum of 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/forgotpassword"]; };
class LoginComponent {
    constructor(_authService, appService, _router, _route, snackBar, tokenStorage) {
        this._authService = _authService;
        this.appService = appService;
        this._router = _router;
        this._route = _route;
        this.snackBar = snackBar;
        this.tokenStorage = tokenStorage;
        this.errorMessage = '';
        this.hide = true;
        this.isLoggedIn = false;
        this.toggle = true;
        this.validateControl = (controlName) => {
            return this.loginForm.controls[controlName].invalid && this.loginForm.controls[controlName].touched;
        };
        this.hasError = (controlName, errorName) => {
            return this.loginForm.controls[controlName].hasError(errorName);
        };
        this.loginUser = (loginFormValue) => {
            this.showError = false;
            const login = Object.assign({}, loginFormValue);
            const userForAuth = {
                emailId: login.emailId,
                password: login.password
            };
            if (this.loginForm.valid) {
                this._authService.loginUser('api/Login/authenticate', userForAuth)
                    .subscribe(res => {
                    this.tokenStorage.saveToken(res.token);
                    this.tokenStorage.saveUser(res);
                    this.isLoggedIn = true;
                    this.roleId = this.tokenStorage.getUser().roleId;
                    this.userId = this.tokenStorage.getUser().userId;
                    this._authService.sendAuthStateChangeNotification(res.isAuthSuccessful);
                    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
                    this._router.onSameUrlNavigation = 'reload';
                    if (this.roleId != undefined) {
                        if (this.roleId == 1) {
                            this._router.navigate(['/admin/superadmin/dashboard'], { relativeTo: this._route });
                        }
                        else if (this.roleId == 2) {
                            this._router.navigate(['/admin/contentadmin/startingpage']);
                        }
                        else if (this.roleId == 8) {
                            this._router.navigate(['/admin/qualityassurance/startingpage']);
                        }
                        else if (this.roleId == 3) {
                            this._router.navigate(['/admin/salespersonadmin/startingpage']);
                        }
                        else if (this.roleId == 10) {
                            this._router.navigate(['/admin/im10salesadmin/dashboard']);
                        }
                        else if (this.roleId == 7) {
                            this._router.navigate(['/admin/playerrepresentativeadmin/startingpage']);
                        }
                        else if (this.roleId == 6) {
                            this._router.navigate(['/admin/itsupportadmin/dashboard']);
                        }
                        else if (this.roleId == 11) {
                            this._router.navigate(['/admin/im10marketingcampaigns/startingpage']);
                        }
                        else if (this.roleId == 4) {
                            this._router.navigate(['/admin/endorsementmanageradmin/startingpage']);
                        }
                    }
                    else {
                        this._router.navigate(['/login']);
                    }
                }, (error) => {
                    this.snackBar.open('Please enter valid email/password.', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
                });
            }
            else {
                this.snackBar.open("Please enter valid email/password.", '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
            }
        };
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roleId = this.tokenStorage.getUser().roleId;
            this.userId = this.tokenStorage.getUser().userId;
            this._router.routeReuseStrategy.shouldReuseRoute = () => false;
            this._router.onSameUrlNavigation = 'reload';
        }
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)])
        });
        this._returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this.IsShow = true;
    }
    toggleView(change) {
        this.toggle = change.value;
    }
    selectedTabValue(changeEvent) {
        this.labelName = changeEvent.tab.textLabel;
    }
    blockSpaces(event) {
        if (event.key === ' ') {
            event.preventDefault();
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 35, vars: 8, consts: [[1, "bgimg"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxFlex.gt-sm", "33.33", 1, "p-2"], ["fxFlex", "100", "fxFlex.gt-sm", "33.33", 1, "pt-1"], ["fxFlex", "100", 1, "lgpg", "pt-2"], [1, "text-muted", "text-center"], ["src", "assets/lg.png", "alt", "cinque terre", 1, "img1", 2, "width", "200px"], [2, "font-size", "13px"], [1, "text-muted", "text-center", 2, "color", "#7c6100 !important"], ["fxLayout", "row wrap", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "w-100", "mt-2"], ["autofocus", "", "matInput", "", "placeholder", "Email", "formControlName", "emailId", "required", "", 3, "keypress"], [4, "ngIf"], ["appearance", "outline", 1, "w-100", "mt-1"], ["matInput", "", "placeholder", "Password", "formControlName", "password", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], ["fxFlex", "100", 1, "text-center", "mt-1"], ["mat-raised-button", "", "color", "primary", "type", "submit", 2, "background-color", "#d58408"], ["fxLayout", "row wrap", "fxFlex", "100", 1, "mt-2"], ["fxFlex", "100", "fxFlex.sm", "50", 1, "p-1"], ["fxFlex", "100", 1, "fpassword", "text-center"], [2, "color", "#7c6100 !important", "text-decoration", "none", 3, "routerLink"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "sup", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() { return ctx.loginUser(ctx.loginForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function LoginComponent_Template_input_keypress_15_listener($event) { return ctx.blockSpaces($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, LoginComponent_mat_error_16_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_mat_icon_click_21_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, LoginComponent_mat_error_23_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, LoginComponent_mat_error_24_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Forgot Password ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.emailId.errors == null ? null : ctx.loginForm.controls.emailId.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.password.errors == null ? null : ctx.loginForm.controls.password.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.password.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError], styles: [".form-field-outer[_ngcontent-%COMP%]{\n        width: 280px;\n    }\n    .mat-radio-button[_ngcontent-%COMP%]{\n        margin-right: 12px;\n    }\n    .mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n        box-shadow: none !important;\n    }\n    .app.blue[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n        border: none;\n    }\n    .lgpg[_ngcontent-%COMP%]{\n        background: #faf2d8 !important;\n        border: 1px solid #8ebedd;\n        padding: 0px 25px;\n        margin-top: 15%;\n    }\n    .sgn[_ngcontent-%COMP%]{\n        color: #2c529f !important;\n    }\n    .sgnhead[_ngcontent-%COMP%]{\n        text-decoration: none;\n    }\n    .mat-form-field-flex[_ngcontent-%COMP%] {\n        display: inline-flex;\n        align-items: baseline;\n        box-sizing: border-box;\n        width: 94% !important;\n    }\n    .bgimg[_ngcontent-%COMP%]{\n        background-image: url('back1.jpg') !important;  \n        background-repeat: no-repeat  !important;  \n        background-size: 100% 100% !important;  \n        height: -webkit-fill-available !important;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBRUE7UUFDSSwyQkFBMkI7SUFDL0I7SUFFQTtRQUNJLFlBQVk7SUFDaEI7SUFFQTtRQUNJLDhCQUE4QjtRQUM5Qix5QkFBeUI7UUFDekIsaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7SUFFQTtRQUNJLHlCQUF5QjtJQUM3QjtJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCO0lBR0E7UUFDSSxvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixxQkFBcUI7SUFDekI7SUFHQTtRQUNJLDZDQUF1RTtRQUN2RSx3Q0FBd0M7UUFDeEMscUNBQXFDO1FBQ3JDLHlDQUF5QztJQUM3QyIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmZvcm0tZmllbGQtb3V0ZXJ7XG4gICAgICAgIHdpZHRoOiAyODBweDtcbiAgICB9XG4gICAgLm1hdC1yYWRpby1idXR0b257XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICB9XG5cbiAgICAubWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmFwcC5ibHVlIC5tYXQtY2FyZCB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG5cbiAgICAubGdwZ3tcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZjJkOCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOGViZWRkO1xuICAgICAgICBwYWRkaW5nOiAwcHggMjVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIH1cblxuICAgIC5zZ257XG4gICAgICAgIGNvbG9yOiAjMmM1MjlmICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnNnbmhlYWR7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG5cblxuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgd2lkdGg6IDk0JSAhaW1wb3J0YW50O1xuICAgIH1cblxuXG4gICAgLmJnaW1ne1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcvYmFjazEuanBnJykgIWltcG9ydGFudDsgIFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICAhaW1wb3J0YW50OyAgXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlICFpbXBvcnRhbnQ7ICBcbiAgICAgICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlICFpbXBvcnRhbnQ7XG4gICAgfVxuIl19 */"] });


/***/ }),

/***/ 5780:
/*!*************************************************!*\
  !*** ./src/app/loginpages/loginpages.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "LoginpagesModule": () => (/* binding */ LoginpagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ 7483);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-swiper-wrapper */ 2320);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-input-file */ 386);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 7630);
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ 894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);













const routes = [
    { path: '', redirectTo: 'loginpage', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, data: { breadcrumb: 'login' } },
    { path: 'forgotpassword', component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_3__.ForgotpasswordComponent, data: { breadcrumb: 'forgot password' } },
];
class LoginpagesModule {
}
LoginpagesModule.ɵfac = function LoginpagesModule_Factory(t) { return new (t || LoginpagesModule)(); };
LoginpagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LoginpagesModule });
LoginpagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule,
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__.SwiperModule,
            ngx_input_file__WEBPACK_IMPORTED_MODULE_9__.InputFileModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LoginpagesModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_3__.ForgotpasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__.SwiperModule,
        ngx_input_file__WEBPACK_IMPORTED_MODULE_9__.InputFileModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_loginpages_loginpages_module_ts.js.map