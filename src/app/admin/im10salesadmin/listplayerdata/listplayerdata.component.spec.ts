import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListplayerdataComponent } from './listplayerdata.component';

describe('ListplayerdataComponent', () => {
  let component: ListplayerdataComponent;
  let fixture: ComponentFixture<ListplayerdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListplayerdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListplayerdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
