import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'inbuilt-pipes',
  template: `<h1> Inbuilt-pipe </h1>
              <p>Flower: <b>{{flower | uppercase}} </b>
              <p>Greenhouse: {{greenhouse | lowercase}}
                  
              <p>Unit Price: {{unitprice | currency:'USD':false}}</p>
              <p>Total: {{total | currency:'USD':true:'4.2-2'}}</p>
              <div>
                  <p>Plantation Date: {{today | date}}</p>
                  <p>Plantation Date:  {{today | date:'fullDate'}}</p>
                  <p>The time : {{today | date:'jmZ'}}</p>
              </div>
              
              <div>
                  <p>A: {{a | percent}}</p>
                  <p>B: {{b | percent:'4.3-5'}}</p>
              </div>
  `
})
export class InbuiltPipeComponent {
  unitprice: number = 0.259;
  total: number = 1.3495;
  today: number = Date.now();
  flower:string="Gerbera";
  greenhouse:string="Lakshya";

  a: number = 0.678;
  b: number = 1.9852;

  constructor() { }
}





@Component({
  selector: 'json-pipe',
  template: `<div>
                <p>Without JSON pipe:</p>
                <pre>{{object}}</pre>
                <p>With JSON pipe:</p>
                <pre>{{object | json}}</pre>
            </div>`
})
export class JsonPipeComponent {
  object: Object = {name: 'Gerbera',
                    category: 'Flower',
                    greenhouses: {name: 'Lakshya',
                    montlyRevenue: [34, 45,43, 74, 55]}};
}  