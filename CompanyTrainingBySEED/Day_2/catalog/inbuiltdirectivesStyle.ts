import {Component, Input, Output, OnInit,OnDestroy} from '@angular/core';

@Component({
  selector: 'style-comp',
  template: `
          <div [ngStyle]="{color: 'green', 'background-color': 'pink'}"> Fixed Style</div>
          <br/> 
          <p>Dynamic Style Binding </p>
          <div >
            <input type="text" name="color" value="{{color}}" #colorinput>
            <br/>
            <input type="text" name="fontSize" value="{{fontSize}}" #fontinput>
          </div>
          <button (click)="apply(colorinput.value, fontinput.value)">Apply</button>
          <div>
            <span [style.color]="color" [style.font-size.px]="fontSize"> Welcome Angular</span>
          </div>
          `
})
export class StyleComponent  {
  color: string;
  fontSize: number;

  constructor() {
    this.fontSize = 16;
    this.color = 'red';
  }

  apply(pcolor: string, fontSize: number): void {
    this.color = pcolor; this.fontSize = fontSize;
  }
}