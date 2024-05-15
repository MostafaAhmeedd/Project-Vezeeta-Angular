import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarketingPartComponent } from './Components/marketing-part/marketing-part.component';
import { DownloadPartComponent } from './Components/download-part/download-part.component';
import { ChooseAndBookFromPartComponent } from './Components/choose-and-book-from-part/choose-and-book-from-part.component';
import { FooterComponent } from './Components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarketingPartComponent, DownloadPartComponent, ChooseAndBookFromPartComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project-Vezeeta-Angular';
}
