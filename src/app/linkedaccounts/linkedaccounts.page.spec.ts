import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedaccountsPage } from './linkedaccounts.page';

describe('LinkedaccountsPage', () => {
  let component: LinkedaccountsPage;
  let fixture: ComponentFixture<LinkedaccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedaccountsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedaccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
