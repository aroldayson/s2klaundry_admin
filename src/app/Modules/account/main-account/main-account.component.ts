import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-account',
  standalone: true,
  imports: [RouterOutlet,RouterModule,RouterLink],
  templateUrl: './main-account.component.html',
  styleUrl: './main-account.component.css'
})
export class MainAccountComponent {

}
