import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyfaGruppenComponent } from './dyfa-gruppen.component';

describe('DyfaGruppenComponent', () => {
  let component: DyfaGruppenComponent;
  let fixture: ComponentFixture<DyfaGruppenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyfaGruppenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyfaGruppenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
