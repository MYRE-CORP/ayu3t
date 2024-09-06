import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ProductService} from '../Services/product.service';
import {Card, Product} from '../interfaces';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {CardService} from '../Services/card.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf,
  ],
})

export class ProductComponent {

  private readonly _productService = inject(ProductService)
  private readonly _cardService = inject(CardService)

  protected _products = this._productService.products;
  protected _cardList = this._cardService.cardList;

  protected _onProductClick(product: Product): void {
    this._cardService.addProductCard(product);
  }

  protected _addOneToCard(cardElement: Card): void {
    this._cardService.incrementProductCard(cardElement);
  }

  protected _substractOneFromCard(cardElement: Card): void {
    this._cardService.substractProductCard(cardElement);
  }
}
