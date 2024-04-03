import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image-cropper-dialog-component',
  templateUrl: './image-cropper-dialog-component.component.html',
  styleUrls: ['./image-cropper-dialog-component.component.css']
})
export class ImageCropperDialogComponentComponent implements OnInit {

  customWidth: number; // Custom width entered by user
  customHeight: number;
  @Output() croppedImageSaved = new EventEmitter<string>();
  constructor(
    public dialogRef: MatDialogRef<ImageCropperDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private sanitizer: DomSanitizer

  ) {}

 
  ngOnInit(): void {
  }
 
  croppedImage: any;

 
  onSaveClick(): void {
    if (this.croppedImage) {
      this.croppedImageSaved.emit(this.croppedImage);
      this.dialogRef.close();
    } else {
      console.error("Cropped image is undefined.");
    }
  }
  

  imageCropped(event: ImageCroppedEvent) {
    const reader = new FileReader();
    reader.onload = () => {
      this.croppedImage = reader.result as string;
    };
    reader.readAsDataURL(event.blob); 

    const squareDimensions = this.calculateSquareRatio(event.width, event.height);
    // Set the square dimensions to the cropped area
    event.width = squareDimensions.width;
    event.height = squareDimensions.height;
  }
  
  calculateSquareRatio(width: number, height: number): { width: number, height: number } {
    if (width > height) {
      return { width: height, height: height };
    } else {
      return { width: width, height: width };
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  reset() {
    this.croppedImage = null;
  }



  private base64toFile(base64: string, filename: string): File {
    const arr = base64.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
}
