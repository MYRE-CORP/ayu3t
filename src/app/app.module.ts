import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {metaReducers: []}),
    // StoreModule.forFeature('card', cardReducer),
    AppComponent,
  ],
  providers: [],
})
export class AppModule {
}