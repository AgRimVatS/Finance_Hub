import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  constructor(private authService:AuthService){}

  isAdmin(){
    return this.authService.getRole() === "ADMIN";
  }

  isUser(){
    return this.authService.getRole() === "USER";
  }
}
