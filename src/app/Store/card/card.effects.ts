import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {of} from 'rxjs';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import * as CardActions from './card.action';
import {selectAllCards} from './card.selectors';

@Injectable()
export class CardEffects {

  constructor(private readonly _actions$: Actions, private readonly _store: Store) {
  }

  public addOrIncrementProductCard$ = createEffect(() =>
    this._actions$.pipe(
      ofType(CardActions.addOrIncrementProductCard),
      withLatestFrom(this._store.pipe(select(selectAllCards))),
      map(([{product}]) => {
        const cards = this._store.selectSignal(selectAllCards);
        const cardsArray = cards();
        const existingCard = cardsArray.find(element => element.id === product.id);
        if (!existingCard) {
          return (CardActions.addProductCard({product}));
        } else {
          return (CardActions.incrementProductCard({card: existingCard}));
        }
      })
    )
  );

  public deleteOrSubtractProductCard$ = createEffect(() =>
    this._actions$.pipe(
      ofType(CardActions.deleteOrSubtractProductCard),
      withLatestFrom(this._store.pipe(select(selectAllCards))),
      switchMap(([{card}]) => {
        if (card.quantity <= 1) {
          return [
            CardActions.deleteProductCard({card: card}),
            CardActions.substractProductCard({card: card})
          ]
        } else {
          return of(CardActions.substractProductCard({card: card}));
        }
      })
    )
  );

}