import { Component } from '@angular/core';
import {FormGroup,FormBuilder,Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from './confirmPassword.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder,private router:Router){};
  ngOnInit():void{
    this.registerForm = this.fb.group({
      name: ['',Validators.required],
      emailAddress: ['',[Validators.required,Validators.email]],
      userName: ['',[Validators.required,Validators.pattern("\\w+")]],
      password: ['',[Validators.required,Validators.minLength(8),Validators.pattern('.*[a-z]+.*'),Validators.pattern('.*[A-Z]+.*'),Validators.pattern('.*[^\\w,. ]+.*'),Validators.pattern('.*\\d+.*')]],
      confirmPassword: ['',Validators.required], 
    }
    );
  }
  onSubmit(){
    console.log(this.registerForm)
    this.registerForm.markAllAsTouched();
    if(this.registerForm.valid){
      this.router.navigate(['']);
    }
  }

  registerPage(){
    
    this.router.navigate(['login']);
  }


}
