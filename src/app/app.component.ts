import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cart';
}
