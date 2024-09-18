import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {ProductService} from '../Services/product.service';
import {Card, Product} from '../interfaces';
import {AsyncPipe} from '@angular/common';
import {CardListComponent} from "../card/cardList.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {selectAllCards} from "../Store/card/card.selectors";
import {Store} from "@ngrx/store";
import {addProductCard, incrementProductCard, substractProductCard} from "../Store/card/card.action";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    CardListComponent
  ],
})

export class ProductComponent {

  private readonly _store = inject(Store);

  private readonly _productService = inject(ProductService)
  // private readonly _cardService = inject(CardService)

  protected readonly _products = this._productService.products;
  protected _cardList: Signal<Card[]> = toSignal(this._store.select(selectAllCards));

  protected _onProductClick(product: Product): void {
    this._store.dispatch(addProductCard({product: product}));
  }

  protected _addOneToCard(cardElement: Card): void {
    this._store.dispatch(incrementProductCard({productId: cardElement.id}));
  }

  protected _substractOneFromCard(cardElement: Card): void {
    this._store.dispatch(substractProductCard({productId: cardElement.id}));
  }
}
