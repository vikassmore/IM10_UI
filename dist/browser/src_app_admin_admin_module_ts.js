"use strict";
(self["webpackChunkemporium"] = self["webpackChunkemporium"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 1034:
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminComponent": () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.settings */ 1182);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/token-storage.service */ 1573);
/* harmony import */ var _components_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu/menu.service */ 9442);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ 900);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/fullscreen/fullscreen.component */ 9483);
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/messages/messages.component */ 7912);
/* harmony import */ var _components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-menu/user-menu.component */ 7492);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 9150);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/menu/menu.component */ 1296);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 2529);



















const _c0 = ["sidenav"];
function AdminComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r2.toggleSidenav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
class AdminComponent {
    constructor(appSettings, sessionStorage, router, menuService, appService, tokenStorage, ngZone, cdr) {
        this.appSettings = appSettings;
        this.sessionStorage = sessionStorage;
        this.router = router;
        this.menuService = menuService;
        this.appService = appService;
        this.tokenStorage = tokenStorage;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.userInfo = [];
        this.PlayerDetailsList = [];
        this.isStartingPage = false;
        this.toggleSearchBar = false;
        this.settings = this.appSettings.settings;
        this.isStartingPage = this.router.url.endsWith('/startingpage');
    }
    ngOnInit() {
        if (window.innerWidth <= 960) {
            this.settings.adminSidenavIsOpened = false;
            this.settings.adminSidenavIsPinned = false;
            this.sessionusername = this.sessionStorage.getUser().username;
        }
        ;
        if (!this.tokenStorage.getToken()) {
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate(['/']);
        }
        setTimeout(() => {
            this.settings.theme = 'blue';
        });
        this.menuItems = this.menuService.getMenuItems();
        this.getInfo();
        ///hide sidenav if starting page end with startingpage
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd) {
                const currentUrl = this.router.url;
                if (currentUrl.endsWith('/startingpage')) {
                    this.settings.adminSidenavIsOpened = false;
                    this.settings.adminSidenavIsPinned = false;
                    this.isStartingPage = false;
                }
                else {
                    this.settings.adminSidenavIsOpened = true;
                    this.settings.adminSidenavIsPinned = true;
                    this.isStartingPage = false;
                }
            }
        });
        const currentUrl = this.router.url;
        if (currentUrl.endsWith('/startingpage')) {
            this.settings.adminSidenavIsOpened = false;
            this.settings.adminSidenavIsPinned = false;
            this.isStartingPage = true; // Set isStartingPage to true
        }
        //get logged in username from session
        this.sessionuserfullName = this.sessionStorage.getUser().fullName;
        this.sessionuserrole = this.sessionStorage.getUser().role;
        this.sessionroleId = this.sessionStorage.getUser().roleId;
        this.Getplayerdetailsbyplayerid();
    }
    getInfo() {
        var user = JSON.parse(sessionStorage.getItem("userID"));
        // this.appService.getUserId("api/user/GetUserById/" + user).subscribe((data: any) => {
        // this.userInfo = data;
        // });
        // public getInfo() {
        //  this.appService.getUserById("api/User/GetUserById").subscribe(data => {
        //   this.userInfo = data;
        //  });
    }
    ngAfterViewInit() {
        if (document.getElementById('preloader')) {
            document.getElementById('preloader').classList.add('hide');
        }
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd) {
                this.scrollToTop();
            }
            if (window.innerWidth <= 960) {
                this.sidenav.close();
            }
        });
        this.menuService.expandActiveSubMenu(this.menuService.getMenuItems());
    }
    toggleSidenav() {
        if (!this.settings.adminSidenavIsOpened && !this.settings.adminSidenavIsPinned) {
            return; // do nothing if the button is disabled
        }
        this.sidenav.toggle();
        // this.Getplayerdetailsbyplayerid();
    }
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
                window.scrollTo(0, 0);
            });
        }
    }
    onWindowResize() {
        if (window.innerWidth <= 960) {
            this.settings.adminSidenavIsOpened = false;
            this.settings.adminSidenavIsPinned = false;
        }
        else {
            this.settings.adminSidenavIsOpened = true;
            this.settings.adminSidenavIsPinned = true;
        }
    }
    Getplayerdetailsbyplayerid() {
        if (window.sessionStorage.getItem("playerId") != null || window.sessionStorage.getItem("playerId") != undefined) {
            var playerId = window.sessionStorage.getItem("playerId");
            this.appService.getContentByPlayerId("api/PlayerDetail/GetPlayerDetailById/", playerId).subscribe(data => {
                this.PlayerDetailsList = data;
            });
        }
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef)); };
AdminComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], viewQuery: function AdminComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, hostBindings: function AdminComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resize", function AdminComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
    } }, inputs: { playerDetailsList: "playerDetailsList" }, decls: 31, vars: 9, consts: [["color", "primary", 1, "admin-toolbar", "mat-elevation-z2", "gradient-blue"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "w-100"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxShow", "false", "fxShow.gt-xs", "", 1, "logo-section"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "logo"], ["src", "assets/lg.png", "alt", "cinque terre", 1, "img1", 2, "height", "50px", "padding-left", "12%"], [2, "font-size", "13px", "margin-top", "-16px"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "end center"], [1, "w-full", "h-full", "rounded-full", "ng-star-inserted", "curplypc", 3, "src"], [1, "curplynm"], ["fxShow", "false", "fxShow.gt-xs", ""], [1, "admin-container"], ["autoFocus", "false", 1, "admin-sidenav", "mat-elevation-z6", 3, "opened", "mode"], ["sidenav", ""], [1, "flex", "flex-col", "items-center", "w-full", "p-4", "ng-tns-c56-5"], [1, "relative", "w-24", "h-24", 2, "margin", "1.5rem 0rem 0rem 0rem", "text-align", "center"], ["src", "assets/images/profile/admins.png", 1, "w-full", "h-full", "rounded-full", "ng-star-inserted", 2, "width", "75px"], [1, "flex", "flex-col", "items-center", "justify-center", "w-full", "mt-6", 2, "margin", "0rem 0rem 1.5rem 0rem"], [1, "w-full", "whitespace-nowrap", "text-ellipsis", "overflow-hidden", "text-center", "leading-normal", "font-medium", 2, "color", "white"], [3, "menuItems", "menuParentId"], ["mat-icon-button", "", 3, "click"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "sup", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, AdminComponent_button_8_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "app-fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "app-messages", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "app-user-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-drawer-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-drawer", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "perfect-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "app-admin-menu", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isStartingPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.PlayerDetailsList.profileImageFilePath, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.PlayerDetailsList.playerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("opened", ctx.settings.adminSidenavIsOpened)("mode", ctx.settings.adminSidenavIsPinned ? "side" : "over");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.sessionuserfullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("(", ctx.sessionuserrole, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("menuItems", ctx.menuItems)("menuParentId", 0);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultShowHideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_4__.FullScreenComponent, _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_5__.MessagesComponent, _components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_6__.UserMenuComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatDrawer, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__.PerfectScrollbarComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__.MenuComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatDrawerContent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon], styles: [".admin-sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 202px;\n  border: none !important;\n  padding-top: 56px;\n  bottom: 0;\n  top: 0;\n}\n.admin-sidenav[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin-left: 178px;\n}\n.admin-sidenav[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n.admin-sidenav[_ngcontent-%COMP%]   .vertical-menu-wrapper[_ngcontent-%COMP%] {\n  height: calc(100% - 122px);\n}\n.admin-toolbar[_ngcontent-%COMP%] {\n  height: 56px;\n  position: fixed;\n  z-index: 9;\n}\n.admin-container[_ngcontent-%COMP%]   .mat-drawer-content[_ngcontent-%COMP%] {\n  padding: 0px;\n  padding-top: 64px;\n  box-sizing: border-box;\n  min-height: 100vh;\n}\n.pin[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  fill: currentColor;\n}\n.search-bar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 28px;\n  border: none;\n  padding: 0;\n  border-radius: 15px;\n  outline: none;\n  color: #444;\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s;\n}\n.search-bar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.show[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  width: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5zY3NzIiwiLi5cXHRoZW1lXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkNIbUI7RURJbkIsU0FBQTtFQUNBLE1BQUE7QUFESjtBQUVJO0VBQ0ksa0JBQUE7QUFBUjtBQUVJO0VBQ0ksYUFBQTtBQUFSO0FBRUk7RUFDSSwwQkFBQTtBQUFSO0FBSUE7RUFDSSxZQ2xCbUI7RURtQm5CLGVBQUE7RUFDQSxVQUFBO0FBREo7QUFRSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFMUjtBQVNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVdRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBUlo7QUFTWTtFQUNHLGNBQUE7RUFDQSxVQUFBO0FBUGYiLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uYWRtaW4tc2lkZW5hdntcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIHdpZHRoOiAkYWRtaW4tc2lkZW5hdi13aWR0aDtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogJGFkbWluLXRvb2xiYXItaGVpZ2h0OyBcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwO1xuICAgIC5jbG9zZXtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE3OHB4O1xuICAgIH1cbiAgICAuZGl2aWRlcntcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICB9XG4gICAgLnZlcnRpY2FsLW1lbnUtd3JhcHBlcntcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMjJweCk7XG4gICAgfVxufVxuXG4uYWRtaW4tdG9vbGJhcntcbiAgICBoZWlnaHQ6ICRhZG1pbi10b29sYmFyLWhlaWdodDsgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk7XG4gICAgLy8gLmxvZ28tc2VjdGlvbntcbiAgICAvLyAgICAgd2lkdGg6ICRhZG1pbi1zaWRlbmF2LXdpZHRoIC0gMTZweDtcbiAgICAvLyB9XG59XG5cbi5hZG1pbi1jb250YWluZXJ7IFxuICAgIC5tYXQtZHJhd2VyLWNvbnRlbnR7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgcGFkZGluZy10b3A6ICRhZG1pbi10b29sYmFyLWhlaWdodCArIDhweDsgXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIH1cbn1cblxuLnBpbntcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbn1cblxuLnNlYXJjaC1iYXJ7XG4gICAgZm9ybXtcbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgICAmLnNob3d7XG4gICAgICAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgICAgICAgIHdpZHRoOjAycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgICAgXG4gICAgfVxufSIsIiRmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuJHRoZW1lLW1heC13aWR0aDogMTMwMHB4O1xuXG4kYWRtaW4tdG9vbGJhci1oZWlnaHQ6IDU2cHg7XG4kYWRtaW4tc2lkZW5hdi13aWR0aDogMjAycHg7XG4kc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDogMTU2cHg7Il19 */"] });


/***/ }),

/***/ 7095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-input-file */ 386);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.component */ 1034);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu/menu.component */ 1296);
/* harmony import */ var _components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user-menu/user-menu.component */ 7492);
/* harmony import */ var _components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/fullscreen/fullscreen.component */ 9483);
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/messages/messages.component */ 7912);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ 164);
/* harmony import */ var src_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/auth.guard */ 7397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);














const config = {
    fileAccept: '*'
};
const routes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_1__.AdminComponent, canActivate: [src_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard], children: [
            { path: 'dashboard', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 1052)).then(m => m.DashboardModule), data: { breadcrumb: '' } },
            { path: 'setting', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin_setting_setting_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./setting/setting.module */ 4836)).then(m => m.SettingModule), data: { breadcrumb: 'setting' } },
            { path: 'superadmin', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("default-src_app_shared_confirm-dialog_confirm-dialog_component_ts-src_app_shared_ok-dialog_ok-d0d511"), __webpack_require__.e("src_app_admin_superadmin_superadmin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./superadmin/superadmin.module */ 7017)).then(m => m.SuperadminModule), data: { breadcrumb: 'superadmin', allowedRoles: [1] } },
            { path: 'contentadmin', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("default-src_app_shared_confirm-dialog_confirm-dialog_component_ts-src_app_shared_ok-dialog_ok-d0d511"), __webpack_require__.e("src_app_admin_contentadmin_contentadmin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./contentadmin/contentadmin.module */ 9994)).then(m => m.ContentadminModule), data: { breadcrumb: 'content admin', allowedRoles: [2] } },
            { path: 'qualityassurance', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("src_app_admin_qualityassurance_qualityassurance_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./qualityassurance/qualityassurance.module */ 4425)).then(m => m.QaModule), data: { breadcrumb: 'quality assurance', allowedRoles: [8] } },
            { path: 'salespersonadmin', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("default-src_app_shared_confirm-dialog_confirm-dialog_component_ts-src_app_shared_ok-dialog_ok-d0d511"), __webpack_require__.e("src_app_admin_salespersonadmin_salespersonadmin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./salespersonadmin/salespersonadmin.module */ 7712)).then(m => m.SalespersonadminModule), data: { breadcrumb: 'sales person admin', allowedRoles: [3] } },
            { path: 'im10salesadmin', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("default-src_app_shared_confirm-dialog_confirm-dialog_component_ts-src_app_shared_ok-dialog_ok-d0d511"), __webpack_require__.e("src_app_admin_im10salesadmin_im10salesadmin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./im10salesadmin/im10salesadmin.module */ 1503)).then(m => m.Im10salesadminModule), data: { breadcrumb: 'i m 10 sales admin', allowedRoles: [10] } },
            { path: 'playerrepresentativeadmin', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("default-src_app_shared_confirm-dialog_confirm-dialog_component_ts-src_app_shared_ok-dialog_ok-d0d511"), __webpack_require__.e("src_app_admin_playerrepresentativeadmin_playerrepresentativeadmin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./playerrepresentativeadmin/playerrepresentativeadmin.module */ 484)).then(m => m.PlayerrepresentativeadminModule), data: { breadcrumb: 'player representative admin', allowedRoles: [7] } },
            { path: 'itsupportadmin', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("src_app_admin_itsupportadmin_itsupportadmin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./itsupportadmin/itsupportadmin.module */ 4073)).then(m => m.ItsupportadminModule), data: { breadcrumb: 'it support admin', allowedRoles: [6] } },
            { path: 'im10marketingcampaigns', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("default-src_app_shared_confirm-dialog_confirm-dialog_component_ts-src_app_shared_ok-dialog_ok-d0d511"), __webpack_require__.e("src_app_admin_im10marketingcampaigns_im10marketingcampaigns_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./im10marketingcampaigns/im10marketingcampaigns.module */ 1415)).then(m => m.Im10marketingcampaignsModule), data: { breadcrumb: 'i m 10 marketing campaign', allowedRoles: [11] } },
            { path: 'endorsementmanageradmin', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("default-src_app_shared_confirm-dialog_confirm-dialog_component_ts-src_app_shared_ok-dialog_ok-d0d511"), __webpack_require__.e("src_app_admin_endorsementmanageradmin_endorsementmanageradmin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./endorsementmanageradmin/endorsementmanageradmin.module */ 3441)).then(m => m.EndorsementmanageradminModule), data: { breadcrumb: 'endorsement manager admin', allowedRoles: [4] } },
        ]
    }
];
class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ngx_input_file__WEBPACK_IMPORTED_MODULE_11__.InputFileModule.forRoot(config),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_1__.AdminComponent,
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent,
        _components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_3__.UserMenuComponent,
        _components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_4__.FullScreenComponent,
        _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_5__.MessagesComponent,
        _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_input_file__WEBPACK_IMPORTED_MODULE_11__.InputFileModule] }); })();


/***/ }),

/***/ 164:
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/breadcrumb/breadcrumb.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.service */ 9442);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BreadcrumbComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", i_r6 == ctx_r2.breadcrumbs.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](breadcrumb_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", i_r6 != ctx_r2.breadcrumbs.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](breadcrumb_r5.name);
} }
function BreadcrumbComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BreadcrumbComponent_div_0_a_3_Template, 3, 0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BreadcrumbComponent_div_0_div_4_Template, 5, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.router.url != "/admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.breadcrumbs);
} }
class BreadcrumbComponent {
    constructor(appSettings, router, activatedRoute, title, menuService) {
        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.menuService = menuService;
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
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                });
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }
    closeSubMenus() {
        this.menuService.closeAllSubMenus();
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService)); };
BreadcrumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 1, vars: 1, consts: [["fxLayout", "row wrap", 4, "ngIf"], ["fxLayout", "row wrap"], ["fxFlex", "100", 1, "p-1"], ["fxLayout", "row", 1, "breadcrumb"], ["class", "breadcrumb-item", "fxLayout", "row", "fxLayoutAlign", "start center", 3, "click", 4, "ngIf"], ["class", "breadcrumb-item", "fxLayout", "row", "fxLayoutAlign", "start center", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "breadcrumb-item", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "breadcrumb-item"], [3, "hidden"], [1, "breadcrumb-title", 2, "color", "#1976d2", 3, "hidden"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BreadcrumbComponent_div_0_Template, 5, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.router.url != "/admin");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon], styles: [".breadcrumb[_ngcontent-%COMP%] {\n  padding: 4px;\n  border-radius: 0px;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n  padding: 0 6px;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-title.active[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]:before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  content: \"/\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0kscUJBQUE7QUFFUjtBQUNJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNSO0FBQ0k7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFDSTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFDUiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWJ7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBhe1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIC8vIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgICAubWF0LWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMCA2cHg7XG4gICAgfVxuICAgIC5icmVhZGNydW1iLXRpdGxlLmFjdGl2ZXtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgLmJyZWFkY3J1bWItaXRlbSsuYnJlYWRjcnVtYi1pdGVtOmJlZm9yZXtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbiAgICAgICAgY29udGVudDogXCIvXCI7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 9483:
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/fullscreen/fullscreen.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullScreenComponent": () => (/* binding */ FullScreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 2529);




const _c0 = ["expand"];
const _c1 = ["compress"];
function FullScreenComponent_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FullScreenComponent_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", null, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "fullscreen_exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const document = window.document;
class FullScreenComponent {
    constructor() {
        this.toggle = false;
    }
    requestFullscreen(elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    }
    ;
    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    }
    ;
    getFullscreen() {
        if (this.expand) {
            this.requestFullscreen(document.documentElement);
        }
        if (this.compress) {
            this.exitFullscreen();
        }
    }
    onFullScreenChange() {
        let fullscreenElement = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement;
        if (fullscreenElement != null) {
            this.toggle = true;
        }
        else {
            this.toggle = false;
        }
    }
}
FullScreenComponent.ɵfac = function FullScreenComponent_Factory(t) { return new (t || FullScreenComponent)(); };
FullScreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullScreenComponent, selectors: [["app-fullscreen"]], viewQuery: function FullScreenComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.expand = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.compress = _t.first);
    } }, hostBindings: function FullScreenComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullScreenComponent_click_HostBindingHandler() { return ctx.getFullscreen(); })("resize", function FullScreenComponent_resize_HostBindingHandler() { return ctx.onFullScreenChange(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 3, vars: 2, consts: [["mat-icon-button", "", 1, "full-screen"], [4, "ngIf"], ["expand", ""], ["compress", ""]], template: function FullScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FullScreenComponent_mat_icon_1_Template, 3, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FullScreenComponent_mat_icon_2_Template, 3, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.toggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggle);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon], encapsulation: 2 });


/***/ }),

/***/ 1296:
/*!*********************************************************!*\
  !*** ./src/app/admin/components/menu/menu.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.service */ 9442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ 1182);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 325);










const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return { exact: false }; };
const _c2 = function () { return { exact: true }; };
function MenuComponent_div_0_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_div_0_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.onClick(menu_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, menu_r1.routerLink))("routerLinkActiveOptions", menu_r1.parentId != 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c2))("id", "menu-item-" + menu_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 5, menu_r1.title));
} }
function MenuComponent_div_0_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_div_0_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.onClick(menu_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "menu-item-" + menu_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", menu_r1.href || "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", menu_r1.target || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 5, menu_r1.title));
} }
function MenuComponent_div_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_div_0_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.onClick(menu_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "menu-item-" + menu_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, menu_r1.title));
} }
function MenuComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-admin-menu", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "sub-menu-" + menu_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("menuItems", ctx_r5.menuItems)("menuParentId", menu_r1.id);
} }
function MenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_div_0_a_1_Template, 6, 11, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_div_0_a_2_Template, 6, 7, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_div_0_a_3_Template, 8, 5, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuComponent_div_0_div_4_Template, 2, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r1.routerLink && !menu_r1.hasSubMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r1.href && !menu_r1.subMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r1.hasSubMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r1.hasSubMenu);
} }
class MenuComponent {
    constructor(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        //this.parentMenu = this.menuItems.filter(); 
        this.parentMenu = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
    onClick(menuId) {
        this.menuService.toggleMenuItem(menuId);
        this.menuService.closeOtherSubMenus(this.menuItems, menuId);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService)); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-admin-menu"]], inputs: { menuItems: "menuItems", menuParentId: "menuParentId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService])], decls: 1, vars: 1, consts: [["class", "menu-item mainmenu", 4, "ngFor", "ngForOf"], [1, "menu-item", "mainmenu"], ["mat-button", "", "fxLayout", "row", "fxLayoutAlign", "start center", "routerLinkActive", "active-link", 3, "routerLink", "routerLinkActiveOptions", "id", "click", 4, "ngIf"], ["mat-button", "", "fxLayout", "row", "fxLayoutAlign", "start center", 3, "id", "click", 4, "ngIf"], ["class", "sub-menu", 3, "id", 4, "ngIf"], ["mat-button", "", "fxLayout", "row", "fxLayoutAlign", "start center", "routerLinkActive", "active-link", 3, "routerLink", "routerLinkActiveOptions", "id", "click"], [1, "menu-icon"], [1, "menu-title"], ["mat-button", "", "fxLayout", "row", "fxLayoutAlign", "start center", 3, "id", "click"], [1, "menu-expand-icon", "transition-2"], [1, "sub-menu", 3, "id"], [3, "menuItems", "menuParentId"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MenuComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.parentMenu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, MenuComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 13px;\n}\n\n.menu-item .mat-button {\n  padding: 0;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  width: 100%;\n  font-weight: 400;\n  border-radius: 0;\n}\n\n.menu-item .mat-button .menu-icon {\n  margin-right: 3px;\n  padding: 5px;\n  border-radius: 50%;\n}\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n  transform: rotate(180deg);\n}\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px;\n}\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n\n.sub-menu .sub-menu .mat-button {\n  padding-left: 40px;\n}\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 60px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 80px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 100px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 120px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 140px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 160px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 180px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 200px;\n}\n\n.sub-menu .mat-button {\n  padding-left: 20px;\n}\n\n.sub-menu.show {\n  max-height: 900px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFx0aGVtZVxcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBREo7O0FBS0k7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRlI7O0FBR1E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURaOztBQUlZO0VBR0kseUJBQUE7QUFGaEI7O0FBTUk7RUFDSSxrQkFBQTtBQUpSOztBQVFBO0VBRUksYUFBQTtFQUNBLGdCQUFBO0VBR0EscUNBQUE7QUFOSjs7QUNwQlE7RUFLUSxrQkFBQTtBRGtCaEI7O0FDdkJRO0VBS1Esa0JBQUE7QURxQmhCOztBQzFCUTtFQUtRLGtCQUFBO0FEd0JoQjs7QUM3QlE7RUFLUSxtQkFBQTtBRDJCaEI7O0FDaENRO0VBS1EsbUJBQUE7QUQ4QmhCOztBQ25DUTtFQUtRLG1CQUFBO0FEaUNoQjs7QUN0Q1E7RUFLUSxtQkFBQTtBRG9DaEI7O0FDekNRO0VBS1EsbUJBQUE7QUR1Q2hCOztBQzVDUTtFQUtRLG1CQUFBO0FEMENoQjs7QUFwQkk7RUFDSSxrQkFBQTtBQXNCUjs7QUFwQkk7RUFDSSxpQkFBQTtFQUdBLG9DQUFBO0FBc0JSIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvc3R5bGVzL21peGluc1wiO1xuXG4ubWVudS1leHBhbmQtaWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxM3B4O1xufVxuXG4ubWVudS1pdGVteyAgICBcbiAgICAubWF0LWJ1dHRvbntcbiAgICAgICAgcGFkZGluZzogMDsgICAgXG4gICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2cHg7IFxuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgLm1lbnUtaWNvbntcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyBcbiAgICAgICAgfVxuICAgICAgICAmLmV4cGFuZGVke1xuICAgICAgICAgICAgLm1lbnUtZXhwYW5kLWljb257XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICB9ICAgIFxufVxuXG4uc3ViLW1lbnV7XG4gICAgQGluY2x1ZGUgYWRtaW4tbWVudS1sZXZlbC1wYWRkaW5nKCdsdHInKTtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgICAgXG4gICAgLm1hdC1idXR0b257XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDsgICAgICBcbiAgICB9IFxuICAgICYuc2hvd3tcbiAgICAgICAgbWF4LWhlaWdodDogOTAwcHg7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcbiAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xuICAgIH0gICAgXG59IiwiQG1peGluIG1lbnUtbGV2ZWwtcGFkZGluZygpe1xuICAgICRlbGVtOiAnJztcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoIDEwIHtcbiAgICAgICAgJGVsZW06IGlmKCRpID09IDIsIFwiLnN1Yi1tZW51XCIsIHNlbGVjdG9yLW5lc3QoJGVsZW0sIFwiLnN1Yi1tZW51XCIpKTsgICAgICBcbiAgICAgICAgI3skZWxlbSArICcgLm1hdC1idXR0b24nfSB7IFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4ICsgKDIwcHggKiAkaSk7IFxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gYWRtaW4tbWVudS1sZXZlbC1wYWRkaW5nKCRkaXJlY3Rpb24pe1xuICAgICRlbGVtOiAnJztcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoIDEwIHtcbiAgICAgICAgJGVsZW06IGlmKCRpID09IDIsIFwiLnN1Yi1tZW51XCIsIHNlbGVjdG9yLW5lc3QoJGVsZW0sIFwiLnN1Yi1tZW51XCIpKTsgICAgICBcbiAgICAgICAgI3skZWxlbSArICcgLm1hdC1idXR0b24nfSB7IFxuICAgICAgICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJydGxcIiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweCAqICRpOyBcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBAZWxzZXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHggKiAkaTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"], encapsulation: 2 });


/***/ }),

/***/ 5932:
/*!*****************************************************!*\
  !*** ./src/app/admin/components/menu/menu.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
class Menu {
    constructor(id, title, routerLink, href, icon, target, hasSubMenu, parentId) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.icon = icon;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
    }
}


/***/ }),

/***/ 9442:
/*!*******************************************************!*\
  !*** ./src/app/admin/components/menu/menu.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ 4838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);




class MenuService {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    getMenuItems() {
        // return menuItems;
        var user = JSON.parse(sessionStorage.getItem("auth-user"));
        //Super Admin Menu
        if (user.roleId == 1) {
            return _menu__WEBPACK_IMPORTED_MODULE_0__.menusuperadmin;
        }
        //Content Admin Menu
        if (user.roleId == 2) {
            return _menu__WEBPACK_IMPORTED_MODULE_0__.menucontentadmin;
        }
        //QA Admin Menu
        if (user.roleId == 8) {
            return _menu__WEBPACK_IMPORTED_MODULE_0__.menuqa;
        }
        //Sales Person Admin User Menu
        if (user.roleId == 3) {
            return _menu__WEBPACK_IMPORTED_MODULE_0__.menusalespersonadminuser;
        }
        //Im 10 sales Admin Menu
        if (user.roleId == 10) {
            return _menu__WEBPACK_IMPORTED_MODULE_0__.menuim10salesadmin;
        }
        //Player Representative Admin Menu
        if (user.roleId == 7) {
            return _menu__WEBPACK_IMPORTED_MODULE_0__.menuplayerrepresentativeadmin;
        }
        //IT Support Admin Menu
        if (user.roleId == 6) {
            return _menu__WEBPACK_IMPORTED_MODULE_0__.menuitsupportadmin;
        }
        //IM 10 Marketing Campaigns Menu
        if (user.roleId == 11) {
            return _menu__WEBPACK_IMPORTED_MODULE_0__.menuim10marketingcampaigns;
        }
        //Endorsment Manager Admin Menu
        if (user.roleId == 4) {
            return _menu__WEBPACK_IMPORTED_MODULE_0__.menuendorsementmanageradmin;
        }
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
        _menu__WEBPACK_IMPORTED_MODULE_0__.menuItems.forEach(item => {
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
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
MenuService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4838:
/*!***********************************************!*\
  !*** ./src/app/admin/components/menu/menu.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuItems": () => (/* binding */ menuItems),
/* harmony export */   "menusuperadmin": () => (/* binding */ menusuperadmin),
/* harmony export */   "menucontentadmin": () => (/* binding */ menucontentadmin),
/* harmony export */   "menuqa": () => (/* binding */ menuqa),
/* harmony export */   "menusalespersonadminuser": () => (/* binding */ menusalespersonadminuser),
/* harmony export */   "menuim10salesadmin": () => (/* binding */ menuim10salesadmin),
/* harmony export */   "menuplayerrepresentativeadmin": () => (/* binding */ menuplayerrepresentativeadmin),
/* harmony export */   "menuitsupportadmin": () => (/* binding */ menuitsupportadmin),
/* harmony export */   "menuim10marketingcampaigns": () => (/* binding */ menuim10marketingcampaigns),
/* harmony export */   "menuendorsementmanageradmin": () => (/* binding */ menuendorsementmanageradmin)
/* harmony export */ });
/* harmony import */ var _menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.model */ 5932);

const menuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(10, 'Dashboard', '/admin/dashboard/dashboard', null, 'laptop', null, false, 0),
];
//SuperAdminMenu
const menusuperadmin = [
    //Superadmin Menu Start//
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(10, 'Dashboard', '/admin/superadmin/dashboard', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(11, 'User', '/admin/superadmin/listuser', null, 'list', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(12, 'User Player', '/admin/superadmin/listuserplayer', null, 'list', null, false, 0),
    //Superadmin Menu End//
];
//ContentAdminMenu
const menucontentadmin = [
    //Contentadmin Menu Start//
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(13, 'Dashboard', '/admin/contentadmin/dashboard', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(14, 'Content', '/admin/contentadmin/listcontent', null, 'list', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(15, 'Content Update', '/admin/contentadmin/listcontentupdate', null, 'list', null, false, 0),
    //Contentadmin Menu End//
];
//QualityAssuranceAdmin Menu
const menuqa = [
    //QualityAssuranceAdmin Menu Start/
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(16, 'Dashboard', '/admin/qualityassurance/dashboard', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(17, 'Content', '/admin/qualityassurance/listcontent', null, 'list', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(18, 'Advertise Content', '/admin/qualityassurance/listadvcontent', null, 'list', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(19, 'Content Update', '/admin/qualityassurance/listcontentupdate', null, 'list', null, false, 0),
    //QualityAssuranceAdmin Menu End//
];
//SalesPesronAdmin Menu
const menusalespersonadminuser = [
    //Salespersonadmin Menu Start//
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(20, 'Dashboard', '/admin/salespersonadmin/dashboard', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(21, 'Advertise Content', '/admin/salespersonadmin/listadvertisecontent', null, 'list', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(22, 'Advertise Ads On', '/admin/salespersonadmin/listadvertiseaddson', null, 'list', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(23, 'Listing List', '/admin/salespersonadmin/listlisting', null, 'list', null, false, 0),
    //Salespersonadmin Menu End//
];
//im10salesadmin Menu
const menuim10salesadmin = [
    //im10salesadmin Menu Start//
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(24, 'Dashboard', '/admin/im10salesadmin/dashboard', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(25, 'Player List', '/admin/im10salesadmin/listplayerdetails', null, 'list', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(35, 'Player Data', '/admin/im10salesadmin/listplayerdata', null, 'list', null, false, 0),
    //im10salesadmin Menu End//
];
//Playerrepresentativeadmin Menu
const menuplayerrepresentativeadmin = [
    //playerrepresentativeadmin Menu Start//
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(26, 'Dashboard', '/admin/playerrepresentativeadmin/dashboard', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(27, 'Content Comment List', '/admin/playerrepresentativeadmin/listcontentcomment', null, 'list', null, false, 0),
    //playerrepresentativeadmin Menu End//
];
const menuitsupportadmin = [
    //itsupportadmin Menu Start//
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(28, 'Dashboard', '/admin/itsupportadmin/dashboard', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(29, 'Error/ Issue log List', '/admin/itsupportadmin/listerrorissuelog', null, 'list', null, false, 0),
    //itsupportadmin Menu End//
];
//im10marketingcampaigns Menu 
const menuim10marketingcampaigns = [
    //im10marketingcampaigns Menu Start//
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(30, 'Dashboard', '/admin/im10marketingcampaigns/dashboard', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(31, 'Campaign', '/admin/im10marketingcampaigns/listcampaing', null, 'list', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(32, 'Social Media', '/admin/im10marketingcampaigns/addcampaignsocialmedia', null, 'list', null, false, 0),
    //im10marketingcampaigns Menu End//
];
//EdnorsementManagerAdmin Menu
const menuendorsementmanageradmin = [
    //endorsementmanageradmin Menu Start//
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(33, 'Dashboard', '/admin/endorsementmanageradmin/dashboard', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(34, 'Player Endorsement', '/admin/endorsementmanageradmin/listplayerendorsement', null, 'list', null, false, 0),
    //endorsementmanageradmin Menu End//
];


/***/ }),

/***/ 7912:
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/messages/messages.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesComponent": () => (/* binding */ MessagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.service */ 6007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




class MessagesComponent {
    constructor(messagesService) {
        this.messagesService = messagesService;
        this.selectedTab = 1;
        this.messages = messagesService.getMessages();
        this.files = messagesService.getFiles();
        this.meetings = messagesService.getMeetings();
    }
    ngOnInit() {
    }
    openMessagesMenu() {
        this.trigger.openMenu();
        this.selectedTab = 0;
    }
    onMouseLeave() {
        this.trigger.closeMenu();
    }
    stopClickPropagate(event) {
        event.stopPropagation();
        event.preventDefault();
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_messages_service__WEBPACK_IMPORTED_MODULE_0__.MessagesService)); };
MessagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], viewQuery: function MessagesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuTrigger, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_messages_service__WEBPACK_IMPORTED_MODULE_0__.MessagesService])], decls: 0, vars: 0, template: function MessagesComponent_Template(rf, ctx) { }, styles: [".messages .mat-tab-label {\n  min-width: 93.3px;\n  height: 40px;\n}\n.messages .content {\n  padding: 0;\n  height: 250px;\n}\n.messages img {\n  margin-right: 8px;\n  border-radius: 4px;\n}\n.messages span.name {\n  text-transform: capitalize;\n  font-size: 13px;\n  line-height: 22px;\n}\n.messages span.info {\n  font-size: 12px;\n  opacity: 0.8;\n  line-height: 22px;\n}\n.messages span.text {\n  font-size: 11px;\n  line-height: 14px;\n  white-space: initial;\n  text-align: left;\n}\n.messages .mat-button {\n  padding: 8px;\n}\n.messages .mat-button .mat-button-wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\n.messages .mat-button .mat-icon {\n  height: 16px;\n  font-size: 12px;\n  width: 12px;\n  vertical-align: middle;\n}\n.messages .row-1 {\n  box-shadow: 0 0 5px #ccc;\n  border-radius: 4px;\n  padding: 2px 13px;\n  margin-right: 8px;\n}\n.mat-menu-panel {\n  width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBQVI7QUFFSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FBQVI7QUFFSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVJO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUVJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFSO0FBRUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQVI7QUFFSTtFQUNJLFlBQUE7QUFBUjtBQUNRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDWjtBQUNRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDWjtBQUVJO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUlBO0VBQ0ksWUFBQTtBQURKIiwiZmlsZSI6Im1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Vze1xuICAgIC5tYXQtdGFiLWxhYmVse1xuICAgICAgICBtaW4td2lkdGg6IDkzLjNweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbiAgICAuY29udGVudHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgICBzcGFuLm5hbWV7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIH1cbiAgICBzcGFuLmluZm97XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICB9XG4gICAgc3Bhbi50ZXh0e1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9ICBcbiAgICAubWF0LWJ1dHRvbntcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAubWF0LWJ1dHRvbi13cmFwcGVye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgfVxuICAgICAgICAubWF0LWljb257XG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJvdy0xe1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgcGFkZGluZzogMnB4IDEzcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cbn1cblxuLm1hdC1tZW51LXBhbmVsIHtcbiAgICB3aWR0aDogMTYwcHg7XG59Il19 */"], encapsulation: 2 });


/***/ }),

/***/ 6007:
/*!***************************************************************!*\
  !*** ./src/app/admin/components/messages/messages.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesService": () => (/* binding */ MessagesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class MessagesService {
    constructor() {
        this.messages = [
            {
                name: 'ashley',
                text: 'After you get up and running, you can place Font Awesome icons just about...',
                time: '1 min ago'
            },
            {
                name: 'michael',
                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
                time: '2 hrs ago'
            },
            {
                name: 'julia',
                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
                time: '10 hrs ago'
            },
            {
                name: 'bruno',
                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
                time: '1 day ago'
            },
            {
                name: 'tereza',
                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
                time: '1 day ago'
            },
            {
                name: 'adam',
                text: 'Need some support to reach your goals? Apply for scholarships across...',
                time: '2 days ago'
            },
            {
                name: 'michael',
                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
                time: '1 week ago'
            }
        ];
        this.files = [];
        this.meetings = [
            {
                day: '09',
                month: 'May',
                title: 'Meeting with Bruno',
                text: 'Fusce ut condimentum velit, quis egestas eros. Quisque sed condimentum neque.',
                color: 'danger'
            },
            {
                day: '15',
                month: 'May',
                title: 'Training course',
                text: 'Fusce arcu tortor, tempor aliquam augue vel, consectetur vehicula lectus.',
                color: 'primary'
            },
            {
                day: '12',
                month: 'June',
                title: 'Dinner with Ashley',
                text: 'Curabitur rhoncus facilisis augue sed fringilla.',
                color: 'info'
            },
            {
                day: '14',
                month: 'June',
                title: 'Sport time',
                text: 'Vivamus tristique enim eros, ac ultricies sem ultrices vitae.',
                color: 'warning'
            },
            {
                day: '29',
                month: 'July',
                title: 'Birthday of Julia',
                text: 'Nam porttitor justo nec elit efficitur vestibulum.',
                color: 'success'
            }
        ];
    }
    getMessages() {
        return this.messages;
    }
    getFiles() {
        return this.files;
    }
    getMeetings() {
        return this.meetings;
    }
}
MessagesService.ɵfac = function MessagesService_Factory(t) { return new (t || MessagesService)(); };
MessagesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessagesService, factory: MessagesService.ɵfac });


/***/ }),

/***/ 7492:
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/user-menu/user-menu.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserMenuComponent": () => (/* binding */ UserMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ 7361);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);








class UserMenuComponent {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.userImage = 'assets/images/others/admin.jpg';
        this.logout = () => {
            var user = JSON.parse(sessionStorage.getItem("auth-user"));
            this._authService.logout();
            this._router.routeReuseStrategy.shouldReuseRoute = () => false;
            this._router.onSameUrlNavigation = 'reload';
            sessionStorage.clear();
        };
    }
    ngOnInit() {
    }
}
UserMenuComponent.ɵfac = function UserMenuComponent_Factory(t) { return new (t || UserMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
UserMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserMenuComponent, selectors: [["app-user-menu"]], decls: 22, vars: 2, consts: [["mat-icon-button", "", 3, "matMenuTriggerFor"], ["userMenuTrigger", "matMenuTrigger"], [1, "toolbar-dropdown-menu", "user-menu", 3, "overlapTrigger"], ["userMenu", "matMenu"], [3, "mouseleave"], ["color", "primary"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "user-info"], [2, "font-size", "14px"], ["mat-menu-item", "", "routerLink", "/admin/setting/passwordchange"], ["aria-hidden", "true", 1, "fa", "fa-unlock-alt"], [1, "divider"], ["mat-menu-item", "", "routerLink", "../login", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-power-off"]], template: function UserMenuComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-menu", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseleave", function UserMenuComponent_Template_span_mouseleave_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return _r0.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-toolbar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserMenuComponent_Template_a_click_17_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("overlapTrigger", false);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuItem], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1573:
/*!***************************************************!*\
  !*** ./src/app/services/token-storage.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map