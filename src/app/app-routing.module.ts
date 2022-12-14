import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppointmentsByDoctorComponent } from "./modules/hospital/appointments-by-doctor/appointments-by-doctor.component";
import { FeedbackComponent } from "./modules/hospital/feedback/feedback.component"
import{RegisterBloodBankComponent} from "./modules/integration/register-blood-bank/register-blood-bank.component";
//import { ConfigurationComponent } from './modules/integration/configuration/configuration.component';
import { VacationRequestsByDoctorComponent } from "./modules/hospital/vacation-requests-by-doctor/vacation-requests-by-doctor.component";
import { PatientStatisticsComponent } from "./modules/hospital/patient-statistics/patient-statistics.component";
import { PatientProfileComponent } from "./modules/hospital/patient-profile/patient-profile.component";
import { DoctorHomeComponent } from "./modules/pages/doctor-home/doctor-home.component";
import { LoginComponent } from "./modules/pages/login/login.component";
import { ManagerHomeComponent } from "./modules/pages/manager-home/manager-home.component";
import { CreateConsiliumComponent } from "./modules/hospital/create-consilium/create-consilium.component";


const routes: Routes = [
  { path: 'appointments-by-doctor', component: AppointmentsByDoctorComponent},
  //{ path: 'home', component: HomeComponent },
  { path: 'vacation-requests-by-doctor', component: VacationRequestsByDoctorComponent},
  { path: 'patient-statistics', component: PatientStatisticsComponent },
  { path: 'vacation-requests-by-doctor', component: VacationRequestsByDoctorComponent},
  { path: 'patient-statistics', component: PatientStatisticsComponent },
  { path: 'feedback', component: FeedbackComponent },
  {path:'register-blood-bank', component:RegisterBloodBankComponent},
  { path: 'manager-home', component: ManagerHomeComponent },
  { path: 'doctor-home', component: DoctorHomeComponent },
  //ovde mi izlazi greska jer je vec definisano u integration module, mozete slobodno samo tamo stavljati putanje za integracije jer imamo child routes ukljucen
 // {path:'configuration', component:ConfigurationComponent},
  { path: '', component: LoginComponent },
  { path: 'create-consilium', component: CreateConsiliumComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
