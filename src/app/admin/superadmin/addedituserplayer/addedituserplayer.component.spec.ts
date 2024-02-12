import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedituserplayerComponent } from './addedituserplayer.component';

describe('AddedituserplayerComponent', () => {
  let component: AddedituserplayerComponent;
  let fixture: ComponentFixture<AddedituserplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedituserplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedituserplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
