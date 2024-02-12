import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from 'src/app/app.settings';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { denycontent } from './listcontent.Model';
import { ApproveDialogComponent } from 'src/app/shared/approve-dialog/approve-dialog.component';
import { NotApproveDialogComponent } from 'src/app/shared/notapprove-dialog/notapprove-dialog.component';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';

@Component({
  selector: 'app-listcontent',
  templateUrl: './listcontent.component.html',
  styleUrls: ['./listcontent.component.css']
})

export class ListcontentComponent implements OnInit {
  public ContentList: any = [];
  public NewContentList: any = [];
  ContentId: string | any;
  public page: any;
  public count = 8;
  public title: any;
  formData = new FormData();

  constructor(public appService: AppService, public dialog: MatDialog, public snackBar: MatSnackBar, private tokenStorage: TokenStorageService, public router: Router, public appSettings: AppSettings, private http: HttpClient) { }

  ngOnInit(): void {
    this.getContentDetailsListByPlayetId();
  }

  ///GetContentDetailsbyPlayerID
  public getContentDetailsListByPlayetId() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getContentByPlayerId("api/ContentDetail/GetContentdetailByPlayerId/", playerId).subscribe(data => {
      this.ContentList = data;
      this.NewContentList = data;
    });
  }

  ///Search
  Search() {
    if (this.title == "") {
      this.getContentDetailsListByPlayetId();
    }
    else {
      this.ContentList = this.NewContentList.filter(res => {
        const lowerCaseContentName = this.title.toLowerCase();
        const titleIncludes = res.title.toLowerCase().includes(lowerCaseContentName);
        const finalPriceIncludes = res.description.toLowerCase().includes(lowerCaseContentName);
        const contentNameIncludes = res.contentTypeName.toLowerCase().includes(lowerCaseContentName);
        const categoryNameIncludes = res.categoryName.toLowerCase().includes(lowerCaseContentName);
        const subCategoryNameIncludes = res.subCategoryName.toLowerCase().includes(lowerCaseContentName);
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
          categoryNameIncludes ||
          subCategoryNameIncludes ||
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

  ///ContentApprove
  public ContentApprove(content: any) {
    const dialogRef = this.dialog.open(ApproveDialogComponent, {
      maxWidth: "400px",
      disableClose: true,
      data: {
        title: "Approve Action",
        message: "Are you sure you want approve this content?"
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.appService.AddContentUpdate(`api/ContentDetail/ApproveContentDetail/${content.contentId}`, {}).subscribe(data => {
          const okDialogRef = this.dialog.open(OkDialogComponent, {
            maxWidth: "500px",
            disableClose: true,
            data: {
              title: "Result",
              message: "Content Approved Successfully!"
            }
          });

          okDialogRef.afterClosed().subscribe(okDialogResult => {
            window.location.reload();
          });
        });
      }
    });
  }

  ///Deny Approval
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
        const comment = dialogRef.componentInstance.comment;
        let denycontent: denycontent = {
          "contentId": content.contentId,
          "comment": comment,
        }
        this.appService.denyapprovecontent('api/ContentDetail/DeniedContentDetail', denycontent).subscribe(data => {

          window.location.reload();
        });
      }
    });
  }
}
