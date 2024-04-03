import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import Cropper from 'cropperjs';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ImageCropperDialogComponentComponent } from '../image-cropper-dialog-component/image-cropper-dialog-component.component';

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

  constructor(public dialog: MatDialog, public appService: AppService, public snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder, private location: Location,) { }

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

  getprofileFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }

  handleFileSelectProfile(event: any) {
    this.fileprofile = event.target.files[0];
    if (!this.fileprofile) {
      this.selectedFileProfile = null;
      return;
    }
    const allowedExtensions = ['jpg', 'jpeg', 'png'];
    const fileExtension = this.getprofileFileExtension(this.fileprofile.name);
  
    if (!allowedExtensions.includes(fileExtension)) {
        // Invalid file type
        this.invalidProfilefileType = true;
        this.isFileUploadedProfile = true;
        return;
    }

    // Read the file and perform cropping
    const reader = new FileReader();
    reader.onload = (e: any) => {
        // Assign the base64 cropped image
        const croppedImage = e.target.result;
        this.openImageCropperDialog(event, croppedImage);
    };
    
    reader.readAsDataURL(this.fileprofile);
    // Set other flags and variables as needed
    if (this.fileprofile) {
        this.selectedFileProfile = this.fileprofile;
        this.isFileUploadedProfile = true;
        this.invalidProfilefileType = false;

        // Hide file uploaded message after a timeout
        setTimeout(() => {
            this.isFileUploadedProfile = false;
        });
        this.updateSubmitButtonState();

    } 
    else 
    {
        // Handle if file is not selected
    }
  }

  openImageCropperDialog(event: any, croppedImage: string) {
    debugger
    const dialogRef = this.dialog.open(ImageCropperDialogComponentComponent, {
      width: '400px', // Adjust the size as needed
      height: '400px',
      data: {
        imageChangedEvent: event,
        croppedImage: croppedImage,
      }     
    });

    dialogRef.componentInstance.croppedImageSaved.subscribe((croppedImage: string) => {
      // Convert base64 to a File object if needed
      const file = this.base64ToFile(croppedImage, this.selectedFileProfile);
      this.fileprofile = file;
    });
  }
  
  ///convert blob into file
  private  base64ToFile(base64, uploadedFile) {
    const fileExtension = uploadedFile.name.split('.').pop()?.toLowerCase() || 'png';
    const base64Data = base64.split(';base64,').pop();
    const blob = this.b64toBlob(base64Data, uploadedFile.type);
    return new File([blob], `cropped_image.${fileExtension}`, { type: uploadedFile.type });
}

/// convert base64 into blob
private b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
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

  

  getaadharFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }
  ///handleFileSelectAadhar
  handleFileSelectAadhar(event: any) {
    this.fileaadhar = event.target.files[0];
    if (!this.fileaadhar) {
      this.selectedFileAadhar = null;
      return;
    }

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
    this.updateSubmitButtonState();

  }
  

  getdrivingFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }
  ///handleFileSelectDriving
  handleFileSelectDriving(event: any) {
    this.filedriving = event.target.files[0];
    if (!this.filedriving) {
      this.selectedFileDriving = null;
      return;
    }
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
    this.updateSubmitButtonState();

  }

  getpanFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }
  ///handleFileSelectPan
  handleFileSelectPan(event: any) {
    this.filepan = event.target.files[0];
    if (!this.filepan) {
      this.selectedFilePan = null;
      return;
    }
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
    this.updateSubmitButtonState();

  }


  getvotingFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }
  ///handleFileSelectVoting
  handleFileSelectVoting(event: any) {
    this.filevoting = event.target.files[0];
    if (!this.filevoting) {
      this.selectedFileVoting = null;
      return;
    }
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
    this.updateSubmitButtonState();

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



  isSubmitDisabled(): boolean {
    return !this.uploadForm.valid || !this.selectedFileAadhar || !this.selectedFileDriving || !this.selectedFilePan || !this.selectedFileProfile || !this.selectedFileVoting;
}


submitDisabled: boolean = true;
updateSubmitButtonState() {
  this.submitDisabled = this.isSubmitDisabled();
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
    debugger
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
  public getPlayerbyId(playerId) 
  {
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