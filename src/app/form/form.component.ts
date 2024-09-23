import {ChangeDetectionStrategy, Component, inject, output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {selectAllCards} from "../Store/card/card.selectors";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {removeCard} from "../Store/card/card.action";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ReactiveFormsModule
  ]
})
export class FormComponent {

  private readonly _store = inject(Store);
  private readonly _fb = inject(FormBuilder);
  private readonly _router = inject(Router);

  protected readonly _cardForm: FormGroup;
  protected _closeForm = output();

  constructor() {
    this._cardForm = this._fb.group({
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]]
    });
  }

  protected _closeFormFunction(): void {
    this._closeForm.emit();
  }

  protected _onSubmit(): void {
    if (!this._cardForm.valid) {
      return;
    } else {
      const lastName = this._cardForm.get('lastName')?.value;
      const firstName = this._cardForm.get('firstName')?.value;
      const card = this._store.selectSignal(selectAllCards)();
      const fromForm = true;

      this._store.dispatch(removeCard());

      this._router.navigate(['/recap-card'], {
        state: {lastName, firstName, card, fromForm}
      });
    }
  }
}
