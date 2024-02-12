import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditadvertiseaddsonComponent } from './addeditadvertiseaddson.component';

describe('AddeditadvertiseaddsonComponent', () => {
  let component: AddeditadvertiseaddsonComponent;
  let fixture: ComponentFixture<AddeditadvertiseaddsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditadvertiseaddsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditadvertiseaddsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
