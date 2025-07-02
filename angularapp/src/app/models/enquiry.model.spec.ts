import { Enquiry } from './enquiry.model';

describe('Enquiry Model', () => {

  fit('Frontend_Enquiry_model_should_create_an_instance', () => {
    // Create a sample Enquiry object
    const enquiry: Enquiry = {
      message: 'This is an enquiry message.'
    };

    expect(enquiry).toBeTruthy();
    expect(enquiry.message).toBe('This is an enquiry message.');
  });

});
