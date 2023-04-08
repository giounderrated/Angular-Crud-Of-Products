import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/brands/Brand';
import { Category } from 'src/app/categories/Category';
import { BrandsService } from 'src/app/core/services/brands/brands.service';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductService } from 'src/app/core/services/product/product.service';

import { Product } from './ProductToAdd';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  faImage = faImage;

  brands$: Observable<Brand[]>;
  categories$: Observable<Category[]>;

  addForm: FormGroup<any>;

  constructor(
    private brandService: BrandsService,
    private categoriesService: CategoriesService,
    private fb: FormBuilder,
    private productService:ProductService
  ) {}

  ngOnInit(): void {
    this.brands$ = this.brandService.getALlBrands();
    this.categories$ = this.categoriesService.getAllCategories();
    this.initForm();
  }

  initForm() {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      price: [],
      stock: [],
      brand_id: ['',Validators.required],
      category_id: ['',Validators.required],
      discountPercentage: [],
      rating: [],
      thumbnail: ['', Validators.required],
    });
  }


  saveProduct(){
    if(!this.addForm.valid) return;

    let rating = this.addForm.get('rating').value
    let discount = this.addForm.get('discountPercentage').value;

    let product:Product ={
      title: this.addForm.get('title').value,
      description: this.addForm.get('description').value,
      thumbnail: this.addForm.get('thumbnail').value,
      price: this.addForm.get('price').value,
      rating: rating ? rating: 0,
      stock: this.addForm.get('stock').value,
      brand_id: this.addForm.get('brand_id').value,
      category_id: this.addForm.get('category_id').value,
      images: [],
      discountPercentage: discount ? discount: 0
    } 
    console.log(product);
    
    this.productService.createProduct(product).subscribe(response=>{
      console.log(response);
    })

  }
}
