import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ProductService} from "../Services/product.service";
import {Product} from "../interfaces";
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf
    ]
})
export class ProductComponent {
    products$: Observable<Product[]>;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.products$ = this.productService.getProducts();
    }

    protected _onProductClick(product: Product): void {
        this.productService.addProductCard(product);
    }

    protected _productTrackBy(index: number, product: { id: number }): number {
        return product.id;
    }
}
