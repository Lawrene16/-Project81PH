import { TestBed } from '@angular/core/testing';

import { TravelAppService } from './travel-app.service';

describe('TravelAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelAppService = TestBed.get(TravelAppService);
    expect(service).toBeTruthy();
  });
});
