import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-expenditure',
  standalone: true,
  imports: [RouterLink,NgxPrintModule],
  templateUrl: './expenditure.component.html',
  styleUrl: './expenditure.component.css'
})
export class ExpenditureComponent {

}
