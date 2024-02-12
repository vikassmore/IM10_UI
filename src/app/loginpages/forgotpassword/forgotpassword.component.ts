import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { emailValidator } from 'src/app/theme/utils/app-validators';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})

export class ForgotpasswordComponent implements OnInit {
  loginForm: FormGroup;
  showError = false;
  email: any;

  constructor(private _authService: AuthenticationService, public formBuilder: FormBuilder, public _router: Router, public snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.compose([Validators.required, emailValidator])],
    }, {});
  }

  // Forgotpassword will send on mail
  public forgotUser(loginFormValue): void {
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
      },
        error => {
          this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
        });
    }
  }
}
