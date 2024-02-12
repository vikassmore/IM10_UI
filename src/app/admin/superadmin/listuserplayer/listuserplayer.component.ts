import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddedituserplayerComponent } from '../addedituserplayer/addedituserplayer.component';
import { AppService } from 'src/app/app.service';
import { AppSettings, Settings } from 'src/app/app.settings';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';

@Component({
  selector: 'app-listuserplayer',
  templateUrl: './listuserplayer.component.html',
  styleUrls: ['./listuserplayer.component.css']
})

export class ListuserplayerComponent implements OnInit {
  public UserList: any = [];
  public allUserList: any = [];
  public PlayerList: any = [];
  public settings: Settings;
  public page: any;
  public count = 8;
  userId: string | any;
  public List: any
  public userPlayerId: any
  public ThisUserplayer: any
  public username: any;
  public userList: any = [];
  public NewuserList: any = [];

  constructor(public appService: AppService, public dialog: MatDialog, public snackBar: MatSnackBar, private tokenStorage: TokenStorageService, public router: Router, public appSettings: AppSettings) {
    this.settings = this.appSettings.settings;
  }

  uploadForm = new FormGroup({
    userPlayerId: new FormControl('', []),
    username: new FormControl('', [Validators.required]),
    playername: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.getUserList();
    this.playerList();
    this.getallUserList();
  }

  ///Searchbox
  Search() {
    if (this.username == "") {
      this.getUserList();
    }
    else {
      this.UserList = this.NewuserList.filter(res => {
        return (
          res.userFullName.toLocaleLowerCase().includes(this.username.toLocaleLowerCase()) ||
          res.roleName.toLocaleLowerCase().includes(this.username.toLocaleLowerCase()) ||
          res.fullName.toLocaleLowerCase().includes(this.username.toLocaleLowerCase())
        );
      });
      this.page = 1;
    }
  }

  ///Pagination
  public onPageChanged(event) {
    this.page = event;
    window.scrollTo(0, 0);
  }

  ///list all userplayer
  public getUserList() {
    this.appService.GetAllUserPlayer('api/userplayer/GetAllUserPlayer').subscribe(data => {
      this.UserList = data;
      this.NewuserList = data;
      // this.groupUsers();
    });
  }

  /// show Player by group
  // private groupUsers() {
  //   const groupedUsers = this.UserList.reduce((acc, curr) => {
  //     if (!acc[curr.emailId]) {
  //       acc[curr.emailId] = { emailId: curr.emailId, userPlayerIds: [curr.userPlayerId], fullNames: [curr.fullName] };
  //     } else {
  //       acc[curr.emailId].fullNames.push(curr.fullName);
  //       acc[curr.emailId].userPlayerIds.push(curr.userPlayerId);
  //     }
  //     return acc;
  //   }, {});
  //   this.userList = Object.values(groupedUsers);
  // }

  ///GetAllUser
  public getallUserList() {
    this.appService.getUserList('api/User/GetAllUser').subscribe(data => {
      this.allUserList = data;
    });
  }

  openDialog(userPlayerId: any): void {
    this.userPlayerId = userPlayerId
    // this.getuserbyId(this.userPlayerId);
    const dialogRef = this.dialog.open(AddedituserplayerComponent, {
      width: '100vh',
      disableClose: true,

      data: { userPlayerId: userPlayerId }
    });
  }

  ///GetAllPlayerDetail
  public playerList() {
    this.appService.getAllPlayerDetail('api/PlayerDetail/GetAllPlayerDetail').subscribe(data => {

      this.PlayerList = data;
    });
  }

  ///delete userplayer
  public deleteservice(user: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      disableClose: true,

      data: {
        title: "Confirm Action",
        message: "Are you sure you want delete user and player mapping?"
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
              message: "User and Player Mapping Deleted Successfully!"
            }

          });

          this.appService.deleteuser(`api/UserPlayer/DeleteUserPlayer?userplayerId=${user.userPlayerId}`, {}).subscribe(data => {
          });
        }
      }
    });
  }

}

export class DialogOverviewExampleDialog {
  userPlayerId: string | any;
  public settings: Settings;
  constructor(public appService: AppService, public dialog: MatDialog, public snackBar: MatSnackBar, private tokenStorage: TokenStorageService, public router: Router, public appSettings: AppSettings
  ) {
    this.settings = this.appSettings.settings;
  }
}
