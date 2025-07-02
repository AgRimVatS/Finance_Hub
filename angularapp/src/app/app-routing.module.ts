import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdminviewfeedbackComponent } from './components/adminviewfeedback/adminviewfeedback.component';
import { CreatesavingsplanComponent } from './components/createsavingsplan/createsavingsplan.component';
import { ManagereditenquiryComponent } from './components/managereditenquiry/managereditenquiry.component';
import { ManagerviewapplicationformComponent } from './components/managerviewapplicationform/managerviewapplicationform.component';
import { ManagerviewenquiriesComponent } from './components/managerviewenquiries/managerviewenquiries.component';
import { UseraddfeedbackComponent } from './components/useraddfeedback/useraddfeedback.component';
import { UserappliedplansComponent } from './components/userappliedplans/userappliedplans.component';
import { UserplanapplicationformComponent } from './components/userplanapplicationform/userplanapplicationform.component';
import { UserviewenquiryComponent } from './components/userviewenquiry/userviewenquiry.component';
import { UserviewfeedbackComponent } from './components/userviewfeedback/userviewfeedback.component';
import { UserviewsavingsplanComponent } from './components/userviewsavingsplan/userviewsavingsplan.component';
import { ViewsavingsplanComponent } from './components/viewsavingsplan/viewsavingsplan.component';
import { UseraddenquiryComponent } from './components/useraddenquiry/useraddenquiry.component';
import { AuthGuard } from './guards/auth.guard'; // Import the AuthGuard
import { ManagereditsavingsplanComponent } from './components/managereditsavingsplan/managereditsavingsplan.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'register', component: RegistrationComponent },

  { path: 'manager/view/feedback', component: AdminviewfeedbackComponent, canActivate: [AuthGuard], data: { expectedRoles: ['ADMIN'] } },
  { path: 'manager/create/savings/plan', component: CreatesavingsplanComponent, canActivate: [AuthGuard], data: { expectedRoles: ['ADMIN'] } },
  { path: 'manager/edit/enquiry/:enqId', component: ManagereditenquiryComponent, canActivate: [AuthGuard], data: { expectedRoles: ['ADMIN'] } },
  { path: 'manager/view/application/form', component: ManagerviewapplicationformComponent, canActivate: [AuthGuard], data: { expectedRoles: ['ADMIN'] } },
  { path: 'manager/view/enquiries', component: ManagerviewenquiriesComponent, canActivate: [AuthGuard], data: { expectedRoles: ['ADMIN'] } },
  { path: 'manager/view/savings/plan', component: ViewsavingsplanComponent, canActivate: [AuthGuard], data: { expectedRoles: ['ADMIN'] } },
  { path: 'manager/view/dash', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { expectedRoles: ['ADMIN'] } },
  { path: 'manager/edit/savings/plan/:id', component: ManagereditsavingsplanComponent, canActivate: [AuthGuard], data: { expectedRoles: ['ADMIN'] } },
  { path: 'manager/home', component: AdminHomeComponent, canActivate: [AuthGuard], data: { expectedRoles: ['ADMIN'] } },
  

  { path: 'user/add/feedback', component: UseraddfeedbackComponent, canActivate: [AuthGuard], data: { expectedRoles: ['USER'] } },
  { path: 'user/add/enquiry', component: UseraddenquiryComponent, canActivate: [AuthGuard], data: { expectedRoles: ['USER'] } },
  { path: 'user/applied/plans', component: UserappliedplansComponent, canActivate: [AuthGuard], data: { expectedRoles: ['USER'] } },
  { path: 'user/application/form', component: UserplanapplicationformComponent, canActivate: [AuthGuard], data: { expectedRoles: ['USER'] } },
  { path: 'user/view/enquiry', component: UserviewenquiryComponent, canActivate: [AuthGuard], data: { expectedRoles: ['USER'] } },
  { path: 'user/view/feedback', component: UserviewfeedbackComponent, canActivate: [AuthGuard], data: { expectedRoles: ['USER'] } },
  { path: 'user/view/feedback/:userId', component: UserviewfeedbackComponent, canActivate: [AuthGuard], data: { expectedRoles: ['USER'] } },
  { path: 'user/home', component: UserHomeComponent, canActivate: [AuthGuard], data: { expectedRoles: ['USER'] } },

  { path: 'user/view/savings/plan', component: UserviewsavingsplanComponent, canActivate: [AuthGuard], data: { expectedRoles: ['USER'] } },

  { path: '**', component: ErrorComponent },

  //extra
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }