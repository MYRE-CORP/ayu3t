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
  /*on(CardActions.addProductCard, (state, {product}) => {
    const cardExists = state.cards.some(card => card.id === product.id);
    if (cardExists) {
      return state;
    }
    return {
      ...state,
      cards: [...state.cards, {id: product.id, quantity: 0}]
    };
    this.incrementProductCard({productId: product.id});
  }),
  on(CardActions.deleteProductCard, (state, {productId}) =>
    deleteProductCard(state, productId)
  ),
  on(CardActions.incrementProductCard, (state, {productId}) => ({
    ...state,
    cards: state.cards.map(card =>
      card.id === productId ? {...card, quantity: card.quantity + 1} : card
    )
  })),
  on(CardActions.substractProductCard, (state, {productId}) => {
    //TODO: recuperer quantité du produit
    //si la quantité est égale a 1 -> suppression du produyct
    //sinon je soustrais
    const cardList = state.cards.map(element =>
      element.id === productId ? {...element, quantity: element.quantity - 1} : element,
    );
    this._cardListSubject$.next(cardList);
    const cardElement = cardList.find(element => element.id === card.id);
    if (cardElement && cardElement.quantity <= 0) {
      this.deleteFromCard(cardElement.id);
    }
  }

);

function deleteProductCard(state: CardState, productId: number): CardState {
  return {
    ...state,
    cards: state.cards.filter(card => card.id !== productId)
  }
}

function incrementProductCard(state: CardState, product: any): CardState {
  if()
  return {
    ...state,
    cards: state.cards.map(card =>
      card.id === product.id ? {...card, quantity: card.quantity + 1} : card
    )
  }
}

