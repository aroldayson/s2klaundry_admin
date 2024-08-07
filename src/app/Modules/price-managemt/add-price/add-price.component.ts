import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-price',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './add-price.component.html',
  styleUrl: './add-price.component.css'
})
export class AddPriceComponent {

  save(){
    Swal.fire({
      title: "Are you sure to add categoty?",
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

}
