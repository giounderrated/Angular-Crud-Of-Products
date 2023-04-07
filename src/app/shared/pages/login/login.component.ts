import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  loginForm:FormGroup;

  constructor(private formBuilder: FormBuilder, private authService:AuthService) {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      email:['',Validators.compose([Validators.email,Validators.required])],
      password:['',Validators.required]
    });
  }

  doLogin(){
    if(!this.loginForm.valid){
      return;
    }
    let email = this.email.value;
    let password = this.password.value;
    this.authService.signIn(email,password);
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }
 
}
