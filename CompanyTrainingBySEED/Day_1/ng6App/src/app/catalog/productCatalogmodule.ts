import { NgModule } from "@angular/core";
import { ProductdetailComponent } from "./productdetail/productdetail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { SharedModule } from "../shared/sharedmodule";

@NgModule({
    declarations:[
        //components, directives,
        //pipes
        ProductdetailComponent,
        ProductListComponent
    ],
    imports:[
       SharedModule
    ],
    providers:[
        //Angular Services
        //responsbile for external Data Access
    ],
    exports:[
         ProductdetailComponent,
         ProductListComponent
    ]
})
export class ProductCatalogModule{  }