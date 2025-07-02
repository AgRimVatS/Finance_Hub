import { PlanApplication } from './planapplication.model';

describe('PlanApplication Model', () => {

  fit('Frontend_PlanApplication_model_should_create_an_instance', () => {
    // Create a sample PlanApplication object
    const planApplication: PlanApplication = {
      appliedAmount: 10000.50,
      status: 'Pending',
      applicationDate: '2024-09-30',
      remarks: 'Initial application',
      proofDocument: 'document.pdf'
    };

 
    expect(planApplication.remarks).toBe('Initial application');
    expect(planApplication.proofDocument).toBe('document.pdf');
   
  });

});
