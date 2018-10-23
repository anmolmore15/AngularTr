import { Component, OnInit, Input,
         Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit,OnDestroy {
  @Input() count: number;
  @Output() update = new EventEmitter<any>();

  constructor() { }

  ngOnInit(){
    //this.count=0;
  }
  ngOnDestroy(){  }

  //event handler
  increment() {
    this.count++;
    this.update.emit({count: this.count});
  }
  //event handler
  decrement() {
    this.count--;
    this.update.emit({count: this.count});
  }

}
