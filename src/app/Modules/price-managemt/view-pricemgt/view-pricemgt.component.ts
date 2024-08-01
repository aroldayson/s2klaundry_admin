import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view-pricemgt',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './view-pricemgt.component.html',
  styleUrl: './view-pricemgt.component.css'
})
export class ViewPricemgtComponent {

}
