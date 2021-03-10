import { TestBed } from '@angular/core/testing';

import { NobelsService } from './nobels.service';

describe('NobelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NobelsService = TestBed.get(NobelsService);
    expect(service).toBeTruthy();
  });
});
