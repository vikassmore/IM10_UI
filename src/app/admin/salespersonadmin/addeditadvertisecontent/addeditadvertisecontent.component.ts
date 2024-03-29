import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addeditadvertisecontent',
  templateUrl: './addeditadvertisecontent.component.html',
  styleUrls: ['./addeditadvertisecontent.component.css']
})

export class AddeditadvertisecontentComponent implements OnInit {
  advertiseContentId: string | any;
  public country = [];
  public StateList = [];
  public CityList = [];
  public ContenttypeList = [];
  states: any = [];
  cities: any[];
  StateId: string | any;
  playerId: string | any;
  CountrytId: string | any;
  CitiesId: string | any;
  isFree: boolean = false;
  isGlobal: boolean = false;
  public formdata = {};
  approved: any;
  invalidfileType=false;
  isDeleted: any;
  advertiseFilePath?: FileList;
  fileError: boolean = false;
  fileSizeError = false;
  selectedFile: File = null;
  startDateFormatted: any;
  endDateFormatted: any;
  isFileUploaded: boolean = false;
  file: any;
  public showtitleerror : boolean=false;

  uploadForm = new FormGroup({
    advertiseContentId: new FormControl('', []),
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    finalPrice: new FormControl('', [Validators.required]),
    nationId: new FormControl('', [Validators.required]),
    stateId: new FormControl('', [Validators.required]),
    cityId: new FormControl('', [Validators.required]),
    contentTypeId: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    isFree: new FormControl(),
    isGlobal: new FormControl(),
    advertiseFilePath: new FormControl(),
  });

  constructor(public dialog: MatDialog, public appService: AppService, public snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.advertiseContentId = this.route.snapshot.params['id'];
    this.getNationMaster();
    this.getContenttypenameMaster();

    this.getcontentbyId(this.advertiseContentId)
  }

  getFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }
  ///Select file
  handleFileSelect(event: any) {
    this.file = event.target.files[0];
    const maxFileSize = 50000000;
    if (this.file.size > maxFileSize) {
      this.fileSizeError = true;
      return;
    }
    const allowedExtensions = ['mp4', 'jpg', 'jpeg', 'png'];
    const fileExtension = this.getFileExtension(this.file.name);
  
    if (!allowedExtensions.includes(fileExtension)) {
      // Invalid file type
      this.invalidfileType=true;
      this.isFileUploaded=true;
      return;
    }
    if (this.file) {
      this.selectedFile = this.file;
      this.isFileUploaded = true;
      this.fileSizeError = false;
      this.invalidfileType=false;

      setTimeout(() => {
        this.isFileUploaded = false;
      },);
    }
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

  ///Submit
  public Submit(userObject) {
    if (this.advertiseContentId == "" || this.advertiseContentId == undefined) {
      this.createAdvContent(this.formdata);
    }
    else {
      if (this.uploadForm.valid) {
        this.updateAdvContent(userObject);
      }
    }
  }


///check validation for blank space
titlekeyDown(event: KeyboardEvent) {
  const inputValue = (event.target as HTMLInputElement).value;

  // Check if the input consists only of spaces
  const isOnlySpaces = /^\s*$/.test(inputValue);

  if (event.key === ' ' && isOnlySpaces) 
    {
    this.showtitleerror = true; // Set the flag to show the error message
    event.preventDefault(); // Prevent the space character from being inserted
  } else {
    this.showtitleerror = false; // Hide the error message for other keys
  }
}

  ///Add createAdvContent
  public createAdvContent(userObject) {
    var formData = new FormData();

    let startDate = this.uploadForm.get('startDate').value;
    let endDate = this.uploadForm.get('endDate').value;

    let gmtFormatRegex = /^.{3}\s.{3}\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT\+\d{4}\s\(.+\)$/;

    formData.append('title', this.uploadForm.value.title);
    formData.append('nationId', this.uploadForm.value.nationId);
    formData.append('stateId', this.uploadForm.value.stateId);
    formData.append('cityId', this.uploadForm.value.cityId);
    formData.append('finalPrice', this.uploadForm.value.finalPrice);
    if (gmtFormatRegex.test(startDate)) {
      let dateObject = new Date(startDate);
      let endDateFormatted = `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${dateObject
          .getDate()
          .toString()
          .padStart(2, '0')} ${dateObject
            .getHours()
            .toString()
            .padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}:${dateObject
              .getSeconds()
              .toString()
              .padStart(2, '0')}`;
      formData.append('startDate', endDateFormatted);
    }

    if (gmtFormatRegex.test(endDate)) {
      let dateObject = new Date(endDate);
      let endDateFormatted = `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${dateObject
          .getDate()
          .toString()
          .padStart(2, '0')} ${dateObject
            .getHours()
            .toString()
            .padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}:${dateObject
              .getSeconds()
              .toString()
              .padStart(2, '0')}`;
      formData.append('endDate', endDateFormatted);
    }
    formData.append('contentTypeId', this.uploadForm.value.contentTypeId);
    formData.append('advertiseFilePath', this.file);
    formData.append('isFree', this.isFree.toString());
    formData.append('isGlobal', this.isGlobal.toString());
    formData.append('playerId', window.sessionStorage.getItem("playerId"));
    if (window.sessionStorage.getItem("playerId") != null || window.sessionStorage.getItem("playerId") != undefined) {
      this.appService.AddAdvContent('api/AdvtContentDetail/AddAdvContentDetail', formData).subscribe(() => {

        const dialogRef = this.dialog.open(OkDialogComponent, {
          maxWidth: "500px",
          disableClose: true,

          data: {
            title: "Save Action",
            message: "Advertise Content Added Successfully!"
          }
        });
        this.router.navigate(['/admin/salespersonadmin/listadvertisecontent'], { relativeTo: this.route });
      }, error => {
        this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 2000 });
      });
    }
  }

  ///updateAdvContent
  public updateAdvContent(userObject) {
    var formData1 = new FormData();
    let startDate = this.uploadForm.get('startDate').value;
    let endDate = this.uploadForm.get('endDate').value;
    let gmtFormatRegex = /^.{3}\s.{3}\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT\+\d{4}\s\(.+\)$/;

    formData1.append('advertiseContentId', this.advertiseContentId);
    formData1.append('title', this.uploadForm.value.title);
    formData1.append('nationId', this.uploadForm.value.nationId);
    formData1.append('stateId', this.uploadForm.value.stateId);
    formData1.append('cityId', this.uploadForm.value.cityId);
    formData1.append('finalPrice', this.uploadForm.value.finalPrice);

    if (gmtFormatRegex.test(startDate)) {
      let dateObject = new Date(startDate);
      let endDateFormatted = `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${dateObject
          .getDate()
          .toString()
          .padStart(2, '0')} ${dateObject
            .getHours()
            .toString()
            .padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}:${dateObject
              .getSeconds()
              .toString()
              .padStart(2, '0')}`;
      formData1.append('startDate', endDateFormatted);
    }
    else {
      formData1.append('startDate', this.uploadForm.value.startDate);
    }

    if (gmtFormatRegex.test(endDate)) {
      let dateObject = new Date(endDate);
      let endDateFormatted = `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${dateObject
          .getDate()
          .toString()
          .padStart(2, '0')} ${dateObject
            .getHours()
            .toString()
            .padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}:${dateObject
              .getSeconds()
              .toString()
              .padStart(2, '0')}`;
      formData1.append('endDate', endDateFormatted);
    }

    else {
      formData1.append('endDate', this.uploadForm.value.endDate);
    }
    formData1.append('contentTypeId', this.uploadForm.value.contentTypeId);
    formData1.append('isFree', this.uploadForm.value.isFree);
    formData1.append('isGlobal', this.uploadForm.value.isGlobal);
    formData1.append('advertiseFilePath', this.file);
    formData1.append('PlayerId', window.sessionStorage.getItem("playerId"));

    this.appService.AddAdvContent('api/AdvtContentDetail/AddAdvContentDetail', formData1).subscribe(() => {
      const dialogRef = this.dialog.open(OkDialogComponent, {
        maxWidth: "500px",
        disableClose: true,

        data: {
          title: "Edit Action",
          message: "Content Updated Successfully!"
        }
      });
      this.router.navigate(['/admin/salespersonadmin/listadvertisecontent'], { relativeTo: this.route });
    }, error => {
      this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    });
  }

  ///getNationMaster
  public getNationMaster() {
    this.appService.getsubAllcountry("api/MasterAPIs/GetAllCountry").subscribe(data => {
      this.country = data;
    })
  }

  /// on Change Country
  public onChangeCountry(event) {
    if (event.value) {
      let CountryId = event.value;
      this.appService.getStateById("api/MasterAPIs/GetStateByCountyId/" + CountryId).subscribe(
        data => {
          this.states = data;
          this.cities = null;
        }
      );
    } else {
      this.states = null;
      this.cities = null;
    }
  }

  /// Get State Method
  public GetState(CountryId) {
    if (CountryId == undefined) {
      CountryId == 1;
    }
    this.appService.getStateById("api/MasterAPIs/GetStateByCountyId/" + CountryId).subscribe((data: any) => {
      this.states = data;
    })
  }

  // On change State
  public onChangeState(event) {
    if (event.value) {
      let StateId = event.value;
      this.appService.getCityById("api/MasterAPIs/GetCityByStateId/" + StateId).subscribe(
        data => this.cities = data
      );
    } else {
      this.cities = null;
    }
  }

  /// Get City Method   
  public GetCity(StateId) {
    this.StateId = this.uploadForm.value;
    this.appService.getCityById("api/MasterAPIs/GetCityByStateId/" + StateId).subscribe((data: any) => {
      this.cities = data;
    })
  }

  public onCheckBoxChange(e) {
    if (e.checked) {
      this.isFree = true;
    }
    else {
      this.isFree = false;
    }
  }

  public onCheckBoxChangeisGlobal(e) {
    if (e.checked) {
      this.isGlobal = true;
    }
    else {
      this.isGlobal = false;
    }
  }

  ///getContenttypenameMaster
  public getContenttypenameMaster() {
    this.appService.getsubAllcontenttype("api/MasterAPIs/GetAllContentType").subscribe(data => {
      this.ContenttypeList = data;
    });
  }

  ///GetUserById
  public getcontentbyId(advertiseContentId) {
    if (advertiseContentId > 0) {
      this.appService.getAdvContentById("api/AdvtContentDetail/GetAdvContentDetailById/", advertiseContentId).subscribe(data => {
        this.uploadForm.controls['title'].setValue(data.title);
        this.uploadForm.controls['nationId'].setValue(data.nationId);
        this.uploadForm.controls['stateId'].setValue(data.stateId);
        this.uploadForm.controls['cityId'].setValue(data.cityId);
        this.uploadForm.controls['finalPrice'].setValue(data.finalPrice);
        this.uploadForm.controls['startDate'].setValue(data.startDate);
        this.uploadForm.controls['endDate'].setValue(data.endDate);
        this.uploadForm.controls['contentTypeId'].setValue(data.contentTypeId);
        this.uploadForm.controls['isFree'].setValue(data.isFree);
        this.uploadForm.controls['isGlobal'].setValue(data.isGlobal);
        this.GetState(data.nationId);
        this.GetCity(data.stateId);
      });
    }
  }
}
