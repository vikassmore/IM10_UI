import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { AppSettings } from 'src/app/app.settings';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { editlistcontentupdate } from './listcontentupdate.Model';
import { ApproveDialogComponent } from 'src/app/shared/approve-dialog/approve-dialog.component';
import { denycontentupdate } from './listcontentupdateqa.Model';
import { NotApproveDialogComponent } from 'src/app/shared/notapprove-dialog/notapprove-dialog.component';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';

@Component({
  selector: 'app-listcontentupdate',
  templateUrl: './listcontentupdate.component.html',
  styleUrls: ['./listcontentupdate.component.css']
})

export class ListcontentupdateComponent implements OnInit {
  public ContentUpdateList: any = [];
  public filteredContentList: any = [];
  public filteredContentUpdateList: any = [];
  public ContentUpdateListDisplay: any = [];
  public NewContentUpdateListDisplay: any = [];
  contentLogId: any
  public title: any;
  public page: any;
  public count = 8;

  constructor(public dialog: MatDialog, public sessionStorage: TokenStorageService, public appService: AppService, public snackBar: MatSnackBar, public router: Router, public appSettings: AppSettings) { }

  ngOnInit(): void {
    this.GetAllContentUpdateList();
  }

  ///Search
  Search() {
    if (this.title == "") {
      this.GetAllContentUpdateList();
    }
    else {
      this.ContentUpdateListDisplay = this.NewContentUpdateListDisplay.filter(res => {
        const lowerCaseContentName = this.title.toLowerCase();
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

  ///pagination
  public onPageChanged(event) {
    this.page = event;
    window.scrollTo(0, 0);
  }

  /// getContentUpdateByPlayerId
  public GetAllContentUpdateList() {
    debugger;
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getContentUpdateByPlayerId("api/ContentUpdate/GetContentUpdateforQA/", playerId).subscribe(data => {
      this.ContentUpdateListDisplay = data;
      this.NewContentUpdateListDisplay = data;
    });
  }

  ///ContentUpdateApprove
  public ContentUpdateApprove(contentLogId) {
    const contentLogIdToFind = contentLogId;
    const contentToUpdate = this.ContentUpdateListDisplay.find(content => content.contentLogId === contentLogIdToFind);
    // var formData = new FormData();
    let editlistcontentupdate: editlistcontentupdate = {
      "contentLogId": contentToUpdate.contentLogId,
      "contentId": contentToUpdate.contentId,
      "updatedBy": 0,
      "approved": true,
      "title": contentToUpdate.title,
      "description": contentToUpdate.description,
    }

    const dialogRef = this.dialog.open(ApproveDialogComponent, {
      maxWidth: "400px",
      disableClose: true,

      data: {
        title: "Approve Action",
        message: "Are you sure you want approve this?"
      }

    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        const dialogRef = this.dialog.open(OkDialogComponent, {
          maxWidth: "500px",
          disableClose: true,
          data: {
            title: "Result",
            message: "Content Update Approved Successfully!"
          }
        });

        dialogRef.afterClosed().subscribe(okDialogResult => {
          if (dialogResult) {
            this.appService.ApproveUpdateContent('api/ContentDetail/ContentDetailUpdateByContentLog', editlistcontentupdate).subscribe(() => {
              this.GetAllContentUpdateList();
              window.location.reload();
            }, error => {
              this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
            });
          }
          this.GetAllContentUpdateList();
        });
      }
    });
  }

  public ContentNotApprove(content: any) {
    const dialogRef = this.dialog.open(NotApproveDialogComponent, {
      maxWidth: "400px",
      disableClose: true,

      data: {
        title: "Comment",
        message: "Enter comment for why this not approve"
      }

    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        // const formData = new FormData();
        const comment = dialogRef.componentInstance.comment;

        let denycontent: denycontentupdate = {
          "contentLogId": content.contentLogId,
          "comment": comment,
        }

        this.appService.denyapprovecontent('api/ContentUpdate/DeniedContentUpdateDetail', denycontent).subscribe(data => {
          window.location.reload();
        });
      }
    });
  }

}