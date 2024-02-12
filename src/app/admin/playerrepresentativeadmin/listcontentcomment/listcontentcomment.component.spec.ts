import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcontentcommentComponent } from './listcontentcomment.component';

describe('ListcontentcommentComponent', () => {
  let component: ListcontentcommentComponent;
  let fixture: ComponentFixture<ListcontentcommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcontentcommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcontentcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
