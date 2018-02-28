import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Todo } from '../../models/todo';
import { User } from '../../models/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  private userForm: FormGroup;
  private users: User[] = [];
  private user;



  constructor(

    public userService: UsersService,

    public formBuilder: FormBuilder,

    public router: Router

  ) { }



  ngOnInit() {

    this.userService.getUserById(1).subscribe(todosResponse => {
      this.users = todosResponse;

    }, error => {

      console.log("error");

    });

  }

}