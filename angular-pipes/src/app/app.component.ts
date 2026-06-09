import { CurrencyPipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReverseSentencePipe } from './pipes/reverse-sentence.pipe';
import { AuthServiceService } from './services/auth-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, CurrencyPipe, JsonPipe, ReverseSentencePipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-pipes';
  companyName: string = "Sarvatra Technologies";
  greetMsg: string = "Welcome Tejas Joshi";
  price: number = 82;
  studentData: any = { id: 1, name: `Tejas Joshi` }
  userName : string = "";
  firstName : string = '';

  constructor(private readonly authService : AuthServiceService) {
    console.log(`App Component Loaded`)
    this.title = authService.message;
  }

  checkIsAuthenticated() : void {
    this.userName = this.authService.message;
  }
}
