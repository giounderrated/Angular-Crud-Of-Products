import { Brand } from "../brands/Brand";
import { Category } from "../categories/Category";

export interface Product{
    id?:number;
    title:string;
    description:string;
    thumbnail:string;
    price: number;
    rating:number;
    stock:number;
    brand:Brand;
    category:Category;
    images:string[];
}