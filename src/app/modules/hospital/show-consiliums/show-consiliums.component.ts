import { Component, OnInit } from '@angular/core';
import { ShowConsiliumsDTO } from '../model/showConsiliumsDTO';
import { ConsiliumService } from '../services/consilium.service';

@Component({
  selector: 'app-show-consiliums',
  templateUrl: './show-consiliums.component.html',
  styleUrls: ['./show-consiliums.component.css']
})
export class ShowConsiliumsComponent implements OnInit {

  public consiliums: ShowConsiliumsDTO[] = [];
  
  public consiliumsToShow: ShowConsiliumsDTO[]= [];

  public doctorsNames : string [] = [];

  public show : boolean = false;


  constructor(public consiliumService : ConsiliumService) { }

  ngOnInit(): void {
    this.consiliumService.getAll().subscribe(res => {

      this.consiliums = res;

      this.sortByDateTime();

      this.consiliumsToShow = this.consiliums;
    });
  }

  sortByDateTime(): void {
    this.consiliums = this.consiliums.sort((a, b) => Date.parse(a.Start) > Date.parse(b.Start)? 1 : -1);
  }

  onSearchTextEntered(searchValue : string){
    if(searchValue != ''){
      this.consiliumsToShow = this.consiliums.filter(consilium => searchValue === '' || consilium.Topic.toLowerCase().includes(searchValue));
      console.log('currently shown appointments ',this.consiliumsToShow);
    }
    else
        this.consiliumsToShow = this.consiliums;
  }

  showDoctors(consilium : ShowConsiliumsDTO){
    this.doctorsNames = [];
    this.doctorsNames = consilium.DoctorNames;
  }

}
