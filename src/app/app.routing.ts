import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { AuthGuard } from 'src/auth.guard';

export const routes: Routes = [
    { path: 'login/loginpage',
        component: PagesComponent,canActivate: [AuthGuard], children: [ ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) , data: { allowedRoles: [1, 2, 3,4,5,6,7,8,9,10,11]} },
    { path: '', loadChildren: () => import('./loginpages/loginpages.module').then(m => m.LoginpagesModule) },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
            relativeLinkResolution: 'legacy',
            initialNavigation: 'enabled',  // for one load page, without reload
            useHash: true,
        })
    ],

    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }