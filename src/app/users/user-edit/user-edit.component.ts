import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  errorMessage: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) {

    const id = +this.route.snapshot.paramMap.get('id');

    this.userService.getUser(id)
      .subscribe(
        user => this.user = user,
        error => this.errorMessage = error
      );
  }

  ngOnInit(): void {
  }

  updateUser(): void {
    this.userService.updateUser(this.user)
      .subscribe(
        user => this.user = user,
        error => this.errorMessage = error
      );
  }
}
