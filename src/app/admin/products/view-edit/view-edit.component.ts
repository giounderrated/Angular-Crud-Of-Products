import { Component, Inject, Input } from '@angular/core';
import { Product } from 'src/app/products/Product';
import { DIALOG_DATA } from '@angular/cdk/dialog';


@Component({
  selector: 'app-view-edit',
  templateUrl: './view-edit.component.html',
  styleUrls: ['./view-edit.component.scss']
})
export class ViewEditComponent {
  isEdit:boolean=false;
  product:Product;

  constructor(@Inject(DIALOG_DATA) private data: any) {
    console.log(data);
    this.initData(data);
  }

  initData(data:any){
    this.product = data.product;
    this.isEdit = data.isEdit;

  }

}
