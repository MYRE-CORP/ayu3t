import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Card} from "../../interfaces";

export const selectCardState = createFeatureSelector<Card[]>('card');

export const selectAllCards = createSelector(
  selectCardState,
  (cardState) => cardState
);