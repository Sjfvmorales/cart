import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../services/cart.service';
import { map } from 'rxjs';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './total.component.html',
  styleUrl: './total.component.css',
})
export class TotalComponent {
  total: number = 0;

  private cartService = inject(ProductService);

  ngOnInit() {
    this.cartService.products
      .pipe(
        map((products) => {
          return products.reduce((prev, curr) => prev + curr.price, 0);
        })
      )
      .subscribe((val) => {
        this.total = val;
      });
  }
}
