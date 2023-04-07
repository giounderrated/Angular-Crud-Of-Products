import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../../Validators/CustomValidator';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(private formBuilder: FormBuilder) {}

  registerForm = this.formBuilder.group(
    {
      username: ['', Validators.minLength(5)],
      email: ['', Validators.email],
      // Minimum eight characters, at least one letter, one number and one special character:
      password: [
        '',
        Validators.pattern('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$'),
      ],
      repeatPassword: ['', Validators.required],
    },
    CustomValidators.MatchValidator('password', 'repeatPassword')
  );

  preview: any;

  save() {
    this.preview = this.registerForm.value;
    if (!this.registerForm.valid) return;
    console.log(this.username.value);
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get passwordMatchError() {
    // return (
    //   this.registerForm.getError('mismatch') &&
    //   this.registerForm.get('repeatPassword')?.touched
    // );
    let password =this.registerForm.get('password').value;
    let repeatPassword = this.registerForm.get('repeatPassword').value;
    return password==repeatPassword;
  }
}
