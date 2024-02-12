import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from 'src/app/app.settings';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';

@Component({
  selector: 'app-listplayerdetails',
  templateUrl: './listplayerdetails.component.html',
  styleUrls: ['./listplayerdetails.component.css']
})

export class ListplayerdetailsComponent implements OnInit {

  constructor(public appService: AppService, public dialog: MatDialog, public snackBar: MatSnackBar, private tokenStorage: TokenStorageService, public router: Router, public appSettings: AppSettings) { }

  public UserList: any = [];
  public NewUserList: any = [];
  public page: any;
  public count = 8;
  public username: any;

  ngOnInit(): void {
    this.getPlayerList()
  }

  ///getPlayerList
  public getPlayerList() {
    this.appService.getUserList('api/PlayerDetail/GetAllPlayerDetail').subscribe(data => {
      this.UserList = data;
      this.NewUserList = data;
    });
  }

  ///Search
  Search() {
    if (this.username == "") {
      this.getPlayerList();
    }
    else {
      this.UserList = this.NewUserList.filter(res => {
        return (
          res.fullName.toLocaleLowerCase().includes(this.username.toLocaleLowerCase()) ||
          res.address.toLocaleLowerCase().includes(this.username.toLocaleLowerCase())
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

  ///Delete player
  public deleteservice(user: any) {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      disableClose: true,
      data: {
        title: "Confirm Action",
        message: "Are you sure you want delete this player?"
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        const index: number = this.UserList.indexOf(user);
        if (index !== -1) {
          this.UserList.splice(index, 1);

          const dialogRef = this.dialog.open(OkDialogComponent, {
            maxWidth: "500px",
            disableClose: true,

            data: {
              title: "Delete Action",
              message: "Player Deleted Successfully!"
            }
          });
          this.appService.deleteuser(`api/PlayerDetail/DeletePlayerDetail?playerId=${user.playerId}`, {}).subscribe(data => {
          });
        }
      }
    });
  }
}
