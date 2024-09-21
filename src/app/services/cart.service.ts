import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseURL = 'https://fakestoreapi.com/products';

  private readonly _http = inject(HttpClient);

  public getAllProducts(): Observable<IProduct[]> {
    //Devuelve observable de todos los productos
    return this._http.get<IProduct[]>(this.baseURL);
  }

  public getProductById(id: number): Observable<IProduct> {
    //Devuelve observable de un solo producto
    return this._http.get<IProduct>(`${this.baseURL}/${id}`);
  }

  public getProductByTitle(title: string): Observable<IProduct> {
    //Devuelve observable de un solo producto
    return this._http.get<IProduct>(`${this.baseURL}/${title}`);
  }

  public getProductByCategory(category: string): Observable<IProduct> {
    //Devuelve observable de un solo producto
    return this._http.get<IProduct>(`${this.baseURL}/${category}`);
  }

  private cartProducts: IProduct[] = [];
  private _products: BehaviorSubject<IProduct[]> = new BehaviorSubject<
    IProduct[]
  >([]);

  get products() {
    return this._products.asObservable();
  }

  addNewProduct(product: IProduct) {
    this.cartProducts.push(product);
    this._products.next(this.cartProducts);
  }

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this._products.next(this.cartProducts);
  }
}
