import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-print',
  standalone: true,
  imports: [NgxPrintModule,RouterLink],
  templateUrl: './print.component.html',
  styleUrl: './print.component.css'
})
export class PrintComponent {

}
