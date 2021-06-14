import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaymanagementComponent } from './displaymanagement.component';

describe('DisplaymanagementComponent', () => {
  let component: DisplaymanagementComponent;
  let fixture: ComponentFixture<DisplaymanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaymanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaymanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
