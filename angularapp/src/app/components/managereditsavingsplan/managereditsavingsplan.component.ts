import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SavingsPlan } from 'src/app/models/savingsplan.model';
import { SavingsPlanService } from 'src/app/services/savingsplan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response.model';

@Component({
  selector: 'app-managereditsavingsplan',
  templateUrl: './managereditsavingsplan.component.html',
  styleUrls: ['./managereditsavingsplan.component.css']
})
export class ManagereditsavingsplanComponent implements OnInit {
  form: FormGroup;
  message: string = '';

  constructor(
    private savingsPlanService: SavingsPlanService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      goalAmount: ['', Validators.required],
      timeFrame: ['', Validators.required],
      riskLevel: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); 
    if (id) {
      this.savingsPlanService.getSavingsPlanById(id).subscribe(response => {
        if (response.success) {
          this.form.patchValue(response.data); // Extract data from ApiResponse
        } else {
          this.message = "Savings plan not found.";
        }
      }, error => {
        console.error('Error fetching savings plan:', error);
        this.message = "Error fetching savings plan.";
      });
    }
  }

  editSavingsPlan() {
    if (this.form.valid) {
      const id = this.route.snapshot.paramMap.get('id');
      const updatedSavingsPlan: SavingsPlan = this.form.value;
      
      this.savingsPlanService.updateSavingsPlan(id, updatedSavingsPlan).subscribe(response => {
        if (response.success) {
          this.message = "Savings plan updated successfully!";
          setTimeout(() => this.router.navigate(['manager/view/savings/plan']), 1500);
        } else {
          this.message = "Failed to update savings plan.";
        }
      }, error => {
        console.error('Error updating savings plan:', error);
        this.message = "Error updating savings plan.";
      });
    }
  }
}
