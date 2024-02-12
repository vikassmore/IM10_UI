import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { AddeditadvertiseaddsonComponent } from '../addeditadvertiseaddson/addeditadvertiseaddson.component';
import { AppService } from 'src/app/app.service';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';

@Component({
  selector: 'app-listadvertiseaddson',
  templateUrl: './listadvertiseaddson.component.html',
  styleUrls: ['./listadvertiseaddson.component.css']
})

export class ListadvertiseaddsonComponent implements OnInit {
  public ContentAddsOn: any = [];
  public NewContentAddsOn: any = [];
  public page: any;
  public count = 8;
  public advContentMapId: any;
  public title: any;

  constructor(public dialog: MatDialog, public appService: AppService) { }

  openDialog(advContentMapId: any): void {
    this.advContentMapId = advContentMapId
    const dialogRef = this.dialog.open(AddeditadvertiseaddsonComponent, {
      width: '100vh',
      disableClose: true,
      data: { advContentMapId: advContentMapId }
    }
    );
  }

  ngOnInit(): void {
    this.GetAllContentUpdateList();
  }

  ///GetAllContentUpdateList
  public GetAllContentUpdateList() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getContentUpdateByPlayerId("api/AdvContentMapping/GetAdvContentMappingByPlayerId/", playerId).subscribe(data => {
      this.ContentAddsOn = data;
      this.NewContentAddsOn = data;
    });
  }

  ///Delete advertise ads on
  public deleteservice(content: any) {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      disableClose: true,

      data: {
        title: "Confirm Action",
        message: "Are you sure you want delete this?"
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        const index: number = this.ContentAddsOn.indexOf(content);
        if (index !== -1) {
          this.ContentAddsOn.splice(index, 1);
          const dialogRef = this.dialog.open(OkDialogComponent, {
            maxWidth: "500px",
            disableClose: true,

            data: {
              title: "Delete Action",
              message: "Advertise Ads Deleted Successfully!"
            }
          });
          this.appService.deleteuser(`api/AdvContentMapping/DeleteAdvContentMapping?advcontentmapId=${content.advContentMapId}`, {}).subscribe(data => {
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

  ///Search
  Search() {
    if (this.title == "") {
      this.GetAllContentUpdateList();
    }
    else {
      this.ContentAddsOn = this.NewContentAddsOn.filter(res => {
        return (
          res.contentName.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
          res.advertiseContentName.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
          res.categoryName.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
          res.subcategoryName.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
          res.position.toString().includes(this.title)
        );
      });
      this.page = 1;

    }
  }
}
