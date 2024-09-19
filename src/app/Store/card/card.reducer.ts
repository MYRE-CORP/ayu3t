import {createReducer, on} from '@ngrx/store';
import {Card} from '../../interfaces';
import * as CardActions from './card.action';

export interface CardState {
  cards: Card[];
}

export const initialState: CardState = {
  cards: []
};

export const cardReducer = createReducer(
  initialState,

  on(CardActions.addProductCard, (state, {product}) => {
    return {
      ...state,
      cards: [...state.cards, {id: product.id, quantity: 0}]
    };
  }),

  on(CardActions.deleteProductCard, (state, {card}) => {
      return {
        ...state,
        cards: state.cards.filter(element => element.id !== card.id)
      }
    }
  ),

  on(CardActions.incrementProductCard, (state, {card}) => ({
    ...state,
    cards: state.cards.map(element =>
      element.id === card.id ? {...element, quantity: element.quantity + 1} : element
    )
  })),

  on(CardActions.substractProductCard, (state, {card}) => {
    const cardList = state.cards.map(element =>
      element.id === card.id ? {...element, quantity: element.quantity - 1} : element,
    );
    return {
      ...state,
      cards: cardList
    };
  })
)

