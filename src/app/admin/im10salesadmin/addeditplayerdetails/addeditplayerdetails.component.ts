import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addeditplayerdetails',
  templateUrl: './addeditplayerdetails.component.html',
  styleUrls: ['./addeditplayerdetails.component.css']
})

export class AddeditplayerdetailsComponent implements OnInit {
  playerId: any;
  public formdata = {};
  selectedFile: File = null;
  selectedFileProfile: File = null;
  selectedFileDriving: File = null;
  selectedFilePan: File = null;
  selectedFileVoting: File = null;
  selectedFileAadhar: File = null;

  aadharCardFilePath?: FileList;
  profileImageFilePath?: FileList;
  panCardFilePath?: FileList;
  votingCardFilePath?: FileList;
  drivingLicenceFilePath?: FileList;

  isFileUploadedProfile: boolean = false;
  isFileUploadedadhar: boolean = false;
  isFileUploadedpan: boolean = false;
  isFileUploadedvot: boolean = false;
  isFileUploadeddrive: boolean = false;

  fileprofile: any;
  fileaadhar: any;
  filedriving: any;
  filepan: any;
  filevoting: any;

  currentPage: number;

  uploadForm = new FormGroup({
    playerId: new FormControl('', []),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    bankAcountNo: new FormControl('', [Validators.required, Validators.minLength(5)]),
    pancardNo: new FormControl('', [Validators.required, Validators.minLength(5)]),
    address: new FormControl('', [Validators.required]),
    aadharCardFilePath: new FormControl(),
    panCardFilePath: new FormControl(),
    votingCardFilePath: new FormControl(),
    drivingLicenceFilePath: new FormControl(),
    profileImageFilePath: new FormControl(),
  });

  constructor(public dialog: MatDialog, public appService: AppService, public snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.playerId = this.route.snapshot.params['id'];
    this.getPlayerbyId(this.playerId)
  }

  ///handleFileSelectProfile
  handleFileSelectProfile(event: any) {
    this.fileprofile = event.target.files[0];
    if (this.fileprofile) {
      this.selectedFileProfile = this.fileprofile;
      this.isFileUploadedProfile = true;
      setTimeout(() => {
        this.isFileUploadedProfile = false;
      },);
    }
  }

  ///handleFileSelectAadhar
  handleFileSelectAadhar(event: any) {
    this.fileaadhar = event.target.files[0];

    if (this.fileaadhar) {
      this.selectedFileAadhar = this.fileaadhar;
      this.isFileUploadedadhar = true;
      setTimeout(() => {
        this.isFileUploadedadhar = false;
      },);
    }
  }

  ///handleFileSelectDriving
  handleFileSelectDriving(event: any) {
    this.filedriving = event.target.files[0];

    if (this.filedriving) {
      this.selectedFileDriving = this.filedriving;
      this.isFileUploadeddrive = true;
      setTimeout(() => {
        this.isFileUploadeddrive = false;
      },);
    }
  }

  ///handleFileSelectPan
  handleFileSelectPan(event: any) {
    this.filepan = event.target.files[0];

    if (this.filepan) {
      this.selectedFilePan = this.filepan;
      this.isFileUploadedpan = true;
      setTimeout(() => {
        this.isFileUploadedpan = false;
      },);
    }
  }

  ///handleFileSelectVoting
  handleFileSelectVoting(event: any) {
    this.filevoting = event.target.files[0];

    if (this.filevoting) {
      this.selectedFileVoting = this.filevoting;
      this.isFileUploadedvot = true;
      setTimeout(() => {
        this.isFileUploadedvot = false;
      },);
    }
  }

  ///Validation for only enter char
  keyPressOnlyChar(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  ///Validation for only enter number
  keyPressBankPan(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/^[a-zA-Z0-9]+$/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  ///validation in pan and bank acc num convert to upper case
  convertToUppercase(inputElement: HTMLInputElement) {
    const value = inputElement.value.toUpperCase();
    inputElement.value = value;
  }

  ///submit details
  public Submit(userObject) {
    if (this.playerId == "" || this.playerId == undefined) {
      this.Addplayer(this.formdata);
    }

    else {
      if (this.uploadForm.valid) {
        this.updatePlayer(userObject);
      }
    }
  }

  ///Addplayer
  public Addplayer(userObject) {
    var formData = new FormData();
    formData.append('firstName', this.uploadForm.value.firstName);
    formData.append('lastName', this.uploadForm.value.lastName);
    formData.append('address', this.uploadForm.value.address);
    formData.append('bankaccountNo', this.uploadForm.value.bankAcountNo);
    formData.append('pancardNo', this.uploadForm.value.pancardNo);
    formData.append('aadharCardFilePath', this.fileaadhar);
    formData.append('panCardFilePath', this.filepan);
    formData.append('votingCardFilePath', this.filevoting);
    formData.append('drivingLicenceFilePath', this.filedriving);
    formData.append('profileImageFilePath', this.fileprofile);

    this.appService.AddContent('api/PlayerDetail/AddPlayerDetail', formData).subscribe(() => {
      const dialogRef = this.dialog.open(OkDialogComponent, {
        maxWidth: "500px",
        disableClose: true,

        data: {
          title: "Save Action",
          message: "Player Added Successfully!"
        }

      });
      this.router.navigate(['/admin/im10salesadmin/listplayerdetails'], { relativeTo: this.route });
    },);
  }

  ///updatePlayer
  public updatePlayer(userObject) {

    var formData = new FormData();
    formData.append('playerId', this.uploadForm.value.playerId);
    formData.append('firstName', this.uploadForm.value.firstName);
    formData.append('lastName', this.uploadForm.value.lastName);
    formData.append('address', this.uploadForm.value.address);
    formData.append('bankaccountNo', this.uploadForm.value.bankAcountNo);
    formData.append('pancardNo', this.uploadForm.value.pancardNo);

    formData.append('aadharCardFilePath', this.fileaadhar);
    formData.append('panCardFilePath', this.filepan);
    formData.append('votingCardFilePath', this.filevoting);
    formData.append('drivingLicenceFilePath', this.filedriving);
    formData.append('profileImageFilePath', this.fileprofile);

    this.appService.editcontent('api/PlayerDetail/EditPlayerDetail', formData).subscribe(() => {
      const dialogRef = this.dialog.open(OkDialogComponent, {
        maxWidth: "500px",
        disableClose: true,
        data: {
          title: "Edit Action",
          message: "Player Updated Successfully!"
        }
      });
      this.router.navigate(['/admin/im10salesadmin/listplayerdetails'], { relativeTo: this.route });
    }, error => {
      this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    });
  }

  ///getPlayerbyId
  public getPlayerbyId(playerId) {
    if (playerId > 0) {
      this.appService.getPlatyerbyid("api/PlayerDetail/GetPlayerDetailById/", playerId).subscribe(data => {
        this.uploadForm.controls['playerId'].setValue(data.playerId);
        this.uploadForm.controls['firstName'].setValue(data.firstName);
        this.uploadForm.controls['lastName'].setValue(data.lastName);
        this.uploadForm.controls['address'].setValue(data.address);
        this.uploadForm.controls['bankAcountNo'].setValue(data.bankAcountNo);
        this.uploadForm.controls['pancardNo'].setValue(data.pancardNo);
      });
    }
  }
}
