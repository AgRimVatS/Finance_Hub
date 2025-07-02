import { Login } from './login.model';

describe('Login Model', () => {

  fit('Frontend_Login_model_should_create_an_instance', () => {
    // Create a sample Login object
    const login: Login = {
      email: 'user@example.com',
      password: 'password123'
    };

    expect(login).toBeTruthy();
    expect(login.email).toBe('user@example.com');
    expect(login.password).toBe('password123');
  });

});
