import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from 'src/app/app.settings';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';
import { ConfirmdownloadDialogComponent } from 'src/app/shared/confirmdownload-dialog/confirmdownload-dialog.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listerrorissuelog',
  templateUrl: './listerrorissuelog.component.html',
  styleUrls: ['./listerrorissuelog.component.css']
})

export class ListerrorissuelogComponent implements OnInit {
  public ErrorList: any = [];
  public NewErrorList: any = [];
  public title: any;
  public page: any;
  public count = 8;

  constructor(private http: HttpClient, public appService: AppService, public dialog: MatDialog, public snackBar: MatSnackBar, private tokenStorage: TokenStorageService, public router: Router, public appSettings: AppSettings,) { }

  ngOnInit(): void {
    this.getallerrorissuelog();
  }

  ///getallerrorissuelog
  public getallerrorissuelog() {
    this.appService.getallerrorissuelog("api/ErrorAuditLog/GetAllErrorAuditLog").subscribe(data => {
      this.ErrorList = data;
      this.NewErrorList = data;
    });
  }

  /// editbuttonclick
  onEditClick(event: MouseEvent, content: any) {
    if (content.approved) {
      event.preventDefault();
    }
  }

  ///pagination
  public onPageChanged(event) {
    this.page = event;
    window.scrollTo(0, 0);
  }

  ///Search
  Search() {
    if (this.title === "") {
      this.getallerrorissuelog();
    }
    else {
      this.ErrorList = this.NewErrorList.filter(res => {
        return (
          res.logMessage.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
          res.additionalInformation.toLocaleLowerCase().includes(this.title.toLocaleLowerCase())
          || res.fullName.toLocaleLowerCase().includes(this.title.toLocaleLowerCase())
        );
      });
      this.page = 1;
    }
  }

  ///Download Error File
  public downloadFile(logId) {
    const dialogRef = this.dialog.open(ConfirmdownloadDialogComponent, {
      maxWidth: "400px",
      disableClose: true,
      data: {
        title: "Confirm Action",
        message: "Are you sure to want to download?"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const dialogRef = this.dialog.open(OkDialogComponent, {
          maxWidth: "500px",
          disableClose: true,
          data: {
            title: "Download Action",
            message: "Downloaded Successfully!"
          }
        });
        this.appService.getById(`api/ErrorAuditLog/GetErrorAuditLogById?logId=`, logId).subscribe((data: any) => {
          const filePath = data.filepath;
          downloadErrorFile(filePath, "ErrorLogId_" + logId);

        });
      }
    });
  }
}

function downloadErrorFile(url, fileName) {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(a.href);
      a.remove();
    })
    .catch(error => {
      console.error('Error downloading file:', error);
    });
}
