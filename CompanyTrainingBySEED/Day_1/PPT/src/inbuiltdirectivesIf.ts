import {Component, Input, Output, OnInit,OnDestroy} from '@angular/core';

export class Product{
  constructor( public name:string,
      public description:string,
      public price:number,
      public quantity:number){ }
}

@Component({
  selector: 'product-availability',
  template: `
  <h1>ngIf</h1>
  <div *ngIf="true">Welcome to Transflower</div>
      <div *ngIf="productionCost > billingPrice"> Product is so Cheap !</div>
      <div *ngIf="productionCost > billingPrice; then thenBlock else elseBlock">
  </div>
            <ng-template #thenBlock> Cheap</ng-template>
            <ng-template #elseBlock>costly</ng-template>  
    
  <div *ngIf="flower == 'gerbera'">Gerbera</div> 
  <div *ngIf="isFlowerAvailable()"> Requested flower is available</div> 
  
  <h1>ngSwitch </h1>
  <div [ngSwitch]="bestflower">
      <div *ngSwitchCase="'gerbera'">Best Flower :gerbera</div>
      <div *ngSwitchCase="'rose'">Best Flower : rose</div>
      <div *ngSwitchCase="'lotus'">Best Flower :lotus</div>
      <div *ngSwitchDefault>Best Flower is something else</div>
  </div>`
})
export class ProductAvailabiltyComponent  {
  //public :number;
  public billingPrice;
  public productionCost:number;
  public flower:string;
  public bestflower:string;


  constructor() {
    this.productionCost=1123;
    this.billingPrice=665;
    this.flower='gerbera';
    this.bestflower='lotus';
  }

  isFlowerAvailable():boolean{
    return true;
  }
}