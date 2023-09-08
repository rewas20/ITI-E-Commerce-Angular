import {AbstractControl, FormGroup} from '@angular/forms';

export function ConfirmPasswordValidator(control: AbstractControl) {
    let regiserForm = control.parent ;
    console.log(regiserForm );
    if(control.get('password')?.valid){

    }
    if (control.get(['password'])?.value != control.get('confirmPassword')?.value) {
      return {"matching_password":"Doesn't matche"};
    }
    return null;
  }