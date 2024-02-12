import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadvertiseaddsonComponent } from './listadvertiseaddson.component';

describe('ListadvertiseaddsonComponent', () => {
  let component: ListadvertiseaddsonComponent;
  let fixture: ComponentFixture<ListadvertiseaddsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadvertiseaddsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadvertiseaddsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
