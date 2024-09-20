import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProductsState} from "./product.reducer";

export const selectProductState = createFeatureSelector<ProductsState>("products");

export const selectAllProducts = createSelector(selectProductState, (productState) => {
  return productState.products;
});
