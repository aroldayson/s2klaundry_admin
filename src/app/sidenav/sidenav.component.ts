import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink,RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  isOpen = false;
  open = false;
  openNav() {
    this.isOpen = true;
  }
  closeNav() {
    this.isOpen = false;
  }
  toggleNav() {
    this.isOpen = !this.isOpen;
  }

  activeLink: string = 'home';  // Default active link

  setActiveLink(link: string): void {
    this.activeLink = link;  // Set the active link
  }
}
