import { Component } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponentComponent],
  templateUrl: './parent-component.component.html'
})
export class ParentComponentComponent {

  childName : string = `Tejas Joshi`;
  childAge : number = 24;
}


