import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent} from "./product/product.component";
import {NgForOf} from "@angular/common";
import {products} from "./constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, NgForOf],
})
export class AppComponent {

  protected _products = products;

  protected onProductSelected(): void {
    alert('Ce chien est cliqué');
  }

  protected productTrackBy(index: number, product: { name: any }): void {
    return product.name;
  }
}
