export interface Product{
    id?:number;
    title:string;
    description:string;
    thumbnail:string;
    price: number;
    rating:number;
    stock:number;
    discountPercentage:number;
    brand_id:number;
    category_id:number;
    images:string[];
}