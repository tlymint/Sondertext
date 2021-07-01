import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnzeigLinienauswahlTreeViewComponent } from './anzeig-linienauswahl-tree-view.component';

describe('AnzeigLinienauswahlTreeViewComponent', () => {
  let component: AnzeigLinienauswahlTreeViewComponent;
  let fixture: ComponentFixture<AnzeigLinienauswahlTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnzeigLinienauswahlTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnzeigLinienauswahlTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
