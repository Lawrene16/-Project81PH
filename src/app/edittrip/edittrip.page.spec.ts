import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittripPage } from './edittrip.page';

describe('EdittripPage', () => {
  let component: EdittripPage;
  let fixture: ComponentFixture<EdittripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittripPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
