import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() playerDetailsList: any;
  constructor(public appService: AppService,) { }
  public PlayerDetailsList: any = [];

  ngOnInit(): void {
    this.Getplayerdetailsbyplayerid();
  }

  ///Getplayerdetailsbyplayerid
  public Getplayerdetailsbyplayerid() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getContentByPlayerId("api/PlayerDetail/GetPlayerDetailById/", playerId).subscribe(data => {
      this.PlayerDetailsList = data;
    });
  }

}
