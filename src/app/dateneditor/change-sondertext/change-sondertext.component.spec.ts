import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSondertextComponent } from './change-sondertext.component';

describe('ChangeSondertextComponent', () => {
  let component: ChangeSondertextComponent;
  let fixture: ComponentFixture<ChangeSondertextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeSondertextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeSondertextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
