import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent,},//login  
  { path: 'signin', component: SignupComponent, },//signup
  { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },//if login is pressed moves to dashboard
  { path: 'admins', component: AdminGuard }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

