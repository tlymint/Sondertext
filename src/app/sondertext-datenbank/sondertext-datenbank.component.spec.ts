import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SondertextDatenbankComponent } from './sondertext-datenbank.component';

describe('SondertextDatenbankComponent', () => {
  let component: SondertextDatenbankComponent;
  let fixture: ComponentFixture<SondertextDatenbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SondertextDatenbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SondertextDatenbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
