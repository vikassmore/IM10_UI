import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { AppSettings } from 'src/app/app.settings';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { addedituserplayer, edituserplayer } from './addedituserplayer.Model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddeditcontentComponent } from '../../contentadmin/addeditcontent/addeditcontent.component';
import { OkDialogComponent } from 'src/app/shared/ok-dialog/ok-dialog.component';
import { MatSelectChange } from '@angular/material/select';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-addedituserplayer',
  templateUrl: './addedituserplayer.component.html',
  styleUrls: ['./addedituserplayer.component.css']
})

export class AddedituserplayerComponent implements OnInit {
  public UserList: any = [];
  public PlayerList: any = [];
  public MappedPlayerList: any = [];
  public UserplayerList: any = [];
  public filteredPlayerList: any = [];
  userId: string | any | number;
  public progress: number;
  public message: string;
  public form: FormGroup;
  userPlayerId: string | any;
  playerId: string | any;
  public Userplayer: any
  public ThisUserplayer: any
  public Uid: string | any;
  selectedPlayerIds = [];
  isAddMode!: boolean;
  submitted = false;
  public isPlayerSelected: boolean = false;
  EditselectedPlayerIds: string[] = [];
  unselectedPlayerIds: string[] = [];

  uploadForm = new FormGroup({
    userPlayerId: new FormControl('', []),
    username: new FormControl('', [Validators.required]),
    playername: new FormControl('', [Validators.required]),
  });

  constructor(private cdr: ChangeDetectorRef, public dialog: MatDialog, private route: ActivatedRoute, public appService: AppService, public snackBar: MatSnackBar, private tokenStorage: TokenStorageService, public router: Router, public appSettings: AppSettings
    , @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddeditcontentComponent>, private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getUserList();
    this.isAddMode = !this.userPlayerId;
    var Uid = this.data.userPlayerId
    this.getUserList();
    this.getuserbyId(Uid);
    this.uploadForm.get('playername').valueChanges.subscribe(value => {
      this.isPlayerSelected = value.length > 0;
    });
  }

  ///Change Player dropdown as User Selection
  public onChangeUser(selectedUser: any) {
    const roleId = selectedUser.value.roleId
    this.appService.getfilteruserId("api/UserPlayer/GetPlayerByRoleId/" + roleId).subscribe(data => {
      this.PlayerList = data;
      this.cdr.detectChanges();
    });
  }

  ///Edit check player dropdown
  updateSelectedPlayerIds(playerId: string) {
    const index = this.selectedPlayerIds.indexOf(playerId);
    if (index === -1) {
      this.selectedPlayerIds.push(playerId);
    }
    else {
      this.selectedPlayerIds.splice(index, 1);
    }
    const unselectedIndex = this.unselectedPlayerIds.indexOf(playerId);
    if (unselectedIndex !== -1) {
      this.unselectedPlayerIds.splice(unselectedIndex, 1);
    }
  }

  ///Edit on submit only unchecked player IDs
  updateUnselectedPlayerIds(playerId: string) {
    const index = this.unselectedPlayerIds.indexOf(playerId);
    if (index === -1) {
      this.unselectedPlayerIds.push(playerId);
    }
    else {
      this.unselectedPlayerIds.splice(index, 1);
    }
    const selectedIndex = this.selectedPlayerIds.indexOf(playerId);
    if (selectedIndex !== -1) {
      this.selectedPlayerIds.splice(selectedIndex, 1);
    }
  }

  ///Submituserplayer
  public Submit(userObject) {
    var userPlayerId = userObject.userPlayerId
    if (userPlayerId == "" || userPlayerId == undefined) {
      this.createUser(userObject);
    }
    else {
      this.updateUser(userObject);
    }
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  onSelectionChange(event: MatSelectChange) {
    this.selectedPlayerIds = event.value;
    this.cdr.detectChanges();
  }

  //Create new user
  public createUser(formData) {
    let selectedPlayerIds = formData.playername;
    let playerIdString = selectedPlayerIds.join(",");

    let AdduserplayerModel: addedituserplayer = {
      "userId": formData.username.userId,
      "userPlayerIds": playerIdString,
      "uncheckedPlayerIds": "",
    }

    this.appService.AddUserPlayer('api/UserPlayer/AddUserPlayer', AdduserplayerModel).subscribe(data => {
      this.closeDialog();
      const dialogRef = this.dialog.open(OkDialogComponent, {
        maxWidth: "500px",
        disableClose: true,

        data: {
          title: "Save Action",
          message: "User Player Added Successfully!"
        }

      });
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['/admin/superadmin/listuserplayer'], { relativeTo: this.route });
        window.location.reload();
      });
    },);
  }

  ///Getuserlist for dropdown without superadmin user
  public getUserList() {
    this.appService.getUserList('api/user/GetOtherUser').subscribe(data => {
      this.UserList = data;
    });
  }

  onBackdropClick(event: MouseEvent) {
    // prevent dialog close on backdrop click
    event.stopPropagation();
  }

  ///update existing user
  private updateUser(formData) {
    const unselectedPlayerIds = this.MappedPlayerList
      .filter(player => !this.EditselectedPlayerIds.includes(player.playerId))
      .map(player => player.playerId);

    const unselectedPlayerIdsString = unselectedPlayerIds.join(',');

    let EdituserplayerModel: edituserplayer = {
      "userId": formData.username,
      "uncheckedPlayerIds": unselectedPlayerIdsString,
    }

    this.appService.edituserplayer('api/UserPlayer/EditUserPlayer', EdituserplayerModel).subscribe(data => {
      this.closeDialog();
      const dialogRef = this.dialog.open(OkDialogComponent, {
        maxWidth: "500px",
        disableClose: true,

        data: {
          title: "Edit Action",
          message: "User Player Updated Successfully!"
        }

      });
      dialogRef.afterClosed().subscribe(() => {
        window.location.reload();
        this.router.navigate(['/admin/superadmin/listuserplayer'], { relativeTo: this.route });
      });
    }, error => {
      this.snackBar.open('Something went wrong!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    });
  }

  ///GetUserById
  public getuserbyId(Uid) {
    if (Uid > 0) {
      this.appService.getById("api/UserPlayer/GetuserplayerByUserplayerId/", Uid).subscribe(data => {
        this.uploadForm.controls['userPlayerId'].setValue(Uid);
        this.uploadForm.controls['username'].setValue(data.userId);
        this.appService.getById("api/UserPlayer/GetPlayerByUserId/", data.userId).subscribe(data => {
          this.MappedPlayerList = data;
          this.EditselectedPlayerIds = this.MappedPlayerList.map(player => player.playerId);
        });
      });
    }
  }

  isReadOnly(): boolean {
    return true;
  }

}
