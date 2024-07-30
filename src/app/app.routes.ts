import { Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { accountRoute } from './Modules/account/account.routes';
import { dashboardRoute } from './Modules/dashboard/dashboard.routes';
import { pricemanagementRoute } from './Modules/price-managemt/pricemanagement.routes';
import { reportRoute } from './Modules/report/report.routes';
import { staffRoute } from './Modules/staff/staff.routes';

export const routes: Routes = [
    {path: 'main', component: SidenavComponent,
        children: [
            {
                path: 'dashboardpage',
                loadChildren: () => import('./Modules/dashboard/dashboard.routes').then(r=>dashboardRoute)
            },
            {
                path: 'pricemanagementpage',
                loadChildren: () => import('./Modules/price-managemt/pricemanagement.routes').then(r=>pricemanagementRoute)
            },
            {
                path: 'reportpage',
                loadChildren: () => import('./Modules/report/report.routes').then(r=>reportRoute)
            },
            {
                path: 'staffpage',
                loadChildren: () => import('./Modules/staff/staff.routes').then(r=>staffRoute)
            },
            {
                path: 'accountpage',
                loadChildren: () => import('./Modules/account/account.routes').then(r=>accountRoute)
            }
        ]
    },
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'main', pathMatch: 'full'}
];
