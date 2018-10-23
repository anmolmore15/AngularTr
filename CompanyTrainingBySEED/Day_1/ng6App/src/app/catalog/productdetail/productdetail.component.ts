import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/product';

@Component({
  selector: 'product-detail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  theProduct:Product
  constructor() { }

  ngOnInit() {
    //get data from REST API asychronously

    this.theProduct=new Product("Gerbera","Wedding flower",7,5000);

  }

}
