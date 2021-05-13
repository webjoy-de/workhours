import { TestBed } from '@angular/core/testing';

import { WorkhoursService } from './workhours.service';

describe('WorkhoursService', () => {
  let service: WorkhoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkhoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
