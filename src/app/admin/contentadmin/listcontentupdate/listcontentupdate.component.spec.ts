import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcontentupdateComponent } from './listcontentupdate.component';

describe('ListcontentupdateComponent', () => {
  let component: ListcontentupdateComponent;
  let fixture: ComponentFixture<ListcontentupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcontentupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcontentupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
