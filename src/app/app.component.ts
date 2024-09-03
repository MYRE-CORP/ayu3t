import {ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent} from "./product/product.component";
import { CardComponent} from "./card/card.component";
import {NgForOf} from "@angular/common";
import {products} from "./constants";
import {Product} from "./interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterOutlet, ProductComponent, CardComponent, NgForOf],
})
export class AppComponent {

  protected _products = products;
  protected _cardList: Product[] = [];

  protected onProductSelected(product: Product): void {
    if (product.quantity === 0) {
      this._cardList.push(product);
    }
    product.quantity ++;
  }

  protected productTrackBy(index: number, product: { name: any }): void {
    return product.name;
  }
}
