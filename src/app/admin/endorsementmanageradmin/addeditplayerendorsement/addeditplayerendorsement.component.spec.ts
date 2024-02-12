import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditplayerendorsementComponent } from './addeditplayerendorsement.component';

describe('AddeditplayerendorsementComponent', () => {
  let component: AddeditplayerendorsementComponent;
  let fixture: ComponentFixture<AddeditplayerendorsementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditplayerendorsementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditplayerendorsementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
