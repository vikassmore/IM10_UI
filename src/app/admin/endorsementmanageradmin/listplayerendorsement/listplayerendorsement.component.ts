import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from 'src/app/app.settings';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';

@Component({
  selector: 'app-listplayerendorsement',
  templateUrl: './listplayerendorsement.component.html',
  styleUrls: ['./listplayerendorsement.component.css']
})

export class ListplayerendorsementComponent implements OnInit {
  @Input() playerId: string;
  public PlayerEndorsmentList: any = [];
  public NewPlayerEndorsmentList: any = [];
  public ContentListbyPlayerId: any = [];
  public title: any;
  public page: any;
  public count = 8;

  constructor(public appService: AppService, public dialog: MatDialog, public snackBar: MatSnackBar, private tokenStorage: TokenStorageService, public router: Router, public appSettings: AppSettings, private http: HttpClient) { }


  ngOnInit(): void {
    this.getPlayerEndorsmentListByPlayetId();
  }

  // EditButtonclick
  onEditClick(event: MouseEvent, content: any) {
    if (content && content.approved) {
      event.preventDefault();
    }
  }

  ///pagination
  public onPageChanged(event) {
    this.page = event;
    window.scrollTo(0, 0);
  }

  //Delete Endorsment
  public deleteservice(endorsment: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      disableClose: true,
      data: {
        title: "Confirm Action",
        message: "Are you sure you want delete this Player Endorsement?"
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        const index: number = this.PlayerEndorsmentList.indexOf(endorsment);
        if (index !== -1) {
          this.PlayerEndorsmentList.splice(index, 1);

          const dialogRef = this.dialog.open(OkDialogComponent, {
            maxWidth: "500px",
            disableClose: true,

            data: {
              title: "Delete Action",
              message: "Player Endorsement Deleted Successfully!"
            }

          });
          this.appService.deleteuser(`api/EndorsmentDetail/DeleteEndorsmentDetail?endorsmentId=${endorsment.endorsmentId}`, {}).subscribe(data => {
          });
        }
      }
    });
  }

  ///getPlayerEndorsmentListByPlayetId
  public getPlayerEndorsmentListByPlayetId() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getPlayerEndorsmentPlayerId("api/EndorsmentDetail/GetEndorsmentDetailPlayerId/", playerId).subscribe(data => {
      this.PlayerEndorsmentList = data;
      this.NewPlayerEndorsmentList = data;
    });
  }

  ///Search
  Search() {
    if (this.title === "") {
      this.getPlayerEndorsmentListByPlayetId();
    }

    else {
      this.PlayerEndorsmentList = this.NewPlayerEndorsmentList.filter(res => {
        return (
          res.companyName.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
          res.endorsmentType.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
          res.finalPrice.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
          res.notes.includes(this.title)
        );
      });
      this.page = 1;
    }
  }

}
