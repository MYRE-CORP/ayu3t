import {createReducer, on} from '@ngrx/store';
import {loadProducts, loadProductsFailure, loadProductsSuccess} from './product.actions';
import {initialProductState} from './products.state';

export const productReducer = createReducer(
  initialProductState,
  on(loadProducts, state => ({...state, products: []})),
  on(loadProductsSuccess, (state, {products}) => ({
    ...state,
    products,
  })),
  on(loadProductsFailure, (state, {error}) => {
    console.error(error);
    return state;
  })
);