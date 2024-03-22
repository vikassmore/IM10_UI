import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { FormGroup, FormControl } from '@angular/forms';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { AddComment } from './contentcommentreply.Model';

@Component({
  selector: 'app-contentcommentreply',
  templateUrl: './contentcommentreply.component.html',
  styleUrls: ['./contentcommentreply.component.css']
})

export class ContentcommentreplyComponent implements OnInit {

  commentId: any;
  isPublic: boolean = false;
  public showtitleerror : boolean=false;

  uploadForm = new FormGroup({
    commentId: new FormControl(),
    fullName: new FormControl({ value: '', disabled: true }),
    comment1: new FormControl({ value: '', disabled: true }),
    comment2: new FormControl(),
    isPublic: new FormControl(),
    contentTypeName: new FormControl({ value: '', disabled: true }),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, public appService: AppService, public router: Router, private route: ActivatedRoute,) { }


///check validation for blank space
titlekeyDown(event: KeyboardEvent) {
  const inputValue = (event.target as HTMLInputElement).value;
  // Check if the input consists only of spaces
  const isOnlySpaces = /^\s*$/.test(inputValue);
  if (event.key === ' ' && isOnlySpaces) 
    {
    this.showtitleerror = true; 
    event.preventDefault(); 
  } else {
    this.showtitleerror = false; 
  }
}


  closeDialog() {
    this.dialog.closeAll(); // <- Close the mat dialog
  }

  ngOnInit(): void {
    this.getcommentbyid(this.data.commentId);
  }

  ///GetAdvContentMappingByadvContentMapId
  public getcommentbyid(commentId) {
    this.appService.getById("api/ContentComment/GetContentCommentById/", commentId).subscribe(data => {
      this.uploadForm.controls['commentId'].setValue(data.commentId);
      this.uploadForm.controls['fullName'].setValue(data.fullName);
      this.uploadForm.controls['comment1'].setValue(data.comment1);
      this.uploadForm.controls['isPublic'].setValue(data.isPublic);
      this.uploadForm.controls['contentTypeName'].setValue(data.contentTypeName);
    });
  }

  ///Submit Admin Comment
  public Submit(userObject) {
    var comment2 = userObject.comment2
    let addcommentModel: AddComment = {
      "commentId": userObject.commentId,
      "comment1": userObject.comment2,
      "isPublic": userObject.isPublic
    }

    this.appService.AddComment('api/ContentComment/AddContentCommentReply', addcommentModel).subscribe(() => {
      this.closeDialog();
      const dialogRef = this.dialog.open(OkDialogComponent, {
        maxWidth: "500px",
        disableClose: true,

        data: {
          title: "Save Action",
          message: "Comment Added Successfully!"
        }
      });
      this.router.navigate(['/admin/playerrepresentativeadmin/listcontentcomment'], { relativeTo: this.route });
      dialogRef.afterClosed().subscribe(() => {
        window.location.reload();
      });
     
    });
  }

}
