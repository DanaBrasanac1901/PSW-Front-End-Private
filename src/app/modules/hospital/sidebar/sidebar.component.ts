import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent{
  @Input() homeBool:boolean=false
  @Input() consiliumsBool:boolean=false
  @Input() bloodRequestsBool:boolean=false
  @Input() bloodRecordBool:boolean=false
  @Input() vacationsBool:boolean=false
  @Input() patientTreatmentsBool:boolean=false
  @Input() patientStatisticsBool:boolean=false
  @Input() appointmentsBool:boolean=false
  @Input() searchBloodBanksBool:boolean=false
  @Input() searchReportsAndPrescriptionsBool:boolean=false
  constructor(private router: Router){

  }
  home(){
    this.router.navigate(['/doctor-home'])
  }
  consilium(){
    this.router.navigate(['show-consiliums'])
  }
  bloodRequest(){
    this.router.navigate(['bloodRequest'])
  }
  bloodRecord(){
    this.router.navigate(['bloodRecord/add'])
  }
  vacations(){
    this.router.navigate(['vacation-requests-by-doctor'])
  }
  patientTreatment(){
    this.router.navigate(['/patients/treatments'])
  }
  patientStatistics(){
    this.router.navigate(['patient-statistics'])
  }
  appointments(){
    this.router.navigate(['/appointments-by-doctor'])
  }
  searchBloodBank(){
    this.router.navigate(['search-blood-integration'])
  }
  searchReports(){
    this.router.navigate(['search-reports'])
  }
  logOut(){
    this.router.navigate(['/doctor-home'])
  }
}