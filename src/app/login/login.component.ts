import { Component} from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder,private router:Router){};
  ngOnInit():void{
    this.loginForm = this.fb.group({
      emailAddress: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
    });
  }

  onSubmit(){
    this.loginForm.markAllAsTouched();
    if(this.loginForm.valid){
      this.router.navigate(['']);
    }
  }

  registerPage(){
    this.router.navigate(['register']);
  }

}
