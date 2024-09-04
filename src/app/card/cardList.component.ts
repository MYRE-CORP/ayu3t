import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Card} from "../interfaces";
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
    cardList$: Observable<Card[]>;

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.cardList$ = this.productService.getCardList();
    }

    protected _products = products;

    protected cardTrackBy(_: number, card: Card): number {
        return card.id;
    }
}
