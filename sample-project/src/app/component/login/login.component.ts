import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login(stdName: string, stdPassword: string): void {
    if (stdName === 'Tejas Joshi' && stdPassword === `Tejas@123`) {
      sessionStorage.setItem(`isLoggedIn`, `true`);
    } else {
      sessionStorage.setItem(`isLoggedIn`, `false`);
    }
  }
}
