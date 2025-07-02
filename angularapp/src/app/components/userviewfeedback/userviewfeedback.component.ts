import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-userviewfeedback',
  templateUrl: './userviewfeedback.component.html',
  styleUrls: ['./userviewfeedback.component.css']
})
export class UserviewfeedbackComponent implements OnInit {

  feedbacks: any[] = [];
  feedbackIdToDelete: number | null = null; // Variable to store the feedback ID to delete

  constructor(private service: FeedbackService) { }

  ngOnInit(): void {
    this.loadFeedback();  // Fetch feedback when component loads
  }

  loadFeedback(): void {
    this.service.getFeedbackByUserId().subscribe(
      data => {
        console.log("DBUG :: FEEDBACK :: "+JSON.stringify(data));
        this.feedbacks = data;
      },
      error => {
        console.error("Error fetching feedback:", error);
      }
    );
  }

  openPopup(feedbackId: number): void {
    this.feedbackIdToDelete = feedbackId;
    this.togglePopup();
  }

  togglePopup(): void {
    const blur = document.getElementById("blur");
    const popup = document.getElementById("popup");

    if (blur && popup) {
      blur.classList.toggle("active");
      popup.classList.toggle("active");
    } else {
      console.error("Elements not found!");
    }
  }

  confirmDelete(): void {
    if (this.feedbackIdToDelete !== null) {
      this.deleteFeedback(this.feedbackIdToDelete);
      this.feedbackIdToDelete = null;
      this.togglePopup();
    }
  }

  deleteFeedback(feedbackId: number): void {
    this.feedbacks=this.feedbacks.filter(f=>f.feedbackId!==feedbackId);
    this.service.deleteFeedback(feedbackId).subscribe(
      response => {
        console.log("Feedback deleted:", response);
        this.loadFeedback(); // Reload feedback list after deletion
      },
      error => {
        console.error("Error deleting feedback:", error);
      }
    );
  }
}
