import { Component } from '@angular/core';
import { FancyButtonComponent } from 'features';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FancyButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'admin-app';
}
