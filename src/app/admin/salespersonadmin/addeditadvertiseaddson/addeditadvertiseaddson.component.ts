import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';
import { addadvcontent } from './addeditadvertiseaddson.Model';
import { editadvcontent } from './addeditadvertiseaddson.Model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addeditadvertiseaddson',
  templateUrl: './addeditadvertiseaddson.component.html',
  styleUrls: ['./addeditadvertiseaddson.component.css']
})

export class AddeditadvertiseaddsonComponent implements OnInit {
  public ContentList: any = [];
  public AdvtContentList: any = [];
  advContentMapId: any;
  public formdata = {};
  public CategoryList = [];
  public SubCategoryList = [];
  subcategory: any = [];
  public categoryId: any
  public subCategoryId: any

  uploadForm = new FormGroup({
    advContentMapId: new FormControl(),
    contentId: new FormControl('', [Validators.required]),
    advertiseContentId: new FormControl('', [Validators.required]),
    categoryId: new FormControl({ value: '', disabled: true }, [Validators.required]),
    subCategoryId: new FormControl({ value: '', disabled: true }, [Validators.required]),
    position: new FormControl('', [Validators.required]),
  });

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, public appService: AppService, public router: Router, private route: ActivatedRoute,) { }

  closeDialog() {
    this.dialog.closeAll(); // <- Close the mat dialog
  }

  ngOnInit(): void {
    var advContentMapId = this.data.advContentMapId
    this.getAdvaddlistbyid(this.data.advContentMapId);
    this.getContentDetailsListByPlayetId();
    this.getAdvtContentDetailsListByPlayetId();
    this.getCategoryMaster();
  }

  ///getContentDetailsListByPlayetId
  public getContentDetailsListByPlayetId() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getContentByPlayerId("api/ContentDetail/GetApprovedContentdetailByPlayerId/", playerId).subscribe(data => {
      this.ContentList = data;
    });
  }

  ///GetAdvContentByPlayerId
  public getAdvtContentDetailsListByPlayetId() {
    var playerId = window.sessionStorage.getItem("playerId")
    this.appService.getAdvtContentByPlayerId("api/AdvtContentDetail/GetApprovedAdvContentByPlayerId/", playerId).subscribe(data => {
      this.AdvtContentList = data;
    });
  }

  ///getallcategoryfordropdown
  public getCategoryMaster() {
    this.appService.getAllCategory("api/MasterAPIs/GetAllCategory").subscribe(data => {
      this.CategoryList = data;
    });
  }

  // Get GetSubcat Method
  public GetSubcat(categoryId) {
    if (categoryId == undefined) {
      categoryId == 1;
    }
    this.appService.getStateById("api/MasterAPIs/GetSubcategoryByCategoryId/" + categoryId).subscribe((data: any) => {
      this.SubCategoryList = data;
    })
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
    var advContentMapId = userObject.advContentMapId
    if (advContentMapId == "" || advContentMapId == undefined) {
      this.AddAdvtAddsOn(userObject);
    }
    else {
      if (this.uploadForm.valid) {
        this.UpdateAdd(userObject);
      }
    }
  }

  ///AddAdvtAddsOn
  public AddAdvtAddsOn(formData) {
    let addadvcontentModel: addadvcontent = {
      "contentId": formData.contentId,
      "advertiseContentId": formData.advertiseContentId,
      "categoryId": this.uploadForm.controls['categoryId'].value,
      "subCategoryId": this.uploadForm.controls['subCategoryId'].value,
      "position": formData.position,
    }

    this.appService.AddContentUpdate('api/AdvContentMapping/AddAdvContentMapping', addadvcontentModel).subscribe(() => {
      this.closeDialog();
      const dialogRef = this.dialog.open(OkDialogComponent, {
        maxWidth: "500px",
        disableClose: true,

        data: {
          title: "Save Action",
          message: "Advertise Ads On Added Successfully!"
        }

      }
      );
      dialogRef.afterClosed().subscribe(() => {
        window.location.reload();
      });
      this.router.navigate(['/admin/salespersonadmin/listadvertiseaddson'], { relativeTo: this.route });
    }, error => {
    });
  }

  ///UpdateAdd
  public UpdateAdd(formData) {
    let editadvcontentModel: editadvcontent = {
      "advContentMapId": formData.advContentMapId,
      "contentId": formData.contentId,
      "advertiseContentId": formData.advertiseContentId,
      "categoryId": this.uploadForm.controls['categoryId'].value,
      "subCategoryId": this.uploadForm.controls['subCategoryId'].value,
      "position": formData.position,
    }

    this.appService.AddContentUpdate('api/AdvContentMapping/AddAdvContentMapping', editadvcontentModel).subscribe(() => {
      this.closeDialog();
      const dialogRef = this.dialog.open(OkDialogComponent, {
        maxWidth: "500px",
        disableClose: true,

        data: {
          title: "Edit Action",
          message: "Advertise Ads On Updated Successfully!"
        }

      }
      );
      dialogRef.afterClosed().subscribe(() => {
        window.location.reload();
      });
      this.router.navigate(['/admin/salespersonadmin/listadvertiseaddson'], { relativeTo: this.route });
    }, error => {
    });
  }

  ///GetAdvContentMappingByadvContentMapId
  public getAdvaddlistbyid(advContentMapId) {
    if (advContentMapId > 0) {
      this.appService.getById("api/AdvContentMapping/GetAdvContentMappingById/", advContentMapId).subscribe(data => {
        this.uploadForm.controls['categoryId'].setValue(data.categoryId);

        this.GetSubcat(data.categoryId);

        this.uploadForm.controls['advertiseContentId'].setValue(data.advertiseContentId);
        this.uploadForm.controls['subCategoryId'].setValue(data.subCategoryId);
        this.uploadForm.controls['contentId'].setValue(data.contentId);
        this.uploadForm.controls['position'].setValue(data.position);
        this.uploadForm.controls['advContentMapId'].setValue(advContentMapId);
      });
    }
  }

  public onChangeContent(event) {
    if (event.value) {
      let Contentid = event.value;
      this.appService.getStateById("api/ContentDetail/GetContentDetailById/" + Contentid).subscribe(
        data => {
          this.uploadForm.controls['categoryId'].setValue(data.categoryId);
          this.GetSubcat(data.categoryId);
          this.uploadForm.controls['subCategoryId'].setValue(data.subCategoryId);
        }
      );
    }
  }

}