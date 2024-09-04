import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  standalone: true,
})
export class ProductComponent {
  @Input()
  public name: string;

  @Input()
  public image: string;

  @Input()
  public price: number;

  @Output()
  public readonly productSelected = new EventEmitter<void>();

  protected _onProductClick(): void {
    this.productSelected.emit();
  }
}
