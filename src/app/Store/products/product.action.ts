import {createAction} from '@ngrx/store';
import {Product} from "../../interfaces";

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  (products: Product[]) => ({products})
);