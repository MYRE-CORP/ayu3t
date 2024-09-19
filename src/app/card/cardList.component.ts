import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {Card, Product} from '../interfaces';
import {Store} from "@ngrx/store";
import {CommonModule} from '@angular/common';
import {selectAllCards} from '../Store/card/card.selectors';
import {addOrIncrementProductCard, deleteOrSubtractProductCard, deleteProductCard} from "../Store/card/card.action";
import {toSignal} from "@angular/core/rxjs-interop";
import {selectAllProducts} from "../Store/products/product.selectors";
import {HighlightDirective} from "../directives/highlight.directive";
import {DogDirective} from "../directives/dogs.directive";

@Component({
  selector: 'app-card',
  templateUrl: './cardList.component.html',
  styleUrl: './cardList.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, HighlightDirective, DogDirective],
})
export class CardListComponent {

  private readonly _store = inject(Store);

  protected _cardList: Signal<Card[]> = this._store.selectSignal(selectAllCards);
  protected _products: Signal<Product[]> = toSignal(this._store.select(selectAllProducts));

  protected _deleteProductFromCardList(cardElement: Card): void {
    this._store.dispatch(deleteProductCard({card: cardElement}));
  }

  protected _addOneToCard(cardElement: Product): void {
    this._store.dispatch(addOrIncrementProductCard({product: cardElement}));
  }

  protected _substractOneFromCard(cardElement: Card): void {
    this._store.dispatch(deleteOrSubtractProductCard({card: cardElement}));
  }
}
