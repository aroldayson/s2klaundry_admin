import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NgxPrintModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {

}
