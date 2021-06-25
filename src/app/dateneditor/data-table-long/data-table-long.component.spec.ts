import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableLongComponent } from './data-table-long.component';

describe('DataTableLongComponent', () => {
  let component: DataTableLongComponent;
  let fixture: ComponentFixture<DataTableLongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableLongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
