import { Routes } from "@angular/router";
import { MainPricemgtComponent } from "./main-pricemgt/main-pricemgt.component";
import { ViewPricemgtComponent } from "./view-pricemgt/view-pricemgt.component";

export const pricemanagementRoute: Routes = [
    {path: 'pricemgtmain', component: MainPricemgtComponent,
        children: [
            {path: 'pricemgtview', component:ViewPricemgtComponent},
            {path: '', redirectTo: 'pricemgtview', pathMatch: 'full'}
        ]},
    {path: '', redirectTo: 'pricemgtmain', pathMatch:'full'}
];