import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ListcontentComponent } from './listcontent/listcontent.component';
import { AddeditcontentComponent } from './addeditcontent/addeditcontent.component';
import { ListcontentupdateComponent } from './listcontentupdate/listcontentupdate.component';
import { AddcontentupdateComponent } from './addcontentupdate/addcontentupdate.component';
import { StartingpageComponent } from './startingpage/startingpage.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from 'src/auth.guard';

export const routes = [
  { path: '', redirectTo: 'contentadmin', pathMatch: 'full' },
  { path: 'listcontent', component: ListcontentComponent ,canActivate: [AuthGuard], allowedRoles: [2]},
  { path: 'addeditcontent', component: AddeditcontentComponent,canActivate: [AuthGuard], allowedRoles: [2]},
  { path: 'addeditcontent/:id', component: AddeditcontentComponent ,canActivate: [AuthGuard], allowedRoles: [2]},
  { path: 'listcontentupdate', component: ListcontentupdateComponent ,canActivate: [AuthGuard], allowedRoles: [2]},
  { path: 'admin/contentadmin/listcontent', component: ListcontentupdateComponent ,canActivate: [AuthGuard], allowedRoles: [2]},
  { path: 'startingpage', component: StartingpageComponent ,canActivate: [AuthGuard], allowedRoles: [2]},
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard], allowedRoles: [2] },
];

@NgModule({
  declarations: [
    ListcontentComponent,
    AddeditcontentComponent,
    ListcontentupdateComponent,
    AddcontentupdateComponent,
    StartingpageComponent,
    DashboardComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})

export class ContentadminModule { }
