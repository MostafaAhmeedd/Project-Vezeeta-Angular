import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { BackgroundsComponent } from './components/backgrounds/backgrounds.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,BackgroundsComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project-Wuzzuf-Angular';
}
