import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGrafikComponent } from './data-grafik.component';

describe('DataGrafikComponent', () => {
  let component: DataGrafikComponent;
  let fixture: ComponentFixture<DataGrafikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGrafikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGrafikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
