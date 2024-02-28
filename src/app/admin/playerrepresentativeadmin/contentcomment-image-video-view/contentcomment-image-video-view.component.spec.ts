import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentcommentImageVideoViewComponent } from './contentcomment-image-video-view.component';

describe('ContentcommentImageVideoViewComponent', () => {
  let component: ContentcommentImageVideoViewComponent;
  let fixture: ComponentFixture<ContentcommentImageVideoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentcommentImageVideoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentcommentImageVideoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
