import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanApplication } from 'src/app/models/planapplication.model';
import { PlanapplicationformService } from 'src/app/services/planapplicationform.service';
import { ApiResponse } from 'src/app/models/api-response.model';

@Component({
  selector: 'app-userappliedplans',
  templateUrl: './userappliedplans.component.html',
  styleUrls: ['./userappliedplans.component.css']
})
export class UserappliedplansComponent implements OnInit {
  userId:number;
  planApplication:PlanApplication[]=[];
  constructor(private service:PlanapplicationformService,private ar:ActivatedRoute) { }

  ngOnInit(): void {
   this.userId=parseInt(this.ar.snapshot.params['id']);
   this.AppliedFormsByUser(); 
  }
   AppliedFormsByUser():void{
    this.service.getAllPlanApplicationsForUser().subscribe((x:any)=>{
      console.log("DBUG :: APPLIED FORMS BY USER :: "+JSON.stringify(x));
      this.planApplication=x?.data;
    })
  }
}
