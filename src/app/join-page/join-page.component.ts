import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-join-page',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './join-page.component.html',
  styleUrl: './join-page.component.scss'
})
export class JoinPageComponent {

}
