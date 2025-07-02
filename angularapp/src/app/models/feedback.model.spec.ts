import { Feedback } from './feedback.model';

describe('Feedback Model', () => {

  fit('Frontend_Feedback_model_should_create_an_instance', () => {
    // Create a sample Feedback object
    const feedback: Feedback = {
    
      feedbackText: 'This is a feedback text.',
      date: new Date('2024-07-02')
    };

    expect(feedback).toBeTruthy();
   
    expect(feedback.feedbackText).toBe('This is a feedback text.');
    expect(feedback.date).toEqual(new Date('2024-07-02'));
  });

});
