import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Opendata } from './opendata/opendata';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Opendata],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Eneko');
}
