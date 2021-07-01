import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatTreeViewComponent } from './format-tree-view.component';

describe('FormatTreeViewComponent', () => {
  let component: FormatTreeViewComponent;
  let fixture: ComponentFixture<FormatTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
