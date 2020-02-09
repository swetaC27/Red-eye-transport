import { TestBed } from '@angular/core/testing';

import { BookedRideService } from './booked-ride.service';

describe('BookedRideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookedRideService = TestBed.get(BookedRideService);
    expect(service).toBeTruthy();
  });
});
