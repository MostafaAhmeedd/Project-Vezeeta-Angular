import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './Components/container/container.component';
import { ContainerOfferComponent } from './Components/container-offer/container-offer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent,ContainerOfferComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  ,  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'swipetask';
}
