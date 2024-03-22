import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { addcampaign } from './addeditcampaign.Model';
import { editcampaign } from './addeditcampaign.Model';

@Component({
  selector: 'app-addeditcampaign',
  templateUrl: './addeditcampaign.component.html',
  styleUrls: ['./addeditcampaign.component.css']
})

export class AddeditcampaignComponent implements OnInit {
  public ContentList: any = [];
  public ContenttypeList = [];
  marketingCampaignId: any;
  public formdata = {};
  public showtitleerror : boolean=false;

  uploadForm = new FormGroup({
    marketingCampaignId: new FormControl(),
    contentId: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    contentTypeId: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
  });

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, public appService: AppService, public router: Router, private route: ActivatedRoute) { }

  ///Close the mat dialog
  closeDialog() {
    this.dialog.closeAll();
  }

  ngOnInit(): void {
    this.getCampaignlistbyid(this.data.marketingCampaignId);
    this.getContentDetailsListByPlayerId();
    this.getContenttypenameMaster();
  }


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


  ///getContentDetailsListByPlayetId
  public getContentDetailsListByPlayerId() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getContentByPlayerId("api/ContentDetail/GetApprovedContentdetailByPlayerId/", playerId).subscribe(data => {
      this.ContentList = data;
    });
  }

  ///getContenttypenameMaster
  public getContenttypenameMaster() {
    this.appService.getsubAllcontenttype("api/MasterAPIs/GetAllContentType").subscribe(data => {
      this.ContenttypeList = data;
    });
  }

  ///Submit
  public Submit(userObject) {
    var marketingCampaignId = userObject.marketingCampaignId

    if (marketingCampaignId == "" || marketingCampaignId == undefined) {
      this.AddCampaign(userObject);
    }
    else {
      if (this.uploadForm.valid) {
        this.UpdateCampaign(userObject);
      }
    }
  }

  ///AddCampaign
  public AddCampaign(formData) {
    let addcampaignModel: addcampaign = {
      "contentId": formData.contentId,
      // "marketingCampaignId": formData.marketingCampaignId,
      "title": formData.title,
      "contentTypeId": formData.contentTypeId,
      "description": formData.description,
      "playerId": window.sessionStorage.getItem("playerId"),
    }

    this.appService.AddCampaign('api/CampaignDetail/AddCampaignDetail', addcampaignModel).subscribe(() => {
      this.closeDialog();
      const dialogRef = this.dialog.open(OkDialogComponent, {
        maxWidth: "500px",
        disableClose: true,

        data: {
          title: "Save Action",
          message: "Campaign Added Successfully!"
        }

      }
      );
      dialogRef.afterClosed().subscribe(() => {
        window.location.reload();
      });
      this.router.navigate(['/admin/im10marketingcampaigns/listcampaing'], { relativeTo: this.route });
    }, error => {
    });
  }

  ///GetAdvContentMappingByadvContentMapId
  public getCampaignlistbyid(marketingCampaignId) {
    if (marketingCampaignId > 0) {
      this.appService.getById("api/CampaignDetail/GetCampaignDetailById/", marketingCampaignId).subscribe(data => {

        this.uploadForm.controls['title'].setValue(data.title);
        this.uploadForm.controls['contentId'].setValue(data.contentId);
        this.uploadForm.controls['contentTypeId'].setValue(data.contentTypeId);
        this.uploadForm.controls['description'].setValue(data.description);
        this.uploadForm.controls['marketingCampaignId'].setValue(marketingCampaignId);
      });
    }
  }

  ///UpdateCampaign
  public UpdateCampaign(formData) {
    let editcampaignModel: editcampaign = {
      "contentId": formData.contentId,
      "marketingCampaignId": formData.marketingCampaignId,
      "title": formData.title,
      "contentTypeId": formData.contentTypeId,
      "description": formData.description,
      "playerId": window.sessionStorage.getItem("playerId"),
    }
    this.appService.AddContentUpdate('api/CampaignDetail/AddCampaignDetail', editcampaignModel).subscribe(() => {
      this.closeDialog();
      const dialogRef = this.dialog.open(OkDialogComponent, {
        maxWidth: "500px",
        disableClose: true,

        data: {
          title: "Edit Action",
          message: "Campaign Updated Successfully!"
        }
      }
      );
      dialogRef.afterClosed().subscribe(() => {
        window.location.reload();
      });
      this.router.navigate(['/admin/im10marketingcampaigns/listcampaing'], { relativeTo: this.route });
    }, error => {
    });
  }
}
