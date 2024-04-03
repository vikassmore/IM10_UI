import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCropperDialogComponentComponent } from './image-cropper-dialog-component.component';

describe('ImageCropperDialogComponentComponent', () => {
  let component: ImageCropperDialogComponentComponent;
  let fixture: ComponentFixture<ImageCropperDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCropperDialogComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCropperDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
