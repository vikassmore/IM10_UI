import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserplayerComponent } from './listuserplayer.component';

describe('ListuserplayerComponent', () => {
  let component: ListuserplayerComponent;
  let fixture: ComponentFixture<ListuserplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListuserplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListuserplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
