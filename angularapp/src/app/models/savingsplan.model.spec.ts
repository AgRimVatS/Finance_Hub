import { SavingsPlan } from './savingsplan.model';

describe('SavingsPlan Model', () => {

  fit('Frontend_SavingsPlan_model_should_create_an_instance', () => {
    // Create a sample SavingsPlan object
    const savingsPlan: SavingsPlan = {
      name: 'Retirement Fund',
      goalAmount: 50000.00,
      timeFrame: 10,
      riskLevel: 'Medium',
      description: 'A savings plan for retirement with moderate risk.',
      status: 'Active'
    };

  
    expect(savingsPlan.name).toBe('Retirement Fund');
    expect(savingsPlan.timeFrame).toBe(10);
    expect(savingsPlan.riskLevel).toBe('Medium');
    expect(savingsPlan.status).toBe('Active');
  });

});
