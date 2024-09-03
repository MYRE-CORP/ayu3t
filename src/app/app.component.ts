import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {CardComponent} from "./card/card.component";
import {NgForOf} from "@angular/common";
import {products} from "./constants";
import {Card, Product} from "./interfaces";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterOutlet, ProductComponent, CardComponent, NgForOf],
})
export class AppComponent {

    protected _products = products;
    protected _cardList: Card[] = [];

    protected onProductSelected(product: Product): void {
        if (!this._cardList.find(element => element.id === product.id)) {
            this._cardList = [...this._cardList, {
                'id': product.id,
                'quantity': 0
            }];
        }

        this._cardList =this._cardList.map(element => {
            if (element.id === product.id) {
                return {...element, quantity: element.quantity+1};
            }
            return element;
        })
    }

    protected productTrackBy(index: number, product: { id: number }): number {
        return product.id;
    }
}
