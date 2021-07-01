import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnzeigRightViewComponent } from './anzeig-right-view.component';

describe('AnzeigRightViewComponent', () => {
  let component: AnzeigRightViewComponent;
  let fixture: ComponentFixture<AnzeigRightViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnzeigRightViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnzeigRightViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
