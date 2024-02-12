import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { AppSettings } from 'src/app/app.settings';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { addcontentupdate } from './addcontentupdate.Model';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';

@Component({
  selector: 'app-addcontentupdate',
  templateUrl: './addcontentupdate.component.html',
  styleUrls: ['./addcontentupdate.component.css']
})

export class AddcontentupdateComponent implements OnInit {
  public ContentTitleList: any = [];
  public ContentList: any = [];

  uploadForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
    contentId: new FormControl('', [Validators.required]),
  });

  constructor(public dialog: MatDialog, private route: ActivatedRoute, public appService: AppService, public snackBar: MatSnackBar, private tokenStorage: TokenStorageService, public router: Router, public appSettings: AppSettings) { }

  ///Close the mat dialog
  closeDialog() {
    this.dialog.closeAll();
  }

  ngOnInit(): void {
    this.getContentDetailsListByPlayetId();
  }

  ///prevent dialog close on backdrop click
  onBackdropClick(event: MouseEvent) {
    event.stopPropagation();
  }

  ///SubmitContentupdate
  public Submit(userObject) {
    if (this.uploadForm.valid) {
      this.AddContntUpdate(userObject);
    }
    else {
      this.snackBar.open('All fields required', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  }

  ///Get Content Details by PlayerId
  public getContentDetailsListByPlayetId() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getContentByPlayerId("api/ContentDetail/GetContentdetailByPlayerId/", playerId).subscribe(data => {
      this.ContentList = data;
    });
  }

  ///Add Contnt Update
  public AddContntUpdate(formData) {
    let addcontentupdateModel: addcontentupdate = {
      "title": formData.title,
      "description": formData.description,
      "contentId": formData.contentId,
    }

    this.appService.AddContentUpdate('api/ContentUpdate/AddContentUpdate', addcontentupdateModel).subscribe(() => {
      this.closeDialog();
      const dialogRef = this.dialog.open(OkDialogComponent, {
        maxWidth: "500px",
        disableClose: true,
        data: {
          title: "Save Action",
          message: "Content Update Added Successfully!"
        }
      }
      );
      dialogRef.afterClosed().subscribe(() => {
        window.location.reload();
      });
      this.router.navigate(['/admin/contentadmin/listcontentupdate'], { relativeTo: this.route });
    }, error => {
      this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    });
  }
}
