import { Routes } from "@angular/router";
import { MainReportComponent } from "./main-report/main-report.component";
import { ViewReportComponent } from "./view-report/view-report.component";

export const reportRoute: Routes = [
    {path: 'reportmain', component: MainReportComponent,
        children: [
            {path: 'reportview', component:ViewReportComponent},
            {path: '', redirectTo: 'reportview', pathMatch: 'full'}
        ]},
    {path: '', redirectTo: 'reportmain', pathMatch:'full'}
];