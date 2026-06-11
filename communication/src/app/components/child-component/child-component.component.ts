import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.component.html'
})
export class ChildComponentComponent {

  @Input() name!: string;
  @Input() age!: number;

}
