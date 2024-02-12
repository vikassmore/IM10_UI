import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddcompanyComponent } from '../addcompany/addcompany.component';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';
import { addPlayerEndoresment, EditPlayerEndoresment } from './endorsementmanageradmin.Model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addeditplayerendorsement',
  templateUrl: './addeditplayerendorsement.component.html',
  styleUrls: ['./addeditplayerendorsement.component.css']
})

export class AddeditplayerendorsementComponent implements OnInit {
  public CompanyList = [];
  public EndosrsementList = [];
  endorsmentId: string | any;
  public formdata = {};
  public formattedStartDate: any
  public formattedEndDate: any
  public listingId: any;

  uploadForm = new FormGroup({
    endorsmentId: new FormControl('', []),
    companyname: new FormControl('', [Validators.required]),
    Endosrsement: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    finalPrice: new FormControl('', [Validators.required]),
    Notes: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
  });

  constructor(private datePipe: DatePipe, public dialog: MatDialog, public appService: AppService, public snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder, private location: Location) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddcompanyComponent, {
      disableClose: true,
      width: '220vh',
    }
    );
  }

  openDialogEdit(listingId: any): void {
    this.listingId = listingId
    const dialogRef = this.dialog.open(AddcompanyComponent, {
      width: '220vh',
      disableClose: true,
      data: { listingId: listingId }
    }
    );
  }

  ngOnInit(): void {
    this.endorsmentId = this.route.snapshot.params['id'];
    this.getCompanyListByPlayetId();
    this.getEndorsmentMaster();
    this.getPlayerEndorsementtbyId(this.endorsmentId)
  }

  ///GetContentDetailsbyPlayerID
  public getCompanyListByPlayetId() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getCompanyPlayerId("api/ListingDetail/GetListingDetailByplayerId/", playerId).subscribe(data => {
      this.CompanyList = data;
    });
  }

  ///getEndorsmentMasterfordropdown
  public getEndorsmentMaster() {
    this.appService.getsubAllcontenttype("api/EndorsmentType/GetAllEndorsmentType").subscribe(data => {
      this.EndosrsementList = data;
    });
  }

  ///Validation for only enter number
  keyPressOnlynum(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  ///Submit details
  public Submit(userObject) {
    if (this.endorsmentId == "" || this.endorsmentId == undefined) {
      this.createPlayerEndosrsement(userObject);
    }

    else {
      if (this.uploadForm.valid) {
        this.updatePlayerEndorsement(userObject);
      }
    }
  }

  ///Add createPlayerEndosrsement
  public createPlayerEndosrsement(formData) {
    let startDate = new Date(formData.startDate);
    let endDate = new Date(formData.endDate);

    let formattedStartDate = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000).toISOString();
    let formattedEndDate = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000).toISOString();

    let addPlayerEndoresmentModel: addPlayerEndoresment = {
      "playerId": window.sessionStorage.getItem("playerId"),
      "listingId": formData.companyname,
      "endorsmentType": formData.Endosrsement,
      "finalPrice": formData.finalPrice,
      "notes": formData.Notes,
      "endDate": formattedEndDate,
      "startDate": formattedStartDate,
    }

    this.appService.Addlisting('api/EndorsmentDetail/AddEndorsmentDetail', addPlayerEndoresmentModel).subscribe(() => {

      const dialogRef = this.dialog.open(OkDialogComponent, {
        maxWidth: "500px",
        disableClose: true,

        data: {
          title: "Save Action",
          message: "Player Endorsement Added Successfully!"
        }
      });
      this.router.navigate(['/admin/endorsementmanageradmin/listplayerendorsement'], { relativeTo: this.route });
    }, error => {
      this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 2000 });
    });
  }

  ///updatePlayerEndorsement
  public updatePlayerEndorsement(formData) {

    let startDate = new Date(formData.startDate);
    let endDate = new Date(formData.endDate);

    let formattedStartDate = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000).toISOString();
    let formattedEndDate = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000).toISOString();

    let EditPlayerEndoresmentModel: EditPlayerEndoresment = {
      "playerId": window.sessionStorage.getItem("playerId"),
      "endorsmentId": formData.endorsmentId,
      "listingId": formData.companyname,
      "endorsmentType": formData.Endosrsement,
      "finalPrice": formData.finalPrice,
      "notes": formData.Notes,
      "endDate": formattedEndDate,
      "startDate": formattedStartDate,
    }

    this.appService.Addlisting('api/EndorsmentDetail/AddEndorsmentDetail', EditPlayerEndoresmentModel).subscribe(() => {
      const dialogRef = this.dialog.open(OkDialogComponent, {
        maxWidth: "500px",
        disableClose: true,

        data: {
          title: "Edit Action",
          message: "Player Endorsement Updated Successfully!"
        }
      });
      this.router.navigate(['/admin/endorsementmanageradmin/listplayerendorsement'], { relativeTo: this.route });
    }, error => {
      this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    });
  }

  ///Get Player Endorsment Details to set value
  public getPlayerEndorsementtbyId(endorsmentId) {
    if (endorsmentId > 0) {
      this.appService.getPlayerEndorsementById("api/EndorsmentDetail/GetEndorsmentDetailById/", endorsmentId).subscribe(data => {
        this.uploadForm.controls['endorsmentId'].setValue(data.endorsmentId);
        this.uploadForm.controls['companyname'].setValue(data.listingId);
        this.uploadForm.controls['Endosrsement'].setValue(data.endorsmentType);
        this.uploadForm.controls['startDate'].setValue(data.startDate);
        this.uploadForm.controls['endDate'].setValue(data.endDate);
        this.uploadForm.controls['finalPrice'].setValue(data.finalPrice);
        this.uploadForm.controls['Notes'].setValue(data.notes);
      });
    }
  }
}
