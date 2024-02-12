import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcontentupdateComponent } from './addcontentupdate.component';

describe('AddcontentupdateComponent', () => {
  let component: AddcontentupdateComponent;
  let fixture: ComponentFixture<AddcontentupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcontentupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcontentupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
