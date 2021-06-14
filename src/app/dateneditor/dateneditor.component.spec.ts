import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateneditorComponent } from './dateneditor.component';

describe('DateneditorComponent', () => {
  let component: DateneditorComponent;
  let fixture: ComponentFixture<DateneditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateneditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateneditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
