import { Component, OnInit } from '@angular/core';
import { ResponseUser, ResponseUsers } from './user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UsersService) { }

  responseUsers: ResponseUsers;

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(res => this.responseUsers = res)
  }

}