import {createAction, props} from '@ngrx/store';
import {Card, Product} from "../../interfaces";

export const addProductCard = createAction(
  '[Card] Add Product To Card',
  props<{ product: Product }>()
);

export const incrementProductCard = createAction(
  '[Card] Add One Product Quantity',
  props<{ card: Card }>()
);

export const substractProductCard = createAction(
  '[Card] Subtract One Product Quantity',
  props<{ card: Card }>()
);

export const deleteProductCard = createAction(
  '[Card] Delete Product From Card',
  props<{ card: Card }>()
);

export const addOrIncrementProductCard = createAction(
  '[Card] Add Or Increment Product Card',
  props<{ product: Product }>()
);

export const deleteOrSubtractProductCard = createAction(
  '[Card] Delete Or Subtract Product Card',
  props<{ card: Card }>()
);