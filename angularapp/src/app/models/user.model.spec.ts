import { User } from './user.model';

describe('User Model', () => {

  fit('Frontend_User_model_should_create_an_instance', () => {
    // Create a sample User object
    const user: User = {
      email: 'user@example.com',
      password: 'password123',
      username: 'john_doe',
      mobileNumber: '1234567890',
      userRole: 'admin'
    };

    expect(user).toBeTruthy();
    expect(user.email).toBe('user@example.com');
   
  });

});
