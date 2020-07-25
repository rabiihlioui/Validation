import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  disabledBtn = 'Sign in button diabled';

  constructor() { }

  ngOnInit(): void {
  }

}
