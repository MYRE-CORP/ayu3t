import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
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

    private readonly productService = inject(ProductService)
    private readonly cardService = inject(CardService)
    private readonly _destroyRef = inject(DestroyRef)

    protected _products = this.productService.products;
    protected _cardList = this.cardService.cardList$;

    protected _deleteProductFromCardList(cardElement: Card): void {
        this.cardService.deleteFromCard(cardElement.id);
    }

    protected _addOneToCard(cardElement: Card): void {
        this.cardService.incrementProductCard(cardElement);
    }

    protected _substractOneFromCard(cardElement: Card): void {
        this.cardService.substractProductCard(cardElement);
    }
}
