import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditcontentComponent } from './addeditcontent.component';

describe('AddeditcontentComponent', () => {
  let component: AddeditcontentComponent;
  let fixture: ComponentFixture<AddeditcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
