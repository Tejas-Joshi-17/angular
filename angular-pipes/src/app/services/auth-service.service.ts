import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  message : string = "User authenticated Successfully !!!"

  constructor() { 
    console.log(`auth-service created`)
  }

  isAuthorized() : string {
    return this.message;
  }
}
