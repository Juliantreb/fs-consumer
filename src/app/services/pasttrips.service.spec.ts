import { TestBed } from '@angular/core/testing';

import { pasttripsService } from './pasttrips.service';

describe('pasttripService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: pasttripsService = TestBed.get(pasttripsService);
    expect(service).toBeTruthy();
  });
});
