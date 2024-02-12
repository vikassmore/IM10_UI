import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-viewcampaignsocialmedia',
  templateUrl: './viewcampaignsocialmedia.component.html',
  styleUrls: ['./viewcampaignsocialmedia.component.css']
})

export class ViewcampaignsocialmediaComponent implements OnInit {
  marketingCampaignId: any;
  public ContentList: any = [];
  public ContenttypeList = [];
  public SocialMediaList = [];
  public NewSocialMediaList = [];
  public username: any;
  public page: any;
  public count = 4;

  uploadForm = new FormGroup({
    marketingCampaignId: new FormControl(),
    contentId: new FormControl({ value: '', disabled: true }, [Validators.required]),
    title: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    contentTypeId: new FormControl({ value: '', disabled: true }, [Validators.required]),
    description: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
  });

  constructor(public dialog: MatDialog, public appService: AppService, public snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.marketingCampaignId = this.route.snapshot.params['id'];
    this.getCampaignlistbyid(this.marketingCampaignId);
    this.getSocialMedia();
    this.getContentDetailsListByPlayerId();
    this.getContenttypenameMaster();
  }

  ///getContentDetailsListByPlayetId
  public getContentDetailsListByPlayerId() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getContentByPlayerId("api/ContentDetail/GetContentdetailByPlayerId/", playerId).subscribe(data => {
      this.ContentList = data;
    });
  }

  ///getContenttypenameMaster
  public getContenttypenameMaster() {
    this.appService.getsubAllcontenttype("api/MasterAPIs/GetAllContentType").subscribe(data => {
      this.ContenttypeList = data;
    });
  }

  ///GetAdvContentMappingByadvContentMapId
  public getCampaignlistbyid(marketingCampaignId) {
    if (marketingCampaignId > 0) {
      this.appService.getById("api/CampaignDetail/GetCampaignDetailById/", marketingCampaignId).subscribe(data => {
        this.uploadForm.controls['contentId'].setValue(data.contentId);
        this.uploadForm.controls['title'].setValue(data.title);
        this.uploadForm.controls['contentTypeId'].setValue(data.contentTypeId);
        this.uploadForm.controls['description'].setValue(data.description);
        this.uploadForm.controls['marketingCampaignId'].setValue(marketingCampaignId);
      });
    }
  }

  ///getContenttypenameMaster
  public getSocialMedia() {
    this.appService.getById("api/CampaignSocialMediaDetail/GetCampaignSocialMediaDetailById/", this.marketingCampaignId).subscribe(data => {
      this.SocialMediaList = data;
      this.NewSocialMediaList = data;
    });
  }

  ///pagination
  public onPageChanged(event) {
    this.page = event;
    window.scrollTo(0, 0);
  }

  ///Search
  Search() {
    var username = (<HTMLInputElement>document.querySelector('.searchtext')).value;
    if (username == "") {
      this.getSocialMedia();
    }
    else {
      this.SocialMediaList = this.NewSocialMediaList.filter(res => {
        return (
          res.socialMediaViews.toLocaleLowerCase().includes(username.toLocaleLowerCase())
        );
      });
    }
  }
}
