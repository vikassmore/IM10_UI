import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { FormGroup, FormControl } from '@angular/forms';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-contentcomment-image-video-view',
  templateUrl: './contentcomment-image-video-view.component.html',
  styleUrls: ['./contentcomment-image-video-view.component.css']
})
export class ContentcommentImageVideoViewComponent implements OnInit {
  public CommentList: any = [];
  public NewCommentList: any = [];
  isImage: boolean;
  title: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, public appService: AppService, public router: Router, private route: ActivatedRoute,private dialogRef: MatDialogRef<ContentcommentImageVideoViewComponent>) { 
    this.isImage = this.isImageUrl(data.mediaUrl);
    this.title = data.title;
  }

  ngOnInit(): void {
  }

 private isImageUrl(url: string): boolean {
  return /\.(jpeg|jpg|gif|png|webp)$/i.test(url);
}


  closeDialog(): void {
    this.dialogRef.close();
  }


  public getCommentListByPlayetId() {
    debugger;
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getCommentByPlayerId("api/ContentComment/GetContentCommentByPlayerId/", playerId).subscribe(data => {
      this.CommentList = data;
      this.NewCommentList = data;
    });
  }
}
