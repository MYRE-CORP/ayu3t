import {ApplicationConfig} from "@angular/core";
import {provideRouter} from "@angular/router";

import {routes} from "./app.routes";
import {Action, createReducer, provideStore} from "@ngrx/store";
import {cardReducer} from './Store/card/card.reducer';
import {productsReducer} from "./Store/products/product.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      card: cardReducer,
      products: productsReducer
    }),
  ],
};

export interface CounterState {
  count: number;
}

export const initialCounterState: CounterState = {
  count: 0,
};

const _counterReducer = createReducer(initialCounterState);

export function counterReducer(
  state: CounterState | undefined,
  action: Action,
) {
  return _counterReducer(state, action);
}
