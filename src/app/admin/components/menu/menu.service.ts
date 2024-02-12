import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Menu } from './menu.model';
import {
  menuItems, menusuperadmin, menucontentadmin, menuqa, menusalespersonadminuser, menuim10salesadmin,
  menuplayerrepresentativeadmin, menuitsupportadmin, menuim10marketingcampaigns, menuendorsementmanageradmin
} from './menu';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private location: Location,
    private router: Router) { }


  public getMenuItems(): Array<Menu> {

    // return menuItems;

    var user = JSON.parse(sessionStorage.getItem("auth-user"));

    //Super Admin Menu
    if (user.roleId == 1) {
      return menusuperadmin;
    }

    //Content Admin Menu
    if (user.roleId == 2) {
      return menucontentadmin;
    }

    //QA Admin Menu
    if (user.roleId == 8) {
      return menuqa;
    }

    //Sales Person Admin User Menu
    if (user.roleId == 3) {
      return menusalespersonadminuser;
    }

    //Im 10 sales Admin Menu
    if (user.roleId == 10) {
      return menuim10salesadmin;
    }

    //Player Representative Admin Menu
    if (user.roleId == 7) {
      return menuplayerrepresentativeadmin;
    }

    //IT Support Admin Menu
    if (user.roleId == 6) {
      return menuitsupportadmin;
    }

    //IM 10 Marketing Campaigns Menu
    if (user.roleId == 11) {
      return menuim10marketingcampaigns;
    }

    //Endorsment Manager Admin Menu
    if (user.roleId == 4) {
      return menuendorsementmanageradmin;
    }

  }

  public expandActiveSubMenu(menu: Array<Menu>) {
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

  public toggleMenuItem(menuId) {
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

  public closeOtherSubMenus(menu: Array<Menu>, menuId) {
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

  public closeAllSubMenus() {
    menuItems.forEach(item => {

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
