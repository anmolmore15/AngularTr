import { Component, OnInit } from '@angular/core';
import { Claim } from '../entities/claim';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  status:boolean=false;
  user:Claim=new Claim("raj.jadhav.seed.com", "dddd");

  constructor() { }
  ngOnInit() { }
 

  //event handler
  public validate()
  {
    console.log("validate is invoked ");
    if(this.user.userName=="ravi.tambade@transflower.in" && this.user.password=="ravi"){

      this.status=true;
      console.log("Valid User !")

    }
  }

  
}
