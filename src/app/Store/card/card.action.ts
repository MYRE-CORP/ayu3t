import {createAction, props} from '@ngrx/store';
import {Product} from "../../interfaces";

export const addProductCard = createAction(
  '[Card] Add Product To Card',
  props<{ product: Product }>()
);

export const incrementProductCard = createAction(
  '[Card] Add One Product Quantity',
  props<{ productId: number }>()
);

export const substractProductCard = createAction(
  '[Card] Subtract One Product Quantity',
  props<{ productId: number }>()
);

export const deleteProductCard = createAction(
  '[Card] Delete Product From Card',
  props<{ productId: number }>()
);