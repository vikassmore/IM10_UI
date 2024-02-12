import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListplayerendorsementComponent } from './listplayerendorsement.component';

describe('ListplayerendorsementComponent', () => {
  let component: ListplayerendorsementComponent;
  let fixture: ComponentFixture<ListplayerendorsementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListplayerendorsementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListplayerendorsementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
