import { Routes } from "@angular/router";
import { MainStaffComponent } from "./main-staff/main-staff.component";
import { ViewStaffComponent } from "./view-staff/view-staff.component";

export const staffRoute: Routes = [
    {path: 'staffmain', component: MainStaffComponent,
        children: [
            {path: 'staffview', component:ViewStaffComponent},
            {path: '', redirectTo: 'staffview', pathMatch: 'full'}
        ]},
    {path: '', redirectTo: 'staffmain', pathMatch:'full'}
];