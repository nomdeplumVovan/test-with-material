import { TestBed } from '@angular/core/testing';

import { AbzService } from './abz.service';

describe('AbzService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbzService = TestBed.get(AbzService);
    expect(service).toBeTruthy();
  });
});
