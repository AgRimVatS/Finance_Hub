import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlanApplication } from 'src/app/models/planapplication.model';
import { PlanapplicationformService } from 'src/app/services/planapplicationform.service';

@Component({
  selector: 'app-managerviewapplicationform',
  templateUrl: './managerviewapplicationform.component.html',
  styleUrls: ['./managerviewapplicationform.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ManagerviewapplicationformComponent implements OnInit {

  planApplications: PlanApplication[] = [];
  showModal: boolean = false;
  imageSrc: string = "";
  showRejectModal: boolean = false;  // Flag to show rejection modal
  rejectionReason: string = "";      // To capture rejection reason
  selectedApplicationId: number = 0; // To capture the application being rejected

  constructor(private service: PlanapplicationformService) {}

  ngOnInit(): void {
    this.viewAllApplication();
  }

  viewAllApplication(): void {
    this.service.getAllPlanApplications().subscribe({
      next: (response:any) => {
        console.log("DBUG ::\n " + JSON.stringify(response));
        this.planApplications = response?.data || [];
      },
      error: (err) => console.error("Error fetching applications", err),
    });
  }

  acceptApplication(planApplicationId: number): void {
    this.service.approvePlanApplication(planApplicationId).subscribe({
      next: (response) => {
        console.log("DBUG :: accept :: " + JSON.stringify(response));
        this.viewAllApplication();
      },
      error: (err) => console.error("Error approving application", err),
    });
  }

  openRejectModal(planApplicationId: number): void {
    this.selectedApplicationId = planApplicationId;
    this.showRejectModal = true;
  }

  confirmRejection(): void {
    if (this.rejectionReason.trim()) {
      this.service.rejectPlanApplication(this.selectedApplicationId, this.rejectionReason).subscribe({
        next: (response) => {
          console.log("DBUG :: reject :: " + JSON.stringify(response));
          this.showRejectModal = false;
          this.rejectionReason = ""; // Clear the input
          this.viewAllApplication(); // Refresh the applications
        },
        error: (err) => {
          console.error("Error rejecting application", err);
          alert("Error rejecting the application.");
        }
      });
    } else {
      alert("Please provide a rejection reason.");
    }
  }

  toggleOpen(imagePath: string): void {
    console.log("DBUG :: toggleOpen clicked :: " + imagePath);
    
    if (imagePath) {
      this.imageSrc = imagePath;
      this.showModal = true;
    }
  }

  toggleClose(): void {
    this.showModal = false;
    this.imageSrc = "";
  }

  toggleRejectModal(): void {
    this.showRejectModal = false;
    this.rejectionReason = "";
  }

  

}
