

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-useraddfeedback',
  templateUrl: './useraddfeedback.component.html',
  styleUrls: ['./useraddfeedback.component.css']
})
export class UseraddfeedbackComponent implements OnInit {

  feedbackForm: FormGroup;

  constructor(private service: FeedbackService, private builder: FormBuilder, private router: Router) {
    this.feedbackForm = builder.group({
      feedbackText: ['', [Validators.required]]
    });
  }

  ngOnInit(): void { }

  toggle(): void {
    const blur = document.getElementById("blur");
    const popup = document.getElementById("popup");

    if (blur && popup) {
      blur.classList.toggle("active");
      popup.classList.toggle("active");
    } else {
      console.error("Elements not found!");
    }
  }

  addFeedback() {
    if (this.feedbackForm.invalid) {
      this.feedbackForm.markAllAsTouched();
      return;  // Stop function execution if form is invalid
    }

    // Submit feedback to the database
    this.service.addFeedback(this.feedbackForm.value).subscribe(
      response => {
        console.log("Feedback added:", response);
        this.feedbackForm.reset();  // Reset form after successful submission
        this.toggle(); // Show success popup
        this.router.navigate(['/user/view/feedback'])
      },
      error => {
        console.error("Error adding feedback:", error);
        alert("Error adding feedback! Please try again.");
      }
    );
  }
}
