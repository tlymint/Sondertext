import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsichtmenuComponent } from './ansichtmenu.component';

describe('AnsichtmenuComponent', () => {
  let component: AnsichtmenuComponent;
  let fixture: ComponentFixture<AnsichtmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnsichtmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsichtmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
