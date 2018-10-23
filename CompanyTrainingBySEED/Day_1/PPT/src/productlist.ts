import {Component, Input, Output, OnInit,OnDestroy} from '@angular/core';
import {  ProductItem } from './entities/product';


@Component({
  selector: 'product-list',
  template: `
            <h2>Tambade Mala (Tambade Frams, Manchar)</h2>
            <h3>Flower Cities</h3>
              <ol>
                <li  *ngFor ="let city  of cities">{{city}}</li>
              </ol> 
            <h3>Flowers Available</h3>
              <ul>
                <li *ngFor="let product of products">
                  <p> {{product.name |uppercase}} |
                      {{product.price| currency:'&#8377;'}} | 
                      {{product.quantity}}  <p>
                </li>
              </ul>`
})
export class ProductListComponent implements OnInit {
  cities:string[];
  products:ProductItem[];
  constructor() { }
  ngOnInit() {
    this.cities=["Pune","Nashik", "Kolhapur","Karad","mumbai"];
    this.products=[
      new ProductItem("Gerbera","Celebration Flower",12,500),
      new ProductItem("Carnation","Peace Flower",10,210),
      new ProductItem("Lilly","Decorating Flower",8,320),
      new ProductItem("Lotus","Worship Flower",23,300)
    ];
  }
}