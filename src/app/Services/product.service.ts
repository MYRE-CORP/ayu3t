import {Injectable} from '@angular/core';
import {Card, Product} from "../interfaces";
import {BehaviorSubject, Observable} from "rxjs";
import {products} from "../constants";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    private readonly _cardListSubject = new BehaviorSubject<Card[]>([]);

    private readonly _productSubject = new BehaviorSubject<Product[]>([]);

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

    public get cardList$(): Observable<Card[]> {
        return this._cardListSubject.asObservable();
    }

    public get products$(): Observable<Product[]> {
        return this._productSubject.asObservable();
    }
}
