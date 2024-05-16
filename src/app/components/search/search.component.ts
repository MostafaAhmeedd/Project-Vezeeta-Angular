import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  isSearch: boolean = true; // Initialize isSearch to true
  switchSearch(x: boolean) {
    this.isSearch = x;
  }
  scroll() {
    window.scrollTo(0, document.body.scrollHeight);

  }

}
