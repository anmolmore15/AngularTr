import { Component} from '@angular/core';

@Component({
  selector: 'branding-comp',
  templateUrl: './styleclass-directive.component.html',
  styleUrls: ['./styleclass-directive.component.css',],
})
export class StyleClass  {
  color: string;
  fontSize: number;
  size:number;
  people: any[];
  displayText:string;
  visible:boolean;

  constructor() {
    this.displayText = 'show-class';
    this.visible = true;
    this.fontSize = 25;
    this.color = 'green';
    this.size=23;
    this.color = 'pink';
    this.people= [
                {"name": "Michal  Jackson","country": 'UK'},
                {"name": "Jerry  Doyle","country": 'USA'},
                {"name": "Sam  Meyers", "country": 'HK'},
                {"name": "Roger  Smith","country": 'UK'},
                {"name": "Alan  Border","country": 'USA'}
            ];
  }

  apply(color: string, fontSize: number): void {
    this.color = color;
    this.fontSize = fontSize;
  }

  toggle() {
    this.visible = !this.visible;
    this.displayText = this.visible ? 'show-class' : 'hide-class';
  }

  getColor(country) { 
          switch (country) {
                  case 'UK':
                    return 'green';
                  case 'USA':
                    return 'blue';
                  case 'HK':
                    return 'red';
          }
  }
}