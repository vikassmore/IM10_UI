import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentcommentreplyComponent } from './contentcommentreply.component';

describe('ContentcommentreplyComponent', () => {
  let component: ContentcommentreplyComponent;
  let fixture: ComponentFixture<ContentcommentreplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentcommentreplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentcommentreplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
