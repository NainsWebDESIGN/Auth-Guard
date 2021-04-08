import { Component, OnInit } from '@angular/core';
import { ApiService } from '@service/api.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private api: ApiService) { }
  Login() {
    let req = { username: this.username, password: this.password };
    this.api.Login(req);
  }
  ngOnInit() {
  }

}
