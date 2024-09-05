import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../Services/product.service';
import { Card, Product } from '../interfaces';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { CardService } from '../Services/card.service';

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
export class ProductComponent implements OnInit {
  protected _products$: Observable<Product[]>;
  protected _cardList$: Observable<Card[]>;

  constructor(
    private productService: ProductService,
    private cardService: CardService,
  ) {
  }

  ngOnInit() {
    this._products$ = this.productService.products$;
    this._cardList$ = this.cardService.cardList$;
  }

  protected _onProductClick(product: Product): void {
    this.cardService.addProductCard(product);
  }

  protected _addOneToCard(cardElement: Card): void {
    this.cardService.incrementProductCard(cardElement);
  }

  protected _substractOneFromCard(cardElement: Card): void {
    this.cardService.substractProductCard(cardElement);
  }

  protected _productTrackBy(_: number, product: { id: number }): number {
    return product.id;
  }

  protected _cardTrackBy(_: number, card: Card): number {
    return card.id;
  }
}
