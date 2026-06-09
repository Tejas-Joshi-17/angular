import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Mock existing emails
  private readonly existingEmails = ['test@gmail.com', 'admin@gmail.com'];

  checkEmail(email: string): Observable<boolean> {
    const exists = this.existingEmails.includes(email);
    return of(exists).pipe(delay(5000)); // simulate API delay
  }
}
