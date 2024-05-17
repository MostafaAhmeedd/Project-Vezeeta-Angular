import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { NewServicesComponent } from './Components/new-services/new-services.component';
import { DoctorsComponent } from './Components/doctors_page/doctors/doctors.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NewServicesComponent,DoctorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project-Vezeeta-Angular';
}
