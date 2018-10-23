import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RevenueDashboardComponent } from "./revenue-dashboard/revenue-dashboard.component";
import { RevenueBarChartComponent } from '../BI/revenue-bar-chart/revenue-bar-chart.component';
import { RevenuePieChartComponent } from '../BI/revenue-pie-chart/revenue-pie-chart.component';
import { BarchartDataDirective } from "./revenue-bar-chart/barchart-data";


@NgModule({
    declarations: [
        RevenueDashboardComponent,
        BarchartDataDirective,
        RevenueBarChartComponent,
        RevenuePieChartComponent,
    ],
    exports: [
        RevenueDashboardComponent,
        BarchartDataDirective,
        RevenueBarChartComponent,
        RevenuePieChartComponent,
    ],
    imports:[
        BrowserModule,
        FormsModule
    ],

    providers:[ ],
})
export class BIModule{}