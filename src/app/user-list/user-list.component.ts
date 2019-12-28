import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any = [];

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(
      data => {
        console.log(data);
        this.users = data;
      }
    )
  }

  addUser(user: any) {
    user.id = 13;
    console.log(user);
    user.name = "test_add";
    this.userService.addUser(user).subscribe(
      data => {
        console.log(data);
        alert("User created");
      }
    )
  }

  updateUser(user: any) {
    user.name = "test_update";
    this.userService.updateUser(user).subscribe(
      data => {
        console.log(data);
        alert("User updated");
      }
    )
  }

  deleteUser(user: any) {
    this.userService.deleteUser(user).subscribe(
      data => {
        console.log(data);
        alert("User deleted");
      }
    )
  }

}
