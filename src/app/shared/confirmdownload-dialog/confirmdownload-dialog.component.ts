import { Component, OnInit } from '@angular/core';
import {  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmdownload-dialog',
  templateUrl: './confirmdownload-dialog.component.html',
  styleUrls: ['./confirmdownload-dialog.component.css']
})
export class ConfirmdownloadDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmdownloadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  onConfirm(): void { 
    this.dialogRef.close(true);

  }

  onDismiss(): void { 
    this.dialogRef.close(false);
  }
}
