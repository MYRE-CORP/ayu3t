import {Product} from '../../interfaces';

export interface ProductsState {
  products: Product[];
}

export const initialProductState: ProductsState = {
  products: []
};