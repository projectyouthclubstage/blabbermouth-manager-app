import { TestBed } from '@angular/core/testing';

import { BlabermouthManagerService } from './blabermouth-manager.service';

describe('BlabermouthManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlabermouthManagerService = TestBed.get(BlabermouthManagerService);
    expect(service).toBeTruthy();
  });
});
