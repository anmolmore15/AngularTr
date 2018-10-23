import { NgModule } from "@angular/core";
 
import {FormsModule} from '@angular/forms';
import { CounterComponent } from "../shared/counter/counter.component";

@NgModule({
    declarations:[CounterComponent],
    imports:[
        FormsModule
      ],
  
    exports:[CounterComponent ]
})
export class SharedModule{  }