import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProductCatalogModule} from './catalog/productCatalogmodule';

import { AppComponent } from './app.component';
import { UserMangementModule } from './usermgmt/usermgmtmodule';
import { SharedModule } from './shared/sharedmodule';


@NgModule({
  declarations: [ AppComponent],
  imports: [
    BrowserModule,
    ProductCatalogModule,
    UserMangementModule,
    SharedModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
