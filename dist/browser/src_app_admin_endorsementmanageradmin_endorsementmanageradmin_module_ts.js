"use strict";
(self["webpackChunkemporium"] = self["webpackChunkemporium"] || []).push([["src_app_admin_endorsementmanageradmin_endorsementmanageradmin_module_ts"],{

/***/ 9663:
/*!**********************************************************************************!*\
  !*** ./src/app/admin/endorsementmanageradmin/addcompany/addcompany.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddcompanyComponent": () => (/* binding */ AddcompanyComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/ok-dialog/ok-dialog.component */ 891);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 2220);
















function AddcompanyComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter valid Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter valid Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter Company Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter valid Company Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter Company Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Company Mobile must be 10 digit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter Company Landline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter valid Company Landline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter Company Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter valid Company Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter valid Company Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please upload Company Logo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Description at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter Contact Person Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Contact Person Mobile must be 10 digit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter Contact Person Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter valid Contact Person Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter valid Contact Person Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter Contact Person Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_error_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter valid Contact Person Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_option_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nation_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", nation_r33.countryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](nation_r33.name);
} }
function AddcompanyComponent_mat_error_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please select Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_option_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", state_r34.stateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](state_r34.name);
} }
function AddcompanyComponent_mat_error_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please select State");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_option_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", city_r35.cityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](city_r35.name);
} }
function AddcompanyComponent_mat_error_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please select City");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_option_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", category_r36.categoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r36.name);
} }
function AddcompanyComponent_mat_error_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please select Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddcompanyComponent_mat_option_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subcategory_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", subcategory_r37.subCategoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](subcategory_r37.name);
} }
function AddcompanyComponent_mat_error_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please select Sub-Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AddcompanyComponent {
    constructor(dialog, data, appService, snackBar, route, router, formBuilder) {
        this.dialog = dialog;
        this.data = data;
        this.appService = appService;
        this.snackBar = snackBar;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.formdata = {};
        this.CategoryList = [];
        this.SubCategoryList = [];
        this.ContentTypeList = [];
        this.languageList = [];
        this.selectedFile = null;
        this.country = [];
        this.StateList = [];
        this.CityList = [];
        this.states = [];
        this.isGlobal = false;
        this.isFileUploaded = false;
        this.subcategory = [];
        this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            listingId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', []),
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]),
            contactPersonName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100)]),
            categoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            subCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            contactPersonEmailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            contactPersonMobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            companyEmailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[a-zA0-Z9._%+-]+@[a-zA0-Z9.-]+\\.[aA-zZ]{2,4}$")]),
            companyMobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            companyPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            companyWebSite: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100)]),
            nationId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            stateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            cityId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            companyLogoFilePath: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
        });
    }
    ///Close the mat dialog
    closeDialog() {
        this.dialog.closeAll();
    }
    ngOnInit() {
        this.getCategoryMaster();
        this.getNationMaster();
        if (this.data.listingId == undefined || this.data.listingId) {
            this.getlistdetailsbyid(this.data.listingId);
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
    /// on Change Cat
    onChangeCat(event) {
        if (event.value) {
            let categoryId = event.value;
            this.appService.getStateById("api/MasterAPIs/GetSubcategoryByCategoryId/" + categoryId).subscribe(data => {
                this.SubCategoryList = data;
            });
        }
        else {
            this.subcategory = null;
        }
    }
    ///Submit
    Submit(userObject) {
        if (userObject.listingId == "" || userObject.listingId == undefined) {
            this.createList(this.formdata);
        }
        else {
            // if () {
            this.UpdateList(userObject);
            // }
        }
    }
    ///Select file
    handleFileSelect(event) {
        this.file = event.target.files[0];
        if (this.file) {
            this.selectedFile = this.file;
            this.isFileUploaded = true;
            setTimeout(() => {
                this.isFileUploaded = false; // Reset isFileUploaded to false after a short delay
            });
        }
    }
    ///Create List
    createList(userObject) {
        var formData = new FormData();
        formData.append('companyName', this.uploadForm.value.companyName);
        formData.append('description', this.uploadForm.value.description);
        formData.append('contactPersonName', this.uploadForm.value.contactPersonName);
        formData.append('categoryId', this.uploadForm.value.categoryId);
        formData.append('subCategoryId', this.uploadForm.value.subCategoryId);
        formData.append('contactpersonEmail', this.uploadForm.value.contactPersonEmailId);
        formData.append('contactPersonMobile', this.uploadForm.value.contactPersonMobile);
        formData.append('companyEmailId', this.uploadForm.value.companyEmailId);
        formData.append('companyMobile', this.uploadForm.value.companyMobile);
        formData.append('companyPhone', this.uploadForm.value.companyPhone);
        formData.append('companyWebSite', this.uploadForm.value.companyWebSite);
        formData.append('companyLogoFilePath', this.file);
        formData.append('nationId', this.uploadForm.value.nationId);
        formData.append('stateId', this.uploadForm.value.stateId);
        formData.append('cityId', this.uploadForm.value.cityId);
        formData.append('PlayerId', window.sessionStorage.getItem("playerId"));
        if (window.sessionStorage.getItem("playerId") != null || window.sessionStorage.getItem("playerId") != undefined) {
            this.appService.Addlisting('api/ListingDetail/AddListingDetail', formData).subscribe(() => {
                this.closeDialog();
                const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__.OkDialogComponent, {
                    maxWidth: "500px",
                    disableClose: true,
                    data: {
                        title: "Save Action",
                        message: "Company Added Successfully!"
                    }
                });
                dialogRef.afterClosed().subscribe(() => {
                    window.location.reload();
                });
            });
        }
    }
    ///Update List
    UpdateList(userObject) {
        var formData = new FormData();
        formData.append('listingId', userObject.listingId);
        formData.append('companyName', this.uploadForm.value.companyName);
        formData.append('description', this.uploadForm.value.description);
        formData.append('contactPersonName', this.uploadForm.value.contactPersonName);
        formData.append('categoryId', this.uploadForm.value.categoryId);
        formData.append('subCategoryId', this.uploadForm.value.subCategoryId);
        formData.append('contactpersonEmail', this.uploadForm.value.contactPersonEmailId);
        formData.append('contactPersonMobile', this.uploadForm.value.contactPersonMobile);
        formData.append('companyEmailId', this.uploadForm.value.companyEmailId);
        formData.append('companyMobile', this.uploadForm.value.companyMobile);
        formData.append('companyPhone', this.uploadForm.value.companyPhone);
        formData.append('companyWebSite', this.uploadForm.value.companyWebSite);
        formData.append('nationId', this.uploadForm.value.nationId);
        formData.append('stateId', this.uploadForm.value.stateId);
        formData.append('cityId', this.uploadForm.value.cityId);
        formData.append('companyLogoFilePath', this.file);
        formData.append('PlayerId', window.sessionStorage.getItem("playerId"));
        this.appService.Addlisting('api/ListingDetail/AddListingDetail', formData).subscribe(() => {
            this.closeDialog();
            const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__.OkDialogComponent, {
                maxWidth: "500px",
                disableClose: true,
                data: {
                    title: "Edit Action",
                    message: "Listing Details Updated Successfully!"
                }
            });
            dialogRef.afterClosed().subscribe(() => {
                window.location.reload();
            });
        });
    }
    ///getCategoryMaster
    getCategoryMaster() {
        this.appService.getAllCategory("api/MasterAPIs/GetAllCategory").subscribe(data => {
            this.CategoryList = data;
        });
    }
    ///getsubCategoryMaster
    getsubCategoryMaster() {
        this.appService.getsubAllCategory("api/MasterAPIs/GetAllSubCategory").subscribe(data => {
            this.SubCategoryList = data;
        });
    }
    ///getNationMaster
    getNationMaster() {
        this.appService.getsubAllcountry("api/MasterAPIs/GetAllCountry").subscribe(data => {
            this.country = data;
        });
    }
    /// on Change Country
    onChangeCountry(event) {
        if (event.value) {
            let CountryId = event.value;
            this.appService.getStateById("api/MasterAPIs/GetStateByCountyId/" + CountryId).subscribe(data => {
                this.states = data;
                this.cities = null;
            });
        }
        else {
            this.states = null;
            this.cities = null;
        }
    }
    ///Get state on country slection
    GetState(CountryId) {
        if (CountryId == undefined) {
            CountryId == 1;
        }
        this.appService.getStateById("api/MasterAPIs/GetStateByCountyId/" + CountryId).subscribe((data) => {
            this.states = data;
        });
    }
    /// On change State
    onChangeState(event) {
        if (event.value) {
            let StateId = event.value;
            this.appService.getCityById("api/MasterAPIs/GetCityByStateId/" + StateId).subscribe(data => this.cities = data);
        }
        else {
            this.cities = null;
        }
    }
    /// Get City Method   
    GetCity(StateId) {
        this.StateId = this.uploadForm.value;
        this.appService.getCityById("api/MasterAPIs/GetCityByStateId/" + StateId).subscribe((data) => {
            this.cities = data;
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
    ///Validation for only enter char
    keyPressOnlyCharContactpersonName(event) {
        var inp = String.fromCharCode(event.keyCode);
        if (/[a-zA-Z]/.test(inp)) {
            // Allow alphabets
            return true;
        }
        else if (inp === " ") {
            // Allow one space
            var contactPersonName = event.target.value;
            if (!contactPersonName.endsWith(" ")) {
                return true;
            }
        }
        event.preventDefault();
        return false;
    }
    ///stop enter space
    blockSpaces(event) {
        if (event.key === ' ') {
            event.preventDefault();
        }
    }
    ///getsubCategoryMaster
    GetSubcat(categoryId) {
        if (categoryId == undefined) {
            categoryId == 1;
        }
        this.appService.getStateById("api/MasterAPIs/GetSubcategoryByCategoryId/" + categoryId).subscribe((data) => {
            this.SubCategoryList = data;
        });
    }
    ///getlistdetailbyid
    getlistdetailsbyid(listingId) {
        if (listingId > 0) {
            this.appService.getById("api/ListingDetail/GetListingDetailById/", listingId).subscribe(data => {
                this.uploadForm.controls['listingId'].setValue(data.listingId);
                this.GetState(data.nationId);
                this.GetCity(data.stateId);
                this.isGlobal = data.isGlobal;
                this.uploadForm.controls['companyName'].setValue(data.companyName);
                this.uploadForm.controls['description'].setValue(data.description);
                this.uploadForm.controls['companyEmailId'].setValue(data.companyEmailId);
                this.uploadForm.controls['contactPersonMobile'].setValue(data.contactPersonMobile);
                this.uploadForm.controls['contactPersonName'].setValue(data.contactPersonName);
                this.uploadForm.controls['categoryId'].setValue(data.categoryId);
                this.GetSubcat(data.categoryId);
                this.uploadForm.controls['subCategoryId'].setValue(data.subCategoryId);
                this.uploadForm.controls['contactPersonEmailId'].setValue(data.contactPersonEmailId);
                this.uploadForm.controls['companyMobile'].setValue(data.companyMobile);
                this.uploadForm.controls['companyPhone'].setValue(data.companyPhone);
                this.uploadForm.controls['companyWebSite'].setValue(data.companyWebSite);
                this.uploadForm.controls['nationId'].setValue(data.nationId);
                this.uploadForm.controls['stateId'].setValue(data.stateId);
                this.uploadForm.controls['cityId'].setValue(data.cityId);
                this.uploadForm.controls['PlayerId'].setValue(data.PlayerId);
            });
        }
    }
    onBackdropClick(event) {
        event.stopPropagation();
    }
}
AddcompanyComponent.ɵfac = function AddcompanyComponent_Factory(t) { return new (t || AddcompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
AddcompanyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddcompanyComponent, selectors: [["app-addcompany"]], decls: 138, vars: 36, consts: [[1, "mat-dialog-title"], [1, "mat-typography"], [3, "formGroup"], ["fxLayout", "column", 1, "container"], ["fxLayout.gt-sm", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "10px", "fxFlex", "33%", 1, "block-2"], ["fxFlex.gt-sm", "33.33%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["appearance", "outline", 1, "w-100"], ["formControlName", "companyName", "matInput", "", "required", ""], [4, "ngIf"], ["formControlName", "companyEmailId", "required", "", "minlength", "3", "matInput", "", "required", "", "pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", 3, "keypress"], ["formControlName", "companyMobile", "required", "", "minlength", "3", "pattern", "[0-9 ]+", "minlength", "10", "maxlength", "10", "matInput", "", "required", "", 3, "keypress"], ["fxLayout.gt-sm", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "10px", "fxFlex", "33%", 1, "block-2", "mttop20"], ["formControlName", "companyPhone", "required", "", "minlength", "3", "pattern", "[0-9 ]+", "minlength", "10", "maxlength", "11", "matInput", "", "required", "", 3, "keypress"], ["matInput", "", "minlength", "5", "formControlName", "companyWebSite", "required", "", 3, "keypress"], ["appearance", "outline", 1, "w-100", "sgln"], [1, "mat-placeholder-required"], ["type", "file", "accept", "image/*", "required", "", 1, "input1_height", 3, "change"], ["fileInput", ""], ["style", "font-size: 11px;", 4, "ngIf"], ["fxFlex.gt-sm", "68.1%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["formControlName", "description", "matInput", "", "required", ""], ["formControlName", "contactPersonMobile", "required", "", "minlength", "3", "pattern", "[0-9 ]+", "minlength", "10", "maxlength", "10", "matInput", "", "required", "", 3, "keypress"], ["formControlName", "contactPersonName", "minlength", "3", "matInput", "", "required", "", 3, "keypress"], ["formControlName", "contactPersonEmailId", "required", "", "minlength", "3", "matInput", "", "pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", 3, "keypress"], ["formControlName", "listingId", "matInput", "", "hidden", ""], ["formControlName", "nationId", "required", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "stateId", "required", "", 3, "selectionChange"], ["formControlName", "cityId", "required", ""], ["formControlName", "categoryId", "required", "", 3, "selectionChange"], ["formControlName", "subCategoryId", "required", ""], ["fxFlex", "50%", 1, "text-left"], ["mat-raised-button", "", "color", "accent", "type", "button", 1, "crbtn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-ban"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "crbtn", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["fxFlex", "50%", 1, "text-right"], [1, "crdtip"], [2, "font-size", "11px"], [3, "value"]], template: function AddcompanyComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AddcompanyComponent_mat_error_11_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AddcompanyComponent_mat_error_12_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AddcompanyComponent_mat_error_13_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Company Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_18_listener($event) { return ctx.blockSpaces($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AddcompanyComponent_mat_error_19_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AddcompanyComponent_mat_error_20_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Company Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_25_listener($event) { return ctx.keyPressOnlynum($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AddcompanyComponent_mat_error_26_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, AddcompanyComponent_mat_error_27_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Company Landline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_33_listener($event) { return ctx.keyPressOnlynum($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, AddcompanyComponent_mat_error_34_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, AddcompanyComponent_mat_error_35_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Company Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_40_listener($event) { return ctx.blockSpaces($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, AddcompanyComponent_mat_error_41_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, AddcompanyComponent_mat_error_42_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, AddcompanyComponent_mat_error_43_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Company Logo (.jpg/.jpeg/.png)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AddcompanyComponent_Template_input_change_51_listener($event) { return ctx.handleFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, AddcompanyComponent_mat_error_53_Template, 2, 0, "mat-error", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, AddcompanyComponent_mat_error_60_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, AddcompanyComponent_mat_error_61_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Contact Person Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_67_listener($event) { return ctx.keyPressOnlynum($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, AddcompanyComponent_mat_error_68_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, AddcompanyComponent_mat_error_69_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Contact Person Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_74_listener($event) { return ctx.keyPressOnlyCharContactpersonName($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, AddcompanyComponent_mat_error_75_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, AddcompanyComponent_mat_error_76_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, AddcompanyComponent_mat_error_77_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Contact Person Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function AddcompanyComponent_Template_input_keypress_82_listener($event) { return ctx.blockSpaces($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](83, AddcompanyComponent_mat_error_83_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](84, AddcompanyComponent_mat_error_84_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "mat-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function AddcompanyComponent_Template_mat_select_selectionChange_91_listener($event) { return ctx.onChangeCountry($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](92, AddcompanyComponent_mat_option_92_Template, 3, 2, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, AddcompanyComponent_mat_error_93_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "mat-select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function AddcompanyComponent_Template_mat_select_selectionChange_98_listener($event) { return ctx.onChangeState($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](99, AddcompanyComponent_mat_option_99_Template, 3, 2, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](100, AddcompanyComponent_mat_error_100_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "mat-select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](106, AddcompanyComponent_mat_option_106_Template, 3, 2, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](107, AddcompanyComponent_mat_error_107_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "mat-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function AddcompanyComponent_Template_mat_select_selectionChange_113_listener($event) { return ctx.onChangeCat($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](114, AddcompanyComponent_mat_option_114_Template, 3, 2, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](115, AddcompanyComponent_mat_error_115_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Sub-Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "mat-select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](121, AddcompanyComponent_mat_option_121_Template, 3, 2, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](122, AddcompanyComponent_mat_error_122_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddcompanyComponent_Template_button_click_129_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, " CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddcompanyComponent_Template_button_click_132_listener() { return ctx.Submit(ctx.uploadForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](133, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "Tip : (*) fields are mandatory.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.uploadForm.value.listingId ? "Edit" : "Add", " Listing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.uploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.companyName.errors == null ? null : ctx.uploadForm.controls.companyName.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.companyName.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.companyName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.companyEmailId.errors == null ? null : ctx.uploadForm.controls.companyEmailId.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.companyEmailId.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.companyMobile.errors == null ? null : ctx.uploadForm.controls.companyMobile.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.companyMobile.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.companyPhone.errors == null ? null : ctx.uploadForm.controls.companyPhone.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.companyPhone.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.companyWebSite.errors == null ? null : ctx.uploadForm.controls.companyWebSite.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.companyWebSite.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.companyWebSite.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.selectedFile && !ctx.isFileUploaded && !ctx.uploadForm.value.listingId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.description.errors == null ? null : ctx.uploadForm.controls.description.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.description.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.contactPersonMobile.errors == null ? null : ctx.uploadForm.controls.contactPersonMobile.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.contactPersonMobile.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.contactPersonName.errors == null ? null : ctx.uploadForm.controls.contactPersonName.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.contactPersonName.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.contactPersonName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.contactPersonEmailId.errors == null ? null : ctx.uploadForm.controls.contactPersonEmailId.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.contactPersonEmailId.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.nationId.errors == null ? null : ctx.uploadForm.controls.nationId.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.stateId.errors == null ? null : ctx.uploadForm.controls.stateId.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cities);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.cityId.errors == null ? null : ctx.uploadForm.controls.cityId.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.CategoryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.categoryId.errors == null ? null : ctx.uploadForm.controls.categoryId.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.SubCategoryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.subCategoryId.errors == null ? null : ctx.uploadForm.controls.subCategoryId.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.uploadForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.uploadForm.value.listingId ? "UPDATE" : "SUBMIT", "");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.FlexFillDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption], styles: [".container[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n     margin-bottom: 10px;\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGNvbXBhbnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLG1CQUFtQjtHQUNyQiIsImZpbGUiOiJhZGRjb21wYW55LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIC5ncmlkLWl0ZW0ge1xuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgfVxuICAgIl19 */"] });


/***/ }),

/***/ 8907:
/*!**************************************************************************************************************!*\
  !*** ./src/app/admin/endorsementmanageradmin/addeditplayerendorsement/addeditplayerendorsement.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddeditplayerendorsementComponent": () => (/* binding */ AddeditplayerendorsementComponent)
/* harmony export */ });
/* harmony import */ var _addcompany_addcompany_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addcompany/addcompany.component */ 9663);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/ok-dialog/ok-dialog.component */ 891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 2937);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 2220);


















function AddeditplayerendorsementComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", company_r15.listingId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](company_r15.companyName);
} }
function AddeditplayerendorsementComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please select Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddeditplayerendorsementComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddeditplayerendorsementComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15); return ctx_r16.openDialogEdit(_r0.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddeditplayerendorsementComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddeditplayerendorsementComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " ADD");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddeditplayerendorsementComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Endosrsement_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", Endosrsement_r20.endorsmentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](Endosrsement_r20.endorsmentName);
} }
function AddeditplayerendorsementComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please select Endorsement Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddeditplayerendorsementComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please select Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddeditplayerendorsementComponent_mat_error_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please select End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddeditplayerendorsementComponent_mat_error_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please enter final price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddeditplayerendorsementComponent_mat_error_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please enter Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddeditplayerendorsementComponent_mat_error_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Notes at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddeditplayerendorsementComponent_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Notes at most 200 char long");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = "/admin/endorsementmanageradmin/listplayerendorsement";
const _c1 = function () { return [_c0]; };
class AddeditplayerendorsementComponent {
    constructor(datePipe, dialog, appService, snackBar, route, router, formBuilder, location) {
        this.datePipe = datePipe;
        this.dialog = dialog;
        this.appService = appService;
        this.snackBar = snackBar;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.location = location;
        this.CompanyList = [];
        this.EndosrsementList = [];
        this.formdata = {};
        this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            endorsmentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', []),
            companyname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            Endosrsement: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            finalPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            Notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(200)]),
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(_addcompany_addcompany_component__WEBPACK_IMPORTED_MODULE_0__.AddcompanyComponent, {
            disableClose: true,
            width: '220vh',
        });
    }
    openDialogEdit(listingId) {
        this.listingId = listingId;
        const dialogRef = this.dialog.open(_addcompany_addcompany_component__WEBPACK_IMPORTED_MODULE_0__.AddcompanyComponent, {
            width: '220vh',
            disableClose: true,
            data: { listingId: listingId }
        });
    }
    ngOnInit() {
        this.endorsmentId = this.route.snapshot.params['id'];
        this.getCompanyListByPlayetId();
        this.getEndorsmentMaster();
        this.getPlayerEndorsementtbyId(this.endorsmentId);
    }
    ///GetContentDetailsbyPlayerID
    getCompanyListByPlayetId() {
        var playerId = window.sessionStorage.getItem("playerId");
        this.appService.getCompanyPlayerId("api/ListingDetail/GetListingDetailByplayerId/", playerId).subscribe(data => {
            this.CompanyList = data;
        });
    }
    ///getEndorsmentMasterfordropdown
    getEndorsmentMaster() {
        this.appService.getsubAllcontenttype("api/EndorsmentType/GetAllEndorsmentType").subscribe(data => {
            this.EndosrsementList = data;
        });
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
    ///Submit details
    Submit(userObject) {
        if (this.endorsmentId == "" || this.endorsmentId == undefined) {
            this.createPlayerEndosrsement(userObject);
        }
        else {
            if (this.uploadForm.valid) {
                this.updatePlayerEndorsement(userObject);
            }
        }
    }
    ///Add createPlayerEndosrsement
    createPlayerEndosrsement(formData) {
        let startDate = new Date(formData.startDate);
        let endDate = new Date(formData.endDate);
        let formattedStartDate = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000).toISOString();
        let formattedEndDate = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000).toISOString();
        let addPlayerEndoresmentModel = {
            "playerId": window.sessionStorage.getItem("playerId"),
            "listingId": formData.companyname,
            "endorsmentType": formData.Endosrsement,
            "finalPrice": formData.finalPrice,
            "notes": formData.Notes,
            "endDate": formattedEndDate,
            "startDate": formattedStartDate,
        };
        this.appService.Addlisting('api/EndorsmentDetail/AddEndorsmentDetail', addPlayerEndoresmentModel).subscribe(() => {
            const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_1__.OkDialogComponent, {
                maxWidth: "500px",
                disableClose: true,
                data: {
                    title: "Save Action",
                    message: "Player Endorsement Added Successfully!"
                }
            });
            this.router.navigate(['/admin/endorsementmanageradmin/listplayerendorsement'], { relativeTo: this.route });
        }, error => {
            this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 2000 });
        });
    }
    ///updatePlayerEndorsement
    updatePlayerEndorsement(formData) {
        let startDate = new Date(formData.startDate);
        let endDate = new Date(formData.endDate);
        let formattedStartDate = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000).toISOString();
        let formattedEndDate = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000).toISOString();
        let EditPlayerEndoresmentModel = {
            "playerId": window.sessionStorage.getItem("playerId"),
            "endorsmentId": formData.endorsmentId,
            "listingId": formData.companyname,
            "endorsmentType": formData.Endosrsement,
            "finalPrice": formData.finalPrice,
            "notes": formData.Notes,
            "endDate": formattedEndDate,
            "startDate": formattedStartDate,
        };
        this.appService.Addlisting('api/EndorsmentDetail/AddEndorsmentDetail', EditPlayerEndoresmentModel).subscribe(() => {
            const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_1__.OkDialogComponent, {
                maxWidth: "500px",
                disableClose: true,
                data: {
                    title: "Edit Action",
                    message: "Player Endorsement Updated Successfully!"
                }
            });
            this.router.navigate(['/admin/endorsementmanageradmin/listplayerendorsement'], { relativeTo: this.route });
        }, error => {
            this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
        });
    }
    ///Get Player Endorsment Details to set value
    getPlayerEndorsementtbyId(endorsmentId) {
        if (endorsmentId > 0) {
            this.appService.getPlayerEndorsementById("api/EndorsmentDetail/GetEndorsmentDetailById/", endorsmentId).subscribe(data => {
                this.uploadForm.controls['endorsmentId'].setValue(data.endorsmentId);
                this.uploadForm.controls['companyname'].setValue(data.listingId);
                this.uploadForm.controls['Endosrsement'].setValue(data.endorsmentType);
                this.uploadForm.controls['startDate'].setValue(data.startDate);
                this.uploadForm.controls['endDate'].setValue(data.endDate);
                this.uploadForm.controls['finalPrice'].setValue(data.finalPrice);
                this.uploadForm.controls['Notes'].setValue(data.notes);
            });
        }
    }
}
AddeditplayerendorsementComponent.ɵfac = function AddeditplayerendorsementComponent_Factory(t) { return new (t || AddeditplayerendorsementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location)); };
AddeditplayerendorsementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddeditplayerendorsementComponent, selectors: [["app-addeditplayerendorsement"]], decls: 77, vars: 23, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap ", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2", "crdhead"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLayoutGap", "10px", 1, "container"], ["fxLayout.gt-sm", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "10px", "fxFlex", "33%", 1, "block-2"], ["fxFlex.gt-sm", "45%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["appearance", "outline", 1, "w-100"], ["formControlName", "companyname", "required", ""], ["companySelect", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["fxFlex.gt-sm", "5%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["mat-raised-button", "", "color", "primary", "class", "crbtn mttop", "type", "button", 3, "click", 4, "ngIf"], ["fxFlex.gt-sm", "50%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["formControlName", "Endosrsement", "required", ""], ["fxLayout.gt-sm", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "10px", "fxFlex", "33%", 1, "block-2", "mttop20"], ["fxFlex.gt-sm", "33.33%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["formControlName", "startDate", "matInput", "", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["startDatePicker", ""], ["formControlName", "endDate", "matInput", "", "required", "", 3, "matDatepicker", "min"], ["endDatePicker", ""], [2, "font-family", "Arial, sans-serif"], ["formControlName", "finalPrice", "maxlength", "8", "matInput", "", "required", "", 3, "keypress"], ["fxFlex.gt-sm", "100%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["formControlName", "Notes", "matInput", "", "required", ""], ["formControlName", "endorsmentId", "matInput", "", "hidden", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "p-2", "crdfooter"], ["fxLayout", "", "fxLayoutGap", "10px", 1, "container"], ["fxFlex", "50%", 1, "text-left"], ["mat-raised-button", "", "color", "accent", "type", "button", 1, "crbtn", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-circle-left"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "crbtn", 3, "disabled"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["fxFlex", "50%", 1, "text-right"], [1, "crdtip"], [3, "value"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "crbtn", "mttop", 3, "click"], ["aria-hidden", "true"]], template: function AddeditplayerendorsementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AddeditplayerendorsementComponent_Template_form_ngSubmit_6_listener() { return ctx.Submit(ctx.uploadForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-select", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AddeditplayerendorsementComponent_mat_option_16_Template, 3, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AddeditplayerendorsementComponent_mat_error_17_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AddeditplayerendorsementComponent_button_19_Template, 3, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, AddeditplayerendorsementComponent_button_20_Template, 3, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Endorsement Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, AddeditplayerendorsementComponent_mat_option_26_Template, 3, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AddeditplayerendorsementComponent_mat_error_27_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "mat-datepicker-toggle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "mat-datepicker", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, AddeditplayerendorsementComponent_mat_error_37_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "mat-datepicker-toggle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "mat-datepicker", 21, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, AddeditplayerendorsementComponent_mat_error_46_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Final Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "(\u20B9)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AddeditplayerendorsementComponent_Template_input_keypress_53_listener($event) { return ctx.keyPressOnlynum($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, AddeditplayerendorsementComponent_mat_error_54_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, AddeditplayerendorsementComponent_mat_error_61_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, AddeditplayerendorsementComponent_mat_error_62_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, AddeditplayerendorsementComponent_mat_error_63_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "h4", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Tip : (*) fields are mandatory.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](36);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A0", ctx.endorsmentId ? "Edit" : "Add", " Player Endorsement");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.uploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.CompanyList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.companyname.errors == null ? null : ctx.uploadForm.controls.companyname.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.endorsmentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.endorsmentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.EndosrsementList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.Endosrsement.errors == null ? null : ctx.uploadForm.controls.Endosrsement.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.startDate.errors == null ? null : ctx.uploadForm.controls.startDate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r9)("min", ctx.uploadForm.controls.startDate.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.endDate.errors == null ? null : ctx.uploadForm.controls.endDate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.finalPrice.errors == null ? null : ctx.uploadForm.controls.finalPrice.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.Notes.errors == null ? null : ctx.uploadForm.controls.Notes.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.Notes.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.Notes.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.endorsmentId ? false : !ctx.uploadForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.endorsmentId ? "UPDATE" : "SUBMIT", "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.FlexFillDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError], styles: [".mttop[_ngcontent-%COMP%] {\n    margin-top: 48% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGVkaXRwbGF5ZXJlbmRvcnNlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6ImFkZGVkaXRwbGF5ZXJlbmRvcnNlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm10dG9wIHtcbiAgICBtYXJnaW4tdG9wOiA0OCUgIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ 8791:
/*!********************************************************************************!*\
  !*** ./src/app/admin/endorsementmanageradmin/dashboard/dashboard.component.ts ***!
  \********************************************************************************/
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






const _c0 = function () { return ["/admin/endorsementmanageradmin/startingpage"]; };
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

/***/ 3441:
/*!*********************************************************************************!*\
  !*** ./src/app/admin/endorsementmanageradmin/endorsementmanageradmin.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "EndorsementmanageradminModule": () => (/* binding */ EndorsementmanageradminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _listplayerendorsement_listplayerendorsement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listplayerendorsement/listplayerendorsement.component */ 1726);
/* harmony import */ var _addeditplayerendorsement_addeditplayerendorsement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addeditplayerendorsement/addeditplayerendorsement.component */ 8907);
/* harmony import */ var _startingpage_startingpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startingpage/startingpage.component */ 370);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 8791);
/* harmony import */ var _addcompany_addcompany_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addcompany/addcompany.component */ 9663);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ 7483);
/* harmony import */ var src_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/auth.guard */ 7397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);














const routes = [
    { path: '', redirectTo: 'endorsementmanageradmin', pathMatch: 'full' },
    { path: 'listplayerendorsement', component: _listplayerendorsement_listplayerendorsement_component__WEBPACK_IMPORTED_MODULE_1__.ListplayerendorsementComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard], allowedRoles: [4] },
    { path: 'addeditplayerendorsement', component: _addeditplayerendorsement_addeditplayerendorsement_component__WEBPACK_IMPORTED_MODULE_2__.AddeditplayerendorsementComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard], allowedRoles: [4] },
    { path: 'addeditplayerendorsement/:id', component: _addeditplayerendorsement_addeditplayerendorsement_component__WEBPACK_IMPORTED_MODULE_2__.AddeditplayerendorsementComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard], allowedRoles: [4] },
    { path: 'startingpage', component: _startingpage_startingpage_component__WEBPACK_IMPORTED_MODULE_3__.StartingpageComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard], allowedRoles: [4] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard], allowedRoles: [4] },
];
class EndorsementmanageradminModule {
}
EndorsementmanageradminModule.ɵfac = function EndorsementmanageradminModule_Factory(t) { return new (t || EndorsementmanageradminModule)(); };
EndorsementmanageradminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: EndorsementmanageradminModule });
EndorsementmanageradminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.NgxPaginationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](EndorsementmanageradminModule, { declarations: [_listplayerendorsement_listplayerendorsement_component__WEBPACK_IMPORTED_MODULE_1__.ListplayerendorsementComponent,
        _addeditplayerendorsement_addeditplayerendorsement_component__WEBPACK_IMPORTED_MODULE_2__.AddeditplayerendorsementComponent,
        _startingpage_startingpage_component__WEBPACK_IMPORTED_MODULE_3__.StartingpageComponent,
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent,
        _addcompany_addcompany_component__WEBPACK_IMPORTED_MODULE_5__.AddcompanyComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.NgxPaginationModule] }); })();


/***/ }),

/***/ 1726:
/*!********************************************************************************************************!*\
  !*** ./src/app/admin/endorsementmanageradmin/listplayerendorsement/listplayerendorsement.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListplayerendorsementComponent": () => (/* binding */ ListplayerendorsementComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 2887);
/* harmony import */ var src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/ok-dialog/ok-dialog.component */ 891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token-storage.service */ 1573);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 7483);



















const _c0 = function (a1) { return ["../addeditplayerendorsement", a1]; };
function ListplayerendorsementComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListplayerendorsementComponent_div_32_Template_button_click_19_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const endorsment_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r3.deleteservice(endorsment_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const endorsment_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", endorsment_r2.companyName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", endorsment_r2.endorsmentType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](7, 9, endorsment_r2.startDate, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](10, 12, endorsment_r2.endDate, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](endorsment_r2.finalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("matTooltip", endorsment_r2.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](15, 15, endorsment_r2.notes, 0, 20), " ", endorsment_r2.notes.length > 40 ? "" : " ", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](19, _c0, endorsment_r2.endorsmentId));
} }
function ListplayerendorsementComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-card", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "pagination-controls", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function ListplayerendorsementComponent_div_35_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["../addeditplayerendorsement"]; };
const _c2 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class ListplayerendorsementComponent {
    constructor(appService, dialog, snackBar, tokenStorage, router, appSettings, http) {
        this.appService = appService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.appSettings = appSettings;
        this.http = http;
        this.PlayerEndorsmentList = [];
        this.NewPlayerEndorsmentList = [];
        this.ContentListbyPlayerId = [];
        this.count = 8;
    }
    ngOnInit() {
        this.getPlayerEndorsmentListByPlayetId();
    }
    // EditButtonclick
    onEditClick(event, content) {
        if (content && content.approved) {
            event.preventDefault();
        }
    }
    ///pagination
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
    //Delete Endorsment
    deleteservice(endorsment) {
        const dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
            maxWidth: "400px",
            disableClose: true,
            data: {
                title: "Confirm Action",
                message: "Are you sure you want delete this Player Endorsement?"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const index = this.PlayerEndorsmentList.indexOf(endorsment);
                if (index !== -1) {
                    this.PlayerEndorsmentList.splice(index, 1);
                    const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_1__.OkDialogComponent, {
                        maxWidth: "500px",
                        disableClose: true,
                        data: {
                            title: "Delete Action",
                            message: "Player Endorsement Deleted Successfully!"
                        }
                    });
                    this.appService.deleteuser(`api/EndorsmentDetail/DeleteEndorsmentDetail?endorsmentId=${endorsment.endorsmentId}`, {}).subscribe(data => {
                    });
                }
            }
        });
    }
    ///getPlayerEndorsmentListByPlayetId
    getPlayerEndorsmentListByPlayetId() {
        var playerId = window.sessionStorage.getItem("playerId");
        this.appService.getPlayerEndorsmentPlayerId("api/EndorsmentDetail/GetEndorsmentDetailPlayerId/", playerId).subscribe(data => {
            this.PlayerEndorsmentList = data;
            this.NewPlayerEndorsmentList = data;
        });
    }
    ///Search
    Search() {
        if (this.title === "") {
            this.getPlayerEndorsmentListByPlayetId();
        }
        else {
            this.PlayerEndorsmentList = this.NewPlayerEndorsmentList.filter(res => {
                return (res.companyName.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
                    res.endorsmentType.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
                    res.finalPrice.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
                    res.notes.includes(this.title));
            });
            this.page = 1;
        }
    }
}
ListplayerendorsementComponent.ɵfac = function ListplayerendorsementComponent_Factory(t) { return new (t || ListplayerendorsementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient)); };
ListplayerendorsementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ListplayerendorsementComponent, selectors: [["app-listplayerendorsement"]], inputs: { playerId: "playerId" }, decls: 36, vars: 11, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap ", "fxLayoutAlign", "space-between center", 1, "w-100", "p-2", "crdhead"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [1, "tblsearch"], [1, "tdsearch"], [1, "fa", "fa-search", "searchtext-icon"], ["matInput", "", "type", "text", "placeholder", "Search ...", "name", "title", 1, "searchtext", 3, "ngModel", "ngModelChange", "input", "keyup"], [1, "tdbtn"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "crbtn", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "mat-table", "admin-table"], [1, "mat-header-row"], ["fxFlex.gt-sm", "15", 1, "mat-header-cell"], [1, "mat-header-cell"], ["fxFlex.gt-sm", "10", 1, "mat-header-cell", "text-center"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "mat-row"], [1, "mat-cell"], [1, "mat-cell", 3, "matTooltip"], ["fxFlex.gt-sm", "10", 1, "mat-cell", "text-center"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Edit", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-pencil"], ["mat-mini-fab", "", "color", "warn", "matTooltip", "Delete", 1, "mx-1", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], ["fxLayout", "row wrap"], ["fxFlex", "100", 1, "p-1"], [1, "p-0", "text-center", "nobxshbrd"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function ListplayerendorsementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00A0 Player Endorsement List");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ListplayerendorsementComponent_Template_input_ngModelChange_10_listener($event) { return ctx.title = $event; })("input", function ListplayerendorsementComponent_Template_input_input_10_listener() { return ctx.Search(); })("keyup", function ListplayerendorsementComponent_Template_input_keyup_10_listener() { return ctx.Search(); })("ngModelChange", function ListplayerendorsementComponent_Template_input_ngModelChange_10_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "\u00A0 ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Endorsement Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Final Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, ListplayerendorsementComponent_div_32_Template, 21, 21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](33, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, ListplayerendorsementComponent_div_35_Template, 4, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](33, 4, ctx.PlayerEndorsmentList, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](8, _c2, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.PlayerEndorsmentList.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutAlignDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0cGxheWVyZW5kb3JzZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 370:
/*!**************************************************************************************!*\
  !*** ./src/app/admin/endorsementmanageradmin/startingpage/startingpage.component.ts ***!
  \**************************************************************************************/
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











const _c0 = function () { return ["/admin/endorsementmanageradmin/dashboard"]; };
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
    constructor(authservise, sessionStorage, appService, snackBar, formBuilder) {
        this.authservise = authservise;
        this.sessionStorage = sessionStorage;
        this.appService = appService;
        this.snackBar = snackBar;
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
        if (sessionuserId > 0) {
            this.appService.getPlayerById("api/UserPlayer/GetPlayerByUserId/", sessionuserId).subscribe(data => {
                this.PlayerList = data;
                this.playerId = this.PlayerList;
            });
        }
    }
    logPlayerId(playerId) {
        this.playerId = playerId;
        var id = window.sessionStorage.setItem("playerId", this.playerId);
    }
}
StartingpageComponent.ɵfac = function StartingpageComponent_Factory(t) { return new (t || StartingpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder)); };
StartingpageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StartingpageComponent, selectors: [["app-startingpage"]], outputs: { playerSelected: "playerSelected" }, decls: 3, vars: 1, consts: [["fxLayout", "row wrap"], ["resizedDiv", ""], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50", "class", "p-11 ", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50", 1, "p-11"], [1, "p-0", "Divbg2s", 3, "routerLink", "click"], [1, "flip-card"], [1, "flip-card-inner"], [1, "flip-card-front"], [1, "p-1", "text-center"], ["width", "200", "height", "85", 1, "w-full", "h-full", "rounded-full", "ng-star-inserted", "imgs", 3, "src"], [1, "p-0"], [1, "text-center", "fliphs"], [1, "flip-card-back"], [1, "fliph"], [1, "w100"]], template: function StartingpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, StartingpageComponent_div_2_Template, 55, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.PlayerList);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydGluZ3BhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_endorsementmanageradmin_endorsementmanageradmin_module_ts.js.map