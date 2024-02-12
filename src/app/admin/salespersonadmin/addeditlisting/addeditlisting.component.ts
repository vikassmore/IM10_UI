import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addeditlisting',
  templateUrl: './addeditlisting.component.html',
  styleUrls: ['./addeditlisting.component.css']
})

export class AddeditlistingComponent implements OnInit {
  listingId: string | any;
  public progress: number;
  public message: string;
  public form: FormGroup;
  isDeleted: false;
  isAddMode!: boolean;
  submitted = false;
  public formdata = {};
  public CategoryList = [];
  public SubCategoryList = [];
  public ContentTypeList = [];
  public languageList = [];
  companyLogoFilePath?: FileList;
  selectedFile: File = null;
  file: any;
  public country = [];
  public StateList = [];
  public CityList = [];
  states: any = [];
  cities: any[];
  StateId: string | any;
  playerId: string | any;
  CountrytId: string | any;
  CitiesId: string | any;
  isGlobal: boolean = false;
  isFileUploaded: boolean = false;
  subcategory: any = [];

  uploadForm = new FormGroup({
    listingId: new FormControl('', []),
    companyName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    contactPersonName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    categoryId: new FormControl('', [Validators.required]),
    subCategoryId: new FormControl('', [Validators.required]),
    contactPersonEmailId: new FormControl('', [Validators.required]),
    contactPersonMobile: new FormControl('', [Validators.required]),
    companyEmailId: new FormControl('', [Validators.required, Validators.pattern("^[a-zA0-Z9._%+-]+@[a-zA0-Z9.-]+\\.[aA-zZ]{2,4}$")]),
    companyMobile: new FormControl('', [Validators.required]),
    companyPhone: new FormControl('', [Validators.required]),
    companyWebSite: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    nationId: new FormControl('', [Validators.required]),
    stateId: new FormControl('', [Validators.required]),
    cityId: new FormControl('', [Validators.required]),
    isGlobal: new FormControl(),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    finalPrice: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    companyLogoFilePath: new FormControl(),
  });

  constructor(public dialog: MatDialog, public appService: AppService, public snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getCategoryMaster();
    this.getNationMaster();
    this.listingId = this.route.snapshot.params['id'];
    this.getlistdetailsbyid(this.listingId);
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
  /// on Change Cat
  public onChangeCat(event) {
    if (event.value) {
      let categoryId = event.value;
      this.appService.getStateById("api/MasterAPIs/GetSubcategoryByCategoryId/" + categoryId).subscribe(
        data => {
          this.SubCategoryList = data;
        }
      );
    } else {
      this.subcategory = null;
    }
  }

  ///Submit
  public Submit(userObject) {
    if (this.listingId == "" || this.listingId == undefined) {
      this.createList(this.formdata);
    }
    else {
      if (this.uploadForm.valid) {
        this.UpdateList(userObject);
      }
    }
  }

  ///Select file
  handleFileSelect(event: any) {
    this.file = event.target.files[0];

    if (this.file) {
      this.selectedFile = this.file;
      this.isFileUploaded = true;
      setTimeout(() => {
        this.isFileUploaded = false; // Reset isFileUploaded to false after a short delay
      },);
    }
  }

  ///Create List
  public createList(userObject) {
    var formData = new FormData();

    let startDate = this.uploadForm.get('startDate').value;
    let endDate = this.uploadForm.get('endDate').value;

    let gmtFormatRegex = /^.{3}\s.{3}\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT\+\d{4}\s\(.+\)$/;

    formData.append('companyName', this.uploadForm.value.companyName);
    formData.append('description', this.uploadForm.value.description);
    formData.append('contactPersonName', this.uploadForm.value.contactPersonName);
    formData.append('categoryId', this.uploadForm.value.categoryId);
    formData.append('subCategoryId', this.uploadForm.value.subCategoryId);
    formData.append('contactpersonEmail', this.uploadForm.value.contactPersonEmailId);
    formData.append('contactPersonMobile', this.uploadForm.value.contactPersonMobile);
    formData.append('companyEmailId', this.uploadForm.value.companyEmailId);
    formData.append('companyMobile', this.uploadForm.value.companyMobile);
    formData.append('companyPhone', this.uploadForm.value.companyPhone);
    formData.append('companyWebSite', this.uploadForm.value.companyWebSite);
    formData.append('companyLogoFilePath', this.file);
    formData.append('nationId', this.uploadForm.value.nationId);
    formData.append('stateId', this.uploadForm.value.stateId);
    formData.append('cityId', this.uploadForm.value.cityId);
    formData.append('finalPrice', this.uploadForm.value.finalPrice);
    formData.append('position', this.uploadForm.value.position);
    formData.append('isGlobal', this.isGlobal.toString());

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

    formData.append('PlayerId', window.sessionStorage.getItem("playerId"));

    if (window.sessionStorage.getItem("playerId") != null || window.sessionStorage.getItem("playerId") != undefined) {
      this.appService.Addlisting('api/ListingDetail/AddListingDetail', formData).subscribe(() => {
        const dialogRef = this.dialog.open(OkDialogComponent, {
          maxWidth: "500px",
          disableClose: true,

          data: {
            title: "Save Action",
            message: "Listing Details Added Successfully!"
          }
        });
        this.router.navigate(['/admin/salespersonadmin/listlisting'], { relativeTo: this.route });
      });
    }
  }

  ///Update List
  public UpdateList(userObject) {
    var formData = new FormData();

    let startDate = this.uploadForm.get('startDate').value;
    let endDate = this.uploadForm.get('endDate').value;
    let gmtFormatRegex = /^.{3}\s.{3}\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT\+\d{4}\s\(.+\)$/;

    formData.append('listingId', this.listingId);
    formData.append('companyName', this.uploadForm.value.companyName);
    formData.append('description', this.uploadForm.value.description);
    formData.append('contactPersonName', this.uploadForm.value.contactPersonName);
    formData.append('categoryId', this.uploadForm.value.categoryId);
    formData.append('subCategoryId', this.uploadForm.value.subCategoryId);
    formData.append('contactpersonEmail', this.uploadForm.value.contactPersonEmailId);
    formData.append('contactPersonMobile', this.uploadForm.value.contactPersonMobile);
    formData.append('companyEmailId', this.uploadForm.value.companyEmailId);
    formData.append('companyMobile', this.uploadForm.value.companyMobile);
    formData.append('companyPhone', this.uploadForm.value.companyPhone);
    formData.append('companyWebSite', this.uploadForm.value.companyWebSite);
    formData.append('nationId', this.uploadForm.value.nationId);
    formData.append('stateId', this.uploadForm.value.stateId);
    formData.append('cityId', this.uploadForm.value.cityId);
    formData.append('finalPrice', this.uploadForm.value.finalPrice);
    formData.append('isGlobal', this.isGlobal.toString());
    formData.append('position', this.uploadForm.value.position);
    formData.append('companyLogoFilePath', this.file);

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
    else {
      formData.append('startDate', this.uploadForm.value.startDate);
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

    else {
      formData.append('endDate', this.uploadForm.value.endDate);
    }

    formData.append('PlayerId', window.sessionStorage.getItem("playerId"));

    this.appService.Addlisting('api/ListingDetail/AddListingDetail', formData).subscribe(() => {
      const dialogRef = this.dialog.open(OkDialogComponent, {
        maxWidth: "500px",
        disableClose: true,

        data: {
          title: "Edit Action",
          message: "Listing Details Updated Successfully!"
        }
      });
      this.router.navigate(['/admin/salespersonadmin/listlisting'], { relativeTo: this.route });
    });
  }

  ///getCategoryMaster
  public getCategoryMaster() {
    this.appService.getAllCategory("api/MasterAPIs/GetAllCategory").subscribe(data => {
      this.CategoryList = data;
    });
  }

  ///getsubCategoryMaster
  public GetSubcat(categoryId) {
    if (categoryId == undefined) {
      categoryId == 1;
    }
    this.appService.getStateById("api/MasterAPIs/GetSubcategoryByCategoryId/" + categoryId).subscribe((data: any) => {
      this.SubCategoryList = data;
    })
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

  ///Get state on country slection
  public GetState(CountryId) {
    if (CountryId == undefined) {
      CountryId == 1;
    }
    this.appService.getStateById("api/MasterAPIs/GetStateByCountyId/" + CountryId).subscribe((data: any) => {
      this.states = data;
    })
  }

  /// On change State
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

  public onCheckBoxChangeisGlobal(e) {
    this.isGlobal = e.checked;
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

  ///Validation for only enter char
  keyPressOnlyCharContactpersonName(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z]/.test(inp)) {
      // Allow alphabets
      return true;
    } else if (inp === " ") {
      // Allow one space
      var contactPersonName = event.target.value;
      if (!contactPersonName.endsWith(" ")) {
        return true;
      }
    }
    event.preventDefault();
    return false;
  }

  ///stop enter space
  blockSpaces(event: KeyboardEvent) {
    if (event.key === ' ') {
      event.preventDefault();
    }
  }

  ///getlistdetailbyid
  public getlistdetailsbyid(listingId) {
    if (listingId > 0) {
      this.appService.getById("api/ListingDetail/GetListingDetailById/", listingId).subscribe(data => {
        this.uploadForm.controls['companyName'].setValue(data.companyName);
        this.uploadForm.controls['description'].setValue(data.description);
        this.uploadForm.controls['companyEmailId'].setValue(data.companyEmailId);
        this.uploadForm.controls['companyMobile'].setValue(data.companyMobile);
        this.uploadForm.controls['companyPhone'].setValue(data.companyPhone);
        this.uploadForm.controls['companyWebSite'].setValue(data.companyWebSite);
        this.uploadForm.controls['contactPersonMobile'].setValue(data.contactPersonMobile);
        this.uploadForm.controls['contactPersonName'].setValue(data.contactPersonName);
        this.uploadForm.controls['contactPersonEmailId'].setValue(data.contactPersonEmailId);

        this.GetState(data.nationId);
        this.GetCity(data.stateId);
        this.uploadForm.controls['nationId'].setValue(data.nationId);
        this.uploadForm.controls['stateId'].setValue(data.stateId);
        this.uploadForm.controls['cityId'].setValue(data.cityId);
        this.isGlobal = data.isGlobal;
        this.uploadForm.controls['startDate'].setValue(data.startDate);
        this.uploadForm.controls['endDate'].setValue(data.endDate);
        this.uploadForm.controls['finalPrice'].setValue(data.finalPrice);
        this.uploadForm.controls['categoryId'].setValue(data.categoryId);
        this.GetSubcat(data.categoryId);
        this.uploadForm.controls['subCategoryId'].setValue(data.subCategoryId);
        this.uploadForm.controls['position'].setValue(data.position);
        this.uploadForm.controls['PlayerId'].setValue(data.PlayerId);
      });
    }
  }
}