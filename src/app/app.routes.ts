import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    resolve
    loadComponent: () =>
      import('./product/product.component').then(
        (m) => m.ProductComponent
      ),
  },
  {
    path: 'hello-world',
    loadComponent: () =>
      import('./HelloWord/hello-word/hello-word.component').then(
        (m) => m.HelloWordComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
