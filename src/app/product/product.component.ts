import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ProductService} from "../Services/product.service";
import {Card, Product} from "../interfaces";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf,
        NgIf
    ]
})
export class ProductComponent {
    protected _products$: Observable<Product[]>;
    protected _cardList$: Observable<Card[]>;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this._products$ = this.productService.products$;
        this._cardList$ = this.productService.cardList$;
    }

    protected _onProductClick(product: Product): void {
        this.productService.addProductCard(product);
    }

    protected _addOneToCard(cardElement: Card): void {
        this.productService.incrementProductCard(cardElement);
    }

    protected _substractOneFromCard(cardElement: Card): void {
        this.productService.substractProductCard(cardElement);
    }

    protected _productTrackBy(index: number, product: { id: number }): number {
        return product.id;
    }

    protected _cardTrackBy(_: number, card: Card): number {
        return card.id;
    }
}
