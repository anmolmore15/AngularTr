import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'reactive-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  ngOnInit() {   }

  loginForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({'userName': ['ravi'],
                               'password':['P@ssw0rd123']});
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
