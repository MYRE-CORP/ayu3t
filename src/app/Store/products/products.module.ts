// src/app/store/products/products.module.ts
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {productsReducer} from './products.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('products', productsReducer)
  ]
})
export class ProductsModule {
}