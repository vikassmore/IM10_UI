import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerrorissuelogComponent } from './listerrorissuelog.component';

describe('ListerrorissuelogComponent', () => {
  let component: ListerrorissuelogComponent;
  let fixture: ComponentFixture<ListerrorissuelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerrorissuelogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerrorissuelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
