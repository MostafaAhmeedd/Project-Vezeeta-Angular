import { Component ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import Swiper from 'swiper';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class ContainerComponent {

}
