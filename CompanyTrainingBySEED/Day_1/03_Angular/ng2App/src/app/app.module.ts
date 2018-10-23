import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes }    from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';
import {AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            HttpModule
  ],
  providers: [{provide:APP_BASE_HREF,useValue:'/'},
              {provide:LocationStrategy,useClass:HashLocationStrategy}],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
