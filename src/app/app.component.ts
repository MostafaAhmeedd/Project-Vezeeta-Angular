import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewServicesComponent } from './Components/new-services/new-services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project-Vezeeta-Angular';
}
