import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

export const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'Products', component: ProductsListComponent },
  //  { path: '**', redirectTo: '', pathMatch: 'full' },
];
