import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditplayerdataComponent } from './addeditplayerdata.component';

describe('AddeditplayerdataComponent', () => {
  let component: AddeditplayerdataComponent;
  let fixture: ComponentFixture<AddeditplayerdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditplayerdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditplayerdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
