import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditplayerdetailsComponent } from './addeditplayerdetails.component';

describe('AddeditplayerdetailsComponent', () => {
  let component: AddeditplayerdetailsComponent;
  let fixture: ComponentFixture<AddeditplayerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditplayerdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditplayerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
