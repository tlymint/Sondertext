import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DruckenComponent } from './drucken.component';

describe('DruckenComponent', () => {
  let component: DruckenComponent;
  let fixture: ComponentFixture<DruckenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DruckenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DruckenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
