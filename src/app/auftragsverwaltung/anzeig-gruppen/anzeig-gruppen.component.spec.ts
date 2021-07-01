import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnzeigGruppenComponent } from './anzeig-gruppen.component';

describe('AnzeigGruppenComponent', () => {
  let component: AnzeigGruppenComponent;
  let fixture: ComponentFixture<AnzeigGruppenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnzeigGruppenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnzeigGruppenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
