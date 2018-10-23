import { Component, OnInit } from '@angular/core';
import { ProductHubService } from '../producthubservice';
import { Product } from '../entities/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  status:boolean=true;
  list:Product[];
  
  constructor(public svc:ProductHubService) {  }

  ngOnInit() {


    this.list=this.svc.getAllProducts();
  }
}
