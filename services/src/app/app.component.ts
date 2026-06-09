import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment.development';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [CookieService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'services';
  constructor(private _cookies : CookieService) {
    let is : boolean = _cookies.check('cookieName');
    _cookies.set('name', environment.apiUrl, 0.2, '/sa', 'www.gasd.com', true);
  }
}
