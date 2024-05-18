import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-backgrounds',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './backgrounds.component.html',
  styleUrls: ['./backgrounds.component.css']
})
export class BackgroundsComponent implements OnInit {
  ngOnInit(): void {
    const backgroundImage = document.getElementById('backgroundImage') as HTMLImageElement;
    const images = [
        "assets/images/background1.jpg",
        "assets/images/background2.jpg",
        "assets/images/background3.jpg",
        "assets/images/background4.jpg"
    ];

    let currentImageIndex = 0;

    function switchBackground() {
        backgroundImage.src = images[currentImageIndex];
        backgroundImage.classList.remove('active');
        void backgroundImage.offsetWidth; 
        backgroundImage.classList.add('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    switchBackground(); 
    setInterval(switchBackground, 4000); 
  }
}
