import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
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
  public showtitleerror : boolean=false;
  invalidProfilefileType=false;
  invalidaadharfileType=false;
  invalidPanfileType=false;
  invalidvotingfileType=false;
  invaliddrivingfileType=false;
  public SportList = [];
  currentPage: number;
  today = new Date().toISOString().split('T')[0];

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
    sportId:new FormControl(),
    dob:new FormControl('', [Validators.required])
  });

  constructor(public dialog: MatDialog, public appService: AppService, public snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.playerId = this.route.snapshot.params['id'];
    this.getPlayerbyId(this.playerId)
    this.getSportMaster()
  }

  
///PAN card validation
  PANInvalidPatternError: boolean = false;
  keyPressPan2(event: any) {
    var inp = String.fromCharCode(event.keyCode);
    var firmPan = event.target.value + inp;
    firmPan = firmPan.toUpperCase();
    if (/^[A-Z]{0,5}$/.test(firmPan)) {
      return true;
    } else if (/^[A-Z]{5}[0-9]{0,4}$/i.test(firmPan)) {
      return true;
    } else if (/^[A-Z]{5}[0-9]{4}[A-Z]{0,1}$/i.test(firmPan)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
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

  getprofileFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }
  ///handleFileSelectProfile
  handleFileSelectProfile(event: any) {
    this.fileprofile = event.target.files[0];

    const allowedExtensions = ['jpg', 'jpeg', 'png'];
  const fileExtension = this.getprofileFileExtension(this.fileprofile.name);
  
    if (!allowedExtensions.includes(fileExtension)) {
      // Invalid file type
      this.invalidProfilefileType=true;
      this.isFileUploadedProfile=true;
      return;
    }
    if (this.fileprofile) {
      this.selectedFileProfile = this.fileprofile;
      this.isFileUploadedProfile = true;
      this.invalidProfilefileType = false;

      setTimeout(() => {
        this.isFileUploadedProfile = false;
      },);
    }
  }


  getaadharFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }
  ///handleFileSelectAadhar
  handleFileSelectAadhar(event: any) {
    this.fileaadhar = event.target.files[0];

    const allowedExtensions = ['jpg', 'jpeg', 'png','pdf'];
  const fileExtension = this.getaadharFileExtension(this.fileaadhar.name);
  
    if (!allowedExtensions.includes(fileExtension)) {
      // Invalid file type
      this.invalidaadharfileType=true;
      this.isFileUploadedadhar=true;
      return;
    }
    if (this.fileaadhar) {
      this.selectedFileAadhar = this.fileaadhar;
      this.isFileUploadedadhar = true;
      this.invalidaadharfileType = false; 
      setTimeout(() => {
        this.isFileUploadedadhar = false;
      },);
    }
  }


  getdrivingFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }
  ///handleFileSelectDriving
  handleFileSelectDriving(event: any) {
    this.filedriving = event.target.files[0];
    const allowedExtensions = ['jpg', 'jpeg', 'png','pdf'];
    const fileExtension = this.getdrivingFileExtension(this.filedriving.name);
    
      if (!allowedExtensions.includes(fileExtension)) {
        // Invalid file type
        this.invaliddrivingfileType=true;
        this.isFileUploadeddrive=true;
        return;
      }
    if (this.filedriving) {
      this.selectedFileDriving = this.filedriving;
      this.isFileUploadeddrive = true;
      this.invaliddrivingfileType = false; 
      setTimeout(() => {
        this.isFileUploadeddrive = false;
      },);
    }
  }

  getpanFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }
  ///handleFileSelectPan
  handleFileSelectPan(event: any) {
    this.filepan = event.target.files[0];
    const allowedExtensions = ['jpg', 'jpeg', 'png','pdf'];
    const fileExtension = this.getpanFileExtension(this.filepan.name);
    
      if (!allowedExtensions.includes(fileExtension)) {
        // Invalid file type
        this.invalidPanfileType=true;
        this.isFileUploadedpan=true;
        return;
      }
    if (this.filepan) {
      this.selectedFilePan = this.filepan;
      this.isFileUploadedpan = true;
      this.invalidPanfileType = false;
      setTimeout(() => {
        this.isFileUploadedpan = false;
      },);
    }
  }


  getvotingFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }
  ///handleFileSelectVoting
  handleFileSelectVoting(event: any) {
    this.filevoting = event.target.files[0];
    const allowedExtensions = ['jpg', 'jpeg', 'png','pdf'];
    const fileExtension = this.getvotingFileExtension(this.filevoting.name);
    
      if (!allowedExtensions.includes(fileExtension)) {
        // Invalid file type
        this.invalidvotingfileType=true;
        this.isFileUploadedvot=true;
        return;
      }
    if (this.filevoting) {
      this.selectedFileVoting = this.filevoting;
      this.isFileUploadedvot = true;
      this.invalidvotingfileType = false; 
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


///getallsportsfordropdown
public getSportMaster() {
  this.appService.getAllSports("api/MasterAPIs/GetAllSports").subscribe(data => {
    this.SportList = data;
  });
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
    formData.append('sportId',this.uploadForm.value.sportId)

    // Extract year, month, and day from the date
   // Assuming dob is a string in the format "yyyy-MM-dd"
const dobString = this.uploadForm.value.dob; // Assuming dob is a string
const dobDate = new Date(dobString); // Parse dobString into a Date object

if (!isNaN(dobDate.getTime())) { // Check if dobDate is a valid Date object
  const year = dobDate.getFullYear();
  const month = String(dobDate.getMonth() + 1).padStart(2, '0'); 
  const day = String(dobDate.getDate()).padStart(2, '0');
  const dobFormatted = `${year}-${month}-${day}T00:00:00`; // Format dob as "yyyy-MM-ddT00:00:00"
  
  formData.append('dob', dobFormatted);
} else {
  console.error('Invalid date string:', dobString);
}


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
    formData.append("sportId",this.uploadForm.value.sportId)

    // Extract year, month, and day from the date
    // Assuming dob is a string in the format "yyyy-MM-dd"
const dobString = this.uploadForm.value.dob; // Assuming dob is a string
const dobDate = new Date(dobString); // Parse dobString into a Date object

if (!isNaN(dobDate.getTime())) { // Check if dobDate is a valid Date object
  const year = dobDate.getFullYear();
  const month = String(dobDate.getMonth() + 1).padStart(2, '0'); 
  const day = String(dobDate.getDate()).padStart(2, '0');
  const dobFormatted = `${year}-${month}-${day}T00:00:00`; // Format dob as "yyyy-MM-ddT00:00:00"
  
  formData.append('dob', dobFormatted);
} else {
  console.error('Invalid date string:', dobString);
}


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
      this.appService.getPlatyerbyid("api/PlayerDetail/GetPlayerDetailByPlayerId/", playerId).subscribe(data => {
        this.uploadForm.controls['playerId'].setValue(data.playerId);
        this.uploadForm.controls['firstName'].setValue(data.firstName);
        this.uploadForm.controls['lastName'].setValue(data.lastName);
        this.uploadForm.controls['address'].setValue(data.address);
        this.uploadForm.controls['bankAcountNo'].setValue(data.bankAcountNo);
        this.uploadForm.controls['pancardNo'].setValue(data.pancardNo);
        this.uploadForm.controls['sportId'].setValue(data.sportId)
        this.uploadForm.controls['dob'].setValue(data.dob)

      });

    }
  }
}
