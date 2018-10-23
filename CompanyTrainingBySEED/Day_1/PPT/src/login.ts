import {Component,OnInit} from '@angular/core';
import { Credential } from '../entities/credential';

 
 
 @Component({
   selector: 'login-user',
   template: `<div >
                 <h1>Login Component </h1>
                 <table>
                 <tr>
                 <td><label> Custtomer Email:</label></td>
                     <td><input type="email" name="email"  Required [(ngModel)]="user.email"></td>
                     <td> <input type="text" value={{user.email}} /></td>
                 </tr>
                 <tr>
                     <td><label>Email:</label></td>
                     <td><input type="email" name="email"  Required [(ngModel)]="user.email"></td>
                 </tr>
                 <tr>
                     <td><label>Password:</label></td>
                     <td><input type="password" name="password" [(ngModel)]="user.password"></td>
                 </tr>        
                 <tr>
                     <td>  <button (click)="validate()">Login</button> </td>
                 </tr>
               </table>
           </div>
   `
 })
  
  export class LoginComponent implements OnInit {
   ////member
   user: Credential;
 
   //Initializer
   constructor() {    } 
  
 
   //Component Life cycle Hook
  ngOnInit() {
   this.user=new Credential("seed","ravi.tambade@transflower.in");
   console.log("ngOnInit...");

   console.log(this.user.email);
   console.log(this.user.password);
}
 
  //action listener
  validate() {
    console.log("On Validate Event...");

   console.log(this.user.email);
    console.log(this.user.password);
     }
 }