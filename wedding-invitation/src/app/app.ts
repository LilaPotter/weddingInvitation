import { Component } from '@angular/core';
import { Invitation } from './invitation/invitation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Invitation],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
}
