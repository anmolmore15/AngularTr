import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {SignInComponent} from './sign-in/sign-in.component';
import { ProductValidationComponent } from './product-validation/product-validation.component';
import { ProductAbstractComponent } from "./product-abstract/product-abstract.component";
import { ProductAbstractEventComponent } from './product-abstract-event/product-abstract-event.component';
import { ProductCustomValidatorComponent } from './product-custom-validator/product-custom-validator.component';

@NgModule({
    declarations: [
        SignInComponent,
        ProductValidationComponent,
        ProductAbstractComponent,
        ProductAbstractEventComponent,
        ProductCustomValidatorComponent, 
          
    ],
    exports: [
        SignInComponent,
        ProductValidationComponent,
        ProductAbstractComponent,
        ProductAbstractEventComponent,
        ProductCustomValidatorComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],

    providers:[ ],
})
export class ReactiveModule{}