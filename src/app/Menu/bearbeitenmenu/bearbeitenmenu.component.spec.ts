import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BearbeitenmenuComponent } from './bearbeitenmenu.component';

describe('BearbeitenmenuComponent', () => {
  let component: BearbeitenmenuComponent;
  let fixture: ComponentFixture<BearbeitenmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BearbeitenmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BearbeitenmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
