import {Component, Input } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {

  constructor(){}

  @Input() product:Product;


}
