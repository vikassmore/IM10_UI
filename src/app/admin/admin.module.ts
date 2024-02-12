import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { InputFileConfig, InputFileModule } from 'ngx-input-file';
const config: InputFileConfig = {
  fileAccept: '*'
};

import { AdminComponent } from './admin.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { FullScreenComponent } from './components/fullscreen/fullscreen.component';
import { MessagesComponent } from './components/messages/messages.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AuthGuard } from 'src/auth.guard';
export const routes = [
  {
    path: '',
    component: AdminComponent,canActivate: [AuthGuard], children: [
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), data: { breadcrumb: ''} },
      { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule), data: { breadcrumb: 'setting' }},
      { path: 'superadmin', loadChildren: () => import('./superadmin/superadmin.module').then(m => m.SuperadminModule), data: { breadcrumb: 'superadmin' , allowedRoles: [1] } },
      { path: 'contentadmin', loadChildren: () => import('./contentadmin/contentadmin.module').then(m => m.ContentadminModule), data: { breadcrumb: 'content admin' , allowedRoles: [2]}},
      { path: 'qualityassurance', loadChildren: () => import('./qualityassurance/qualityassurance.module').then(m => m.QaModule), data: { breadcrumb: 'quality assurance' , allowedRoles: [8] } },
      { path: 'salespersonadmin', loadChildren: () => import('./salespersonadmin/salespersonadmin.module').then(m => m.SalespersonadminModule), data: { breadcrumb: 'sales person admin' , allowedRoles: [3] } },
      { path: 'im10salesadmin', loadChildren: () => import('./im10salesadmin/im10salesadmin.module').then(m => m.Im10salesadminModule), data: { breadcrumb: 'i m 10 sales admin' , allowedRoles: [10] } },
      { path: 'playerrepresentativeadmin', loadChildren: () => import('./playerrepresentativeadmin/playerrepresentativeadmin.module').then(m => m.PlayerrepresentativeadminModule), data: { breadcrumb: 'player representative admin' , allowedRoles: [7] } },
      { path: 'itsupportadmin', loadChildren: () => import('./itsupportadmin/itsupportadmin.module').then(m => m.ItsupportadminModule), data: { breadcrumb: 'it support admin' , allowedRoles: [6] } },
      { path: 'im10marketingcampaigns', loadChildren: () => import('./im10marketingcampaigns/im10marketingcampaigns.module').then(m => m.Im10marketingcampaignsModule), data: { breadcrumb: 'i m 10 marketing campaign' , allowedRoles: [11] } },
      { path: 'endorsementmanageradmin', loadChildren: () => import('./endorsementmanageradmin/endorsementmanageradmin.module').then(m => m.EndorsementmanageradminModule), data: { breadcrumb: 'endorsement manager admin' , allowedRoles: [4] } },
    ]
  }
];

@NgModule({

  declarations: [
    AdminComponent,
    MenuComponent,
    UserMenuComponent,
    FullScreenComponent,
    MessagesComponent,
    BreadcrumbComponent,

  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    InputFileModule.forRoot(config),
  ]

})
export class AdminModule { }
