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
  selector: 'app-listcontent',
  templateUrl: './listcontent.component.html',
  styleUrls: ['./listcontent.component.css']
})

export class ListcontentComponent implements OnInit {
  @Input() playerId: string;
  public ContentList: any = [];
  public NewContentList: any = [];
  public ContentListbyPlayerId: any = [];
  public title: any;
  public page: any;
  public count = 8;

  constructor(public appService: AppService, public dialog: MatDialog, public snackBar: MatSnackBar, private tokenStorage: TokenStorageService, public router: Router, public appSettings: AppSettings, private http: HttpClient) { }

  ngOnInit(): void {
    this.getContentDetailsListByPlayetId();
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

  //Delete Content
  public deleteservice(content: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      disableClose: true,
      data: {
        title: "Confirm Action",
        message: "Are you sure you want delete this content?"
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        const index: number = this.ContentList.indexOf(content);
        if (index !== -1) {
          this.ContentList.splice(index, 1);

          const dialogRef = this.dialog.open(OkDialogComponent, {
            maxWidth: "500px",
            disableClose: true,

            data: {
              title: "Delete Action",
              message: "Content Deleted Successfully!"
            }

          });
          this.appService.deleteuser(`api/ContentDetail/DeleteContentDetail?contentId=${content.contentId}`, {}).subscribe(data => {
          });
        }
      }
    });
  }

  ///GetContentDetailsbyPlayerID
  public getContentDetailsListByPlayetId() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getContentByPlayerId("api/ContentDetail/GetContentdetailByPlayerId/", playerId).subscribe(data => {
      this.ContentList = data;
      this.NewContentList = data;
    });
  }
}
