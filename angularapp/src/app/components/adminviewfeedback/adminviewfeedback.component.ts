import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback.model';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-adminviewfeedback',
  templateUrl: './adminviewfeedback.component.html',
  styleUrls: ['./adminviewfeedback.component.css']
})
export class AdminviewfeedbackComponent implements OnInit {
  feedbacks: Feedback[] = [];
  selectedUser: any = {}; // Store user details for popup

  constructor(private service: FeedbackService) {}

  ngOnInit(): void {
    this.getAllFeedbacks();
  }

  getAllFeedbacks() {
    this.service.getAllFeedback().subscribe((data: any) => {
      this.feedbacks = data;
      console.log("DBUG :: FEEDBACKS ::\n\n" + JSON.stringify(data));
    });
  }

  showProfile(user: any): void {
    this.selectedUser = user;
    console.log("DBUG :: USER :: SELECTED USER :: \n\n" + JSON.stringify(this.selectedUser));
    this.togglePopup();
  }

  togglePopup(): void {
    const popup = document.getElementById("popup");
    if (popup) {
      popup.classList.toggle("active");
    } else {
      console.error("Popup element not found!");
    }
  }

  toggle(): void {
    this.togglePopup();
  }
}