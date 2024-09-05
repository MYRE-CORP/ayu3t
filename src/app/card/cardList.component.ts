import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Card, Product} from "../interfaces";
import {CommonModule} from "@angular/common";
import {Observable} from "rxjs";
import {ProductService} from "../Services/product.service";
import {CardService} from "../Services/card.service";

@Component({
    selector: 'app-card',
    templateUrl: './cardList.component.html',
    styleUrl: './cardList.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule],
})
export class CardListComponent {
    private _products$: Observable<Product[]>;
    protected _cardList$: Observable<Card[]>;

    protected _products: Product[];

    constructor(private productService: ProductService, private cardService: CardService) {
    }

    ngOnInit() {
        this._products$ = this.productService.products$;
        this._cardList$ = this.cardService.cardList$;
        this._products$.subscribe((products: Product[]) => {
            this._products = products;
        })
    }

    protected _cardTrackBy(_: number, card: Card): number {
        return card.id;
    }

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
