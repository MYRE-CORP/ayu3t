import {Injectable} from '@angular/core';
import {Product} from "../interfaces";
import {BehaviorSubject, Observable} from "rxjs";
import {products} from "../constants";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    private readonly _productSubject$ = new BehaviorSubject<Product[]>(products);

    public get products$(): Observable<Product[]> {
        return this._productSubject$.asObservable();
    }
}
