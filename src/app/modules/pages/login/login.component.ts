import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { User } from '../../hospital/model/user.model';
import { UserService } from '../../hospital/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = new User();
  public variable = '';

  constructor(private toast: NgToastService, private userService: UserService) { }


  ngOnInit(): void {
  }

  post() {
    if (!this.checkValidity()) return;

    this.userService.loginUser(this.user).subscribe(res => {
      if (!res) {
        this.toast.error({ detail: 'Invalid email/password!', summary: "Please try again.", duration: 5000 });
        return;
      }
      // redirect to home page
    });
  }

  checkValidity() {
    if (this.user.email === '' || this.user.password === '') {
      this.toast.error({ detail: 'Required fields are empty!', summary: "Please complete the form.", duration: 5000 });
      return false;
    }
    return true;
  }

}




