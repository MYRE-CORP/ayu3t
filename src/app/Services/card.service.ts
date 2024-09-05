import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Card, Product} from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class CardService {

    private readonly _cardListSubject$ = new BehaviorSubject<Card[]>([]);

    public addProductCard(product: Product): void {
        const cardList = this._cardListSubject$.value
        if (!cardList.some(element => element.id === product.id)) {
            this._cardListSubject$.next([...cardList, {
                'id': product.id,
                'quantity': 0
            }
            ]);
        }
        this.incrementProductCard(product);

    }

    public substractProductCard(card: Card): void {
        const cardList = this._cardListSubject$.value.map(element =>
            element.id === card.id ? {...element, quantity: element.quantity - 1} : element
        );
        this._cardListSubject$.next(cardList);
        const cardElement = cardList.find(element => element.id === card.id);
        if (cardElement && cardElement.quantity <= 0) {
            this.deleteFromCard(cardElement.id);
        }
    }

    public incrementProductCard(product: any): void {
        const cardList = this._cardListSubject$.value;
        this._cardListSubject$.next(
            cardList.map(element => {
                if (element.id === product.id) {
                    return {...element, quantity: element.quantity + 1};
                }
                return element;
            })
        );
    }

    public deleteFromCard(id: number): void {
        const currentCard = this._cardListSubject$.value;
        this._cardListSubject$.next(currentCard.filter(product => product.id !== id));
    }

    public get cardList$(): Observable<Card[]> {
        return this._cardListSubject$.asObservable();
    }
}
