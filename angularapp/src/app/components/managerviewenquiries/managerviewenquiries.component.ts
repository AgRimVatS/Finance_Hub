import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/models/enquiry.model';
import { EnquiryService } from 'src/app/services/enquiry.service';

@Component({
  selector: 'app-managerviewenquiries',
  templateUrl: './managerviewenquiries.component.html',
  styleUrls: ['./managerviewenquiries.component.css']
})
export class ManagerviewenquiriesComponent implements OnInit {
  enquiries: any[] = [];
  arr: Enquiry[] = [];
  constructor(private enquiryService: EnquiryService, private router: Router) { }

  ngOnInit(): void {
    this.loadEnquiries();
  }

  loadEnquiries(): void {
    this.enquiryService.getAllEnquiry().subscribe((data: any) => {
      console.log("DBUG :: DATAAAAA :: " + JSON.stringify(data));
      this.enquiries = data.slice();
      this.arr=data.slice();

    });
  }

  editEnquiry(enqId: number): void {
    this.router.navigate([`manager/edit/enquiry/${enqId}`]); // Using userId instead of username
  }

  search1: string = '';
  searchByInputEvent() {
    if (!this.search1)
      this.arr = this.enquiries.slice();
    else
      this.arr = this.enquiries.filter(x => x.message.toLowerCase().includes(this.search1.toLowerCase()) || x.user.username.toLowerCase().includes(this.search1.toLowerCase()));
  }
}