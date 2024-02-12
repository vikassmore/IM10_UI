import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})

export class UserMenuComponent implements OnInit {
  public userImage = 'assets/images/others/admin.jpg';
  constructor(private _authService: AuthenticationService, private _router: Router) { }

  ngOnInit(): void {
  }

  public logout = () => {
    var user = JSON.parse(sessionStorage.getItem("auth-user"));
    this._authService.logout();
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    sessionStorage.clear();
  }
}
