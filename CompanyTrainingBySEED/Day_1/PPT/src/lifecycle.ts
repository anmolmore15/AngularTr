import {  Component,  Input, Output,EventEmitter,
          ViewEncapsulation,
          SimpleChanges,
          OnChanges,
          OnInit,
          DoCheck,
          AfterContentInit,
          AfterContentChecked,
          AfterViewInit,
          AfterViewChecked,
          OnDestroy } from '@angular/core';

  class Flower {
            public title: string;
            public description: string;
          
            constructor(ttl: string, desc: string) {
              this.title = ttl;
              this.description = desc;  
            }      
          }

  @Component({
  selector: 'flower',
  template: `<p> Title: {{data.title}} </p>
             <p> Description: {{data.description}} </p>`,
 
})
export class FlowerComponent implements OnInit,DoCheck,AfterContentInit,AfterContentChecked,
                                        AfterViewInit,AfterViewChecked,OnDestroy {
  @Input('flower') data: Flower;
  constructor() {
    console.log(`new - data is ${JSON.stringify(this.data)}`);
  }

  ngOnInit() {    console.log(`ngOnInit  - data is ${JSON.stringify(this.data)}`);  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges - data is ${JSON.stringify(this.data)}`);
    for (let key in changes) {
      console.log(`${key} changed. Current: ${JSON.stringify(changes[key].currentValue)}. Previous: ${JSON.stringify(changes[key].previousValue)}`);
    }
  }
  ngDoCheck() { console.log("ngDoCheck")  }
  ngAfterContentInit() { console.log("ngAfterContentInit");}
  ngAfterContentChecked() {console.log("ngAfterContentChecked");}
  ngAfterViewInit() {console.log("ngAfterViewInit");}
  ngAfterViewChecked() { console.log("ngAfterViewChecked"); }
  ngOnDestroy() { console.log("ngOnDestroy"); }
}

@Component({
  selector: 'comp-lifecyle',
  template: `<flower *ngFor="let f of flowers" [flower]="f">
              <span>{{ f.title }}?</span>
              <h1>{{ f.description }}</h1>
            </flower>
            <button type="button" (click)="addFlower()">Add Flower </button>
            <button type="button" (click)="deleteFlower()">Clear Flowers</button>
            `
})
export class LifeCycleComponent {
  
  flowers: Flower[] = [new Flower("Rose", "Valentine Flower"),
                       new Flower("Lotus", "Worship Flower")];

  addFlower() { this.flowers.unshift(new Flower("Gerbera", "Wedding Flower"));}

  deleteFlower() { this.flowers = [] }
}