import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm!: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]],
      confirmPassword: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      userRole: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  // Custom validator for password match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);}}
    // Toggle password visibility
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
    
  // Submit form
onSubmit() {
    if (this.registerForm.valid) {
      
      const credentials={
        username:this.registerForm.value.username,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password,
        mobileNumber:this.registerForm.value.mobileNumber,
        userRole:this.registerForm.value.userRole
      }

      this.authService.register(credentials).subscribe(
        (res: any) => {
          console.log("Response from server:", JSON.stringify(res));
          if (res.success) {
            console.log("Navigation to login page");
            console.log("Form Submitted:", JSON.stringify(this.registerForm.value));
            alert("Registration successful!");
            this.router.navigate(["/login"]);
            
          } else {
            window.alert("Something went wrong. Success was " + res.status + " and message was " + res.data);
          }
        },
        (error) => {
          console.error("Error during registration:", error);
          window.alert("An error occurred during registration. Please try again.");
        }
      );
    } else {
      console.log("Form is invalid");
    }
  }
  // showPopup() {
  //   const popup = document.getElementById('successPopup');
  //   if (popup) {
  //     popup.style.display = 'block';
  //   }
  // }

  // closePopup() {
  //   this.router.navigate(["/login"]);
  //   const popup = document.getElementById('successPopup');
  //   if (popup) {
  //     popup.style.display = 'none';
  //   }
  // }
}