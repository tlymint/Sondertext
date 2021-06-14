import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayeditorComponent } from './displayeditor.component';

describe('DisplayeditorComponent', () => {
  let component: DisplayeditorComponent;
  let fixture: ComponentFixture<DisplayeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
