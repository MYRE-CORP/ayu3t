import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent} from "./product/product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-exercices';

  products = [
    {
      name: 'product 1',
      image: 'link',
      price: 106
    },
    {
      name: 'product 2',
      image: 'link',
      price: 33
    },
    {
      name: 'product 3',
      image: 'link',
      price: 322
    }
  ]

  onProductSelected() {
    alert('Ce produit est cliqué')
  }
}
