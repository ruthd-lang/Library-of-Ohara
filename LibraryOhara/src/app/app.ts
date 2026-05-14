import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { Header } from './Components/header/header';
import { Footer } from './Components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, MdbRippleModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LibraryOhara');
}