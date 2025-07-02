import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdmineditloanComponent } from './components/admineditloan/admineditloan.component';
import { AdminnavComponent } from './components/adminnav/adminnav.component';
import { AdminviewfeedbackComponent } from './components/adminviewfeedback/adminviewfeedback.component';
import { AuthGuard } from './guards/auth.guard';
import { CreatesavingsplanComponent } from './components/createsavingsplan/createsavingsplan.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ManagereditenquiryComponent } from './components/managereditenquiry/managereditenquiry.component';
import { ManagereditsavingsplanComponent } from './components/managereditsavingsplan/managereditsavingsplan.component';
import { ManagerviewapplicationformComponent } from './components/managerviewapplicationform/managerviewapplicationform.component';
import { ManagerviewenquiriesComponent } from './components/managerviewenquiries/managerviewenquiries.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RequestedloanComponent } from './components/requestedloan/requestedloan.component';
import { UseraddenquiryComponent } from './components/useraddenquiry/useraddenquiry.component';
import { UseraddfeedbackComponent } from './components/useraddfeedback/useraddfeedback.component';
import { UserappliedloanComponent } from './components/userappliedloan/userappliedloan.component';
import { UserappliedplansComponent } from './components/userappliedplans/userappliedplans.component';
import { UsernavComponent } from './components/usernav/usernav.component';
import { UserplanapplicationformComponent } from './components/userplanapplicationform/userplanapplicationform.component';
import { UserviewenquiryComponent } from './components/userviewenquiry/userviewenquiry.component';
import { UserviewfeedbackComponent } from './components/userviewfeedback/userviewfeedback.component';
import { UserviewsavingsplanComponent } from './components/userviewsavingsplan/userviewsavingsplan.component';
import { ViewsavingsplanComponent } from './components/viewsavingsplan/viewsavingsplan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { StatsComponent } from './components/dashboard/stats/stats.component';
import { ChartsComponent } from './components/dashboard/charts/charts.component';
import { TablesComponent } from './components/dashboard/tables/tables.component';
import { ChartsModule } from 'ng2-charts';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';



@NgModule({
  declarations: [
    AppComponent,
    AdmineditloanComponent,
    AdminnavComponent,
    AdminviewfeedbackComponent,
    CreatesavingsplanComponent,
    ErrorComponent,
    HomeComponent,
    LoginComponent,
    ManagereditenquiryComponent,
    ManagereditsavingsplanComponent,
    ManagerviewapplicationformComponent,
    ManagerviewenquiriesComponent,
    NavbarComponent,
    RegistrationComponent,
    RequestedloanComponent,
    UseraddenquiryComponent,
    UseraddfeedbackComponent,
    UserappliedloanComponent,
    UserappliedplansComponent,
    UsernavComponent,
    UserplanapplicationformComponent,
    UserviewenquiryComponent,
    UserviewfeedbackComponent,
    UserviewsavingsplanComponent,
    ViewsavingsplanComponent,
    UserviewenquiryComponent,
    AdminDashboardComponent,
    StatsComponent,
    ChartsComponent,
    TablesComponent,
    AdminHomeComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ChartsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }