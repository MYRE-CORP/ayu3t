import {Injectable} from '@angular/core';
import {Card, Product} from "../interfaces";
import {BehaviorSubject, Observable} from "rxjs";
import {products} from "../constants";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    private _cardListSubject = new BehaviorSubject<Card[]>([]);
    cardList$ = this._cardListSubject.asObservable();

    private _productSubject = new BehaviorSubject<Product[]>([]);
    products$ = this._productSubject.asObservable();

    constructor() {
        this._productSubject.next(products);
    }

    public addProductCard(product: Product): void {
        const cardList = this._cardListSubject.value
        if (!cardList.some(element => element.id === product.id)) {
            const newCardList = [...cardList, {
                'id': product.id,
                'quantity': 0
            }];
            this._cardListSubject.next(newCardList);
        }
        this.incrementProductCard(product);

    }

    public incrementProductCard(product: Product): void {
        const cardList = this._cardListSubject.value;
        const newElement = cardList.map(element => {
            if (element.id === product.id) {
                return {...element, quantity: element.quantity + 1};
            }
            return element;
        })
        this._cardListSubject.next(newElement);
    }

    public getCardList(): Observable<Card[]> {
        return this.cardList$;
    }

    public getProducts(): Observable<Product[]> {
        return this.products$;
    }
}
