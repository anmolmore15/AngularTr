import { Component, OnInit, Input,
         Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit,OnDestroy {
  @Input() count: number;
  @Output() update = new EventEmitter<any>();

  constructor() { }

  ngOnInit(){  }
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
