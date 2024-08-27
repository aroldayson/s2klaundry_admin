import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-dicrepancy',
  standalone: true,
  imports: [RouterLink,NgxPrintModule],
  templateUrl: './dicrepancy.component.html',
  styleUrl: './dicrepancy.component.css'
})
export class DicrepancyComponent {

}
