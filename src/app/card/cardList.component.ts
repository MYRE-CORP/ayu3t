import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {Card, Product} from '../interfaces';
import {Store} from "@ngrx/store";
import {CommonModule} from '@angular/common';
import {ProductService} from '../Services/product.service';
import {CardService} from '../Services/card.service';
import {selectAllCards} from '../Store/card/card.selectors';
import {addOrIncrementProductCard, deleteProductCard, substractProductCard} from "../Store/card/card.action";

@Component({
  selector: 'app-card',
  templateUrl: './cardList.component.html',
  styleUrl: './cardList.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class CardListComponent {

  private readonly _store = inject(Store);

  protected _cardList: Signal<Card[]> = this._store.selectSignal(selectAllCards);

  private readonly _productService = inject(ProductService)
  private readonly _cardService = inject(CardService)

  protected _products = this._productService.products;

  protected _deleteProductFromCardList(cardElement: Card): void {
    this._store.dispatch(deleteProductCard({card: cardElement}));
  }

  protected _addOneToCard(cardElement: Product): void {
    this._store.dispatch(addOrIncrementProductCard({product: cardElement}));
  }

  protected _substractOneFromCard(cardElement: Card): void {
    this._store.dispatch(substractProductCard({card: cardElement}));
  }
}
