import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SavingsPlanService } from 'src/app/services/savingsplan.service';

@Component({
  selector: 'app-createsavingsplan',
  templateUrl: './createsavingsplan.component.html',
  styleUrls: ['./createsavingsplan.component.css']
})
export class CreatesavingsplanComponent implements OnInit {
  form: FormGroup;
  errorMessage: string = '';

  riskLevels = ['High', 'Medium', 'Low'];
  statuses = ['Active', 'Inactive'];

  constructor(
    private service: SavingsPlanService,
    private builder: FormBuilder,
    private router: Router
  ) {
    this.form = this.builder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
      goalAmount: ['', [Validators.required, Validators.min(100000), Validators.max(1000000)]],
      timeFrame: ['', [Validators.required, Validators.min(5), Validators.max(25)]],
      riskLevel: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      status: ['', [Validators.required]]
    });
  }

  ngOnInit(): void { }

  addSavingsPlan(): void {
    console.log(this.form.valid);
    if (this.form.valid) {
      console.log("DBUG :: " + JSON.stringify(this.form.value));
      this.playBackgroundVideo();
      this.service.addSavingsPlan(this.form.value).subscribe(
        response => {
          if (response.success) {
            // alert(response.message);
            setTimeout(() => {
              this.router.navigate(['/manager/view/savings/plan']);
            }, 1500);
          } else {
            this.errorMessage = response.message;
            console.error('Failed to add savings plan:', response.message);
          }
        },
        error => {
          this.errorMessage = 'Something went wrong. Please try again later.';
          console.error('Error adding savings plan:', error);
        }
      );
    } else {
      this.errorMessage = 'Please fill all required fields.';
    }
  }
  playBackgroundVideo(): void {
    const video: HTMLVideoElement = document.getElementById('backgroundVideo') as HTMLVideoElement;
    if (video) {
      video.play();
    }
  }
}