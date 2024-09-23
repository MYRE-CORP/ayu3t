import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {Card} from "../interfaces";
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
  protected readonly _lastName: string;
  protected readonly _firstName: string;
  protected readonly _card: Card[];

  private readonly _store = inject(Store);
  private readonly _router = inject(Router);

  protected readonly _products = toSignal(this._store.select(selectAllProducts));

  constructor() {
    const navigation = this._router.getCurrentNavigation();
    const state = navigation?.extras?.state as { lastName: string, firstName: string, card: Card[], fromForm: boolean };
    if (state && state.lastName && state.firstName && state.card && state.fromForm) {
      this._lastName = state.lastName;
      this._firstName = state.firstName;
      this._card = state.card;
      this.canAccess = state.fromForm
    }
    if (!this.canAccess) {
      this._router.navigate(['/products']);
    }
  }
}
