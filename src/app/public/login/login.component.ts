import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ILogin} from "../../interfaces";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted: boolean = false;

  form: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor() { }

  ngOnInit(): void {}

  submit() {
    if(this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: ILogin = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    console.log('log in', user);
  }
}
