import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() name!: string;
  @Input() image!: string;
  @Input() price!: number;

  @Output() productSelected = new EventEmitter<void>();

  onProductClick() {
    this.productSelected.emit();
  }
}
