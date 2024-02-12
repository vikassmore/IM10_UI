import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from 'src/app/app.settings';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApproveDialogComponent } from 'src/app/shared/approve-dialog/approve-dialog.component';
import { NotApproveDialogComponent } from 'src/app/shared/notapprove-dialog/notapprove-dialog.component';
import { denyadvcontent } from './listadvcontent.Model';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';

@Component({
  selector: 'app-listadvcontent',
  templateUrl: './listadvcontent.component.html',
  styleUrls: ['./listadvcontent.component.css']
})

export class ListadvcontentComponent implements OnInit {
  public ContentAdvList: any = [];
  public NewContentAdvList: any = [];
  advertiseContentId: string | any;
  isApproved = false;
  public contentName: any;
  public page: any;
  public count = 8;

  constructor(public appService: AppService, public dialog: MatDialog, public snackBar: MatSnackBar, private tokenStorage: TokenStorageService, public router: Router, public appSettings: AppSettings, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAdvContentListByPlayetId();
  }

  ///Search
  Search() {
    if (this.contentName == "") {
      this.getAdvContentListByPlayetId();
    } else {
      this.ContentAdvList = this.NewContentAdvList.filter(res => {
        const lowerCaseContentName = this.contentName.toLowerCase();
        const titleIncludes = res.title.toLowerCase().includes(lowerCaseContentName);
        const finalPriceIncludes = res.finalPrice.toLowerCase().includes(lowerCaseContentName);
        const contentNameIncludes = res.contentName.toLowerCase().includes(lowerCaseContentName);
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

  ///getAdvContentListByPlayetId
  public getAdvContentListByPlayetId() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getContentByPlayerId("api/AdvtContentDetail/GetAdvContentByPlayerId/", playerId).subscribe(data => {
      this.ContentAdvList = data;
      this.NewContentAdvList = data;
    });
  }

  ///ApproveadvContent
  public ApproveadvContent(content: any) {
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
            message: "Advt. Content Approved Successfully!"
          }
        });

        dialogRef.afterClosed().subscribe(okDialogResult => {
          if (dialogResult) {
            const index: number = this.ContentAdvList.indexOf(content);
            if (index !== -1) {
              this.ContentAdvList.splice(index, 1);
              this.appService.ApproveContent(`api/AdvtContentDetail/ApproveAdvContentDetail/${content.advertiseContentId}`, {}).subscribe(data => {
                window.location.reload();
              });
            }
          }
          this.getAdvContentListByPlayetId();
        });
      }
    });
  }

  ///Deny Approval
  public AdvContentNotApprove(content: any) {
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

        let denyadvcontent: denyadvcontent = {
          "advertiseContentId": content.advertiseContentId,
          "comment": comment,
        }
        this.appService.denyapprovecontent('api/AdvtContentDetail/DeniedAdvContentDetail', denyadvcontent).subscribe(data => {
          window.location.reload();
        });
      }
    });
  }
}
