import { TestBed } from '@angular/core/testing';

import { NobelFilterService } from './nobel-filter.service';

describe('NobelFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NobelFilterService = TestBed.get(NobelFilterService);
    expect(service).toBeTruthy();
  });
});
