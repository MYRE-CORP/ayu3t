import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {CardListComponent} from "./card/card.component";
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
        const card = this._cardList.find(element => element.id === product.id);
        if (!card) {
            this.addProductCard(product);
            this.incrementProductCard(product);
        } else {
            this.incrementProductCard(product);
        }
    }

    protected productTrackBy(index: number, product: { id: number }): number {
        return product.id;
    }

    private addProductCard(product: Product): void {
        this._cardList = [...this._cardList, {
            'id': product.id,
            'quantity': 0
        }];
    }

    private incrementProductCard(product: Product): void {
        this._cardList =this._cardList.map(element => {
            if (element.id === product.id) {
                return {...element, quantity: element.quantity+1};
            }
            return element;
        })
    }
}
