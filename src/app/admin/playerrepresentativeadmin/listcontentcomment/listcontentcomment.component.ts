import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentcommentreplyComponent } from '../contentcommentreply/contentcommentreply.component';
import { AppService } from 'src/app/app.service';
import { AppSettings } from 'src/app/app.settings';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';
import { ContentcommentviewComponent } from '../contentcommentview/contentcommentview.component';
import { ContentcommentImageVideoViewComponent } from '../contentcomment-image-video-view/contentcomment-image-video-view.component';

@Component({
  selector: 'app-listcontentcomment',
  templateUrl: './listcontentcomment.component.html',
  styleUrls: ['./listcontentcomment.component.css']
})

export class ListcontentcommentComponent implements OnInit {

  public CommentList: any = [];
  public NewCommentList: any = [];
  public CommentListbyPlayerId: any = [];
  public username: any;
  public page: any;
  public count = 8;
  public commentId: any;

  constructor(public dialog: MatDialog, public appService: AppService, public snackBar: MatSnackBar, public router: Router, public appSettings: AppSettings) { }


  public openDialogVideoImageThumbnail(commentId: any, thumbnailUrl: string, contentType: string): void {
    if (thumbnailUrl) {
        const dialogRef = this.dialog.open(ContentcommentImageVideoViewComponent, {
          width: '800px',  // Adjust the width as needed       
           
            data: {
                mediaType: contentType.toLowerCase(),
                mediaUrl: thumbnailUrl
            }
        });
    } 
    else {
        // Handle the case when there is no thumbnail (possibly open another dialog)
        console.log("No thumbnail available");
    }
}




  openDialogView(commentId: any): void{
    const dialogRef = this.dialog.open(ContentcommentviewComponent, {
      width: '220vh',
      disableClose: true,
      position: {top: '20vh'} ,
      data: { commentId: commentId }
    }
    );
  }

  openDialog(commentId: any): void {
    this.commentId = commentId
    const dialogRef = this.dialog.open(ContentcommentreplyComponent, {
      width: '120vh',
      disableClose: true,
      data: { commentId: commentId }
    }
    );
  }
  


  ngOnInit(): void {
    this.getCommentListByPlayetId();
  }

  ///Delete Content
  public deleteservice(comment: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      disableClose: true,

      data: {
        title: "Confirm Action",
        message: "Are you sure you want delete this Comment?"
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        const index: number = this.CommentList.indexOf(comment);
        if (index !== -1) {
          this.CommentList.splice(index, 1);
          const dialogRef = this.dialog.open(OkDialogComponent, {
            maxWidth: "500px",
            disableClose: true,

            data: {
              title: "Delete Action",
              message: "Comment Deleted Successfully!"
            }
          });
          this.appService.deleteuser(`api/ContentComment/DeleteCommentReply?commentId=${comment.commentId}`, {}).subscribe(data => {
          });
        }
      }
    });
  }

  ///getCommentListByPlayetId
  public getCommentListByPlayetId() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getCommentByPlayerId("api/ContentComment/GetContentCommentByPlayerId/", playerId).subscribe(data => {
      this.CommentList = data;
      this.NewCommentList = data;
    });
  }

  ///Search
  Search() {
    if (this.username == "") {
      this.getCommentListByPlayetId();
    }
    else {
      this.CommentList = this.NewCommentList.filter(res => {
        const lowerCaseContentName = this.username.toLowerCase();
        const titleIncludes = res.mobileNo.toLowerCase().includes(lowerCaseContentName);
        const finalPriceIncludes = res.contentTypeName.toLowerCase().includes(lowerCaseContentName);
        const contentNameIncludes = res.comment1.toLowerCase().includes(lowerCaseContentName);

        const approvedStatus = res.liked;
        let approvedLabel = "";

        if (approvedStatus === true) {
          approvedLabel = "Liked";
        } else if (approvedStatus === false) {
          approvedLabel = "Dislike";
        }

        const approvedIncludes = approvedLabel.toLowerCase().includes(lowerCaseContentName);

        const approvedStatusshared = res.shared;
        let approvedLabelshared = "";

        if (approvedStatusshared === true) {
          approvedLabelshared = "Shared";
        } else if (approvedStatusshared === false) {
          approvedLabelshared = "Not Shared";
        }

        const approvedIncludesshared = approvedLabelshared.toLowerCase().includes(lowerCaseContentName);

        return (
          titleIncludes ||
          finalPriceIncludes ||
          contentNameIncludes ||
          approvedIncludes ||
          approvedIncludesshared
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
}
