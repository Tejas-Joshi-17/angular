import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

export class CustomValidators {

  // 🔹 Password Match Validator
  static passwordMatch(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const group = control as FormGroup;

      const password = group.get('password')?.value;
      const confirmPassword = group.get('confirmPassword')?.value;

      return password === confirmPassword ? null : { passwordMismatch: true };
    };
  }

  // 🔹 No Space Validator
  static noSpace(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value?.includes(' ') ? { noSpace: true } : null;
    };
  }
}