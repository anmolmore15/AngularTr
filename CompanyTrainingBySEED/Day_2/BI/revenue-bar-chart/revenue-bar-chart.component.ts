import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'revenue-bar-chart',
  templateUrl: './revenue-bar-chart.component.html',
  styleUrls: ['./revenue-bar-chart.component.css']
})
export class RevenueBarChartComponent implements OnInit {

  @Input() data: number[];
  @Input() width: number;
  @Input() height: number;
  @Input() colors: string[];
  @Input() title: string;

  constructor() { }

  ngOnInit() { }
}
