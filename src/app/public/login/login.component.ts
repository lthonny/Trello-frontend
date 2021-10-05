import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { IAuthResponse, ISingIn } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';
// import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted: boolean = false;
  message: string = '';

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
    private auth: AuthService,
    private router: Router
    // public errorService: ErrorService
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
      .subscribe((response: IAuthResponse) => {
        this.form.reset();
        this.router.navigate(['private', 'boards']);
      });
  }
}
