import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, AsyncValidatorFn} from '@angular/forms';
import { CustomValidators } from './validations/CustomValidators';
import { map, of } from 'rxjs';
import { UserService } from './services/userservice.service';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myForm: FormGroup;

  passwordMatchValidator = (control: AbstractControl): ValidationErrors | null  => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  emailExistsValidator(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl) => {
      
      if (!control.value || control.invalid) {
        return of(null); // ✅ FIX
      }
      return userService.checkEmail(control.value).pipe(
        map(exists => (exists ? { emailExists: true } : null))
      );
    };
  }

  constructor(private readonly fb: FormBuilder, private readonly userService : UserService) {
    this.myForm = this.fb.group({
      name: ['', {
        validators : [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
        asyncValidators : null,
        updateOn : 'change'
      }],
      age: [0, {
        validators : [Validators.min(1), Validators.max(100), CustomValidators.noSpace],
        asyncValidators : null,
        updateOn : 'change'
      }],
      skills: this.fb.array([]),
      email: ['', {
        validators : [Validators.required, Validators.email],
        asyncValidators : [this.emailExistsValidator(this.userService)],
        updateOn : 'change'
      }],
      password: ['', {
        validators :[Validators.required, Validators.minLength(6)],
        asyncValidators : null,
        updateOn : 'change'
      }],
      confirmPassword: ['', {
        validators : [Validators.required],
        asyncValidators : null,
        updateOn : 'change'
      }]

    }, { validators : this.passwordMatchValidator, asyncValidators : null, updateOn : 'change'});
  }
  
  get skills(): FormArray {
    return this.myForm.get('skills') as FormArray;
  }

  addSkill(skill: string) {
    this.skills.push(
      this.fb.control(skill + ' ', [Validators.required])
    );
    console.log(this.skills);
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    // this.myForm.addValidators(this.passwordMatchValidator);
    // this.myForm.updateValueAndValidity(); // ✅ forces Angular to :- re-run validation, update erros & refresh UI binding
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
    } else {
      console.log(this.myForm.value);
    }
  }

}