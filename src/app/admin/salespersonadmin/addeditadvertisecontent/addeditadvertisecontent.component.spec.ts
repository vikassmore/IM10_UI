import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditadvertisecontentComponent } from './addeditadvertisecontent.component';

describe('AddeditadvertisecontentComponent', () => {
  let component: AddeditadvertisecontentComponent;
  let fixture: ComponentFixture<AddeditadvertisecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditadvertisecontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditadvertisecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
