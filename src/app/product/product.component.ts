import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  standalone: true,
})
export class ProductComponent {
  @Input()
  public readonly name: string;

  @Input()
  public readonly image: string;

  @Input()
  public readonly  price: number;

  @Output()
  public readonly productSelected = new EventEmitter<void>();

  protected _onProductClick(): void {
    this.productSelected.emit();
  }
}
