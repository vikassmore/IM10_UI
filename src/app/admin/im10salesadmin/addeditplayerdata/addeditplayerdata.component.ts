import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addeditplayerdata',
  templateUrl: './addeditplayerdata.component.html',
  styleUrls: ['./addeditplayerdata.component.css']
})
export class AddeditplayerdataComponent implements OnInit {
  playerDataId: any;
  PlayerList:any = [];
  public formdata = {};
  selectedFileSplash: File = null;
  selectedFileLogo: File = null;
  selectedFileSlide: File[] = null;
  splashFilePath?: FileList;
  logoImageFilePath?: FileList;
  slideFilePath?: FileList;
  isFileUploadedSplash: boolean = false;
  isFileUploadedLogo: boolean = false;
  isFileUploadedSlide: boolean = false;
  filesplash: any;
  filelogo: any;
  fileslide: any = [];
  uploadForm = new FormGroup({
    playerDataId: new FormControl('', []),
    playerId: new FormControl('', [Validators.required]),
    splashScreenFilePath: new FormControl(),
    logoFilePath: new FormControl(),
    slideImageFilePath: new FormControl(),
  });
  constructor(public dialog: MatDialog, public appService: AppService, public snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.getPlayerList();
  }
 ///handleFileSelectSplash
 handleFileSelectSplash(event: any) {
  this.filesplash = event.target.files[0];
  if (this.filesplash) {
    this.selectedFileSplash = this.filesplash;
    this.isFileUploadedSplash = true;
    setTimeout(() => {
      this.isFileUploadedSplash = false;
    },);
  }
}

///handleFileSelectLogo
handleFileSelectLogo(event: any) {
  this.filelogo = event.target.files[0];
  if (this.filelogo) {
    this.selectedFileLogo = this.filelogo;
    this.isFileUploadedLogo = true;
    setTimeout(() => {
      this.isFileUploadedLogo = false;
    },);
  }
}

///handleFileSelectSlide
handleFileSelectSlide(event: any) {
  for (var i = 0; i < event.target.files.length; i++) {  
    this.fileslide.push(event.target.files[i]);  
  } 
  if (this.fileslide) {
    this.selectedFileSlide = this.fileslide;
    this.isFileUploadedSlide = true;
    setTimeout(() => {
      this.isFileUploadedSlide = false;
    },);
  }
}
 ///getPlayerList
 public getPlayerList() {
  this.appService.getUserList('api/PlayerDetail/GetAllPlayerDetail').subscribe(data => {
    this.PlayerList = data;
  });
}

 ///submit details
 public Submit(userObject) {
  if (this.playerDataId == "" || this.playerDataId == undefined) {
    this.addplayerData(this.formdata);
  }
}
 ///Add player Data
 public addplayerData(userObject) {
  var formData = new FormData();
  formData.append('playerId', this.uploadForm.value.playerId);
  formData.append('splashScreenFilePath', this.filesplash);
  formData.append('logoFilePath', this.filelogo);
  for (var i = 0; i < this.fileslide.length; i++) {  
    formData.append("slideImageFilePath", this.fileslide[i]);  
  }
  this.appService.AddContent('api/PlayerDetail/AddPlayerData', formData).subscribe(() => {
    const dialogRef = this.dialog.open(OkDialogComponent, {
      maxWidth: "500px",
      disableClose: true,

      data: {
        title: "Save Action",
        message: "Player Data Added Successfully!"
      }

    });
    this.router.navigate(['/admin/im10salesadmin/listplayerdata'], { relativeTo: this.route });
  },);
}

}
