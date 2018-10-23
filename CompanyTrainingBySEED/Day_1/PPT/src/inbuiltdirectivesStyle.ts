import {Component, Input, Output, OnInit,OnDestroy} from '@angular/core';

export class Product{
  constructor( public name:string,public description:string,
      public price:number,public quantity:number){ }
}

@Component({
  selector: 'style-comp',
  styles: ['h1 { font-weight: normal; }',
  
],

  template: `
  <h1> Style Binding </h1>
  <div [ngStyle]="{color: 'white', 'background-color': 'blue'}">
      Uses fixed white text on blue background
  </div>
  <br/>
  
  <h1>Dynamic Style </h1>
  <div >
    <input type="text" name="color" value="{{color}}" #colorinput>
    <br/>
    <input type="text" name="fontSize" value="{{fontSize}}" #fontinput>
  </div>
   <button (click)="apply(colorinput.value, fontinput.value)">
            Apply settings</button>
  <div>
    <span [style.color]="color" [style.font-size.px]="fontSize">
      Dynamic Style Binding
   </span>
  </div>
  
  <div [ngClass]="{bordered: false}">This is never bordered</div>
  <div [ngClass]="{bordered: true}">This is always bordered</div>`
})
export class StyleComponent  {
 
  color: string;
  fontSize: number;
  
  style: {
    'background-color': string,
    'border-radius': string,
    border?: string,
    width?: string,
    height?: string
  };

  constructor() {
    this.fontSize = 16;
    this.color = 'red';

    this.style = {
      'background-color': '#ccc',
      'border-radius': '50px',
      'height': '30px',
      'width': '30px'
    };
  }

  apply(pcolor: string, fontSize: number): void {
    this.color = pcolor;
    this.fontSize = fontSize;
  }
}