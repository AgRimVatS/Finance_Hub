import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SavingsPlan } from 'src/app/models/savingsplan.model';
import { SavingsPlanService } from 'src/app/services/savingsplan.service';
import { ApiResponse } from 'src/app/models/api-response.model';
 
@Component({
  selector: 'app-viewsavingsplan',
  templateUrl: './viewsavingsplan.component.html',
  styleUrls: ['./viewsavingsplan.component.css']
})
export class ViewsavingsplanComponent implements OnInit {
  savings: SavingsPlan[] = [];
  message: string = '';
  arr:SavingsPlan[]=[];
 
  constructor(private savingsPlanService: SavingsPlanService, private router: Router) { }
 
  ngOnInit(): void {
    this.getAllSavingsPlans();
  }
 
  getAllSavingsPlans() {
    this.savingsPlanService.getAllSavingsPlan().subscribe(response => {
      if (response.success) {
        this.savings = response.data.slice();
        this.arr=response.data.slice();    // Extract data from ApiResponse
        this.message = response.message;
      } else {
        this.message = "No savings plans found.";
      }
    }, error => {
      // console.error('Error fetching savings plans:', error);
      console.log("ERROR :: "+error);
     
      this.message = "Error fetching data.";
    });
  }
 
  deleteSavingsPlans(planId:number) {
    this.savingsPlanService.deleteSavingsPlan(planId.toString()).subscribe((deletedData)=>{
      this.savings=this.savings.filter(f=>f.savingsPlanId!==planId);
      console.log("DELETE DATA DBUG :: "+JSON.stringify(deletedData));
     
    })
  }
 
  editSavingsPlan(planId: number) {
    this.router.navigate(['/manager/edit/savings/plan', planId]);
  }
 
  asc:boolean=false;
  sortToggle(){
    this.asc=!this.asc;
    this.arr.sort((x,y)=>{
      if(this.asc)
      return x.goalAmount-y.goalAmount;
    else
    return y.goalAmount-x.goalAmount;
    })
  }
 
  sortToggle1(){
    this.asc=!this.asc;
    this.arr.sort((x,y)=>{
      if(this.asc)
      return x.timeFrame-y.timeFrame;
    else
    return y.timeFrame-x.timeFrame;
    })
  }
 
}