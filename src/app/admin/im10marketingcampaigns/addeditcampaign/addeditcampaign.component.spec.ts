import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditcampaignComponent } from './addeditcampaign.component';

describe('AddeditcampaignComponent', () => {
  let component: AddeditcampaignComponent;
  let fixture: ComponentFixture<AddeditcampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditcampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditcampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
