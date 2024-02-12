import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcampaignsocialmediaComponent } from './viewcampaignsocialmedia.component';

describe('ViewcampaignsocialmediaComponent', () => {
  let component: ViewcampaignsocialmediaComponent;
  let fixture: ComponentFixture<ViewcampaignsocialmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcampaignsocialmediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcampaignsocialmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
