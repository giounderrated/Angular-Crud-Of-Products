import { Component } from '@angular/core';
import { Jsend } from 'src/app/core/api/JSend';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/products/Product';
import { faEdit, faRemove, faPlus,faSearch } from '@fortawesome/free-solid-svg-icons';
import { Dialog } from '@angular/cdk/dialog';
import { AddComponent } from '../products/add/add.component';
import { ViewEditComponent } from '../products/view-edit/view-edit.component';

@Component({
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent {
  products: Product[];
  faEdit = faEdit;
  faRemove = faRemove;
  faPlus=faPlus;
  faSearch = faSearch;
  constructor(private productService: ProductService, private dialog: Dialog) {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((data: Jsend<Product[]>) => {
      this.products = data.data;
      console.log(this.products);
    });
  }

  openDialog() {
    // let product = this.products.filter((product)=>product.id==id)[0]
    const dialogRef = this.dialog.open(AddComponent,{
      height: '400px',
      width: '600px',
    });
  }

  openEditOrView(id:number, isEdit:boolean){
    let product = this.products.filter((product)=>product.id==id)[0];
    const dialogRef = this.dialog.open(ViewEditComponent,{
      height: '500px',
      width: '650px',
      data:{
        product,
        isEdit
      }
    });

  }
}
