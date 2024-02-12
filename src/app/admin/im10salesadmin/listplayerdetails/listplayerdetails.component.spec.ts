import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListplayerdetailsComponent } from './listplayerdetails.component';

describe('ListplayerdetailsComponent', () => {
  let component: ListplayerdetailsComponent;
  let fixture: ComponentFixture<ListplayerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListplayerdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListplayerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
