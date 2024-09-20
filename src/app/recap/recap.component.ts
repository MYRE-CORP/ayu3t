import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {Router} from "@angular/router";
import {Card, Product} from "../interfaces";
import {DogDirective} from "../directives/dogs.directive";
import {HighlightDirective} from "../directives/highlight.directive";
import {toSignal} from "@angular/core/rxjs-interop";
import {selectAllProducts} from "../Store/products/product.selectors";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrl: './recap.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DogDirective,
    HighlightDirective
  ],

})
export class RecapComponent {

  public canAccess: boolean = false;
  protected _lastName: string;
  protected _firstName: string;
  protected _card: Card[];

  private readonly _store = inject(Store);

  protected _products: Signal<Product[]> = toSignal(this._store.select(selectAllProducts));

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { lastName: string, firstName: string, card: Card[], fromForm: boolean };
    if (state && state.lastName && state.firstName && state.card && state.fromForm) {
      this._lastName = state.lastName;
      this._firstName = state.firstName;
      this._card = state.card;
      this.canAccess = state.fromForm
    }
    if (!this.canAccess) {
      this.router.navigate(['/products']);
    }
  }
}
