import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddtripPage } from './addtrip.page';

describe('AddtripPage', () => {
  let component: AddtripPage;
  let fixture: ComponentFixture<AddtripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddtripPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddtripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
