import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { FormBuilder } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';

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
    public snackBar: MatSnackBar, public formBuilder: FormBuilder,private router : Router) { }

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


///methodforgetplayeridfordashboard
  logPlayerId(playerId: string) {
    sessionStorage.setItem("playerId", playerId); // Store playerId in sessionStorage
    this.router.navigate(['/admin/salespersonadmin/dashboard'], { queryParams: { playerId: playerId } });
  }
}
