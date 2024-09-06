import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {HelloWordComponent} from "./HelloWord/hello-word/hello-word.component";

export const routes: Routes = [
  {
    path: 'hello-world',
    component: HelloWordComponent
  },
  {
    path: 'products',
    component: ProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
