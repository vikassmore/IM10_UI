import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadvcontentComponent } from './listadvcontent.component';

describe('ListadvcontentComponent', () => {
  let component: ListadvcontentComponent;
  let fixture: ComponentFixture<ListadvcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadvcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadvcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
