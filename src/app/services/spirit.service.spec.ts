import { TestBed } from '@angular/core/testing';

import { SpiritService } from './spirit.service';

describe('SpiritService', () => {
  let service: SpiritService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpiritService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
