import { TestBed } from '@angular/core/testing';

import { GemService } from './gem.service';

describe('GemService', () => {
  let service: GemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
