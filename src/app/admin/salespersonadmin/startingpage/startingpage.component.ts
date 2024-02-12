import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { FormBuilder } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-startingpage',
  templateUrl: './startingpage.component.html',
  styleUrls: ['./startingpage.component.css']
})

export class StartingpageComponent implements OnInit {
  public PlayerList: any = [];
  playerId: string | any;
  sessionuserId: any;

  constructor(public authservise: AuthenticationService, public sessionStorage: TokenStorageService, public appService: AppService,
    public snackBar: MatSnackBar, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.sessionuserId = this.sessionStorage.getUser().userId;
    this.getGetAllPlayerList(this.sessionuserId);
  }

  ///getGetAllPlayerList
  public getGetAllPlayerList(sessionuserId) {
    this.appService.getPlayerById("api/UserPlayer/GetPlayerByUserId/", sessionuserId).subscribe(data => {
      this.PlayerList = data;
      this.playerId = this.PlayerList
    });
  }

  logPlayerId(playerId: string) {
    this.playerId = playerId;
    var id = window.sessionStorage.setItem("playerId", this.playerId);
  }
}
