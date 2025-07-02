import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule

import { SavingsPlanService } from './savingsplan.service';

describe('SavingsPlanService', () => {
  let service: SavingsPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Add HttpClientTestingModule to the imports
    });
    service = TestBed.inject(SavingsPlanService);
  });

  fit('Frontend_should_create_SavingsPlan_service', () => {
    expect(service).toBeTruthy();
  });
});
