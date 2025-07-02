import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SavingsPlan } from 'src/app/models/savingsplan.model';
import { AuthService } from 'src/app/services/auth.service';
import { SavingsPlanService } from 'src/app/services/savingsplan.service';
 
@Component({
  selector: 'app-userviewsavingsplan',
  templateUrl: './userviewsavingsplan.component.html',
  styleUrls: ['./userviewsavingsplan.component.css']
})
export class UserviewsavingsplanComponent implements OnInit {
  savings: SavingsPlan[] = [];
  errorMessage: string = '';
  userId:number=0;
  loading:boolean=true;
  arr: SavingsPlan[]=[];
 
  constructor(private savingsPlanService: SavingsPlanService, private router: Router,private authService:AuthService) { }
 
  ngOnInit(): void {
    // this.getAllSavingsPlans();  // Fetch savings plans on initialization
    if(this.authService.getUserId()){
      this.userId=+this.authService.getUserId();
    }
    this.getAllSavingsPlans();
  }
 
  getAllSavingsPlans() {
    this.savingsPlanService.getAllSavingsPlan().subscribe(
      (response) => {
        if (response.success) {
          this.savings = response.data.slice();
          this.arr=response.data.slice()
          window.alert("savings plan fetched successfully!!")
        } else {
          this.errorMessage = 'No savings plans available';
          window.alert("There was an error fetching the savings plan")
        }
      },
      (error) => {
        console.error('Error fetching savings plans:', error);
        this.errorMessage = 'An error occurred while fetching savings plans';
      }
    );
  }
 
  getSavingsPlanById(id: string) {
    this.savingsPlanService.getSavingsPlanById(id).subscribe(
      (response) => {
        if (response.success) {
          // Handle viewing of individual savings plan details (optional)
          console.log('Savings plan details:', response.data);
          // Optionally navigate to a new page to view detailed plan information
          this.router.navigate([`/view/savings/plan/${id}`]);
        } else {
          this.errorMessage = 'Savings plan not found';
        }
      },
      (error) => {
        console.error('Error fetching savings plan by ID:', error);
        this.errorMessage = 'An error occurred while fetching the savings plan details';
      }
    );
  }
 
  applyPlan(planId:number) {
    this.router.navigate(['/user/application/form'],{ queryParams: { planId: planId } });
  }
 
  search1: string = '';
  searchByInputEvent() {
    if (!this.search1)
      this.arr = this.savings.slice();
    else
      this.arr = this.savings.filter(x => x.name.toLowerCase().includes(this.search1.toLowerCase()));
  }
 
  asc:boolean=false;
  sortByAsc(){
    this.asc=!this.asc;
    this.arr.sort((x,y)=>{
      if(this.asc)
      return x.goalAmount-y.goalAmount;
    })
  }
 
  desc:boolean=false;
  sortByDesc(){
    this.desc=!this.desc;
    this.arr.sort((x,y)=>{
      if(this.desc)
      return y.goalAmount-x.goalAmount;
    })
  }
}