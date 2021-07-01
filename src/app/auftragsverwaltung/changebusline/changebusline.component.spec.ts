import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangebuslineComponent } from './changebusline.component';

describe('ChangebuslineComponent', () => {
  let component: ChangebuslineComponent;
  let fixture: ComponentFixture<ChangebuslineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangebuslineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangebuslineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
