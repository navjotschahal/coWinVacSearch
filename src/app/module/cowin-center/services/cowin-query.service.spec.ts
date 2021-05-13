import { TestBed } from '@angular/core/testing';

import { CowinQueryService } from './cowin-query.service';

describe('CowinQueryService', () => {
  let service: CowinQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CowinQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
