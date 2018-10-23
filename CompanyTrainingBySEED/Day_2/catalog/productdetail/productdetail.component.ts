import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../entities/product';
import { ProductHubService } from '../producthubservice';

@Component({
  selector: 'product-detail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  theProduct:Product;

  constructor(public svc :ProductHubService) { }

  ngOnInit() {
    this.theProduct=this.svc.getTheProduct();
    //this.theProduct=500;
  }

  // likes:number;

@Input() title:string;
@Input() description:string;
@Input() unitPrice:number;
@Input() quantity:number;
@Input() imageUrl:string;
@Input() likes:number;
 

 
 
   counterUpdate(ee: any) {
   this.likes = ee.count;
}
}
