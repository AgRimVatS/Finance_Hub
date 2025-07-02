import { TestBed } from '@angular/core/testing';

import { PlanapplicationformService } from './planapplicationform.service';

describe('PlanapplicationformService', () => {
  let service: PlanapplicationformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanapplicationformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
