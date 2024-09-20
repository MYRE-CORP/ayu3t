import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loadProducts, loadProductsSuccess} from "./product.action";
import {map} from 'rxjs/operators';
import {products} from "../../constants";

@Injectable()
export class ProductsEffects {
  public loadProducts$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadProducts),
      map(() => loadProductsSuccess(products))
    )
  );

  constructor(private readonly _actions$: Actions) {
  }
}