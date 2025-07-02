import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanapplicationformService } from 'src/app/services/planapplicationform.service';
import { EnquiryService } from 'src/app/services/enquiry.service';
import { FeedbackService } from 'src/app/services/feedback.service';
import { AuthService } from 'src/app/services/auth.service';
import { SavingsPlanService } from 'src/app/services/savingsplan.service';
import { AdminDashService } from 'src/app/services/admin-dash.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  stats = { totalUsers: 0, pendingApplications: 0, activePlans: 0, totalEnquiries: 0, totalFeedback: 0 };

  constructor(
    private router: Router,
    private savingsPlanService: SavingsPlanService,
    private planApplicationService: PlanapplicationformService,
    private enquiryService: EnquiryService,
    private feedbackService: FeedbackService,
    private dashService: AdminDashService
  ) {}

  ngOnInit(): void {
    this.loadDashboardStats();
  }

  loadDashboardStats(): void {
    this.savingsPlanService.getAllSavingsPlan().subscribe((response:any) => {
      this.stats.activePlans = response.data.length;
    });

    this.planApplicationService.getAllPlanApplications().subscribe((response:any) => {
      console.log("DBUG ::RESPONSE GETALLPLANAPPLICATION :: "+JSON.stringify((response)));
      
      this.stats.pendingApplications = response?.data?.filter(app => app.status === 'PENDING').length;
    });

    this.enquiryService.getAllEnquiry().subscribe(response => {
      this.stats.totalEnquiries = response.length;
    });

    this.feedbackService.getAllFeedback().subscribe(response => {
      this.stats.totalFeedback = response.length;
    });

    this.dashService.getallUsers().subscribe(response => {
      this.stats.totalUsers = response.data.length-1;
    });
  }

  navigateToPlans() { this.router.navigate(['/manager/view/savings/plan']); }
  navigateToApplications() { this.router.navigate(['/manager/view/application/form']); }
  navigateToEnquiries() { this.router.navigate(['/manager/view/enquiries']); }
  navigateToFeedback() { this.router.navigate(['/manager/view/feedback']); }
}
