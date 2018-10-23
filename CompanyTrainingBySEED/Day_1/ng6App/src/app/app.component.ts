import { Component } from '@angular/core';

//Decorator

@Component({
  selector: 'tfl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mastercard';
  
  name="Ravi Tambade";
  company1="seed";
  company2="ibm";
  company3="transflower";


  getFullName(fname:string,lname:string):string{
    return fname+ " "+ lname;
  }

  //resolving dependencies using dependency injection

  constructor(){  }
  
}
