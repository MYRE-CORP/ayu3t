import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Card } from "../../interfaces";
import { CardState } from "./card.reducer";

export const selectCardState = createFeatureSelector<CardState>("card");

export const selectAllCards = createSelector(selectCardState, (cardState) => {
  return cardState.cards;
});
