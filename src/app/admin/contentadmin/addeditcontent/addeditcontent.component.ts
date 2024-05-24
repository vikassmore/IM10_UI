import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addeditcontent',
  templateUrl: './addeditcontent.component.html',
  styleUrls: ['./addeditcontent.component.css']
})

export class AddeditcontentComponent implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  public progress: number;
  public message: string;
  public form: FormGroup;
  ContentId: string | any;
  isActive: boolean;
  isDeleted: false;
  isAddMode!: boolean;
  submitted = false;
  public formdata = {};
  public CategoryList = [];
  public PlayerDetailsList: any = [];
  public SportCategoryList=[];
  selectedPlayerSportId: any;
  public SubCategoryList = [];
  public ContentTypeList = [];
  public languageList = [];
  public showtitleerror : boolean=false;
  contentFilePath?: FileList;
  selectedFile: File = null;
  selectedFile2: File = null;
  fileError: boolean = false;
  fileSizeError = false;
  fileSizeError2 = false;
  invalidfileType=false;
  invalidfileType2=false;
  isFileUploaded: boolean = false;
  isFileUploaded2: boolean = false;
  subcategory: any = [];

  selectedFilethumbnail: File = null;
  isFileUploadedthumbnail: boolean = false;
  filethumbnail: any;
  invalidthumbnailfileType=false;

  file: any;
  file2: any;

  

  uploadForm = new FormGroup({
    ContentId: new FormControl('', []),
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
    categoryId: new FormControl('', [Validators.required]),
    subCategoryId: new FormControl('', [Validators.required]),
    contentTypeId: new FormControl('', [Validators.required]),
    languageId: new FormControl('', [Validators.required]),
    contentFilePath: new FormControl(),
    thumbnail1:new FormControl(),
    contentFileName:new FormControl()

  });

  constructor(public dialog: MatDialog, public appService: AppService, public snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.ContentId = this.route.snapshot.params['id'];
    this.getCategoryMaster();
    this.getcontenttypeMaster();
    this.getlanguageMaster();
    this.getcontentbyId(this.ContentId)
    this.Getplayerdetailsbyplayerid();
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


  ///Submit details
  public Submit(userObject) {
    if (this.ContentId == "" || this.ContentId == undefined) {
      this.createContent(this.formdata);
    }
    else {
      if (this.uploadForm.valid) {
        if (this.fileSizeError && this.fileSizeError2) {
          return;
        }
        else {
          this.updateContent(userObject);
        }
      }
    }
  }



  getFileExtension1(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }
  ///Select Media file
  handleFileSelect(event: any) {
    this.file = event.target.files[0];
    if (!this.file) {
      // Reset selectedFile2 if no file is selected
      this.selectedFile = null;
      return;
    }
    const maxFileSize = 50000000; // 50 MB
    
    // Check file size
    if (this.file.size > maxFileSize) {
      this.fileSizeError = true;
      this.invalidfileType = false;
      this.isFileUploaded = false;
      return;
    }
  
    // Check allowed content types and corresponding file extensions
    if (this.uploadForm.value.contentTypeId === 1) {
      // Content type ID is 1 (video), only allow .mp4 files
      const allowedExtensions = ['mp4'];
      const fileExtension = this.getFileExtension1(this.file.name);
  
      if (!allowedExtensions.includes(fileExtension)) {
        this.invalidfileType = true;
        this.fileSizeError = false;
        this.isFileUploaded = true;
        return;
      }
    } else if (this.uploadForm.value.contentTypeId === 2) {
      
      // Content type ID is 2 (image), only allow .jpg, .jpeg, .png files
      const allowedExtensions = ['jpg', 'jpeg', 'png'];
      const fileExtension = this.getFileExtension1(this.file.name);
      if (!allowedExtensions.includes(fileExtension)) {
        this.invalidfileType = true;
        this.fileSizeError = false;
        this.isFileUploaded = true;
        return;
      }
    } else {
      // Invalid content type ID
      this.invalidfileType = true;
      this.fileSizeError = false;
      this.isFileUploaded = false;
      return;
    }
  
    // File is valid
    this.selectedFile = this.file;
    this.isFileUploaded = true;
    this.fileSizeError = false;
    this.invalidfileType = false;
    setTimeout(() => {
      this.isFileUploaded = false;
    }, 5000); // Reset isFileUploaded flag after 5 seconds (adjust as needed)
    this.updateSubmitButtonState();

  }
  

  getFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }
  ///Select Media file 2
  handleFileSelect2(event: any) {
    this.file2 = event.target.files[0];
    if (!this.file2) {
      // Reset selectedFile2 if no file is selected
      this.selectedFile2 = null;
      return;
    }
    const maxFileSize = 50000000; // 50 MB
    
    // Check file size
    if (this.file2.size > maxFileSize) {
      this.fileSizeError2 = true;
      this.invalidfileType2 = false;
      this.isFileUploaded2 = false;
      return;
    }
  
    // Check allowed content types and corresponding file extensions
    if (this.uploadForm.value.contentTypeId === 1) {
      // Content type ID is 1, only allow .mp4 files
      const allowedExtensions = ['mp4'];
      const fileExtension = this.getFileExtension(this.file2.name);
  
      if (!allowedExtensions.includes(fileExtension)) {
        this.invalidfileType2 = true;
        this.fileSizeError2 = false;
        this.isFileUploaded2 = true;
        return;
      }
    } else if (!this.uploadForm.value.contentTypeId) {
      // If content type ID is not set, allow all specified file extensions
      const allowedExtensions = ['mp4', 'jpg', 'jpeg', 'png'];
      const fileExtension = this.getFileExtension(this.file2.name);
  
      if (!allowedExtensions.includes(fileExtension)) {
        this.invalidfileType2 = true;
        this.fileSizeError2 = false;
        this.isFileUploaded2 = true;
        return;
      }
    } else {
      // Invalid content type ID
      this.invalidfileType2 = true;
      this.fileSizeError2 = false;
      this.isFileUploaded2 = false;
      return;
    }
  
    // File is valid
    this.selectedFile2 = this.file2;
    this.isFileUploaded2 = true;
    this.fileSizeError2 = false;
    this.invalidfileType2 = false;
    setTimeout(() => {
      this.isFileUploaded2 = false;
    }, 5000); // Reset isFileUploaded2 flag after 5 seconds (adjust as needed)
    this.updateSubmitButtonState();

  }


  getthumbnailFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }
  ///Select Media file
  handleThumbnailFileSelect(event: any) {
    this.filethumbnail = event.target.files[0];
    if (!this.filethumbnail) {
      // Reset selected thumbnail file if no file is selected
      this.selectedFilethumbnail = null;
      this.isFileUploadedthumbnail = false;
      this.invalidthumbnailfileType = false;
      this.updateSubmitButtonState();
      return;
    }
    const fileExtension = this.filethumbnail.name.split('.').pop()?.toLowerCase();
    const allowedExtensions = ['jpg', 'jpeg', 'png'];
  
    // Check if the file extension is valid
    if (!allowedExtensions.includes(fileExtension)) {
      // Invalid file type
      this.invalidthumbnailfileType = true;
      this.isFileUploadedthumbnail = true;
      return;
    }
    this.selectedFilethumbnail = this.filethumbnail;
    this.isFileUploadedthumbnail = true;
    this.invalidthumbnailfileType = false;
    this.updateSubmitButtonState();

  }
  
  
  ///Add Content
  public createContent(userObject) {
    var formData = new FormData();
    formData.append('title', this.uploadForm.value.title);
    formData.append('description', this.uploadForm.value.description);
    formData.append('categoryId', this.uploadForm.value.categoryId);
    formData.append('subCategoryId', this.uploadForm.value.subCategoryId);
    formData.append('contentTypeId', this.uploadForm.value.contentTypeId);
    formData.append('languageId', this.uploadForm.value.languageId);
    formData.append('contentFilePath', this.file);
    formData.append('contentFilePath_1', this.file2);
    formData.append('thumbnail1',this.filethumbnail);
    formData.append('PlayerId', window.sessionStorage.getItem("playerId"));
    if (window.sessionStorage.getItem("playerId") != null || window.sessionStorage.getItem("playerId") != undefined) {
      if (this.fileSizeError && this.fileSizeError2) {
        return;
      }
      this.appService.AddContent('api/ContentDetail/AddContentDetail', formData).subscribe(() => {
        const dialogRef = this.dialog.open(OkDialogComponent, {
          maxWidth: "500px",
          disableClose: true,

          data: {
            title: "Save Action",
            message: "Content Added Successfully!"
          }

        });
        this.router.navigate(['/admin/contentadmin/listcontent'], { relativeTo: this.route });
      },error => {
        if (error.status === 404)
        {
          this.snackBar.open(error.error, '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
        }
      });
    }
  }

  contentFileName:any;
  ///updateContent
  public updateContent(userObject) {

    var formData = new FormData();
    formData.append('ContentId', this.ContentId);
    formData.append('title', this.uploadForm.value.title);
    formData.append('description', this.uploadForm.value.description);
    formData.append('categoryId', this.uploadForm.value.categoryId);
    formData.append('subCategoryId', this.uploadForm.value.subCategoryId);
    formData.append('contentTypeId', this.uploadForm.value.contentTypeId);
    formData.append('languageId', this.uploadForm.value.languageId);
    formData.append('contentFilePath', this.file);
    formData.append('contentFilePath_1', this.file2);
    formData.append('thumbnail1',this.filethumbnail)
    formData.append('PlayerId', window.sessionStorage.getItem("playerId"));

    if (this.fileSizeError) {
      return;
    }
    this.appService.editcontent('api/ContentDetail/EditContentDetail', formData).subscribe(() => {
      const dialogRef = this.dialog.open(OkDialogComponent, {
        maxWidth: "500px",
        disableClose: true,

        data: {
          title: "Edit Action",
          message: "Content Updated Successfully!"
        }
      });
      this.router.navigate(['/admin/contentadmin/listcontent'], { relativeTo: this.route });
    }, error => {
      this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
      if (error.status === 404)
      {
        this.snackBar.open(error.error, '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
      }
    });
  }

  ///getallcategoryfordropdown
  public getCategoryMaster() {
    this.appService.getAllCategory("api/MasterAPIs/GetAllCategory").subscribe(data => {
      this.CategoryList = data;
    });
  }
  
///Getplayerdetailsbyplayerid
  Getplayerdetailsbyplayerid() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getContentByPlayerId("api/PlayerDetail/GetPlayerDetailById/", playerId).subscribe(data => {
      this.PlayerDetailsList = data;
      if (this.PlayerDetailsList ) {
        this.selectedPlayerSportId = this.PlayerDetailsList.sportId;
        this.GetAllCategoryBySportId(this.selectedPlayerSportId);
      }
    },
     error =>
      {
      console.error('Error fetching player details:', error);
    });
  }

///GetAllCategoryBySportId
  GetAllCategoryBySportId(sportId) {
    if (sportId) {
      this.appService.getAllCategory("api/MasterAPIs/GetAllCategoryBySportId/" + sportId).subscribe(
        data => {
          this.SportCategoryList = data;
          console.log('Sport category list:', this.SportCategoryList);
        }, error => {
          console.error('Error fetching categories by sport ID:', error);
        });
    } else {
      this.SportCategoryList = null;
    }
  }


  
  /// on Change Country
  public onChangeCountry(event) {
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

  /// Get State Method
  public GetSubcat(categoryId) {
    if (categoryId == undefined) {
      categoryId == 1;
    }
    this.appService.getStateById("api/MasterAPIs/GetSubcategoryByCategoryId/" + categoryId).subscribe((data: any) => {
      this.SubCategoryList = data;
    })
  }

  ///getallcontenttypefordropdown
  public getcontenttypeMaster() {
    this.appService.getsubAllcontenttype("api/MasterAPIs/GetAllContentType").subscribe(data => {
      this.ContentTypeList = data;
    });
  }

  ///getallcontenttypefordropdown
  public getlanguageMaster() {
    this.appService.getsubAllcontenttype("api/MasterAPIs/GetAllLanguage").subscribe(data => {
      this.languageList = data;
    });
  }

  ///Get Content Details to set value
  public getcontentbyId(ContentId) {
    if (ContentId > 0) {
      this.appService.getContentById("api/ContentDetail/GetContentDetailById/", ContentId).subscribe(data => {
        this.uploadForm.controls['ContentId'].setValue(data.ContentId);
        this.uploadForm.controls['title'].setValue(data.title);
        this.uploadForm.controls['description'].setValue(data.description);
        this.uploadForm.controls['categoryId'].setValue(data.categoryId);
        this.GetSubcat(data.categoryId);
        this.uploadForm.controls['subCategoryId'].setValue(data.subCategoryId);
        this.uploadForm.controls['contentTypeId'].setValue(data.contentTypeId);
        this.uploadForm.controls['languageId'].setValue(data.languageId);
        this.uploadForm.controls['thumbnail1'].setValue(data.thumbnail1);
        this.uploadForm.controls['contentFileName'].setValue(data.contentFileName);
      });
    }
  } 

  isSubmitDisabled(): boolean {
    if (this.ContentId) {
        return false; 
    }
    const contentType = this.uploadForm.get('contentTypeId').value;
    if (contentType === 2) {
        return !this.uploadForm.valid || !this.selectedFile  || !this.selectedFilethumbnail;
    } else {
        return !this.uploadForm.valid || !this.selectedFile || !this.selectedFile2 || !this.selectedFilethumbnail;
    }
}

submitDisabled: boolean = true;
updateSubmitButtonState() {
  this.submitDisabled = this.isSubmitDisabled();
}


  selectedContentType: string = ''; 
    videoTooltipMessage: string = 'Thumbnail size: 1920 x 1080 pixels';
    articleTooltipMessage: string = 'Thumbnail size: 1080 x 1080 pixels'; 

    // Function to handle dropdown selection change
    onContentTypeChange(selectedValue: string): void 
    {
        this.selectedContentType = selectedValue;
    }

    handleDDSelect() {
      this.selectedFilethumbnail == null;
      this.selectedFilethumbnail = null;
      this.isFileUploadedthumbnail = false;
      this.filethumbnail=false;
      this.selectedFile == null;
      this.selectedFile = null;
      this.isFileUploaded = false;
      this.file=false;
    const fileInput: HTMLInputElement = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
        fileInput.value = null;
    }
    const contentFileInput: HTMLInputElement = document.getElementById('contentFileInput') as HTMLInputElement;
    if (contentFileInput) {
        contentFileInput.value = null;
    }
    }
    
}
