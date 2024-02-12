import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentcommentviewComponent } from './contentcommentview.component';

describe('ContentcommentviewComponent', () => {
  let component: ContentcommentviewComponent;
  let fixture: ComponentFixture<ContentcommentviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentcommentviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentcommentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
