import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {of} from 'rxjs';
import {switchMap, withLatestFrom} from 'rxjs/operators';
import * as CardActions from './card.action';
import {selectAllCards} from './card.selectors';

@Injectable()
export class CardEffects {

  constructor(private actions$: Actions, private store: Store) {
  }

  addOrIncrementProductCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardActions.addOrIncrementProductCard),
      withLatestFrom(this.store.pipe(select(selectAllCards))),
      switchMap(([{product}]) => {
        const cards = this.store.selectSignal(selectAllCards);
        const existingCard = cards().find(element => element.id === product.id);
        if (!existingCard) {
          return [
            CardActions.addProductCard({product: product}),
            CardActions.incrementProductCard({card: existingCard})
          ]
        }
        return of(CardActions.incrementProductCard({card: existingCard}));
      })
    )
  );

  deleteOrSubtractProductCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardActions.deleteOrSubtractProductCard),
      withLatestFrom(this.store.pipe(select(selectAllCards))),
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