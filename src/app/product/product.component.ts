import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ProductService} from "../Services/product.service";
import {Product} from "../interfaces";
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf
    ]
})
export class ProductComponent {
    protected _products$: Observable<Product[]>;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this._products$ = this.productService.products$;
    }

    protected _onProductClick(product: Product): void {
        this.productService.addProductCard(product);
    }

    protected _productTrackBy(index: number, product: { id: number }): number {
        return product.id;
    }
}
