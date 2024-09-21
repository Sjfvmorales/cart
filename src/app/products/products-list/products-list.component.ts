import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../search/filter.pipe';
import { FormsModule } from '@angular/forms';
import { CartComponent } from '../../cart/cart.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, FilterPipe, FormsModule, CartComponent],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  searchValue: string = '';

  productList: any[] = [];

  private _cartService = inject(ProductService);

  ngOnInit(): void {
    this._cartService.getAllProducts().subscribe((data: any[]) => {
      console.log(data);
      this.productList = data;
    });
  }

  trackByProductId(index: number, product: any): number {
    return product.id;
  }

  onClick(product: any) {
    this._cartService.addNewProduct(product);
  }
}
