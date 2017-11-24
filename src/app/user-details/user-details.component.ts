import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../get-users.service';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private usersData: GetUsersService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  specificUser;
  userId;

  ngOnInit() {
    this.userId = this.route.params;
    this.getUserData(this.userId.value.id);
  }

  getUserData(id) {
    //debugger;
    this.usersData.getUserDetails(id).subscribe(p => {
      console.log(p);
      this.specificUser = p;
    });
  }

}
