import { Component } from '@angular/core';
import { ParentComponentComponent } from "./components/parent-component/parent-component.component";

@Component({
  selector: 'app-root',
  imports: [ParentComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'communication';
}
