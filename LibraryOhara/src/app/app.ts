import { Component, OnInit, signal } from '@angular/core'; 
import { RouterModule, RouterOutlet, Router, NavigationEnd } from '@angular/router'; 
import { filter } from 'rxjs/operators';
import * as AOS from 'aos'; 

import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { Header } from './Components/header/header';
import { Footer } from './Components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, MdbRippleModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit { 
  protected readonly title = signal('LibraryOhara');
  
  constructor(private router: Router) {}

  ngOnInit() {
    AOS.init({
      duration: 800, 
      once: true
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      AOS.refresh();
    });
  }
}