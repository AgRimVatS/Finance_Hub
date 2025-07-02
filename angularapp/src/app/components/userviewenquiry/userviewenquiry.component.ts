import { Component, OnInit } from '@angular/core';
import { EnquiryService } from 'src/app/services/enquiry.service';
import { AuthService } from 'src/app/services/auth.service';
import { Enquiry } from 'src/app/models/enquiry.model';

@Component({
  selector: 'app-userviewenquiry',
  templateUrl: './userviewenquiry.component.html',
  styleUrls: ['./userviewenquiry.component.css']
})
export class UserviewenquiryComponent implements OnInit {

  enquiries: any[] = [];
  userId: number = 0;
  showEditModal: boolean = false;
  selectedEnquiry: any | null = null;
  editMessage: string = "";

  constructor(private enquiryService: EnquiryService, private auth: AuthService) { }

  ngOnInit(): void {
    const userIdFromAuth = this.auth.getUserId();
    this.userId = userIdFromAuth ? +userIdFromAuth : 0;

    if (!this.userId) {
      console.error("User ID is invalid");
      return;
    }

    this.loadEnquiries();
  }

  loadEnquiries(): void {
    this.enquiryService.getUserEnquiries(this.userId).subscribe({
      next: (data: any) => {
        console.log("DBUG :: ENQ :: ", data);  // Check the structure of the response
        this.enquiries = data?.data || [];
      },
      error: (err) => {
        console.error("Error loading enquiries", err);
      }
    });
  }

  openEditModal(enquiry: any): void {
    console.log("DBUG :: Enquiry Status: ", enquiry.status);  // Check status value
    if (enquiry.status === 'PENDING') {
      this.selectedEnquiry = enquiry;
      this.editMessage = enquiry.message;
      this.showEditModal = true;
    }
  }

  confirmEdit(): void {
    if (this.selectedEnquiry) {
      const updatedEnquiry = { ...this.selectedEnquiry, message: this.editMessage };
      console.log("DBUG :: Updated Enquiry: ", updatedEnquiry);  // Log the updated object to check
      this.enquiryService.updateEnquiry(+this.selectedEnquiry.enquiryId, updatedEnquiry).subscribe({
        next: (response) => {
          this.showEditModal = false;
          this.loadEnquiries();
        },
        error: (err) => {
          console.error("Error editing enquiry", err);
        }
      });
    }
  }

  toggleEditModal(): void {
    this.showEditModal = false;
    this.selectedEnquiry = null;
    this.editMessage = "";
  }

  decodeHtml(encodedStr: string | undefined): string {
    return encodedStr ? decodeURIComponent(encodedStr) : '';
  }
}
