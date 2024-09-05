import {Injectable, Signal} from '@angular/core';
import {Product} from '../interfaces';
import {BehaviorSubject} from 'rxjs';
import {products} from '../constants';
import {toSignal} from "@angular/core/rxjs-interop";

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private readonly _productSubject$ = new BehaviorSubject<Product[]>(products);

    public get products(): Signal<Product[]> {
        return toSignal(this._productSubject$.asObservable());
    }
}
