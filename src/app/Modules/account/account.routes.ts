import { Routes } from "@angular/router";
import { MainAccountComponent } from "./main-account/main-account.component";
import { ViewAccountComponent } from "./view-account/view-account.component";

export const accountRoute: Routes = [
    {path: 'accountmain', component: MainAccountComponent,
        children: [
            {path: 'accountview', component:ViewAccountComponent},
            {path: '', redirectTo: 'accountview', pathMatch: 'full'}
        ]},
    {path: '', redirectTo: 'accountmain', pathMatch:'full'}
];