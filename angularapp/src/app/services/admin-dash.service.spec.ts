import { TestBed } from '@angular/core/testing';

import { AdminDashService } from './admin-dash.service';

describe('AdminDashService', () => {
  let service: AdminDashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
