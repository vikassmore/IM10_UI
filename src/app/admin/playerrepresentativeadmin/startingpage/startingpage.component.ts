import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { FormBuilder } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Data, Router } from '@angular/router';
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
    public snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder) { }

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

  
///methodforgetplayeridfordashboard
  logPlayerId(playerId: string) {
    sessionStorage.setItem("playerId", playerId); // Store playerId in sessionStorage
    this.router.navigate(['/admin/playerrepresentativeadmin/dashboard'], { queryParams: { playerId: playerId } });
  }
}
