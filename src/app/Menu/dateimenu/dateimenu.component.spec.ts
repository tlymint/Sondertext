import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateimenuComponent } from './dateimenu.component';

describe('DateimenuComponent', () => {
  let component: DateimenuComponent;
  let fixture: ComponentFixture<DateimenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateimenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateimenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
