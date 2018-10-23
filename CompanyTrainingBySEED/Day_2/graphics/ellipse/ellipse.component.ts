import { Component, OnInit, ViewChild, ElementRef, Renderer, Input } from '@angular/core';

@Component({
  selector: 'ellipse',
  templateUrl: './ellipse.component.html',
  styleUrls: ['./ellipse.component.css']
})
export class EllipseComponent implements OnInit {

  ngOnInit() {   }

  @ViewChild('canvas') canvasRef:ElementRef;
    private canvas: any;
    @Input('size') size: number;
    @Input('color') color: string;

    constructor(private el: ElementRef, private renderer: Renderer) {}
 
    ngAfterViewInit() {
        this.canvas = this.canvasRef.nativeElement;
        this.canvas.width = this.size;
        this.canvas.height = this.size;
        this.draw();
    }
    draw() {
        if (this.canvas.getContext) {
            let canvas = this.canvas;
            if (canvas.getContext){
                var ctx = canvas.getContext('2d');
                ctx.beginPath();
                ctx.arc(canvas.width*.5,canvas.height*.5,canvas.width*.4,0,Math.PI*2,true); // Outer circle
                ctx.strokeStyle = this.color;
                ctx.stroke();
            }
        }
    }

}
