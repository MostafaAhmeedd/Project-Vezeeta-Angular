import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CardOfferComponent } from '../card-offer/card-offer.component';

@Component({
  selector: 'app-container-offer',
  standalone: true,
  imports: [CardOfferComponent],
  templateUrl: './container-offer.component.html',
  styleUrl: './container-offer.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ContainerOfferComponent {

}
