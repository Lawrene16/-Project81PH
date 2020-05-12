import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateaccountPage } from './deactivateaccount.page';

describe('DeactivateaccountPage', () => {
  let component: DeactivateaccountPage;
  let fixture: ComponentFixture<DeactivateaccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactivateaccountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
