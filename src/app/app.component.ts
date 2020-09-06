import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  errorMessage: string;
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(
        users => this.users = users,
        error => this.errorMessage = error
      );
  }
}
