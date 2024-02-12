import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddcontentupdateComponent } from '../addcontentupdate/addcontentupdate.component';
import { AppService } from 'src/app/app.service';
import { AppSettings } from 'src/app/app.settings';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';

@Component({
  selector: 'app-listcontentupdate',
  templateUrl: './listcontentupdate.component.html',
  styleUrls: ['./listcontentupdate.component.css']
})

export class ListcontentupdateComponent implements OnInit {
  public ContentUpdateList: any = [];
  public NewContentUpdateList: any = [];
  public SpecificContentUpdateList: any = [];
  public contentIds: any = [];
  public ContentList: any = [];
  public contents: any = [];
  public contentTitle: any;
  public page: any;
  public count = 8;

  constructor(public dialog: MatDialog, public appService: AppService, public snackBar: MatSnackBar, public router: Router, public appSettings: AppSettings) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddcontentupdateComponent, {
      width: '100vh',
      disableClose: true
    }
    );
    this.getContentDetailsListByPlayetId();
  }

  ngOnInit(): void {
    this.GetAllContentUpdateList();
  }

  ///pagination
  public onPageChanged(event) {
    this.page = event;
    window.scrollTo(0, 0);
  }

  ///Search
  Search() {
    if (this.contentTitle == "") {
      this.GetAllContentUpdateList();
    }
    else {
      this.ContentUpdateList = this.NewContentUpdateList.filter(res => {
        const lowerCaseContentName = this.contentTitle.toLowerCase();
        const titleIncludes = res.title.toLowerCase().includes(lowerCaseContentName);
        const finalPriceIncludes = res.description.toLowerCase().includes(lowerCaseContentName);
        const contentNameIncludes = res.contentTitle.toLowerCase().includes(lowerCaseContentName);
        const approvedStatus = res.approved;
        let approvedLabel = "";

        if (approvedStatus === null) {
          approvedLabel = "Pending";
        } else if (approvedStatus === true) {
          approvedLabel = "Approved";
        } else if (approvedStatus === false) {
          approvedLabel = "Not Approved";
        }

        const approvedIncludes = approvedLabel.toLowerCase().includes(lowerCaseContentName);

        return (
          titleIncludes ||
          finalPriceIncludes ||
          contentNameIncludes ||
          approvedIncludes
        );
      });
      this.page = 1;
    }
  }

  ///Delete Content Update
  public deleteservice(content: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      disableClose: true,

      data: {
        title: "Confirm Action",
        message: "Are you sure you want delete this content update?"
      }

    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        const index: number = this.ContentUpdateList.indexOf(content);
        if (index !== -1) {
          this.ContentUpdateList.splice(index, 1);
          const dialogRef = this.dialog.open(OkDialogComponent, {
            maxWidth: "500px",
            disableClose: true,

            data: {
              title: "Delete Action",
              message: "Content Update Deleted Successfully!"
            }

          });
          this.appService.deleteuser(`api/ContentUpdate/DeleteContentUpdate?contentLogId=${content.contentLogId}`, {}).subscribe(data => {
          });
        }
      }
    });
  }

  /// getContentUpdateByPlayerId
  public GetAllContentUpdateList() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getContentUpdateByPlayerId("api/ContentUpdate/GetContentUpdateByPlayerId/", playerId).subscribe(data => {
      this.ContentUpdateList = data;
      this.NewContentUpdateList = data;
    });
  }

  ///getContentDetailsListByPlayetId
  public getContentDetailsListByPlayetId() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getContentByPlayerId("api/ContentDetail/GetContentdetailByPlayerId/", playerId).subscribe(data => {
      this.ContentList = data;
    });
  }
}

