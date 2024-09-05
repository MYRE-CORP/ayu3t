import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Card, Product} from '../interfaces';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs';
import {ProductService} from '../Services/product.service';
import {CardService} from '../Services/card.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-card',
    templateUrl: './cardList.component.html',
    styleUrl: './cardList.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule],
})
export class CardListComponent implements OnInit {

    private readonly productService = inject(ProductService)
    private readonly cardService = inject(CardService)
    private readonly _destroyRef = inject(DestroyRef)

    private _products$: Observable<Product[]>;
    protected _cardList$: Observable<Card[]>;

    protected _products: Product[];

    ngOnInit() {
        this._products$ = this.productService.products$;
        this._cardList$ = this.cardService.cardList$;

        this._products$.pipe(
            takeUntilDestroyed(this._destroyRef),
        )
            .subscribe((products: Product[]) => {
                this._products = products;
            });
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
