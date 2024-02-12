import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadvertisecontentComponent } from './listadvertisecontent.component';

describe('ListadvertisecontentComponent', () => {
  let component: ListadvertisecontentComponent;
  let fixture: ComponentFixture<ListadvertisecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadvertisecontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadvertisecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
