import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagedetailsPage } from './imagedetails.page';

describe('ImagedetailsPage', () => {
  let component: ImagedetailsPage;
  let fixture: ComponentFixture<ImagedetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagedetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
