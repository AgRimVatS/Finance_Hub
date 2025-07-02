import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiURL = 'https://ide-cacacacfdeafbedfebedabfcbfefde.premiumproject.examly.io/proxy/8080/api'; // Change as per backend API

  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post(`${this.apiURL}/login`, credentials);
  }
  register(creadentials :any) {
    console.log("DBUG :: "+JSON.stringify(creadentials));
    
    return this.http.post(`${this.apiURL}/register`,creadentials);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');

    // this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserName(){
    return localStorage.getItem('username');

  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }
}

