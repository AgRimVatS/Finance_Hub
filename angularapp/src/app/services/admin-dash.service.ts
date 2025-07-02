import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDashService {

  private apiUrl = 'https://ide-cacacacfdeafbedfebedabfcbfefde.premiumproject.examly.io/proxy/8080/api/admin/dashboard';
  

  constructor(private http: HttpClient) {}

  getStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats`);
  }

  getPlanApplicationStatus(): Observable<any> {
    return this.http.get(`${this.apiUrl}/applications/status`);
  }

  getMonthlyApplicationTrends(): Observable<any> {
    return this.http.get(`${this.apiUrl}/applications/monthly`);
  }

  getEnquiryStatus(): Observable<any> {
    return this.http.get(`${this.apiUrl}/enquiries/status`);
  }

  getUserGrowth(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/growth`);
  }

  getSavingsPlanPopularity(): Observable<any> {
    return this.http.get(`${this.apiUrl}/plans/popularity`);
  }

  getRecentApplications(): Observable<any> {
    return this.http.get(`${this.apiUrl}/recent/applications`);
  }

  getRecentEnquiries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/recent/enquiries`);
  }

  getRecentFeedbacks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/recent/feedbacks`);
  }

  getallUsers():Observable<any>{
    return this.http.get(`${this.apiUrl}/all-users`);
  }

}

/*
will add this to readme.md
chart.js
ng2-charts

GET /api/admin/dashboard/stats	Get total users, plans, applications, etc.
GET /api/admin/dashboard/applications/status	Get application status count (Pending, Approved, Rejected).
GET /api/admin/dashboard/applications/monthly	Get monthly application trends.
GET /api/admin/dashboard/enquiries/status	Get pending vs resolved enquiries.
GET /api/admin/dashboard/users/growth	Get user registrations per month.
GET /api/admin/dashboard/plans/popularity	Get savings plan popularity by applications.
GET /api/admin/dashboard/recent/applications	Get recent 10 applications.
GET /api/admin/dashboard/recent/enquiries	Get recent 10 enquiries.
GET /api/admin/dashboard/recent/feedbacks	Get recent 10 feedbacks.


*/

