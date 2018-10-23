import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'simple-observable',
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.css']
})
export class SimpleObservableComponent implements OnInit {

  names = ['mastercard', 'Infosys', 'transflower', 'Indus', 'vodafone'];  
  data="seed";
  source = from(this.names);
  constructor() { }
  ngOnInit() { }

  show() {
        this.names.push(this.data);
    
        this.source.subscribe(
          value => console.log("On First Observer : "+ value),
          error => console.log(error),
          () => console.log("complete")
        );

        this.source.pipe(map(name => name.toUpperCase()))
          .subscribe(
                    value => console.log("On Second Observer : "+value),
                    error => console.log(error),
                    () => console.log("complete")
          );
    
  
          this.source.pipe(filter(name => name.startsWith('I')))
          .subscribe(name => {
            console.log("On Third Observer : "+ name)
          });    
     }  
      
    
    
     /*  this.source.subscribe(
            value => console.log(value),
            error => console.log(error),
            () => console.log("complete")
          );
    
      */

       /*   this.source.subscribe( {
            next: x => console.log('Observer got a next value: ' + x),
            error: err => console.error('Observer got an error: ' + err),
            complete: () => console.log('Observer got a complete notification'),
          })
      */

    
 
}
