import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teamMembers = [
    { name: 'Adarsh Singh', role: 'Team Lead', image: 'assets/team/adarsh.jpg', work: 'Team Leader', desc: 'Handled the team, worked on the backend.' },
    { name: 'Agrim Vats', role: 'API Development', image: 'assets/team/agrim.webp', work: 'API Development', desc: 'Handled and implemented API development' },
    { name: 'Jessica Mathew', role: 'Database Manager', image: 'assets/team/jessica.webp', work: 'Database Manager', desc: 'Designed, implemented and managed database' },
    { name: 'Bhargavi J', role: 'Quality Assurance', image: 'assets/team/bhargavi.webp', work: 'Quality Assurance', desc: 'Assisted in writing and executed test cases' },
    { name: 'Devaraju Dheeraj', role: 'UI/UX', image: 'assets/team/dheeraj.webp', work: 'UI/UX', desc: 'Optimized UX and efficient functionality' },
    { name: 'Akash Shedage', role: 'UI/UX', image: 'assets/team/akash.webp', work: 'UI/UX', desc: 'Made intuitive interfaces and layouts' }
  ];
 
  currentIndex = 0;
 
  constructor() { }
 
  ngOnInit(): void {
    this.preloadImages();
   }
 
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.teamMembers.length;
  }
 
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.teamMembers.length) % this.teamMembers.length;
  }
 
  preloadImages() {
    this.teamMembers.forEach(member => {
      const img = new Image();
      img.src = member.image;
    });
  }
 
  showPopup = false;
  selectedWork = '';
  selectedMember: any = null;
 
  showWork(member: any) {
    // this.selectedWork = member.work;
    this.selectedMember = member;
    this.showPopup = true;
  }
 
  closePopup() {
    this.showPopup = false;
  }
}