import { NgModule } from "@angular/core";
import { ProductdetailComponent } from "./productdetail/productdetail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { SharedModule } from "../shared/sharedmodule";
import { ProductHubService } from "./producthubservice";
import { BrowserModule } from "@angular/platform-browser";
import { InbuiltPipeComponent } from "./inbuiltpipes";
import { ProductAvailabiltyComponent } from "./inbuiltdirectivesIf";
import { SellingflowersComponent } from "./sellingflowers";

@NgModule({
    declarations:[
        ProductdetailComponent,
        ProductListComponent,
        InbuiltPipeComponent,
        ProductAvailabiltyComponent,
     
        SellingflowersComponent
    ],
    imports:[
        BrowserModule,
        SharedModule],
    providers:[ProductHubService ],
    exports:[
         ProductdetailComponent,
         ProductListComponent,
         InbuiltPipeComponent,
         ProductAvailabiltyComponent,
         SellingflowersComponent
    ]
})
export class ProductCatalogModule{  }