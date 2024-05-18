import { Component } from '@angular/core';
import { BackgroundsComponent } from '../backgrounds/backgrounds.component';
import { SearchComponent } from '../search/search.component';
import { NewServicesComponent } from '../new-services/new-services.component';
import { ContainerComponent } from '../container/container.component';
import { ContainerOfferComponent } from '../container-offer/container-offer.component';
import { MarketingPartComponent } from '../marketing-part/marketing-part.component';
import { DownloadPartComponent } from '../download-part/download-part.component';
import { ChooseAndBookFromPartComponent } from '../choose-and-book-from-part/choose-and-book-from-part.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BackgroundsComponent, SearchComponent, NewServicesComponent, ContainerComponent, ContainerOfferComponent, MarketingPartComponent, DownloadPartComponent, ChooseAndBookFromPartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
