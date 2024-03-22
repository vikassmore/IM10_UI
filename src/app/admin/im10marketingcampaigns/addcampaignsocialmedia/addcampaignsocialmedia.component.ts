import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';

@Component({
  selector: 'app-addcampaignsocialmedia',
  templateUrl: './addcampaignsocialmedia.component.html',
  styleUrls: ['./addcampaignsocialmedia.component.css']
})

export class AddcampaignsocialmediaComponent implements OnInit {
  public CampaignTitleList: any = [];
  selectedFile: File = null;
  fileError: boolean = false;
  fileSizeError = false;
  isFileUploaded: boolean = false;
  file: any;
  fileprofile: any;
  selectedFileProfile: File = null;
  profileImageFilePath?: FileList;
  isFileUploadedProfile: boolean = false;
  public showtitleerror : boolean=false;
  invalidfileType=false;

  uploadForm = new FormGroup({
    marketingcampaignId: new FormControl('', [Validators.required]),
    socialMediaViews: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
  });

  constructor(public dialog: MatDialog, public appService: AppService, public snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.getContentDetailsListByPlayetId();
  }

  ///GetContentDetailsbyPlayerID
  public getContentDetailsListByPlayetId() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getContentByPlayerId("api/CampaignDetail/GetCampaignDetailByPlayerId/", playerId).subscribe(data => {
      this.CampaignTitleList = data;
    });
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



getFileExtension(filename: string): string {
  return filename.split('.').pop()?.toLowerCase() || '';
}
  ///Select Media file
  handleFileSelectProfile(event: any) {
  this.fileprofile = event.target.files[0];
  const allowedExtensions = ['jpg', 'jpeg', 'png'];
  const fileExtension = this.getFileExtension(this.fileprofile.name);
  
    if (!allowedExtensions.includes(fileExtension)) {
      // Invalid file type
      this.invalidfileType=true;
      this.isFileUploadedProfile=true;
      return;
    }
    if (this.fileprofile) {
      this.selectedFileProfile = this.fileprofile;
      this.isFileUploadedProfile = true;
      setTimeout(() => {
        this.isFileUploadedProfile = false; // Reset isFileUploaded to false after delay
      },);
    }
  }

  ///Addplayer
  public AddCampaignSocialMedia(userObject) {
    var formData = new FormData();
    formData.append('socialmediaview', this.uploadForm.value.socialMediaViews);
    formData.append('marketingcampaignId', this.uploadForm.value.marketingcampaignId);
    formData.append('screenShotFilePath', this.fileprofile);

    this.appService.AddContent('api/CampaignSocialMediaDetail/AddCampaignSocialMediaDetail', formData).subscribe(() => {
      const dialogRef = this.dialog.open(OkDialogComponent, {
        maxWidth: "500px",
        disableClose: true,
        data: {
          title: "Save Action",
          message: "Social Media Added Successfully!"
        }
      });

      dialogRef.afterClosed().subscribe(() => {
        window.location.reload();
      });
    },);
  }
}
