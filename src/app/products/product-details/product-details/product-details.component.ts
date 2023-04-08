import { Component } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { Jsend } from 'src/app/core/api/JSend';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from '../../Product';
import { faDollarSign,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  private id:string;
  product:Product;
  productImages:string[] = []
  currentImage:string;

  faDollarSign = faDollarSign;
  faArrowLeft = faArrowLeft;

  
  constructor(private route: ActivatedRoute, private service:ProductService,private location: Location){
    
  }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProduct();
  }
  getProduct() {
    this.service.getProductById(parseInt(this.id)).subscribe((data:Jsend<Product>)=>{
      this.product = data.data;
      this.productImages = [this.product.thumbnail,...this.product.images]
      this.currentImage = this.productImages[0];
    })
  }

  changeImage(index:number){
    this.currentImage = this.productImages[index]
  }

  goBack(){
    this.location.back();
  }

}
