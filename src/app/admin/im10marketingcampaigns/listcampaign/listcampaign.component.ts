import { AddeditcampaignComponent } from '../addeditcampaign/addeditcampaign.component';
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
  selector: 'app-listcampaign',
  templateUrl: './listcampaign.component.html',
  styleUrls: ['./listcampaign.component.css']
})

export class ListcampaignComponent implements OnInit {
  @Input() playerId: string;
  public CampaignList: any = [];
  public NewCampaignList: any = [];
  public ContentListbyPlayerId: any = [];
  public title: any;
  public page: any;
  public count = 8;
  public marketingCampaignId: any;

  constructor(public appService: AppService, public dialog: MatDialog, public snackBar: MatSnackBar, private tokenStorage: TokenStorageService, public router: Router, public appSettings: AppSettings, private http: HttpClient) { }

  openDialog(marketingCampaignId: any): void {
    this.marketingCampaignId = marketingCampaignId
    const dialogRef = this.dialog.open(AddeditcampaignComponent, {
      width: '150vh',
      disableClose: true,
      data: { marketingCampaignId: marketingCampaignId }
    }
    );
  }

  ngOnInit(): void {
    this.getContentDetailsListByPlayetId();
  }

  /// Editbuttonclick
  onEditClick(event: MouseEvent, content: any) {
    if (content.approved) {
      event.preventDefault();
    }
  }

  ///pagination
  public onPageChanged(event) {
    this.page = event;
    window.scrollTo(0, 0);
  }

  //Delete Content
  public deleteservice(content: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      disableClose: true,
      data: {
        title: "Confirm Action",
        message: "Are you sure you want delete this?"
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        const index: number = this.CampaignList.indexOf(content);
        if (index !== -1) {
          this.CampaignList.splice(index, 1);

          const dialogRef = this.dialog.open(OkDialogComponent, {
            maxWidth: "500px",
            disableClose: true,

            data: {
              title: "Delete Action",
              message: "Campaign Deleted Successfully!"
            }
          });
          this.appService.deleteuser(`api/CampaignDetail/DeleteCampaignDetail?marketingcampaignId=${content.marketingCampaignId}`, {}).subscribe(data => {
          });
        }
      }
    });
  }

  ///GetContentDetailsbyPlayerID
  public getContentDetailsListByPlayetId() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getContentByPlayerId("api/CampaignDetail/GetCampaignDetailByPlayerId/", playerId).subscribe(data => {
      this.CampaignList = data;
      this.NewCampaignList = data;
    });
  }

  ///Search
  Search() {
    if (this.title === "") {
      this.getContentDetailsListByPlayetId();
    }
    else {
      this.CampaignList = this.NewCampaignList.filter(res => {
        return (
          res.title.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
          res.description.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
          res.contentTitle.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
          res.contentTypeName.toLocaleLowerCase().includes(this.title.toLocaleLowerCase())
        );
      });
      this.page = 1;
    }
  }
}
