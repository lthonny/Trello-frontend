import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { IAuthResponse, ISingIn } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {}

  submit() {
    if(this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: ISingIn = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.singIn$(user)
      .subscribe((response: IAuthResponse) => console.log('response login user: ', response));

    console.log('log in', user);
  }
}
