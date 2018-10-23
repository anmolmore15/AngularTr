import { NgModule } from "@angular/core";
import {FormsModule} from '@angular/forms';
import { CounterComponent } from "../shared/counter/counter.component";
import { HiddenDirective } from "./customdirectivehidden";
import { SellingflowersPipe } from "./sellingflowerpipe";

@NgModule({
    declarations:[CounterComponent,
                   HiddenDirective,
                   SellingflowersPipe],
    imports:[ FormsModule],
    exports:[CounterComponent,
            HiddenDirective,
            SellingflowersPipe],
    providers:[]
})
export class SharedModule{  }