import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://reqres.in/api/users')
      .subscribe(response => {
        console.log(response);
        this.users = response.data;
      });
  }
}
