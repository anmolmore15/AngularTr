import {Drawing} from './shape';
let l=new Drawing.Line();
let rect=new Drawing.Rectangle();

let s:Drawing.Shape=l;
s.draw("2D");
console.log('Line');
