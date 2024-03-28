"use strict";
(self["webpackChunkemporium"] = self["webpackChunkemporium"] || []).push([["src_app_admin_superadmin_superadmin_module_ts"],{

/***/ 2129:
/*!***********************************************************************!*\
  !*** ./src/app/admin/superadmin/addedituser/addedituser.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddedituserComponent": () => (/* binding */ AddedituserComponent)
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
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 2937);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 2220);


















function AddedituserComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "First Name Is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddedituserComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "First Name At Least 3 Characters Long");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddedituserComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Last Name Is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddedituserComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Last Name At Least 3 Characters Long");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddedituserComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddedituserComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddedituserComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddedituserComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Mobile No. Is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddedituserComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please Enter Only Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddedituserComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Mobile number must be 10 digit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddedituserComponent_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Mobile number must be 10 digit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddedituserComponent_mat_error_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Date Of Birth Is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddedituserComponent_ng_container_56_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", role_r17.roleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](role_r17.name);
} }
function AddedituserComponent_ng_container_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddedituserComponent_ng_container_56_mat_option_1_Template, 3, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const role_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", role_r17.roleId !== 1 && role_r17.roleId !== 12);
} }
function AddedituserComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please select role");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddedituserComponent_mat_error_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password Is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddedituserComponent_mat_error_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password At Least 6 Characters Long");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/admin/superadmin/listuser"]; };
class AddedituserComponent {
    constructor(dialog, appService, snackBar, route, router, formBuilder, location) {
        this.dialog = dialog;
        this.appService = appService;
        this.snackBar = snackBar;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.location = location;
        this.RoleList = [];
        this.formdata = {};
        this.hide = true;
        this.today = new Date().toISOString().split('T')[0];
        this.submitted = false;
        this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', []),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[a-zA0-Z9._%+-]+@[a-zA0-Z9.-]+\\.[aA-zZ]{2,4}$")]),
            mobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            roleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
    }
    ngOnInit() {
        this.userId = this.route.snapshot.params['id'];
        this.getuserbyId(this.userId);
        this.getRoleMaster();
    }
    ///getRoleMaster
    getRoleMaster() {
        this.appService.getAllRoles("api/role/GetAllRoles").subscribe(data => {
            this.RoleList = data;
        });
    }
    blockSpaces(event) {
        if (event.key === ' ') {
            event.preventDefault();
        }
    }
    ///Submitform
    Submit(userObject) {
        var userId = userObject.userId;
        if (userId == "") {
            this.createUser(userObject);
        }
        else {
            this.updateUser(userObject);
        }
    }
    //create new user
    createUser(formData) {
        let DOB = new Date(formData.dob);
        let formattedDOB = new Date(DOB.getTime() - DOB.getTimezoneOffset() * 60000).toISOString();
        let AdduserModel = {
            "firstName": formData.firstName,
            "lastName": formData.lastName,
            "emailId": formData.emailId,
            "mobileNo": formData.mobileNo,
            "dob": formattedDOB,
            "password": formData.password,
            "roleId": formData.roleId,
            "cityId": 0,
            "appId": 0,
            "name": "string",
        };
        this.appService.AddUser('api/user/AddUser', AdduserModel).subscribe(data => {
            if (data == "Username already exists") {
                this.snackBar.open('Username already exists', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
            }
            else if (data == "Email already exists") {
                this.snackBar.open('Email already exists', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
            }
            else if (data == "Username and Email already exist") {
                this.snackBar.open('Username and email is already exist', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
            }
            else if (data == "User Save Successfully. ") {
                const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__.OkDialogComponent, {
                    maxWidth: "500px",
                    disableClose: true,
                    data: {
                        title: "Save Action",
                        message: "User Added Successfully!"
                    }
                });
                this.router.navigate(['../listuser'], { relativeTo: this.route });
            }
        }, error => {
            this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
        });
    }
    ///update existing user
    updateUser(formData) {
        let DOB = new Date(formData.dob);
        let formattedDOB = new Date(DOB.getTime() - DOB.getTimezoneOffset() * 60000).toISOString();
        let EdituserModel = {
            "userId": formData.userId,
            "firstName": formData.firstName,
            "lastName": formData.lastName,
            "emailId": formData.emailId,
            "mobileNo": formData.mobileNo,
            "dob": formattedDOB,
            "password": formData.password,
            "roleId": formData.roleId,
            "cityId": 0,
            "appId": 0,
            "name": "string"
        };
        this.appService.edituser('api/user/EditUser', EdituserModel).subscribe(data => {
            if (data == "Email Id Already Exists") {
                this.snackBar.open('Email already exists', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
            }
            else if (data == "User Update Successfully. ") {
                const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__.OkDialogComponent, {
                    maxWidth: "500px",
                    disableClose: true,
                    data: {
                        title: "Edit Action",
                        message: "User Updated Successfully!"
                    }
                });
                this.router.navigate(['/admin/superadmin/listuser'], { relativeTo: this.route });
            }
        }, error => {
            this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
        });
    }
    ///Validation for only enter char
    keyPressOnlyChar(event) {
        var inp = String.fromCharCode(event.keyCode);
        if (/[a-zA-Z]/.test(inp)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    ///Validation for only enter number
    keyPressOnlynum(event) {
        var inp = String.fromCharCode(event.keyCode);
        if (/[0-9]/.test(inp)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    ///GetUserById
    getuserbyId(userId) {
        if (userId > 0) {
            this.appService.getById("api/user/GetUserById/", userId).subscribe(data => {
                this.uploadForm.controls['userId'].setValue(data.userId);
                this.uploadForm.controls['password'].setValue(data.password);
                this.uploadForm.controls['firstName'].setValue(data.firstName);
                this.uploadForm.controls['lastName'].setValue(data.lastName);
                this.uploadForm.controls['emailId'].setValue(data.emailId);
                this.uploadForm.controls['mobileNo'].setValue(data.mobileNo);
                this.uploadForm.controls['dob'].setValue(data.dob);
                this.uploadForm.controls['roleId'].setValue(data.roleId);
            });
        }
    }
}
AddedituserComponent.ɵfac = function AddedituserComponent_Factory(t) { return new (t || AddedituserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location)); };
AddedituserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddedituserComponent, selectors: [["app-addedituser"]], decls: 82, vars: 27, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap ", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2", "crdhead"], ["aria-hidden", "true", 1, "fa", "fa-bars"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLayoutGap", "10px", 1, "container"], ["fxLayout.gt-sm", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "10px", "fxFlex", "33%", 1, "block-2"], ["fxFlex.gt-sm", "33.33%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["appearance", "outline", 1, "w-100"], ["formControlName", "firstName", "required", "", "minlength", "3", "matInput", "", "required", "", 3, "keypress"], [4, "ngIf"], ["formControlName", "lastName", "required", "", "minlength", "3", "matInput", "", "required", "", 3, "keypress"], ["formControlName", "emailId", "required", "", "minlength", "3", "matInput", "", "required", "", 3, "keypress"], ["fxLayout.gt-sm", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "10px", "fxFlex", "33%", 1, "block-2", "mttop20"], ["formControlName", "mobileNo", "required", "", "minlength", "3", "pattern", "[0-9 ]+", "minlength", "10", "maxlength", "10", "matInput", "", "required", "", 3, "keypress"], ["matInput", "", "formControlName", "dob", "required", "", 3, "matDatepicker", "max"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["picker", ""], ["formControlName", "roleId", "required", ""], [4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "password", "formControlName", "password", "required", "", 3, "type", "keypress"], ["matSuffix", "", 3, "click"], ["formControlName", "userId", "minlength", "3", "matInput", "", "hidden", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "p-2", "crdfooter"], ["fxLayout", "", "fxLayoutGap", "10px", 1, "container"], ["fxFlex", "50%", 1, "text-left"], ["mat-raised-button", "", "color", "accent", "type", "button", 1, "crbtn", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-circle-left"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "crbtn", 3, "disabled"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["fxFlex", "50%", 1, "text-right"], [1, "crdtip"], [3, "value", 4, "ngIf"], [3, "value"]], template: function AddedituserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddedituserComponent_Template_form_ngSubmit_6_listener() { return ctx.Submit(ctx.uploadForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "First Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function AddedituserComponent_Template_input_keypress_14_listener($event) { return ctx.keyPressOnlyChar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AddedituserComponent_mat_error_15_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AddedituserComponent_mat_error_16_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Last Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function AddedituserComponent_Template_input_keypress_21_listener($event) { return ctx.keyPressOnlyChar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, AddedituserComponent_mat_error_22_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, AddedituserComponent_mat_error_23_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Email ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function AddedituserComponent_Template_input_keypress_28_listener($event) { return ctx.blockSpaces($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, AddedituserComponent_mat_error_29_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, AddedituserComponent_mat_error_30_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, AddedituserComponent_mat_error_31_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Mobile No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function AddedituserComponent_Template_input_keypress_37_listener($event) { return ctx.keyPressOnlynum($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, AddedituserComponent_mat_error_38_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, AddedituserComponent_mat_error_39_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, AddedituserComponent_mat_error_40_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, AddedituserComponent_mat_error_41_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Date of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "mat-datepicker-toggle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "mat-datepicker", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, AddedituserComponent_mat_error_50_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Role ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, AddedituserComponent_ng_container_56_Template, 2, 1, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, AddedituserComponent_mat_error_57_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function AddedituserComponent_Template_input_keypress_63_listener($event) { return ctx.blockSpaces($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddedituserComponent_Template_mat_icon_click_64_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, AddedituserComponent_mat_error_66_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, AddedituserComponent_mat_error_67_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "h4", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Tip : (*) fields are mandatory.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A0 ", ctx.userId ? "Edit" : "Add", " User");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.uploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.firstName.errors == null ? null : ctx.uploadForm.controls.firstName.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.firstName.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.lastName.errors == null ? null : ctx.uploadForm.controls.lastName.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.lastName.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.emailId.errors == null ? null : ctx.uploadForm.controls.emailId.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.emailId.hasError("invalidEmail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.emailId.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.mobileNo.errors == null ? null : ctx.uploadForm.controls.mobileNo.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.mobileNo.errors == null ? null : ctx.uploadForm.controls.mobileNo.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.mobileNo.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.mobileNo.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("max", ctx.today);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.dob.errors == null ? null : ctx.uploadForm.controls.dob.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.RoleList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.roleId.errors == null ? null : ctx.uploadForm.controls.roleId.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.password.errors == null ? null : ctx.uploadForm.controls.password.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.password.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](26, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.uploadForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.userId ? "UPDATE" : "SUBMIT", "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.FlexFillDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepicker, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption], styles: [".mat-datepicker-content {\n     left: calc(40% ) !important;\n     \n     \n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGVkaXR1c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkdBQUc7S0FDRSwyQkFBMkI7S0FDM0IsK0JBQStCO0tBQy9CLG1CQUFtQjtHQUNyQiIsImZpbGUiOiJhZGRlZGl0dXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgOjpuZy1kZWVwIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IHtcbiAgICAgbGVmdDogY2FsYyg0MCUgKSAhaW1wb3J0YW50O1xuICAgICAvKiB0b3A6IGNhbGMoNjAlKSAhaW1wb3J0YW50OyAqL1xuICAgICAvKiBoZWlnaHQ6IDMwNXB4OyAqL1xuICAgfVxuICAgIl19 */"] });


/***/ }),

/***/ 2522:
/*!*******************************************************************************!*\
  !*** ./src/app/admin/superadmin/addedituserplayer/addedituserplayer.Model.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addedituserplayer": () => (/* binding */ addedituserplayer),
/* harmony export */   "edituserplayer": () => (/* binding */ edituserplayer),
/* harmony export */   "deleteuserplayer": () => (/* binding */ deleteuserplayer)
/* harmony export */ });
///Model for adduserplayer
class addedituserplayer {
}
///Model for edit userplayer
class edituserplayer {
}
///Model for delete userplayer
class deleteuserplayer {
}


/***/ }),

/***/ 5796:
/*!***********************************************************************************!*\
  !*** ./src/app/admin/superadmin/addedituserplayer/addedituserplayer.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddedituserplayerComponent": () => (/* binding */ AddedituserplayerComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/ok-dialog/ok-dialog.component */ 891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/token-storage.service */ 1573);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 2220);


















const _c0 = function (a0, a1) { return { userId: a0, roleId: a1 }; };
function AddedituserplayerComponent_ng_container_11_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const username_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](3, _c0, username_r7.userId, username_r7.roleId));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", username_r7.fullName, " (", username_r7.name, ")");
} }
function AddedituserplayerComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AddedituserplayerComponent_ng_container_11_mat_option_1_Template, 3, 6, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.UserList);
} }
function AddedituserplayerComponent_ng_container_12_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const username_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", username_r9.userId)("disabled", ctx_r8.isReadOnly());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", username_r9.fullName, " (", username_r9.name, ")");
} }
function AddedituserplayerComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AddedituserplayerComponent_ng_container_12_mat_option_1_Template, 3, 4, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.UserList);
} }
function AddedituserplayerComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Please select User");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AddedituserplayerComponent_mat_select_18_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playername_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", playername_r11.playerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](playername_r11.fullName);
} }
function AddedituserplayerComponent_mat_select_18_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function AddedituserplayerComponent_mat_select_18_Template_mat_select_selectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.onSelectionChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AddedituserplayerComponent_mat_select_18_mat_option_1_Template, 3, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r3.userPlayerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.PlayerList);
} }
function AddedituserplayerComponent_mat_select_19_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AddedituserplayerComponent_mat_select_19_mat_option_1_Template_mat_option_change_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const player_r15 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r16.updateSelectedPlayerIds(player_r15.playerId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", player_r15.playerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](player_r15.fullName);
} }
function AddedituserplayerComponent_mat_select_19_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddedituserplayerComponent_mat_select_19_Template_mat_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.EditselectedPlayerIds = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AddedituserplayerComponent_mat_select_19_mat_option_1_Template, 3, 2, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r4.EditselectedPlayerIds);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.MappedPlayerList);
} }
function AddedituserplayerComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Please select Player Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class AddedituserplayerComponent {
    constructor(cdr, dialog, route, appService, snackBar, tokenStorage, router, appSettings, data, dialogRef, formBuilder) {
        this.cdr = cdr;
        this.dialog = dialog;
        this.route = route;
        this.appService = appService;
        this.snackBar = snackBar;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.appSettings = appSettings;
        this.data = data;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.UserList = [];
        this.PlayerList = [];
        this.MappedPlayerList = [];
        this.UserplayerList = [];
        this.filteredPlayerList = [];
        this.selectedPlayerIds = [];
        this.submitted = false;
        this.isPlayerSelected = false;
        this.EditselectedPlayerIds = [];
        this.unselectedPlayerIds = [];
        this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            userPlayerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', []),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            playername: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
        });
    }
    ngOnInit() {
        this.getUserList();
        this.isAddMode = !this.userPlayerId;
        var Uid = this.data.userPlayerId;
        this.getUserList();
        this.getuserbyId(Uid);
        this.uploadForm.get('playername').valueChanges.subscribe(value => {
            this.isPlayerSelected = value.length > 0;
        });
    }
    ///Change Player dropdown as User Selection
    onChangeUser(selectedUser) {
        const roleId = selectedUser.value.roleId;
        this.appService.getfilteruserId("api/UserPlayer/GetPlayerByRoleId/" + roleId).subscribe(data => {
            this.PlayerList = data;
            this.cdr.detectChanges();
        });
    }
    ///Edit check player dropdown
    updateSelectedPlayerIds(playerId) {
        const index = this.selectedPlayerIds.indexOf(playerId);
        if (index === -1) {
            this.selectedPlayerIds.push(playerId);
        }
        else {
            this.selectedPlayerIds.splice(index, 1);
        }
        const unselectedIndex = this.unselectedPlayerIds.indexOf(playerId);
        if (unselectedIndex !== -1) {
            this.unselectedPlayerIds.splice(unselectedIndex, 1);
        }
    }
    ///Edit on submit only unchecked player IDs
    updateUnselectedPlayerIds(playerId) {
        const index = this.unselectedPlayerIds.indexOf(playerId);
        if (index === -1) {
            this.unselectedPlayerIds.push(playerId);
        }
        else {
            this.unselectedPlayerIds.splice(index, 1);
        }
        const selectedIndex = this.selectedPlayerIds.indexOf(playerId);
        if (selectedIndex !== -1) {
            this.selectedPlayerIds.splice(selectedIndex, 1);
        }
    }
    ///Submituserplayer
    Submit(userObject) {
        var userPlayerId = userObject.userPlayerId;
        if (userPlayerId == "" || userPlayerId == undefined) {
            this.createUser(userObject);
        }
        else {
            this.updateUser(userObject);
        }
    }
    closeDialog() {
        this.dialog.closeAll();
    }
    onSelectionChange(event) {
        this.selectedPlayerIds = event.value;
        this.cdr.detectChanges();
    }
    //Create new user
    createUser(formData) {
        let selectedPlayerIds = formData.playername;
        let playerIdString = selectedPlayerIds.join(",");
        let AdduserplayerModel = {
            "userId": formData.username.userId,
            "userPlayerIds": playerIdString,
            "uncheckedPlayerIds": "",
        };
        this.appService.AddUserPlayer('api/UserPlayer/AddUserPlayer', AdduserplayerModel).subscribe(data => {
            this.closeDialog();
            const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__.OkDialogComponent, {
                maxWidth: "500px",
                disableClose: true,
                data: {
                    title: "Save Action",
                    message: "User Player Added Successfully!"
                }
            });
            dialogRef.afterClosed().subscribe(() => {
                this.router.navigate(['/admin/superadmin/listuserplayer'], { relativeTo: this.route });
                window.location.reload();
            });
        });
    }
    ///Getuserlist for dropdown without superadmin user
    getUserList() {
        this.appService.getUserList('api/user/GetOtherUser').subscribe(data => {
            this.UserList = data;
        });
    }
    onBackdropClick(event) {
        // prevent dialog close on backdrop click
        event.stopPropagation();
    }
    ///update existing user
    updateUser(formData) {
        const unselectedPlayerIds = this.MappedPlayerList
            .filter(player => !this.EditselectedPlayerIds.includes(player.playerId))
            .map(player => player.playerId);
        const unselectedPlayerIdsString = unselectedPlayerIds.join(',');
        let EdituserplayerModel = {
            "userId": formData.username,
            "uncheckedPlayerIds": unselectedPlayerIdsString,
        };
        this.appService.edituserplayer('api/UserPlayer/EditUserPlayer', EdituserplayerModel).subscribe(data => {
            this.closeDialog();
            const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__.OkDialogComponent, {
                maxWidth: "500px",
                disableClose: true,
                data: {
                    title: "Edit Action",
                    message: "User Player Updated Successfully!"
                }
            });
            dialogRef.afterClosed().subscribe(() => {
                window.location.reload();
                this.router.navigate(['/admin/superadmin/listuserplayer'], { relativeTo: this.route });
            });
        }, error => {
            this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
        });
    }
    ///GetUserById
    getuserbyId(Uid) {
        if (Uid > 0) {
            this.appService.getById("api/UserPlayer/GetuserplayerByUserplayerId/", Uid).subscribe(data => {
                this.uploadForm.controls['userPlayerId'].setValue(Uid);
                this.uploadForm.controls['username'].setValue(data.userId);
                this.appService.getById("api/UserPlayer/GetPlayerByUserId/", data.userId).subscribe(data => {
                    this.MappedPlayerList = data;
                    this.EditselectedPlayerIds = this.MappedPlayerList.map(player => player.playerId);
                });
            });
        }
    }
    isReadOnly() {
        return true;
    }
}
AddedituserplayerComponent.ɵfac = function AddedituserplayerComponent_Factory(t) { return new (t || AddedituserplayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder)); };
AddedituserplayerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AddedituserplayerComponent, selectors: [["app-addedituserplayer"]], decls: 33, vars: 10, consts: [[1, "mat-dialog-title"], [1, "mat-typography"], [3, "formGroup"], ["fxLayout", "column", 1, "container"], ["fxLayout.gt-sm", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "10px", "fxFlex", "33%", 1, "block-2"], ["fxFlex.gt-sm", "50%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["appearance", "outline", 1, "w-100"], ["formControlName", "username", "required", "", 3, "selectionChange"], [4, "ngIf"], ["formControlName", "playername", "multiple", "", "required", "", 3, "value", "selectionChange", 4, "ngIf"], ["formControlName", "playername", "multiple", "", "required", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["formControlName", "userPlayerId", "matInput", "", "hidden", ""], ["fxFlex", "50%", 1, "text-left"], ["mat-raised-button", "", "color", "accent", "type", "button", 1, "crbtn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-ban"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "crbtn", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["fxFlex", "50%", 1, "text-right"], [1, "crdtip"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [3, "value", "disabled"], ["formControlName", "playername", "multiple", "", "required", "", 3, "value", "selectionChange"], ["formControlName", "playername", "multiple", "", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", "change", 4, "ngFor", "ngForOf"], [3, "value", "change"]], template: function AddedituserplayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function AddedituserplayerComponent_Template_mat_select_selectionChange_10_listener($event) { return ctx.onChangeUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AddedituserplayerComponent_ng_container_11_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AddedituserplayerComponent_ng_container_12_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, AddedituserplayerComponent_mat_error_13_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Player Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, AddedituserplayerComponent_mat_select_18_Template, 2, 2, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, AddedituserplayerComponent_mat_select_19_Template, 2, 2, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AddedituserplayerComponent_mat_error_20_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddedituserplayerComponent_Template_button_click_24_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddedituserplayerComponent_Template_button_click_27_listener() { return ctx.Submit(ctx.uploadForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Tip : (*) fields are mandatory.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.uploadForm.value.userPlayerId ? "Edit" : "Add", " Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.uploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.uploadForm.value.userPlayerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.uploadForm.value.userPlayerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.username.errors == null ? null : ctx.uploadForm.controls.username.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.uploadForm.value.userPlayerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.uploadForm.value.userPlayerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.playername.errors == null ? null : ctx.uploadForm.controls.playername.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.uploadForm.valid || !ctx.isPlayerSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.uploadForm.value.userPlayerId ? "UPDATE" : "SUBMIT", "");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.FlexFillDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRlZGl0dXNlcnBsYXllci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7405:
/*!*******************************************************************!*\
  !*** ./src/app/admin/superadmin/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
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
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 3, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Super Admin Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 611:
/*!*****************************************************************!*\
  !*** ./src/app/admin/superadmin/listuser/listuser.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListuserComponent": () => (/* binding */ ListuserComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 2887);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/token-storage.service */ 1573);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ 7483);



















const _c0 = function (a1) { return ["../addedituser", a1]; };
function ListuserComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListuserComponent_div_28_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const user_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.deleteservice(user_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r2.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r2.emailId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r2.mobileNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, user_r2.userId));
} }
function ListuserComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "pagination-controls", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function ListuserComponent_div_31_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["../addedituser"]; };
const _c2 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class ListuserComponent {
    constructor(appService, dialog, snackBar, tokenStorage, router, appSettings) {
        this.appService = appService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.appSettings = appSettings;
        this.UserList = [];
        this.NewUserList = [];
        this.count = 8;
        this.settings = this.appSettings.settings;
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd))
            .subscribe((event) => {
            if (event.url.includes('/addedituser')) {
            }
        });
    }
    ngOnInit() {
        this.getUserList();
    }
    getUserList() {
        this.appService.getUserList('api/User/GetAllUser').subscribe(data => {
            this.UserList = data;
            this.NewUserList = data;
        });
    }
    ///Search
    Search() {
        if (this.username === "") {
            this.getUserList();
        }
        else {
            this.UserList = this.NewUserList.filter(res => {
                return (res.fullName.toLocaleLowerCase().includes(this.username.toLocaleLowerCase()) ||
                    res.emailId.toLocaleLowerCase().includes(this.username.toLocaleLowerCase()) ||
                    res.name.toLocaleLowerCase().includes(this.username.toLocaleLowerCase()) ||
                    res.mobileNo.includes(this.username));
            });
            this.page = 1;
        }
    }
    ///pagination
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
    ///Delete User
    deleteservice(user) {
        const dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
            maxWidth: "400px",
            disableClose: true,
            data: {
                title: "Confirm Action",
                message: "Are you sure you want delete this user?"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const index = this.UserList.indexOf(user);
                if (index !== -1) {
                    this.UserList.splice(index, 1);
                    this.appService.deleteuser(`api/user/DeleteUser?userId=${user.userId}`, {}).subscribe(data => {
                    });
                }
            }
        });
    }
}
ListuserComponent.ɵfac = function ListuserComponent_Factory(t) { return new (t || ListuserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings)); };
ListuserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ListuserComponent, selectors: [["app-listuser"]], decls: 32, vars: 11, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap ", "fxLayoutAlign", "space-between", 1, "w-100", "p-2", "crdhead"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [1, "tblsearch"], [1, "tdsearch"], [1, "fa", "fa-search", "searchtext-icon"], ["matInput", "", "type", "text", "placeholder", "Search...", "name", "username", 1, "searchtext", 3, "ngModel", "ngModelChange", "input"], [1, "tdbtn"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "crbtn", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "mat-table", "admin-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["fxFlex.gt-sm", "10", 1, "mat-header-cell", "text-center"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "mat-row"], [1, "mat-cell"], ["fxFlex.gt-sm", "10", 1, "mat-cell", "text-center"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Edit", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-pencil"], ["mat-mini-fab", "", "color", "warn", "matTooltip", "Delete", 1, "mx-1", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], ["fxLayout", "row wrap"], ["fxFlex", "100", 1, "p-1"], [1, "p-0", "text-center", "nobxshbrd"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function ListuserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00A0 User List");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ListuserComponent_Template_input_ngModelChange_10_listener($event) { return ctx.username = $event; })("input", function ListuserComponent_Template_input_input_10_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "\u00A0 ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Email Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Mobile No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ListuserComponent_div_28_Template, 14, 7, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ListuserComponent_div_31_Template, 4, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](29, 4, ctx.UserList, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](8, _c2, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.UserList.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0dXNlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9084:
/*!*****************************************************************************!*\
  !*** ./src/app/admin/superadmin/listuserplayer/listuserplayer.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListuserplayerComponent": () => (/* binding */ ListuserplayerComponent),
/* harmony export */   "DialogOverviewExampleDialog": () => (/* binding */ DialogOverviewExampleDialog)
/* harmony export */ });
/* harmony import */ var _addedituserplayer_addedituserplayer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addedituserplayer/addedituserplayer.component */ 5796);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 2887);
/* harmony import */ var src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ok-dialog/ok-dialog.component */ 891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/token-storage.service */ 1573);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ 7483);




















function ListuserplayerComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListuserplayerComponent_div_24_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const user_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r3.openDialog(user_r2.userPlayerId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListuserplayerComponent_div_24_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const user_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r5.deleteservice(user_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", user_r2.userFullName, " (", user_r2.roleName, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r2.fullName);
} }
function ListuserplayerComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "pagination-controls", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function ListuserplayerComponent_div_27_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r6.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class ListuserplayerComponent {
    constructor(appService, dialog, snackBar, tokenStorage, router, appSettings) {
        this.appService = appService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.appSettings = appSettings;
        this.UserList = [];
        this.allUserList = [];
        this.PlayerList = [];
        this.count = 8;
        this.userList = [];
        this.NewuserList = [];
        this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            userPlayerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', []),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            playername: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        });
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getUserList();
        this.playerList();
        this.getallUserList();
    }
    ///Searchbox
    Search() {
        if (this.username == "") {
            this.getUserList();
        }
        else {
            this.UserList = this.NewuserList.filter(res => {
                return (res.userFullName.toLocaleLowerCase().includes(this.username.toLocaleLowerCase()) ||
                    res.roleName.toLocaleLowerCase().includes(this.username.toLocaleLowerCase()) ||
                    res.fullName.toLocaleLowerCase().includes(this.username.toLocaleLowerCase()));
            });
            this.page = 1;
        }
    }
    ///Pagination
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
    ///list all userplayer
    getUserList() {
        this.appService.GetAllUserPlayer('api/userplayer/GetAllUserPlayer').subscribe(data => {
            this.UserList = data;
            this.NewuserList = data;
            // this.groupUsers();
        });
    }
    /// show Player by group
    // private groupUsers() {
    //   const groupedUsers = this.UserList.reduce((acc, curr) => {
    //     if (!acc[curr.emailId]) {
    //       acc[curr.emailId] = { emailId: curr.emailId, userPlayerIds: [curr.userPlayerId], fullNames: [curr.fullName] };
    //     } else {
    //       acc[curr.emailId].fullNames.push(curr.fullName);
    //       acc[curr.emailId].userPlayerIds.push(curr.userPlayerId);
    //     }
    //     return acc;
    //   }, {});
    //   this.userList = Object.values(groupedUsers);
    // }
    ///GetAllUser
    getallUserList() {
        this.appService.getUserList('api/User/GetAllUser').subscribe(data => {
            this.allUserList = data;
        });
    }
    openDialog(userPlayerId) {
        this.userPlayerId = userPlayerId;
        // this.getuserbyId(this.userPlayerId);
        const dialogRef = this.dialog.open(_addedituserplayer_addedituserplayer_component__WEBPACK_IMPORTED_MODULE_0__.AddedituserplayerComponent, {
            width: '100vh',
            disableClose: true,
            data: { userPlayerId: userPlayerId }
        });
    }
    ///GetAllPlayerDetail
    playerList() {
        this.appService.getAllPlayerDetail('api/PlayerDetail/GetAllPlayerDetail').subscribe(data => {
            this.PlayerList = data;
        });
    }
    ///delete userplayer
    deleteservice(user) {
        const dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
            maxWidth: "400px",
            disableClose: true,
            data: {
                title: "Confirm Action",
                message: "Are you sure you want delete user and player mapping?"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const index = this.UserList.indexOf(user);
                if (index !== -1) {
                    this.UserList.splice(index, 1);
                    const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_2__.OkDialogComponent, {
                        maxWidth: "500px",
                        disableClose: true,
                        data: {
                            title: "Delete Action",
                            message: "User and Player Mapping Deleted Successfully!"
                        }
                    });
                    this.appService.deleteuser(`api/UserPlayer/DeleteUserPlayer?userplayerId=${user.userPlayerId}`, {}).subscribe(data => {
                    });
                }
            }
        });
    }
}
ListuserplayerComponent.ɵfac = function ListuserplayerComponent_Factory(t) { return new (t || ListuserplayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__.AppSettings)); };
ListuserplayerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ListuserplayerComponent, selectors: [["app-listuserplayer"]], decls: 28, vars: 9, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap ", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2", "crdhead"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [1, "tblsearch"], [1, "tdsearch"], [1, "fa", "fa-search", "searchtext-icon"], ["matInput", "", "type", "text", "placeholder", "Search...", "name", "username", 1, "searchtext", 3, "ngModel", "ngModelChange", "input", "keyup"], [1, "tdbtn"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "crbtn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "mat-table", "admin-table"], [1, "mat-header-row"], ["fxFlex", "40%", 1, "mat-header-cell"], ["fxFlex", "20%", 1, "mat-header-cell", "text-center"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "mat-row"], ["fxFlex", "40%", 1, "mat-cell"], ["fxFlex", "20%", 1, "mat-cell", "text-center"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Edit", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil"], ["mat-mini-fab", "", "color", "warn", "matTooltip", "Delete", 1, "mx-1", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], ["fxLayout", "row wrap"], ["fxFlex", "100", 1, "p-1"], [1, "p-0", "text-center", "nobxshbrd"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function ListuserplayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00A0 User Player List");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ListuserplayerComponent_Template_input_ngModelChange_10_listener($event) { return ctx.username = $event; })("input", function ListuserplayerComponent_Template_input_input_10_listener() { return ctx.Search(); })("keyup", function ListuserplayerComponent_Template_input_keyup_10_listener() { return ctx.Search(); })("ngModelChange", function ListuserplayerComponent_Template_input_ngModelChange_10_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListuserplayerComponent_Template_button_click_12_listener() { return ctx.openDialog(null); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Player Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, ListuserplayerComponent_div_24_Template, 10, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, ListuserplayerComponent_div_27_Template, 4, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](25, 3, ctx.UserList, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](6, _c0, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.UserList.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatAnchor, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0dXNlcnBsYXllci5jb21wb25lbnQuY3NzIn0= */"] });
class DialogOverviewExampleDialog {
    constructor(appService, dialog, snackBar, tokenStorage, router, appSettings) {
        this.appService = appService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
}


/***/ }),

/***/ 7017:
/*!*******************************************************!*\
  !*** ./src/app/admin/superadmin/superadmin.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "SuperadminModule": () => (/* binding */ SuperadminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ 7483);
/* harmony import */ var _listuser_listuser_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listuser/listuser.component */ 611);
/* harmony import */ var _addedituser_addedituser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addedituser/addedituser.component */ 2129);
/* harmony import */ var _listuserplayer_listuserplayer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listuserplayer/listuserplayer.component */ 9084);
/* harmony import */ var _addedituserplayer_addedituserplayer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addedituserplayer/addedituserplayer.component */ 5796);
/* harmony import */ var _addedituserplayer_addedituserplayer_Model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addedituserplayer/addedituserplayer.Model */ 2522);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7405);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var src_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/auth.guard */ 7397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);

















const routes = [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'addedituser', component: _addedituser_addedituser_component__WEBPACK_IMPORTED_MODULE_3__.AddedituserComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard], allowedRoles: [1] },
    { path: 'addedituser/:id', component: _addedituser_addedituser_component__WEBPACK_IMPORTED_MODULE_3__.AddedituserComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard], allowedRoles: [1] },
    { path: 'listuser', component: _listuser_listuser_component__WEBPACK_IMPORTED_MODULE_2__.ListuserComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard], allowedRoles: [1] },
    { path: 'addedituserplayer', component: _addedituserplayer_addedituserplayer_Model__WEBPACK_IMPORTED_MODULE_6__.addedituserplayer, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard], allowedRoles: [1] },
    { path: 'addedituserplayer/:id', component: _addedituserplayer_addedituserplayer_Model__WEBPACK_IMPORTED_MODULE_6__.addedituserplayer, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard], allowedRoles: [1] },
    { path: 'listuserplayer', component: _listuserplayer_listuserplayer_component__WEBPACK_IMPORTED_MODULE_4__.ListuserplayerComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard], allowedRoles: [1] },
    { path: 'admin/superadmin/listuser', component: _listuserplayer_listuserplayer_component__WEBPACK_IMPORTED_MODULE_4__.ListuserplayerComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard], allowedRoles: [1] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.DashboardComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard], allowedRoles: [1] },
];
class SuperadminModule {
}
SuperadminModule.ɵfac = function SuperadminModule_Factory(t) { return new (t || SuperadminModule)(); };
SuperadminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: SuperadminModule });
SuperadminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOptionModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SuperadminModule, { declarations: [_listuser_listuser_component__WEBPACK_IMPORTED_MODULE_2__.ListuserComponent,
        _addedituser_addedituser_component__WEBPACK_IMPORTED_MODULE_3__.AddedituserComponent,
        _listuserplayer_listuserplayer_component__WEBPACK_IMPORTED_MODULE_4__.ListuserplayerComponent,
        _addedituserplayer_addedituserplayer_component__WEBPACK_IMPORTED_MODULE_5__.AddedituserplayerComponent,
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOptionModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin_superadmin_superadmin_module_ts.js.map