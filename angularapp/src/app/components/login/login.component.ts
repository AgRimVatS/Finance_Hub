
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginForm: FormGroup;
//   showPassword: boolean = false;

//   constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required]]
//     });
//   }

//   ngOnInit(): void {}

//   togglePasswordVisibility(): void {
//     this.showPassword = !this.showPassword;
//   }

//   onLoginSubmit(): void {
//     if (this.loginForm.invalid) {
//       console.log("Form is invalid");
//       return;
//     }

//     this.authService.login(this.loginForm.value).subscribe(
//       (res: any) => {
//         if (!res?.data) {
//           alert("Invalid response from server!");
//           return;
//         }

//         const data = res.data.split(",");
//         if (data.length < 3) {
//           alert("Unexpected server response!");
//           return;
//         }

//         localStorage.setItem('token', data[0] || '');
//         localStorage.setItem('role', data[1] || '');
//         localStorage.setItem('userId', data[2] || '');
//         localStorage.setItem('username', data[3] || '');

//         console.log("Login successful!", data);

//         alert("Login successful!");

//         // Redirect based on role
//         if (data[1] === 'ADMIN') {
//           this.router.navigate(['manager/home']);
//         } else {
//           this.router.navigate(['user/home']);
//         }
//       },
//       (error) => {
//         alert("User doesn't exist or wrong credentials!");
//         console.error("Login failed:", error);
//       }
//     );
//   }
// }





//below are the agrims code
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showPassword: boolean = false;
  loginError: string = '';
  showErrorPopup: boolean = false; // Property to control error popup display
  showSuccessPopup: boolean = false;
 
 
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
 
  ngOnInit(): void {}
 
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
 
  onLoginSubmit(): void {
    if (this.loginForm.invalid) {
      console.log("Form is invalid");
      return;
    }
 
    this.authService.login(this.loginForm.value).subscribe(
      (res: any) => {
        if (!res?.data) {
          alert("Invalid response from server!");
          return;
        }
 
        const data = res.data.split(",");
        if (data.length < 3) {
          alert("Unexpected server response!");
          return;
        }
 
        localStorage.setItem('token', data[0] || '');
        localStorage.setItem('role', data[1] || '');
        localStorage.setItem('userId', data[2] || '');
        localStorage.setItem('username', data[3] || '');
 
        console.log("Login successful!", data);
 
       // alert("Login successful!");
        this.showSuccessPopup=true;
        setTimeout(()=>{
          this.showSuccessPopup=false;
          if (data[1] === 'ADMIN'){
            this.router.navigate(['manager/home']);
          }
          else{
            this.router.navigate(['user/home']);
          }
        },3000);
        // Redirect based on role
        // if (data[1] === 'ADMIN') {
        //   this.router.navigate(['manager/home']);
        // } else {
        //   this.router.navigate(['user/home']);
        // }
      },
      (error) => {
        this.loginError='User Not found ';
        this.showErrorPopup=true;
        setTimeout(()=>{
          this.showErrorPopup=false; 
        },3000);
        this.loginForm.reset();
        // alert("User doesn't exist or wrong credentials!");
        // console.error("Login failed:", error);
      });
  }
  closeErrorPopup() {
    this.showErrorPopup = false; // Close error popup
  }
  closeSuccessPopup() {
    this.showSuccessPopup = false; // Close success popup
  }
}
