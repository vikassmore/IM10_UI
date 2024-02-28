import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentcommentreplyComponent } from '../contentcommentreply/contentcommentreply.component';
import { AppService } from 'src/app/app.service';
import { AppSettings } from 'src/app/app.settings';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-contentcommentview',
  templateUrl: './contentcommentview.component.html',
  styleUrls: ['./contentcommentview.component.css']
})
export class ContentcommentviewComponent implements OnInit {
  
  public CommentReplyList: any = [];
  public page: any;
  public count = 8;
  public commentId: any;
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any ,public appService: AppService, public snackBar: MatSnackBar, public router: Router, public appSettings: AppSettings) { }

  closeDialog() {
    this.dialog.closeAll(); // <- Close the mat dialog
  }

  ngOnInit(): void {
    this.getCommentReplyListByCommentId(this.data.commentId);
  }
 ///get CommentReplyList By CommentId
 public getCommentReplyListByCommentId(commentId) {
  this.appService.getCommentByPlayerId("api/ContentComment/GetContentCommentReplyByCommentId/", commentId).subscribe(data => {
    this.CommentReplyList = data;
  });
}
  ///Delete comment
  public deleteComment(comment: any) {
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
        const index: number = this.CommentReplyList.indexOf(comment);
        if (index !== -1) {
          this.CommentReplyList.splice(index, 1);
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
 ///pagination  
 public onPageChanged(event) {
  this.page = event;
  window.scrollTo(0, 0);
}
}
