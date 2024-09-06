import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Card} from '../interfaces';
import {CommonModule} from '@angular/common';
import {ProductService} from '../Services/product.service';
import {CardService} from '../Services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './cardList.component.html',
  styleUrl: './cardList.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class CardListComponent {

  private readonly _productService = inject(ProductService)
  private readonly _cardService = inject(CardService)

  protected _products = this._productService.products;
  protected _cardList = this._cardService.cardList;

  protected _deleteProductFromCardList(cardElement: Card): void {
    this._cardService.deleteFromCard(cardElement.id);
  }

  protected _addOneToCard(cardElement: Card): void {
    this._cardService.incrementProductCard(cardElement);
  }

  protected _substractOneFromCard(cardElement: Card): void {
    this._cardService.substractProductCard(cardElement);
  }
}
