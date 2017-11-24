import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../get-users.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  constructor(private usersData: GetUsersService, private toastr: ToastrService) { }

  users;

  newName = '';
  newJob = '';

  createSuccessful;
  updateSuccessful;
  deleteSuccessful;

  createPanelVisibilty = true;
  itemRemoved = false;

  ngOnInit() {
    this.usersData.getUsers().subscribe(p => {
      console.log(p);
      this.users = p;
    });
  }

  createUser() {
    //debugger;
    if (this.newName && this.newJob) {
      this.usersData.createNewuser(this.newName, this.newJob).subscribe(
        data => {
          console.log(data);
          this.createSuccessful = true;
          this.toastr.success('A new user has been created :)', 'Done!');
        },
        error => {
          console.log(error);
          this.createSuccessful = false;
          this.toastr.error("Sorry we couldn't excute your request", 'Try again later');
        });
    } else {
      console.log("No paramters added to create a new user");
      this.toastr.error("No paramters added to create a new user", 'Oops!');
    }
  }

  updateExistingUser(id, name, job) {
    //debugger;
    this.usersData.updateUser(id, name, job).subscribe(
      data => {
        console.log(data);
        this.updateSuccessful = true;
        this.toastr.success('User data updated successfully', 'Updated!');
      },
      error => {
        console.log(error);
        this.updateSuccessful = false;
        this.toastr.error("Sorry we couldn't excute your request", 'Try again later');
      });
  }

  deleteExistingUser(id) {
    //debugger;
    this.usersData.deleteUser(id).subscribe(
      data => {
        console.log(data);
        this.deleteSuccessful = true;
      },
      error => {
        console.log(error);
        this.deleteSuccessful = false;
      });
  }
}
