import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'revenue-dashboard',
  templateUrl: './revenue-dashboard.component.html',
  styleUrls: ['./revenue-dashboard.component.css']
})
export class RevenueDashboardComponent implements OnInit {

  salesData = [
    { label: 'JAN', value: this.getRandomInt() },
    { label: 'FEB', value: this.getRandomInt() },
    { label: 'MAR', value: this.getRandomInt() },
    { label: 'APR', value: this.getRandomInt() },
    { label: 'JUN', value: this.getRandomInt() },
    { label: 'JUL', value: this.getRandomInt() }
] ;


yieldData = [
    { label: 'JAN', value: this.getRandomInt() },
    { label: 'FEB', value: this.getRandomInt() },
    { label: 'MAR', value: this.getRandomInt() },
    { label: 'APR', value: this.getRandomInt() },
    { label: 'JUN', value: this.getRandomInt() },
    { label: 'JUL', value: this.getRandomInt() }
] ;

consistencyData = [
    { label: 'Lakshaya', value: 83 },
    { label: 'Partar', value: 41 },
    { label: 'Bhordi', value: 10 },
    { label: 'Pathar', value: 98 },
    { label: 'Malai', value: 50 },
] ;
colors2 = [ '#5882FA', 'orange', '#0B3B2E', 'red','#689a68', '#FF00BF', '#008080', '#f16e23'  ];

vegetableData = [
    { label: 'Broccoli', value: this.getRandomInt() },
    { label: 'Tomato', value: this.getRandomInt() },
    { label: 'Onions', value:  this.getRandomInt() },
    { label: 'Olives', value:  this.getRandomInt() },
    { label: 'Capsicum', value:  this.getRandomInt() }
] ;

getRandomInt(max = 100) {
    return Math.floor(Math.random()*max);
}

constructor() { }
ngOnInit() {  }

}
