import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enquiry } from '../models/enquiry.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
 
@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
 
    apiUrl:string="https://ide-cacacacfdeafbedfebedabfcbfefde.premiumproject.examly.io/proxy/8080/api/enquiries"
 
    constructor(private http:HttpClient,private auth:AuthService) { }
 
    // getEnquiryById(enquiryId:number):Observable<Enquiry>{
    //   return this.http.get<Enquiry>(this.apiUrl+"/"+enquiryId);
    // }
    
    // deleteEnquiry(enquiryId:number):Observable<Enquiry>{
    //   return this.http.delete<Enquiry>(this.apiUrl+"/"+enquiryId)
    // }
    
    
    
    
    
    //-----------------------------------------------------------------------
    
  addEnquiry(enquiry:any):Observable<Enquiry>{
      console.log("DBUG :: "+enquiry);
      return this.http.post<Enquiry>(this.apiUrl+`/${+this.auth.getUserId()}`,enquiry);
  }
  
  getUserEnquiries(userId:number):Observable<Enquiry[]>{
    return this.http.get<Enquiry[]>(this.apiUrl+`/user/${this.auth.getUserId()}`)
  }
  getAllEnquiry():Observable<Enquiry[]>{
    return this.http.get<Enquiry[]>(this.apiUrl)
  }

  editEnquiry(enqId:number,replyFromManager:string,status:string):Observable<Enquiry>{
    const body = {
      reply: replyFromManager,
      status: status
    };
    return this.http.put<Enquiry>(this.apiUrl+`/${enqId}/reply`,null,{params:body});
  }

  getEnquiryById(enqId:number):Observable<any>{
    return this.http.get<any>(this.apiUrl+`/${enqId}`);
  }

  // New method to update an enquiry
  updateEnquiry(enquiryId: number, updatedEnquiry: Enquiry): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${enquiryId}`, updatedEnquiry);
  }
}

//https://ide-cacacacfdeafbedfebedabfcbfefde.premiumproject.examly.io/proxy/8080/api/enquiries/1