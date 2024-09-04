import {Injectable} from '@angular/core';
import {Card, Product} from "../interfaces";
import {BehaviorSubject, Observable} from "rxjs";
import {products} from "../constants";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    private cardListSubject = new BehaviorSubject<Card[]>([]);
    cardList$ = this.cardListSubject.asObservable();

    private productSubject = new BehaviorSubject<Product[]>([]);
    products$ = this.productSubject.asObservable();

    constructor() {
        this.productSubject.next(products);
    }

    public addProductCard(product: Product): void {
        const cardList = this.cardListSubject.value
        if (!cardList.some(element => element.id === product.id)) {
            const newCardList = [...cardList, {
                'id': product.id,
                'quantity': 0
            }];
            this.cardListSubject.next(newCardList);
        }
        this.incrementProductCard(product);

    }

    public incrementProductCard(product: Product): void {
        const cardList = this.cardListSubject.value;
        const newElement = cardList.map(element => {
            if (element.id === product.id) {
                return {...element, quantity: element.quantity + 1};
            }
            return element;
        })
        this.cardListSubject.next(newElement);
    }

    getCardList(): Observable<Card[]> {
        return this.cardList$;
    }

    getProducts(): Observable<Product[]> {
        return this.products$;
    }
}
