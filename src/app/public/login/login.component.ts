import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
import {ILogin} from "../../interfaces";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted: boolean = false;

  form: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {}

  submit() {
    if(this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: ILogin = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password
    }

    // this.auth.singIn$(user)
    //   .subscribe((response) => {
    //     console.log(response);
    //   })

    console.log('log in', user);
  }
}
