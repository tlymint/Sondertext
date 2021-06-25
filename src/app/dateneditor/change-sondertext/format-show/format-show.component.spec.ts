import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatShowComponent } from './format-show.component';

describe('FormatShowComponent', () => {
  let component: FormatShowComponent;
  let fixture: ComponentFixture<FormatShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
