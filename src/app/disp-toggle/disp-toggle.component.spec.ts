import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispToggleComponent } from './disp-toggle.component';

describe('DispToggleComponent', () => {
  let component: DispToggleComponent;
  let fixture: ComponentFixture<DispToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
