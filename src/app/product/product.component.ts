import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  standalone: true,
})
export class ProductComponent {
  @Input() public name!: string;
  @Input() public image!: string;
  @Input() public price!: number;

  @Output() public productSelected = new EventEmitter<void>();

  protected onProductClick(): void {
    this.productSelected.emit();
  }
}
