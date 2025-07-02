import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanApplication } from 'src/app/models/planapplication.model';
import { AuthService } from 'src/app/services/auth.service';
import { PlanapplicationformService } from 'src/app/services/planapplicationform.service';
import { SavingsPlanService } from 'src/app/services/savingsplan.service';

@Component({
  selector: 'app-userplanapplicationform',
  templateUrl: './userplanapplicationform.component.html',
  styleUrls: ['./userplanapplicationform.component.css']
})
export class UserplanapplicationformComponent implements OnInit {
  planForm: FormGroup;
  showModal: boolean = false;
  planId: number = 0;

  constructor(private fb: FormBuilder, private planApplicationService: PlanapplicationformService, private router: Router, private actRoute: ActivatedRoute,private auth:AuthService) {
    this.planForm = this.fb.group({
      appliedAmount: ['', [Validators.required, Validators.min(100)]],
      date: [''],
      remarks: [''],
      image: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe(params => {
      console.log("GOT WHEN APPLY WAS CLICKED " + JSON.stringify(params));
      this.planId = +params['planId'];
    })
  }

  fileName: string = ''; // To store file name

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0]; // Get the first selected file
      this.fileName = file.name; // Extract file name
      console.log('Selected File Name:', this.fileName);
    }
  }

  applyForPlan() {

    alert("clicked");
    const planId = +this.planId;
    const appliedAmount = this.planForm.value.appliedAmount;

    const application = {
      userId:+this.auth.getUserId(),
      savingsPlanId:planId,
      appliedAmount: appliedAmount,
      date: this.planForm.value.date,
      image: this.fileName,
      remarks: this.planForm.value.remarks,
      status: 'PENDING'
    };

    console.log("DBUG :: application :: "+ JSON.stringify(application));
    

    this.planApplicationService.applyForPlan(application).subscribe(
      (response:any) => {
        console.log('Application submitted successfully', response);
        window.alert("applied successfully");
        this.planForm.reset();
        this.fileName="";
        this.router.navigate(['/user/applied/plans']);
      },
      (error) => {
        console.error('Failed to apply', error);
      }
    );
  }

}
