import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {Card, Product} from '../interfaces';
import {AsyncPipe} from '@angular/common';
import {CardListComponent} from "../card/cardList.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {selectAllCards} from "../Store/card/card.selectors";
import {Store} from "@ngrx/store";
import {addOrIncrementProductCard, substractProductCard} from "../Store/card/card.action";
import {selectAllProducts} from "../Store/products/product.selectors";

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

  protected _products: Signal<Product[]> = toSignal(this._store.select(selectAllProducts));
  protected _cardList: Signal<Card[]> = toSignal(this._store.select(selectAllCards));

  protected _onProductClick(product: Product): void {
    this._store.dispatch(addOrIncrementProductCard({product: product}));
  }

  protected _substractOneFromCard(cardElement: Card): void {
    this._store.dispatch(substractProductCard({card: cardElement}));
  }
}
