import { Component } from '@angular/core';
import { Jsend } from 'src/app/core/api/JSend';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/products/Product';
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons';
import { Dialog } from '@angular/cdk/dialog';
import { ViewEditComponent } from '../products/view-edit/view-edit.component';

@Component({
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent {
  products: Product[];
  faEdit = faEdit;
  faRemove = faRemove;

  constructor(private productService: ProductService, private dialog: Dialog) {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((data: Jsend<Product[]>) => {
      this.products = data.data;
      console.log(this.products);
    });
  }

  openDialog(id: any) {

    let product = this.products.filter((product)=>product.id==id)[0]

    this.dialog.open(ViewEditComponent, {
      data:product
    });
  }
}
