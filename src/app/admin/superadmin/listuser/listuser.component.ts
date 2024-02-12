import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings, Settings } from 'src/app/app.settings';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router, NavigationEnd } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})

export class ListuserComponent implements OnInit {

  public UserList: any = [];
  public NewUserList: any = [];
  public settings: Settings;
  public page: any;
  public count = 8;
  userId: string | any;
  public username: any;
  public fullName: any;
  public searchterm: any;
  public mobileNo: any;
  public searchText: string;

  constructor(public appService: AppService, public dialog: MatDialog, public snackBar: MatSnackBar, private tokenStorage: TokenStorageService, public router: Router, public appSettings: AppSettings) {
    this.settings = this.appSettings.settings;

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url.includes('/addedituser')) {
        }
      });
  }

  ngOnInit(): void {
    this.getUserList();
  }

  public getUserList() {
    this.appService.getUserList('api/User/GetAllUser').subscribe(data => {
      this.UserList = data;
      this.NewUserList = data;
    });
  }

  ///Search
  Search() {
    if (this.username === "") {
      this.getUserList();
    }
    else {

      this.UserList = this.NewUserList.filter(res => {
        return (
          res.fullName.toLocaleLowerCase().includes(this.username.toLocaleLowerCase()) ||
          res.emailId.toLocaleLowerCase().includes(this.username.toLocaleLowerCase()) ||
          res.name.toLocaleLowerCase().includes(this.username.toLocaleLowerCase()) ||
          res.mobileNo.includes(this.username)
        );
      });
      this.page = 1;
    }
  }

  ///pagination
  public onPageChanged(event) {
    this.page = event;
    window.scrollTo(0, 0);
  }

  ///Delete User
  public deleteservice(user: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      disableClose: true,

      data: {
        title: "Confirm Action",
        message: "Are you sure you want delete this user?"
      }

    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        const index: number = this.UserList.indexOf(user);
        if (index !== -1) {
          this.UserList.splice(index, 1);
          this.appService.deleteuser(`api/user/DeleteUser?userId=${user.userId}`, {}).subscribe(data => {
          });
        }
      }
    });
  }
}
