import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-product-validation',
  templateUrl: './product-validation.component.html',
  styleUrls: ['./product-validation.component.css']
})
export class ProductValidationComponent implements OnInit {

  productFrm: FormGroup;

  title:string;
  description:string;

  constructor(fb: FormBuilder) {
   //this.title="Gerbera";
   //this.description="Best Wedding Flower";
   this.productFrm = fb.group({ 'title'      :  ['', Validators.required],
                                 'description':  ['', Validators.required]
                           });
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
  ngOnInit() { }
}
