import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {CardListComponent} from "./card/cardList.component";
import {NgForOf} from "@angular/common";
import {products} from "./constants";
import {Card, Product} from "./interfaces";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterOutlet, ProductComponent, CardListComponent, NgForOf],
})
export class AppComponent {

    protected _products = products;
    protected _cardList: Card[] = [];

    protected onProductSelected(product: Product): void {
        if (!this._cardList.some(element => element.id === product.id)) {
            this.addProductCard(product);
        }
        this.incrementProductCard(product);
    }

    protected productTrackBy(index: number, product: { id: number }): number {
        return product.id;
    }

    private addProductCard(product: Product): Card {
        this._cardList = [...this._cardList, {
            'id': product.id,
            'quantity': 0
        }];
        return this._cardList.at(-1);
    }

    private incrementProductCard(product: Product): void {
        this._cardList = this._cardList.map(element => {
            if (element.id === product.id) {
                return {...element, quantity: element.quantity + 1};
            }
            return element;
        })
    }
}
