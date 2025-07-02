import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  public baseUrl:string='https://ide-cacacacfdeafbedfebedabfcbfefde.premiumproject.examly.io/proxy/8080/api/feedback';
  constructor(private http:HttpClient,private auth:AuthService) { }
  
  // Add feedback
  addFeedback(feedback: any): Observable<any> {
    // return this.http.post<any>(this.baseUrl, feedback); og
    return this.http.post<any>(this.baseUrl+`/${+this.auth.getUserId()}`, feedback);
  }

  // Update feedback
  updateFeedback(feedbackId: number, feedback: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${feedbackId}`, feedback);
  }

  // Delete feedback
  deleteFeedback(feedbackId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${feedbackId}`);
  }

  // Get all feedback
  getAllFeedback(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getFeedbackByUserId():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+`/${+this.auth.getUserId()}`);
  }
}
