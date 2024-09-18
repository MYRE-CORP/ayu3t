import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {Card} from '../interfaces';
import {Store} from "@ngrx/store";
import {CommonModule} from '@angular/common';
import {ProductService} from '../Services/product.service';
import {CardService} from '../Services/card.service';
import {selectAllCards} from '../Store/card/card.selectors';
import {deleteProductCard, incrementProductCard, substractProductCard} from "../Store/card/card.action";
import {toSignal} from "@angular/core/rxjs-interop";

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

  protected _cardList: Signal<Card[]> = toSignal(this._store.select(selectAllCards));

  private readonly _productService = inject(ProductService)
  private readonly _cardService = inject(CardService)

  protected _products = this._productService.products;

  // protected _cardList = this._cardService.cardList;

  protected _deleteProductFromCardList(cardElement: Card): void {
    this._store.dispatch(deleteProductCard({productId: cardElement.id}));
  }

  protected _addOneToCard(cardElement: Card): void {
    this._store.dispatch(incrementProductCard({productId: cardElement.id}));
  }

  protected _substractOneFromCard(cardElement: Card): void {
    this._store.dispatch(substractProductCard({productId: cardElement.id}));
  }
}
