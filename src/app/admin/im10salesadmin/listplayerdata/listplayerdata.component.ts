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
  selector: 'app-listplayerdata',
  templateUrl: './listplayerdata.component.html',
  styleUrls: ['./listplayerdata.component.css']
})
export class ListplayerdataComponent implements OnInit {
  public PlayerDataList: any = [];
  public NewPlayerDataList: any = [];
  public page: any;
  public count = 8;
  public playername: any;
  constructor(public appService: AppService, public dialog: MatDialog, public snackBar: MatSnackBar, private tokenStorage: TokenStorageService, public router: Router, public appSettings: AppSettings) { }

  ngOnInit(): void {
    this.getPlayerDataList()
  }
///getPlayerList
public getPlayerDataList() {
  this.appService.getUserList('api/PlayerDetail/GetAllPlayerData').subscribe(data => {
    debugger;
    this.PlayerDataList = data;
    this.NewPlayerDataList = data;
  });
}

///Search
Search() {
  if (this.playername == "") {
    this.getPlayerDataList()
  }
  else {
    this.PlayerDataList = this.NewPlayerDataList.filter(res => {
      return (
        res.playerName.toLocaleLowerCase().includes(this.playername.toLocaleLowerCase())
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
public deletePlayerData(playeData: any) {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    maxWidth: "400px",
    disableClose: true,
    data: {
      title: "Confirm Action",
      message: "Are you sure you want delete this player data?"
    }
  });

  dialogRef.afterClosed().subscribe(dialogResult => {
    if (dialogResult) {
      const index: number = this.PlayerDataList.indexOf(playeData);
      if (index !== -1) {
        this.PlayerDataList.splice(index, 1);

        const dialogRef = this.dialog.open(OkDialogComponent, {
          maxWidth: "500px",
          disableClose: true,
          data: {
            title: "Delete Action",
            message: "Player Data Deleted Successfully!"
          }
        });
        this.appService.deleteuser(`api/PlayerDetail/DeletePlayerData?playerDataId=${playeData.playerDataId}`, {}).subscribe(data => {
        });
      }
    }
  });
}
}
