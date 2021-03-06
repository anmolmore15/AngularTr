import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { MessageService } from '../../messageservice';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  subscription: Subscription;

  message: string;

  constructor(private messageService: MessageService) {  }
 ngOnInit() {
 //get the observable 
  //register  callback to set value using subscribe

  let theObservable:Observable<any> = this.messageService.getMessage();
  this.subscription =theObservable .subscribe(msg => { this.message = msg; });
   }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
