import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

export interface Seller{
  canSell:boolean;
}

export const FLOWERS =  [
    {name: 'Gerbera', canSell: false},  //jSON Object
    {name: 'Carnation',  canSell: false},
    {name: 'Tulip',   canSell: false},
    {name: 'Marigold',   canSell: false},
    {name: 'Lily',   canSell: true},
    {name: 'Jasmine',   canSell: true}
  ];
  





  
/*@Pipe({ name: 'sellingflowers' })
export class SellingflowersPipe implements PipeTransform {
transform(allfloweres: Seller[]) {
  return allfloweres.filter(flower => flower.canSell);
}
}*/


@Component({
    selector: 'selling-flowers',
    template: `
              <h4>floweres which can be solod (piped)</h4>
              <div >
                <div *ngFor="let flower of flowers|sellingflowers">
                  {{flower.name| uppercase}}
                </div>
              </div>
    `
  })
  export class SellingflowersComponent {
    flowers: any[] = [];

    constructor() { this.reset(); }
    reset() { this.flowers = FLOWERS.slice(); }
  }