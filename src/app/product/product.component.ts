import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {Card, Product} from '../interfaces';
import {AsyncPipe} from '@angular/common';
import {CardListComponent} from '../card/cardList.component';
import {toSignal} from '@angular/core/rxjs-interop';
import {selectAllCards} from '../Store/card/card.selectors';
import {Store} from '@ngrx/store';
import {addOrIncrementProductCard, deleteOrSubtractProductCard} from '../Store/card/card.action';
import {selectAllProducts} from '../Store/products/product.selectors';
import {HighlightDirective} from "../directives/highlight.directive";
import {DogDirective} from "../directives/dogs.directive";
import {FormComponent} from "../form/form.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    CardListComponent,
    HighlightDirective,
    DogDirective,
    FormComponent,
  ],
})

export class ProductComponent {

  protected _isValidate = false;
  private readonly _store = inject(Store);

  protected _products: Signal<Product[]> = toSignal(this._store.select(selectAllProducts));
  protected _cardList: Signal<Card[]> = toSignal(this._store.select(selectAllCards));

  protected _openFormFunction() {
    this._isValidate = true;
  }

  protected _closeFormFunction() {
    this._isValidate = false;
  }

  protected _onProductClick(product: Product): void {
    this._store.dispatch(addOrIncrementProductCard({product: product}));
  }

  protected _substractOneFromCard(cardElement: Card): void {
    this._store.dispatch(deleteOrSubtractProductCard({card: cardElement}));
  }
}
