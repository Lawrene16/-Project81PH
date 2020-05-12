import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpcentrePage } from './helpcentre.page';

describe('HelpcentrePage', () => {
  let component: HelpcentrePage;
  let fixture: ComponentFixture<HelpcentrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpcentrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpcentrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
