import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EnquiryService } from 'src/app/services/enquiry.service';

@Component({
  selector: 'app-useraddenquiry',
  templateUrl: './useraddenquiry.component.html',
  styleUrls: ['./useraddenquiry.component.css']
})
export class UseraddenquiryComponent implements OnInit {
  enquiryForm: FormGroup;
  int: any = 0;
  pop: boolean = false;

  constructor(private service: EnquiryService, private builder: FormBuilder, private router: Router,private auth:AuthService) {
    this.enquiryForm = this.builder.group({
      message: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    clearInterval(this.int);
  }

  addnewEnquiry() {
    if (this.enquiryForm.valid) {

      this.service.addEnquiry(this.enquiryForm.value).subscribe(
        x => { 
          console.log("DBUG :: :: "+JSON.stringify(x));
          this.enquiryForm.reset();
          this.pop = true;
          this.int = setTimeout(() => {
            this.pop = false;
            this.router.navigate(['user/view/enquiry']);
          }, 3000);
        },
        error => {
          this.router.navigate(['/error']);
        }
      );
    } else {
      this.enquiryForm.markAllAsTouched();
      alert("Enquiry Not Added.");
    }
  }
}
