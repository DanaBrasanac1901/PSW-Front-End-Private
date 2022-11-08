import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { AppointmentsByDoctorComponent } from "./modules/hospital/appointments-by-doctor/appointments-by-doctor.component";
import { FeedbackComponent } from "./modules/hospital/feedback/feedback.component"
import{RegisterBloodBankComponent} from "./modules/integration/register-blood-bank/register-blood-bank.component";

const routes: Routes = [
  { path: '', redirectTo: '/appointments-by-doctor', pathMatch: 'full' },
  { path: 'appointments-by-doctor', component: AppointmentsByDoctorComponent },
  { path: 'feedback', component: FeedbackComponent },
  {path:'register-blood-bank', component:RegisterBloodBankComponent},
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
