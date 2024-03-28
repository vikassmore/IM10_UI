"use strict";
(self["webpackChunkemporium"] = self["webpackChunkemporium"] || []).push([["src_app_admin_playerrepresentativeadmin_playerrepresentativeadmin_module_ts"],{

/***/ 9891:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/admin/playerrepresentativeadmin/contentcomment-image-video-view/contentcomment-image-video-view.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentcommentImageVideoViewComponent": () => (/* binding */ ContentcommentImageVideoViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 781);







function ContentcommentImageVideoViewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.data.mediaUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ContentcommentImageVideoViewComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "video", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "source", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Your browser does not support the video tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.data.mediaUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class ContentcommentImageVideoViewComponent {
    constructor(data, dialog, appService, router, route, dialogRef) {
        this.data = data;
        this.dialog = dialog;
        this.appService = appService;
        this.router = router;
        this.route = route;
        this.dialogRef = dialogRef;
        this.CommentList = [];
        this.NewCommentList = [];
        this.isImage = this.isImageUrl(data.mediaUrl);
        this.title = data.title;
    }
    ngOnInit() {
    }
    isImageUrl(url) {
        return /\.(jpeg|jpg|gif|png|webp)$/i.test(url);
    }
    closeDialog() {
        this.dialogRef.close();
    }
    getCommentListByPlayetId() {
        debugger;
        var playerId = window.sessionStorage.getItem("playerId");
        this.appService.getCommentByPlayerId("api/ContentComment/GetContentCommentByPlayerId/", playerId).subscribe(data => {
            this.CommentList = data;
            this.NewCommentList = data;
        });
    }
}
ContentcommentImageVideoViewComponent.ɵfac = function ContentcommentImageVideoViewComponent_Factory(t) { return new (t || ContentcommentImageVideoViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef)); };
ContentcommentImageVideoViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContentcommentImageVideoViewComponent, selectors: [["app-contentcomment-image-video-view"]], decls: 9, vars: 3, consts: [[1, "media-dialog-container"], [1, "title"], ["class", "media-container", 4, "ngIf"], [1, "actions"], ["mat-raised-button", "", "color", "accent", "type", "button", 1, "crbtn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-ban"], [1, "media-container"], ["alt", "Image", 1, "media-content", 3, "src"], ["controls", "", 1, "media-content"], ["type", "video/mp4", 3, "src"]], template: function ContentcommentImageVideoViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ContentcommentImageVideoViewComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContentcommentImageVideoViewComponent_div_4_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-dialog-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentcommentImageVideoViewComponent_Template_button_click_6_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " CANCEL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isImage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton], styles: [".title[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 10px;\r\n  font-size: 1.4em; \r\n}\r\n.media-dialog-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start; \r\n}\r\n.media-container[_ngcontent-%COMP%] {\r\n  overflow-y: auto;\r\n  max-height: 70vh;\r\n}\r\n.media-content[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n.actions[_ngcontent-%COMP%] {\r\n  width: 100%; \r\n  padding: 0 16px; \r\n}\r\n\r\n.crbtn[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnRjb21tZW50LWltYWdlLXZpZGVvLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxREFBcUQ7QUFDckQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFFLG1DQUFtQztBQUN2RDtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBRSxpQ0FBaUM7QUFDNUQ7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFdBQVcsRUFBRSwyQ0FBMkM7RUFDeEQsZUFBZSxFQUFFLHNDQUFzQztBQUN6RDtBQUVBLGdEQUFnRDtBQUNoRDtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJjb250ZW50Y29tbWVudC1pbWFnZS12aWRlby12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3VyIGV4aXN0aW5nIENTUywgYW5kIGFkZCB0aGUgZm9sbG93aW5nIGNoYW5nZXMgKi9cclxuLnRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxLjRlbTsgLyogQWRqdXN0IHRoZSBmb250IHNpemUgYXMgbmVlZGVkICovXHJcbn1cclxuXHJcbi5tZWRpYS1kaWFsb2ctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IC8qIEFsaWduIGl0ZW1zIHRvIHRoZSBsZWZ0IHNpZGUgKi9cclxufVxyXG5cclxuLm1lZGlhLWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA3MHZoO1xyXG59XHJcblxyXG4ubWVkaWEtY29udGVudCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICB3aWR0aDogMTAwJTsgLyogRW5zdXJlIHRoZSBhY3Rpb25zIHRha2UgdGhlIGZ1bGwgd2lkdGggKi9cclxuICBwYWRkaW5nOiAwIDE2cHg7IC8qIEFkZCBwYWRkaW5nIGZvciBiZXR0ZXIgYXBwZWFyYW5jZSAqL1xyXG59XHJcblxyXG4vKiBBZGQgc3R5bGluZyBmb3IgdGhlIGNhbmNlbCBidXR0b24gaWYgbmVlZGVkICovXHJcbi5jcmJ0biB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9065:
/*!******************************************************************************************************!*\
  !*** ./src/app/admin/playerrepresentativeadmin/contentcommentreply/contentcommentreply.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentcommentreplyComponent": () => (/* binding */ ContentcommentreplyComponent)
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
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 781);














function ContentcommentreplyComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "New Comment Is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ContentcommentreplyComponent {
    constructor(data, dialog, appService, router, route) {
        this.data = data;
        this.dialog = dialog;
        this.appService = appService;
        this.router = router;
        this.route = route;
        this.isPublic = false;
        this.showtitleerror = false;
        this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            commentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({ value: '', disabled: true }),
            comment1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({ value: '', disabled: true }),
            comment2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            isPublic: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            contentTypeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({ value: '', disabled: true }),
        });
    }
    ///check validation for blank space
    titlekeyDown(event) {
        const inputValue = event.target.value;
        // Check if the input consists only of spaces
        const isOnlySpaces = /^\s*$/.test(inputValue);
        if (event.key === ' ' && isOnlySpaces) {
            this.showtitleerror = true;
            event.preventDefault();
        }
        else {
            this.showtitleerror = false;
        }
    }
    closeDialog() {
        this.dialog.closeAll(); // <- Close the mat dialog
    }
    ngOnInit() {
        this.getcommentbyid(this.data.commentId);
    }
    ///GetAdvContentMappingByadvContentMapId
    getcommentbyid(commentId) {
        this.appService.getById("api/ContentComment/GetContentCommentById/", commentId).subscribe(data => {
            this.uploadForm.controls['commentId'].setValue(data.commentId);
            this.uploadForm.controls['fullName'].setValue(data.fullName);
            this.uploadForm.controls['comment1'].setValue(data.comment1);
            this.uploadForm.controls['isPublic'].setValue(data.isPublic);
            this.uploadForm.controls['contentTypeName'].setValue(data.contentTypeName);
        });
    }
    ///Submit Admin Comment
    Submit(userObject) {
        var comment2 = userObject.comment2;
        let addcommentModel = {
            "commentId": userObject.commentId,
            "comment1": userObject.comment2,
            "isPublic": userObject.isPublic
        };
        this.appService.AddComment('api/ContentComment/AddContentCommentReply', addcommentModel).subscribe(() => {
            this.closeDialog();
            const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__.OkDialogComponent, {
                maxWidth: "500px",
                disableClose: true,
                data: {
                    title: "Save Action",
                    message: "Comment Added Successfully!"
                }
            });
            this.router.navigate(['/admin/playerrepresentativeadmin/listcontentcomment'], { relativeTo: this.route });
            dialogRef.afterClosed().subscribe(() => {
                window.location.reload();
            });
        });
    }
}
ContentcommentreplyComponent.ɵfac = function ContentcommentreplyComponent_Factory(t) { return new (t || ContentcommentreplyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
ContentcommentreplyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContentcommentreplyComponent, selectors: [["app-contentcommentreply"]], decls: 47, vars: 3, consts: [[1, "mat-dialog-title"], [1, "mat-typography"], [3, "formGroup"], ["fxLayout", "column", 1, "container"], ["fxLayout.gt-sm", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "10px", "fxFlex", "33%", 1, "block-2"], ["fxFlex.gt-sm", "40%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["appearance", "outline", 1, "w-100"], ["formControlName", "fullName", "matInput", "", "disabled", "", "readonly", ""], ["fxFlex.gt-sm", "60%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["formControlName", "comment1", "matInput", "", "disabled", "", "readonly", ""], ["fxLayout.gt-sm", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "10px", "fxFlex", "33%", 1, "block-2", "mttop20"], ["fxFlex.gt-sm", "100%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "left", "fxFlexFill", "", 1, "grid-item"], ["appearance", "outline", 1, "w-100", "sgln1"], [1, "mat-placeholder-required"], ["formControlName", "isPublic", "color", "primary", 1, "mttop20"], ["appearance", "outline", 1, "w-100", 2, "margin-top", "5vh"], ["formControlName", "contentTypeName", "matInput", "", "disabled", "", "readonly", ""], ["formControlName", "comment2", "matInput", "", "required", "", 3, "keydown"], [4, "ngIf"], ["formControlName", "commentId", "matInput", "", "hidden", ""], ["fxFlex", "50%", 1, "text-left"], ["mat-raised-button", "", "color", "accent", "type", "button", 1, "crbtn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-ban"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "crbtn", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["fxFlex", "50%", 1, "text-right"], [1, "crdtip"]], template: function ContentcommentreplyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Content Comment Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "User Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "User Comment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Is Public ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "mat-slide-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Content Type Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "New Comment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function ContentcommentreplyComponent_Template_textarea_keydown_33_listener($event) { return ctx.titlekeyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ContentcommentreplyComponent_mat_error_34_Template, 2, 0, "mat-error", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentcommentreplyComponent_Template_button_click_38_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentcommentreplyComponent_Template_button_click_41_listener() { return ctx.Submit(ctx.uploadForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Tip : (*) fields are mandatory.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.uploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls.comment2.errors == null ? null : ctx.uploadForm.controls.comment2.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.uploadForm.valid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.FlexFillDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError], styles: [".mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n     color: #f0f0f0; \n }\n\n .readonly-input[_ngcontent-%COMP%] {\n    color: grey;\n    background-color: #f2f2f2; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnRjb21tZW50cmVwbHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLGNBQWMsRUFBRSxnQkFBZ0I7Q0FDcEM7O0NBRUE7SUFDRyxXQUFXO0lBQ1gseUJBQXlCLEVBQUUsNkRBQTZEO0FBQzVGIiwiZmlsZSI6ImNvbnRlbnRjb21tZW50cmVwbHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgIGNvbG9yOiAjZjBmMGYwOyAvKiBMaWdodCBjb2xvciAqL1xuIH1cblxuIC5yZWFkb25seS1pbnB1dCB7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjsgLyogT3B0aW9uYWw6IFRvIGNoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciB0byBhIGxpZ2h0IGdyZXkgKi9cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8917:
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/playerrepresentativeadmin/contentcommentview/contentcommentview.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentcommentviewComponent": () => (/* binding */ ContentcommentviewComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/ok-dialog/ok-dialog.component */ 891);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 2887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ 7483);
















function ContentcommentviewComponent_div_15_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]("Yes");
} }
function ContentcommentviewComponent_div_15_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]("No");
} }
function ContentcommentviewComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ContentcommentviewComponent_div_15_ng_container_7_Template, 2, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ContentcommentviewComponent_div_15_ng_template_8_Template, 1, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContentcommentviewComponent_div_15_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const comment_r2 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.deleteComment(comment_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r2 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", comment_r2.comment1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](3, 5, comment_r2.comment1, 0, 10), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](comment_r2.contentTypeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", comment_r2.isPublic)("ngIfElse", _r4);
} }
function ContentcommentviewComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "pagination-controls", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function ContentcommentviewComponent_div_18_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class ContentcommentviewComponent {
    constructor(dialog, data, appService, snackBar, router, appSettings) {
        this.dialog = dialog;
        this.data = data;
        this.appService = appService;
        this.snackBar = snackBar;
        this.router = router;
        this.appSettings = appSettings;
        this.CommentReplyList = [];
        this.count = 8;
    }
    closeDialog() {
        this.dialog.closeAll(); // <- Close the mat dialog
    }
    ngOnInit() {
        this.getCommentReplyListByCommentId(this.data.commentId);
    }
    ///get CommentReplyList By CommentId
    getCommentReplyListByCommentId(commentId) {
        this.appService.getCommentByPlayerId("api/ContentComment/GetContentCommentReplyByCommentId/", commentId).subscribe(data => {
            this.CommentReplyList = data;
        });
    }
    ///Delete comment
    deleteComment(comment) {
        const dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
            maxWidth: "400px",
            disableClose: true,
            data: {
                title: "Confirm Action",
                message: "Are you sure you want delete this Comment?"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const index = this.CommentReplyList.indexOf(comment);
                if (index !== -1) {
                    this.CommentReplyList.splice(index, 1);
                    const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_0__.OkDialogComponent, {
                        maxWidth: "500px",
                        disableClose: true,
                        data: {
                            title: "Delete Action",
                            message: "Comment Deleted Successfully!"
                        }
                    });
                    this.appService.deleteuser(`api/ContentComment/DeleteCommentReply?commentId=${comment.commentId}`, {}).subscribe(data => {
                    });
                }
            }
        });
    }
    ///pagination  
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
}
ContentcommentviewComponent.ɵfac = function ContentcommentviewComponent_Factory(t) { return new (t || ContentcommentviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings)); };
ContentcommentviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ContentcommentviewComponent, selectors: [["app-contentcommentview"]], decls: 25, vars: 8, consts: [["fxLayout", "row wrap ", "fxLayoutAlign", "space-between", 1, "w-100", "p-2", "crdhead"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [1, "mat-typography"], [1, "mat-table", "admin-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["fxFlex.gt-sm", "10", 1, "mat-header-cell", "text-center"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], ["fxFlex", "50%", 1, "text-left"], ["mat-raised-button", "", "color", "accent", "type", "button", 1, "crbtn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-ban"], ["fxFlex", "50%", 1, "text-right"], [1, "mat-row"], [1, "mat-cell", 3, "matTooltip"], [1, "mat-cell"], [4, "ngIf", "ngIfElse"], ["nonPublic", ""], ["mat-mini-fab", "", "color", "warn", "matTooltip", "Delete", 1, "mx-1", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], ["fxLayout", "row wrap"], ["fxFlex", "100", 1, "p-1"], [1, "p-0", "text-center", "nobxshbrd"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function ContentcommentviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u00A0 Content Comment Reply View");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Content Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Is Public");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ContentcommentviewComponent_div_15_Template, 13, 9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ContentcommentviewComponent_div_18_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContentcommentviewComponent_Template_button_click_21_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](16, 2, ctx.CommentReplyList, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](5, _c0, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.CommentReplyList.length > 0);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50Y29tbWVudHZpZXcuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2119:
/*!**********************************************************************************!*\
  !*** ./src/app/admin/playerrepresentativeadmin/dashboard/dashboard.component.ts ***!
  \**********************************************************************************/
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






const _c0 = function () { return ["/admin/playerrepresentativeadmin/startingpage"]; };
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
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], inputs: { playerDetailsList: "playerDetailsList" }, decls: 20, vars: 5, consts: [["fxLayout", "column", "fxLayoutGap", "10px", 1, "container", "p-1"], ["fxLayout.gt-sm", "row", "fxLayout.lt-md", "column", "fxFlex", "33%", 1, "block-2"], ["fxFlex.gt-sm", "85%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "center center", "fxFlexFill", "", 1, "grid-item"], ["fxFlex.gt-sm", "15%", "fxFlex.lt-md", "50%", "fxLayoutAlign", "right", "fxFlexFill", "", 1, "grid-item", "text-right"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-user"], ["fxLayout", "row wrap "], ["resizedDiv", ""], ["fxFlex", "100", "fxFlex.gt-sm", "100", "fxFlex.sm", "50", 1, "p-11"], [1, "p-0", "Divbg2s"], [1, "card1"], [1, "p-1", "text-center"], [1, "w-full", "h-full", "rounded-full", "ng-star-inserted", "imgs1", 3, "src"], [1, "p-0"], [1, "text-center", "fliph1"], [1, "sport-name"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.PlayerDetailsList.profileImageFilePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.PlayerDetailsList.playerName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Sport - ", ctx.PlayerDetailsList.sportName, " ");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexFillDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard], styles: [".text-center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.sport-name[_ngcontent-%COMP%] {\r\n    font-size: 16px; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZSxFQUFFLHFCQUFxQjtBQUMxQyIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcG9ydC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5515:
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/playerrepresentativeadmin/listcontentcomment/listcontentcomment.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListcontentcommentComponent": () => (/* binding */ ListcontentcommentComponent)
/* harmony export */ });
/* harmony import */ var _contentcommentreply_contentcommentreply_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contentcommentreply/contentcommentreply.component */ 9065);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 2887);
/* harmony import */ var src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ok-dialog/ok-dialog.component */ 891);
/* harmony import */ var _contentcommentview_contentcommentview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contentcommentview/contentcommentview.component */ 8917);
/* harmony import */ var _contentcomment_image_video_view_contentcomment_image_video_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contentcomment-image-video-view/contentcomment-image-video-view.component */ 9891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.service */ 900);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ 7483);




















function ListcontentcommentComponent_div_28_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]("Yes");
} }
function ListcontentcommentComponent_div_28_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]("No");
} }
function ListcontentcommentComponent_div_28_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]("Yes");
} }
function ListcontentcommentComponent_div_28_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]("No");
} }
function ListcontentcommentComponent_div_28_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListcontentcommentComponent_div_28_div_20_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13); const comment_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r11.openDialogVideoImageThumbnail(comment_r2.commentId, comment_r2.thumbnail1, comment_r2.contentTypeName, comment_r2.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListcontentcommentComponent_div_28_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListcontentcommentComponent_div_28_div_21_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16); const comment_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r14.openDialogVideoImageThumbnail(comment_r2.commentId, comment_r2.thumbnail1, comment_r2.contentTypeName, comment_r2.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ListcontentcommentComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ListcontentcommentComponent_div_28_ng_container_7_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ListcontentcommentComponent_div_28_ng_template_8_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, ListcontentcommentComponent_div_28_ng_container_16_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, ListcontentcommentComponent_div_28_ng_template_17_Template, 1, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, ListcontentcommentComponent_div_28_div_20_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, ListcontentcommentComponent_div_28_div_21_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListcontentcommentComponent_div_28_Template_a_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18); const comment_r2 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r17.openDialogView(comment_r2.commentId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListcontentcommentComponent_div_28_Template_a_click_26_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18); const comment_r2 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r19.openDialog(comment_r2.commentId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ListcontentcommentComponent_div_28_Template_button_click_29_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18); const comment_r2 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r20.deleteservice(comment_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r2 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](9);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", comment_r2.mobileNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", comment_r2.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](5, 14, comment_r2.deviceId || "", 0, 10));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", comment_r2.liked)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", comment_r2.comment1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](12, 18, comment_r2.comment1, 0, 10), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", comment_r2.contentTypeName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", comment_r2.isPublic)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", comment_r2.contentTypeName === "Article");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", comment_r2.contentTypeName === "Video");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("visibility", comment_r2.parentCommentId > 0 ? "hidden" : "visible");
} }
function ListcontentcommentComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "pagination-controls", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function ListcontentcommentComponent_div_31_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r21.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class ListcontentcommentComponent {
    constructor(dialog, appService, snackBar, router, appSettings) {
        this.dialog = dialog;
        this.appService = appService;
        this.snackBar = snackBar;
        this.router = router;
        this.appSettings = appSettings;
        this.CommentList = [];
        this.NewCommentList = [];
        this.CommentListbyPlayerId = [];
        this.count = 8;
    }
    openDialogVideoImageThumbnail(commentId, thumbnailUrl, contentType, title) {
        if (thumbnailUrl) {
            debugger;
            const dialogRef = this.dialog.open(_contentcomment_image_video_view_contentcomment_image_video_view_component__WEBPACK_IMPORTED_MODULE_4__.ContentcommentImageVideoViewComponent, {
                width: '800px',
                data: {
                    mediaType: contentType.toLowerCase(),
                    mediaUrl: thumbnailUrl,
                    title: title
                }
            });
        }
        else {
            // Handle the case when there is no thumbnail (possibly open another dialog)
            console.log("No thumbnail available");
        }
    }
    openDialogView(commentId) {
        const dialogRef = this.dialog.open(_contentcommentview_contentcommentview_component__WEBPACK_IMPORTED_MODULE_3__.ContentcommentviewComponent, {
            width: '220vh',
            disableClose: true,
            position: { top: '20vh' },
            data: { commentId: commentId }
        });
    }
    openDialog(commentId) {
        this.commentId = commentId;
        const dialogRef = this.dialog.open(_contentcommentreply_contentcommentreply_component__WEBPACK_IMPORTED_MODULE_0__.ContentcommentreplyComponent, {
            width: '120vh',
            disableClose: true,
            data: { commentId: commentId }
        });
    }
    ngOnInit() {
        this.getCommentListByPlayetId();
    }
    ///Delete Content
    deleteservice(comment) {
        const dialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
            maxWidth: "400px",
            disableClose: true,
            data: {
                title: "Confirm Action",
                message: "Are you sure you want delete this Comment?"
            }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const index = this.CommentList.indexOf(comment);
                if (index !== -1) {
                    this.CommentList.splice(index, 1);
                    const dialogRef = this.dialog.open(src_app_shared_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_2__.OkDialogComponent, {
                        maxWidth: "500px",
                        disableClose: true,
                        data: {
                            title: "Delete Action",
                            message: "Comment Deleted Successfully!"
                        }
                    });
                    this.appService.deleteuser(`api/ContentComment/DeleteCommentReply?commentId=${comment.commentId}`, {}).subscribe(data => {
                    });
                }
            }
        });
    }
    ///getCommentListByPlayetId
    getCommentListByPlayetId() {
        var playerId = window.sessionStorage.getItem("playerId");
        this.appService.getCommentByPlayerId("api/ContentComment/GetContentCommentByPlayerId/", playerId).subscribe(data => {
            this.CommentList = data;
            this.NewCommentList = data;
        });
    }
    ///Search
    Search() {
        if (this.username == "") {
            this.getCommentListByPlayetId();
        }
        else {
            this.CommentList = this.NewCommentList.filter(res => {
                const lowerCaseContentName = this.username.toLowerCase();
                const titleIncludes = res.mobileNo.toLowerCase().includes(lowerCaseContentName);
                const finalPriceIncludes = res.contentTypeName.toLowerCase().includes(lowerCaseContentName);
                const contentNameIncludes = res.comment1.toLowerCase().includes(lowerCaseContentName);
                const approvedStatus = res.liked;
                let approvedLabel = "";
                if (approvedStatus === true) {
                    approvedLabel = "Liked";
                }
                else if (approvedStatus === false) {
                    approvedLabel = "Dislike";
                }
                const approvedIncludes = approvedLabel.toLowerCase().includes(lowerCaseContentName);
                const approvedStatusshared = res.shared;
                let approvedLabelshared = "";
                if (approvedStatusshared === true) {
                    approvedLabelshared = "Shared";
                }
                else if (approvedStatusshared === false) {
                    approvedLabelshared = "Not Shared";
                }
                const approvedIncludesshared = approvedLabelshared.toLowerCase().includes(lowerCaseContentName);
                return (titleIncludes ||
                    finalPriceIncludes ||
                    contentNameIncludes ||
                    approvedIncludes ||
                    approvedIncludesshared);
            });
            this.page = 1;
        }
    }
    ///pagination  
    onPageChanged(event) {
        this.page = event;
        window.scrollTo(0, 0);
    }
}
ListcontentcommentComponent.ɵfac = function ListcontentcommentComponent_Factory(t) { return new (t || ListcontentcommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_5__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__.AppSettings)); };
ListcontentcommentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ListcontentcommentComponent, selectors: [["app-listcontentcomment"]], decls: 32, vars: 9, consts: [[1, "p-1"], [1, "p-0"], ["fxLayout", "row wrap ", "fxLayoutAlign", "space-between", 1, "w-100", "p-2", "crdhead"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [1, "tblsearch"], [1, "tdsearch"], [1, "fa", "fa-search", "searchtext-icon"], ["matInput", "", "type", "text", "placeholder", "Search ...", "name", "username", 1, "searchtext", 3, "ngModel", "ngModelChange", "input", "keyup"], [1, "mat-table", "admin-table"], [1, "mat-header-row"], [1, "mat-header-cell"], ["fxFlex.gt-sm", "12", 1, "mat-header-cell", "text-center"], ["class", "mat-row", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "mat-row"], [1, "mat-cell"], [1, "mat-cell", 3, "matTooltip"], [4, "ngIf", "ngIfElse"], ["noApproval", ""], ["nonPublic", ""], ["class", "text-center", "fxFlex.gt-sm", "25", 4, "ngIf"], ["fxFlex.gt-sm", "25", 1, "text-center"], ["mat-mini-fab", "", "color", "accent", "matTooltip", "view Comments", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Reply", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-commenting-o"], ["mat-mini-fab", "", "color", "warn", "matTooltip", "Delete", 1, "mx-1", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], ["mat-mini-fab", "", "color", "accent", "matTooltip", "view Article", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-file-text"], ["mat-mini-fab", "", "color", "accent", "matTooltip", "view Video", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-video-camera"], ["fxLayout", "row wrap"], ["fxFlex", "100", 1, "p-1"], [1, "p-0", "text-center", "nobxshbrd"], ["autoHide", "true", "maxSize", "5", 1, "product-pagination", 3, "pageChange"]], template: function ListcontentcommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\u00A0 Content Comment List");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ListcontentcommentComponent_Template_input_ngModelChange_10_listener($event) { return ctx.username = $event; })("input", function ListcontentcommentComponent_Template_input_input_10_listener() { return ctx.Search(); })("keyup", function ListcontentcommentComponent_Template_input_keyup_10_listener() { return ctx.Search(); })("ngModelChange", function ListcontentcommentComponent_Template_input_ngModelChange_10_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Mobile No");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Device Id/Mac Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Like");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Content Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Is Public");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, ListcontentcommentComponent_div_28_Template, 31, 22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, ListcontentcommentComponent_div_31_Template, 4, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](29, 3, ctx.CommentList, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](6, _c0, ctx.count, ctx.page)));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.CommentList.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0Y29udGVudGNvbW1lbnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 484:
/*!*************************************************************************************!*\
  !*** ./src/app/admin/playerrepresentativeadmin/playerrepresentativeadmin.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "PlayerrepresentativeadminModule": () => (/* binding */ PlayerrepresentativeadminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _listcontentcomment_listcontentcomment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listcontentcomment/listcontentcomment.component */ 5515);
/* harmony import */ var _contentcommentreply_contentcommentreply_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contentcommentreply/contentcommentreply.component */ 9065);
/* harmony import */ var _startingpage_startingpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startingpage/startingpage.component */ 8803);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 2119);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 7483);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _contentcommentview_contentcommentview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contentcommentview/contentcommentview.component */ 8917);
/* harmony import */ var src_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/auth.guard */ 7397);
/* harmony import */ var _contentcomment_image_video_view_contentcomment_image_video_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contentcomment-image-video-view/contentcomment-image-video-view.component */ 9891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);

















const routes = [
    { path: '', redirectTo: 'playerrepresentativeadmin', pathMatch: 'full' },
    { path: 'listcontentcomment', component: _listcontentcomment_listcontentcomment_component__WEBPACK_IMPORTED_MODULE_1__.ListcontentcommentComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard], allowedRoles: [7] },
    { path: 'contentcommentreplay', component: _contentcommentreply_contentcommentreply_component__WEBPACK_IMPORTED_MODULE_2__.ContentcommentreplyComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard], allowedRoles: [7] },
    { path: 'startingpage', component: _startingpage_startingpage_component__WEBPACK_IMPORTED_MODULE_3__.StartingpageComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard], allowedRoles: [7] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard], allowedRoles: [7] },
    { path: 'contentcommentview', component: _contentcommentview_contentcommentview_component__WEBPACK_IMPORTED_MODULE_6__.ContentcommentviewComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard], allowedRoles: [7] },
];
class PlayerrepresentativeadminModule {
}
PlayerrepresentativeadminModule.ɵfac = function PlayerrepresentativeadminModule_Factory(t) { return new (t || PlayerrepresentativeadminModule)(); };
PlayerrepresentativeadminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: PlayerrepresentativeadminModule });
PlayerrepresentativeadminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](PlayerrepresentativeadminModule, { declarations: [_listcontentcomment_listcontentcomment_component__WEBPACK_IMPORTED_MODULE_1__.ListcontentcommentComponent,
        _contentcommentreply_contentcommentreply_component__WEBPACK_IMPORTED_MODULE_2__.ContentcommentreplyComponent,
        _startingpage_startingpage_component__WEBPACK_IMPORTED_MODULE_3__.StartingpageComponent,
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent,
        _contentcommentview_contentcommentview_component__WEBPACK_IMPORTED_MODULE_6__.ContentcommentviewComponent,
        _contentcomment_image_video_view_contentcomment_image_video_view_component__WEBPACK_IMPORTED_MODULE_8__.ContentcommentImageVideoViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule] }); })();


/***/ }),

/***/ 8803:
/*!****************************************************************************************!*\
  !*** ./src/app/admin/playerrepresentativeadmin/startingpage/startingpage.component.ts ***!
  \****************************************************************************************/
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











const _c0 = function () { return ["/admin/playerrepresentativeadmin/dashboard"]; };
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Data 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Debut");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Data 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Titles");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Data 5");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", player_r2.profileImageFilePath, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](player_r2.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](player_r2.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](player_r2.sportName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](31, 6, player_r2.dob, "dd/MMM/yyyy"));
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
    ///methodforgetplayeridfordashboard
    logPlayerId(playerId) {
        sessionStorage.setItem("playerId", playerId); // Store playerId in sessionStorage
        this.router.navigate(['/admin/playerrepresentativeadmin/dashboard'], { queryParams: { playerId: playerId } });
    }
}
StartingpageComponent.ɵfac = function StartingpageComponent_Factory(t) { return new (t || StartingpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder)); };
StartingpageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StartingpageComponent, selectors: [["app-startingpage"]], outputs: { playerSelected: "playerSelected" }, decls: 3, vars: 1, consts: [["fxLayout", "row wrap"], ["resizedDiv", ""], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50", "class", "p-11 ", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50", 1, "p-11"], [1, "p-0", "Divbg2s", 3, "routerLink", "click"], [1, "flip-card"], [1, "flip-card-inner"], [1, "flip-card-front"], [1, "p-1", "text-center"], ["width", "200", "height", "85", 1, "w-full", "h-full", "rounded-full", "ng-star-inserted", "imgs", 3, "src"], [1, "p-0"], [1, "text-center", "fliphs"], [1, "flip-card-back"], [1, "fliph"], [1, "w100"]], template: function StartingpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, StartingpageComponent_div_2_Template, 56, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.PlayerList);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydGluZ3BhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_playerrepresentativeadmin_playerrepresentativeadmin_module_ts.js.map