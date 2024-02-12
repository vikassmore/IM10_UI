import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';

@Component({
  selector: 'app-listlisting',
  templateUrl: './listlisting.component.html',
  styleUrls: ['./listlisting.component.css']
})

export class ListlistingComponent implements OnInit {
  public ListingList: any = [];
  public NewListingList: any = [];
  public title: any;
  public page: any;
  public count = 8;

  constructor(public dialog: MatDialog, public appService: AppService, public snackBar: MatSnackBar, private tokenStorage: TokenStorageService, public router: Router) { }

  ngOnInit(): void {
    this.getlistingListByPlayetId();
  }

  ///getlistingListByPlayetId
  public getlistingListByPlayetId() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getContentByPlayerId("api/ListingDetail/GetListingDetailByplayerId/", playerId).subscribe(data => {
      this.ListingList = data;
      this.NewListingList = data;
    });
  }

  ///Search
  Search() {
    if (this.title == "") {
      this.getlistingListByPlayetId();
    }
    else {
      this.ListingList = this.NewListingList.filter(res => {
        return (res.companyName.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
          res.contactPersonName.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
          res.contactPersonEmailId.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
          res.contactPersonMobile.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
          res.companyEmailId.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
          res.companyMobile.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
          res.companyPhone.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()) ||
          res.companyWebSite.toLocaleLowerCase().includes(this.title.toLocaleLowerCase())
        );
      });
      this.page = 1;
    }
  }

  ///Pagination
  public onPageChanged(event) {
    this.page = event;
    window.scrollTo(0, 0);
  }

  ///Delete
  public deleteservice(listing: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      disableClose: true,

      data: {
        title: "Confirm Action",
        message: "Are you sure you want delete this Listing Details?"
      }

    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        const index: number = this.ListingList.indexOf(listing);
        if (index !== -1) {
          this.ListingList.splice(index, 1);
          const dialogRef = this.dialog.open(OkDialogComponent, {
            maxWidth: "500px",
            disableClose: true,

            data: {
              title: "Delete Action",
              message: "Listing Deleted Successfully!"
            }
          });
          this.appService.deleteuser(`api/ListingDetail/DeleteListingDetail?listingId=${listing.listingId}`, {}).subscribe(data => {
          });
        }
      }
    });
  }
}
