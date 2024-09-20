import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from '@ngrx/store';
import {cardReducer} from './Store/card/card.reducer';
import {productsReducer} from './Store/products/product.reducer';
import {provideEffects} from '@ngrx/effects';
import {ProductsEffects} from './Store/products/product.effect';
import {CardEffects} from "./Store/card/card.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      card: cardReducer,
      products: productsReducer,
    }),
    provideEffects([ProductsEffects, CardEffects]),
  ],
};

