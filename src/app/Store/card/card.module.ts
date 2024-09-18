import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {cardReducer} from './card.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('card', cardReducer)
  ],
})
export class CardStoreModule {
}