import {createAction, props} from '@ngrx/store';
import {Product} from '../../interfaces';

export const loadProducts = createAction('[Products] Load dogs');

export const loadProductsSuccess = createAction(
  '[Products] Load dogs success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load dogs failure',
  props<{ error: string }>()
);