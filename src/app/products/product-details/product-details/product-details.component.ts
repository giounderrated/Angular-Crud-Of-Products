import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jsend } from 'src/app/core/api/JSend';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from '../../Product';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  private id:string;
  product:Product;
  currentImage:string;

  faDollarSign = faDollarSign;
  
  constructor(private route: ActivatedRoute, private service:ProductService){
    
  }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProduct();
  }
  getProduct() {
    this.service.getProductById(parseInt(this.id)).subscribe((data:Jsend<Product>)=>{
      this.product = data.data;
      this.currentImage = this.product.images[0];
    })
  }

  changeImage(index:number){
    this.currentImage = this.product.images[index];
  }

}
