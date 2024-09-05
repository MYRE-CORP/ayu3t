import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { CardListComponent } from './card/cardList.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ProductComponent, CardListComponent],
})

export class AppComponent {
}
