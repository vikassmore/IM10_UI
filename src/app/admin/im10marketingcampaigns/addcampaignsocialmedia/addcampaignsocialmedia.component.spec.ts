import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcampaignsocialmediaComponent } from './addcampaignsocialmedia.component';

describe('AddcampaignsocialmediaComponent', () => {
  let component: AddcampaignsocialmediaComponent;
  let fixture: ComponentFixture<AddcampaignsocialmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcampaignsocialmediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcampaignsocialmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
