import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from '../Product';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.getProduts();
  }
  getProduts() {
    this.service.getAllProducts().subscribe((data) => {
      this.products = data.data;
    });
  }
}
