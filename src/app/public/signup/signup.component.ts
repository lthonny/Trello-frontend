import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAuthResponse, ISingUp } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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

    const user: ISingUp = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.singUp$(user)
      .subscribe((response: IAuthResponse) => console.log('response reg user: ', response));

    console.log('reg in', user);
  }
}
