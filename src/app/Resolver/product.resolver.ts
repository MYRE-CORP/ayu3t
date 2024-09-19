import {ResolveFn} from "@angular/router";
import {loadProducts} from "../Store/products/product.action";
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";

export const productResolver: ResolveFn<boolean> = (): boolean => {
  const store = inject(Store);

  store.dispatch(loadProducts());

  return true;
}