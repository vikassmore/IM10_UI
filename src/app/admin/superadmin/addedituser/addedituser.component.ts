import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { addedituser } from '../addedituser/addedituser.Model';
import { edituser } from '../addedituser/addedituser.Model';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';

@Component({
  selector: 'app-addedituser',
  templateUrl: './addedituser.component.html',
  styleUrls: ['./addedituser.component.css']
})

export class AddedituserComponent implements OnInit {
  public progress: number;
  public message: string;
  public form: FormGroup;
  userId: string | any;
  isActive: boolean;
  isDeleted: false;
  public RoleList = [];
  public formdata = {};
  hide = true;
  today = new Date().toISOString().split('T')[0];
  submitted = false;

  uploadForm = new FormGroup({
    userId: new FormControl('', []),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    emailId: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA0-Z9._%+-]+@[a-zA0-Z9.-]+\\.[aA-zZ]{2,4}$")]),
    mobileNo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dob: new FormControl('', [Validators.required]),
    roleId: new FormControl('', [Validators.required]),
  });

  constructor(public dialog: MatDialog, public appService: AppService, public snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.getuserbyId(this.userId);
    this.getRoleMaster();
  }

  ///getRoleMaster
  public getRoleMaster() {
    this.appService.getAllRoles("api/role/GetAllRoles").subscribe(data => {
      this.RoleList = data;
    });
  }

  blockSpaces(event: KeyboardEvent) {
    if (event.key === ' ') {
      event.preventDefault();
    }
  }

  ///Submitform
  public Submit(userObject) {
    var userId = userObject.userId
    if (userId == "") {
      this.createUser(userObject);
    }
    else {
      this.updateUser(userObject);
    }
  }

  //create new user
  public createUser(formData) {

    let DOB = new Date(formData.dob);
    let formattedDOB = new Date(DOB.getTime() - DOB.getTimezoneOffset() * 60000).toISOString();

    let AdduserModel: addedituser = {
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
    }

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

        const dialogRef = this.dialog.open(OkDialogComponent, {
          maxWidth: "500px",
          disableClose: true,
          data: {
            title: "Save Action",
            message: "User Added Successfully!"
          }
        });
        this.router.navigate(['../listuser'], { relativeTo: this.route });
      }
    }, 
    error => {
      if (error.status === 409 && error.error === "Email already exists") {
          // Handle the case where the email already exists
          this.snackBar.open('Email already exists', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
      } else {
          // Handle other errors
          this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
      }
    });
  }

  ///update existing user
  private updateUser(formData) {

    let DOB = new Date(formData.dob);
    let formattedDOB = new Date(DOB.getTime() - DOB.getTimezoneOffset() * 60000).toISOString();

    let EdituserModel: edituser = {
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
    }

    this.appService.edituser('api/user/EditUser', EdituserModel).subscribe(data => {
      if (data == "Email Id Already Exists") {
        this.snackBar.open('Email already exists', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
      }
      else if (data == "User Update Successfully. ") {

        const dialogRef = this.dialog.open(OkDialogComponent, {
          maxWidth: "500px",
          disableClose: true,
          data: {
            title: "Edit Action",
            message: "User Updated Successfully!"
          }
        });
        this.router.navigate(['/admin/superadmin/listuser'], { relativeTo: this.route });
      }
    },error => {
      if (error.status === 409 && error.error === "Email Id Already Exists") {
          // Handle the case where the email already exists
          this.snackBar.open('Email already exists', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
      } else {
          // Handle other errors
          this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
      }
    });
  }

  ///Validation for only enter char
  keyPressOnlyChar(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  ///Validation for only enter number
  keyPressOnlynum(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  ///GetUserById
  public getuserbyId(userId) {
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
