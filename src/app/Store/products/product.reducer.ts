import {createReducer, on} from '@ngrx/store';
import {loadProductsSuccess} from "./product.action";
import {Product} from "../../interfaces";

export interface ProductsState {
  products: Product[];
}

export const initialState: ProductsState = {
  products: []
};

export const productsReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, {products}) => ({
    ...state,
    products: products
  }))
);