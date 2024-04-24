import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-discover-page',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './discover-page.component.html',
  styleUrl: './discover-page.component.scss'
})
export class DiscoverPageComponent {

}
