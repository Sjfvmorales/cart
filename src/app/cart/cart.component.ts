import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../services/cart.service';
import { IProduct } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { TotalComponent } from '../total/total.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, TotalComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: IProduct[] = [];

  private cartService = inject(ProductService);

  ngOnInit() {
    this.cartService.products.subscribe((products: IProduct[]) => {
      this.products = products;
    });
  }

  onClickDelete(indice: number) {
    this.cartService.deleteProduct(indice);
  }
}
