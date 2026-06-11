import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountServiceService } from './services/account-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'api-call';
  accountList : any[] = [];

  constructor(private readonly accountService : AccountServiceService) {}

  ngOnInit() {
    this.accountService.getAccountList().subscribe((data:any[]) => {
      this.accountList = data;
    })
  }

}
