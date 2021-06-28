import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyfaRightViewComponent } from './dyfa-right-view.component';

describe('DyfaRightViewComponent', () => {
  let component: DyfaRightViewComponent;
  let fixture: ComponentFixture<DyfaRightViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyfaRightViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyfaRightViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
