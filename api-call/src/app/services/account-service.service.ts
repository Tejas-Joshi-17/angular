import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private readonly httpClient : HttpClient) { }

  getAccountList() {
    return this.httpClient.get<any[]>('http://localhost:3000/account');
  }
  
}
