import { Component } from '@angular/core';

@Component({
  selector: 'lib-fancy-button',
  standalone: true,
  imports: [],
  templateUrl: './fancy-button.component.html',
  styleUrl: './fancy-button.component.css'
})
export class FancyButtonComponent {
  fancy() {
    console.log('Method not implemented.');
  }

}
