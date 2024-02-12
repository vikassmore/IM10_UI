import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { emailValidator, matchingPasswords } from 'src/app/theme/utils/app-validators';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { changepassword } from './passwordchange.Model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-passwordchange',
  templateUrl: './passwordchange.component.html',
  styleUrls: ['./passwordchange.component.css']
})

export class PasswordchangeComponent implements OnInit {
  hide = true;
  userId: string;
  password: string;
  confirmPassword: string;
  submitted = false;
  public formdata = {};
  sessionuserId: any;

  uploadForm = new FormGroup({

    userId: new FormControl('', []),
    password: new FormControl('', [Validators.required]),
  });

  constructor(public authservise: AuthenticationService, public sessionStorage: TokenStorageService, public appService: AppService,
    public snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder) {

    this.uploadForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    },
      { validator: matchingPasswords('password', 'confirmPassword') });
  }

  public onSubmit(value) {
    this.changepassword(value);
  }
  validatePassword() {
  }

  changepassword(formData) {
    let SectorModel1: changepassword = {
      "userId": this.sessionuserId,
      "password": formData.password
    }
    this.appService.changepassword('api/user/ChangePassword', SectorModel1).subscribe((data) => {
      this.snackBar.open('Password Changed Successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
      this.router.navigate(['../dashboard'], { relativeTo: this.route });
    }, error => {
      this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    });
  }
  ngOnInit(): void {

    this.sessionuserId = this.sessionStorage.getUser().userId;
  }

}
