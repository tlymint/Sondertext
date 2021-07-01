import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyfaLinienauswahlTreeViewComponent } from './dyfa-linienauswahl-tree-view.component';

describe('DyfaLinienauswahlTreeViewComponent', () => {
  let component: DyfaLinienauswahlTreeViewComponent;
  let fixture: ComponentFixture<DyfaLinienauswahlTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyfaLinienauswahlTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyfaLinienauswahlTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
