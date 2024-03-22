import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { FormBuilder } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
@Component({
  selector: 'app-startingpage',
  templateUrl: './startingpage.component.html',
  styleUrls: ['./startingpage.component.css']
})
export class StartingpageComponent implements OnInit {
  playerId: string | any;

  sendPlayerId(id: any) {
    this.playerId = id;
  }

  @Output() playerSelected = new EventEmitter<string>();

  onPlayerSelected(playerId: string) {
    this.playerSelected.emit(playerId);
  }

  sessionuserId: any;
  public PlayerList = [];

  constructor(public authservise: AuthenticationService, public sessionStorage: TokenStorageService, public appService: AppService,
    public snackBar: MatSnackBar, public formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.sessionuserId = this.sessionStorage.getUser().userId;
    this.getPlayerbyUserId(this.sessionuserId);
  }

  ///getPlayerbyUserId
  public getPlayerbyUserId(sessionuserId) {
      this.appService.getPlayerById("api/UserPlayer/GetPlayerByUserId/", sessionuserId).subscribe(data => {
        this.PlayerList = data;
        this.playerId = this.PlayerList
      });
  }

  // logPlayerId(playerId: string) {
  //   this.playerId = playerId;
  //   var id = window.sessionStorage.setItem("playerId", this.playerId);
  // }

  ///methodforgetplayeridfordashboard
  logPlayerId(playerId: string) {
    sessionStorage.setItem("playerId", playerId); // Store playerId in sessionStorage
    this.router.navigate(['/admin/endorsementmanageradmin/dashboard'], { queryParams: { playerId: playerId } });
  }
}
