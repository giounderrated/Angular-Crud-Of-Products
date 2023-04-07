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

  constructor(@Inject(DIALOG_DATA) public product: Product) {
    this.checkIfIsEdit();
  }

  checkIfIsEdit(){
    if(this.product.id && this.product.id!=null ) {
      return; 
    }
    this.isEdit = true;
  }


}
