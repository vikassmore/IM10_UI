import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditlistingComponent } from './addeditlisting.component';

describe('AddeditlistingComponent', () => {
  let component: AddeditlistingComponent;
  let fixture: ComponentFixture<AddeditlistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditlistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
