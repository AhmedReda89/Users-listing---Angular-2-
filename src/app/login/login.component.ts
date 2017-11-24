import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../get-users.service';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersData: GetUsersService, private router: Router, private toastr: ToastrService) { }

  emailValue = '';
  passwordValue = '';
  loginSuccessful = false;

  tryLogin() {
    //debugger;
    this.usersData.loginUser(this.emailValue, this.passwordValue).subscribe(
      data => {
        console.log(data);
        this.loginSuccessful = true;
        this.router.navigateByUrl('/users');
      },
      error => {
        console.log(error.error);
        this.loginSuccessful = false;
      });

  }

  ngOnInit() {
  }

}
