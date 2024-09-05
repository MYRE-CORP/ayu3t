import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Card, Product} from "../interfaces";
import {CommonModule} from "@angular/common";
import {products} from '../constants';
import {Observable} from "rxjs";
import {ProductService} from "../Services/product.service";

@Component({
    selector: 'app-card',
    templateUrl: './cardList.component.html',
    styleUrl: './cardList.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule],
})
export class CardListComponent {
    protected _cardList$: Observable<Card[]>;

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this._cardList$ = this.productService.cardList$;
    }

    protected readonly _products: Product[] = products;

    protected _cardTrackBy(_: number, card: Card): number {
        return card.id;
    }

    protected _deleteProductFromCardList(cardElement: Card): void {
        this.productService.deleteFromCard(cardElement.id);
    }

    protected _addOneToCard(cardElement: Card): void {
        this.productService.incrementProductCard(cardElement);
    }

    protected _substractOneFromCard(cardElement: Card): void {
        this.productService.substractProductCard(cardElement);
    }
}
