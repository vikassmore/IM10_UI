import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlistingComponent } from './listlisting.component';

describe('ListlistingComponent', () => {
  let component: ListlistingComponent;
  let fixture: ComponentFixture<ListlistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListlistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
