import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SavingsPlan } from '../models/savingsplan.model';
import { PlanApplication } from '../models/planapplication.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class SavingsPlanService {
  backendUrl: string = 'https://ide-cacacacfdeafbedfebedabfcbfefde.premiumproject.examly.io/proxy/8080/api/savingsplans';

  constructor(private http: HttpClient) { }

  // Fetch all savings plans
  public getAllSavingsPlan(): Observable<ApiResponse<SavingsPlan[]>> {
    return this.http.get<ApiResponse<SavingsPlan[]>>(this.backendUrl);
  }

  // Fetch applied plans by user ID
  public getAppliedPlans(userId: string): Observable<ApiResponse<PlanApplication[]>> {
    ///applications/user/{userId}
    return this.http.get<ApiResponse<PlanApplication[]>>(`${this.backendUrl}/applications/user/${userId}`);
  }

  // Delete a savings plan
  public deleteSavingsPlan(savingsPlanId: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.backendUrl}/${savingsPlanId}`);
  }

  // Fetch a single savings plan by ID
  public getSavingsPlanById(id: string): Observable<ApiResponse<SavingsPlan>> {
    return this.http.get<ApiResponse<SavingsPlan>>(`${this.backendUrl}/${id}`);
  }

  // Add a new savings plan
  public addSavingsPlan(requestObject: SavingsPlan): Observable<ApiResponse<SavingsPlan>> {
    return this.http.post<ApiResponse<SavingsPlan>>(this.backendUrl, requestObject);
  }

  // Update an existing savings plan
  public updateSavingsPlan(id: string, requestObject: SavingsPlan): Observable<ApiResponse<SavingsPlan>> {
    return this.http.put<ApiResponse<SavingsPlan>>(`${this.backendUrl}/${id}`, requestObject);
  }

  // ✅ Fetch Unapplied Savings Plans for a User
  public getUnappliedSavingsPlans(userId: number): Observable<ApiResponse<SavingsPlan[]>> {
    return this.http.get<ApiResponse<SavingsPlan[]>>(`${this.backendUrl}/unapplied/${userId}`);
  }
}
