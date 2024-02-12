import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmdownloadDialogComponent } from './confirmdownload-dialog.component';

describe('ConfirmdownloadDialogComponent', () => {
  let component: ConfirmdownloadDialogComponent;
  let fixture: ComponentFixture<ConfirmdownloadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmdownloadDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmdownloadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
