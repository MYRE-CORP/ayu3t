import {ChangeDetectionStrategy, Component, inject, output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {selectAllCards} from "../Store/card/card.selectors";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

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
  cardForm: FormGroup;
  protected _closeForm = output();

  constructor(private fb: FormBuilder, private router: Router) {
    this.cardForm = this.fb.group({
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]]
    });
  }

  protected _closeFormFunction(): void {
    this._closeForm.emit();
  }

  onSubmit() {
    if (this.cardForm.valid) {
      const lastName = this.cardForm.get('lastName')?.value;
      const firstName = this.cardForm.get('firstName')?.value;
      const card = this._store.selectSignal(selectAllCards)();
      const fromForm = true;

      this.router.navigate(['/recap-card'], {
        state: {lastName, firstName, card, fromForm}
      });

    }
  }
}
