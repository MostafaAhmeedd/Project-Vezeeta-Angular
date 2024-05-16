import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

import { SearchComponent } from './Components/search/search.component';
import { BackgroundsComponent } from './Components/backgrounds/backgrounds.component';
import { NewServicesComponent } from './Components/new-services/new-services.component';


import { MarketingPartComponent } from './Components/marketing-part/marketing-part.component';
import { DownloadPartComponent } from './Components/download-part/download-part.component';
import { ChooseAndBookFromPartComponent } from './Components/choose-and-book-from-part/choose-and-book-from-part.component';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BackgroundsComponent, SearchComponent, NewServicesComponent, MarketingPartComponent, DownloadPartComponent, ChooseAndBookFromPartComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Project-Vezeeta-Angular';
}
