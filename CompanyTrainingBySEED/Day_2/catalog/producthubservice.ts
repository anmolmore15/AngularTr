import {Injectable} from '@angular/core';
import { Product } from './entities/product';

@Injectable()
export class ProductHubService {
    private products:Product[];
    constructor(){
        this.products=[
            new Product("Carnation","Wedding Flower",14,1200),
            new Product("Rose","Valentine Flower",24,1200),
            new Product("Lily","Smelling Flower",24,5200),
            new Product("Lotus","Worship Flower",15,1270),
            new Product("Jasmine","best Flower",4,1200),

        ];
    }
    
    public  getTheProduct():Product
    {   return this.products[0];  }

    public  getAllProducts():Product[]
    {    return this.products; }

    public insert(product:Product){
     //   this.products.push(product);
    }

    public update(product:Product){
     //   this.products.push(product);
    }
    public delete(product:Product){
       // this.products.push(product);
    }
}