import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { UserForAuthenticationDto } from 'src/app/interfaces/user/UserForAuthenticationDto.model';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { AppService } from 'src/app/app.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public phoneLoginFrom: FormGroup;
  public errorMessage: string = '';
  public showError: boolean;
  public IsShow: boolean;
  private _returnUrl: string;
  hide = true;
  labelName: string;
  isLoggedIn = false;
  userId: string | any;
  toggle: boolean = true;
  user: any;
  public roleId: Number;

  constructor(private _authService: AuthenticationService, public appService: AppService, private _router: Router,
    private _route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roleId = this.tokenStorage.getUser().roleId;
      this.userId = this.tokenStorage.getUser().userId;
      this._router.routeReuseStrategy.shouldReuseRoute = () => false;
      this._router.onSameUrlNavigation = 'reload';
    }
    this.loginForm = new FormGroup({
      emailId: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    })
    this._returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
    this.IsShow = true;
  }

  toggleView(change: MatButtonToggleChange) {
    this.toggle = change.value;
  }

  public validateControl = (controlName: string) => {
    return this.loginForm.controls[controlName].invalid && this.loginForm.controls[controlName].touched
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName)
  }

  selectedTabValue(changeEvent: MatTabChangeEvent) {
    this.labelName = changeEvent.tab.textLabel;
  }

  blockSpaces(event: KeyboardEvent) {
    if (event.key === ' ') {
      event.preventDefault();
    }
  }

  public loginUser = (loginFormValue) => {
    this.showError = false;
    const login = { ...loginFormValue };
    const userForAuth: UserForAuthenticationDto = {
      emailId: login.emailId,
      password: login.password
    }

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

        },
          (error) => {
            this.snackBar.open('Please enter valid email/password.', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
          })
    }

    else {
      this.snackBar.open("Please enter valid email/password.", '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }

  }
}
