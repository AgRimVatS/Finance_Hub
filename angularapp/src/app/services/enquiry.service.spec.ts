import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Add HttpClientTestingModule
import { EnquiryService } from './enquiry.service';

describe('EnquiryService', () => {
  let service: EnquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule
      providers: [EnquiryService] // Provide the EnquiryService
    });
    service = TestBed.inject(EnquiryService);
  });

  fit('Frontend_should_create_enquiry_service', () => {
    expect(service).toBeTruthy();
  });
});
