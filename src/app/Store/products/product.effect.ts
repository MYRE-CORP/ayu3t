import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loadProducts, loadProductsSuccess} from "./product.action";
import {map} from 'rxjs/operators';
import {products} from "../../constants";

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      map(() => loadProductsSuccess(products))
    )
  );

  constructor(private actions$: Actions) {
  }
}