import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './notapprove-dialog.component.html',
  styleUrls: ['./notapprove-dialog.component.scss']
})

export class NotApproveDialogComponent implements OnInit {
  formData = new FormData();
  comment: any;

  constructor(public dialogRef: MatDialogRef<NotApproveDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {   this.comment = '';}


              
  ngOnInit(): void {
  }
  onTextareaKeyUp(value: string) {
    this.comment = value;
  }

  onConfirm(): void { 
    this.dialogRef.close(true);
    const comment = this.comment;
    this.formData.append('comment', comment);
  }

  onDismiss(): void { 
    this.dialogRef.close(false);
  }

}
 