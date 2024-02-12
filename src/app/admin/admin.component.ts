import { Component, OnInit, ViewChild, HostListener, Input, NgZone, ChangeDetectorRef } from '@angular/core';
import { AppSettings, Settings } from '../app.settings';
import { Router, NavigationEnd } from '@angular/router';
import { MenuService } from './components/menu/menu.service';
import { AppService } from '../app.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})

export class AdminComponent implements OnInit {
  @Input() playerDetailsList: any;

  public userInfo: any = [];
  sessionusername: any;
  sessionuserrole: any;
  sessionuserfullName: any;
  sessionroleId: any;
  public PlayerDetailsList: any = [];
  public isStartingPage = false;

  @ViewChild('sidenav') sidenav: any;
  public settings: Settings;
  public menuItems: Array<any>;
  public toggleSearchBar: boolean = false;
  constructor(public appSettings: AppSettings, public sessionStorage: TokenStorageService,
    public router: Router,
    private menuService: MenuService, private appService: AppService, private tokenStorage: TokenStorageService, private ngZone: NgZone, private cdr: ChangeDetectorRef) {
    this.settings = this.appSettings.settings;
    this.isStartingPage = this.router.url.endsWith('/startingpage');
  }

  ngOnInit() {
    if (window.innerWidth <= 960) {
      this.settings.adminSidenavIsOpened = false;
      this.settings.adminSidenavIsPinned = false;
      this.sessionusername = this.sessionStorage.getUser().username;
    };
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
      if (event instanceof NavigationEnd) {
        const currentUrl = this.router.url;
        if (currentUrl.endsWith('/startingpage')) {
          this.settings.adminSidenavIsOpened = false;
          this.settings.adminSidenavIsPinned = false;
          this.isStartingPage = false;
        } else {
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

  public getInfo() {
    var user = JSON.parse(sessionStorage.getItem("userID"))
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
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
      if (window.innerWidth <= 960) {
        this.sidenav.close();
      }
    });
    this.menuService.expandActiveSubMenu(this.menuService.getMenuItems());
  }

  public toggleSidenav() {
    if (!this.settings.adminSidenavIsOpened && !this.settings.adminSidenavIsPinned) {
      return; // do nothing if the button is disabled
    }
    this.sidenav.toggle();
    // this.Getplayerdetailsbyplayerid();
  }

  public scrollToTop() {
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

  @HostListener('window:resize')
  public onWindowResize(): void {
    if (window.innerWidth <= 960) {
      this.settings.adminSidenavIsOpened = false;
      this.settings.adminSidenavIsPinned = false;
    }
    else {
      this.settings.adminSidenavIsOpened = true;
      this.settings.adminSidenavIsPinned = true;
    }
  }

  public Getplayerdetailsbyplayerid() {
    if (window.sessionStorage.getItem("playerId") != null || window.sessionStorage.getItem("playerId") != undefined) {
      var playerId = window.sessionStorage.getItem("playerId")
      this.appService.getContentByPlayerId("api/PlayerDetail/GetPlayerDetailById/", playerId).subscribe(data => {
        this.PlayerDetailsList = data;
      });
    }
  }

}
