import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListuserComponent } from './listuser/listuser.component';
import { AddedituserComponent } from './addedituser/addedituser.component';
import { ListuserplayerComponent } from './listuserplayer/listuserplayer.component';
import { AddedituserplayerComponent } from './addedituserplayer/addedituserplayer.component';
import { addedituserplayer } from './addedituserplayer/addedituserplayer.Model';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AuthGuard } from 'src/auth.guard';

export const routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'addedituser', component: AddedituserComponent ,canActivate: [AuthGuard], allowedRoles: [1] },
  { path: 'addedituser/:id', component: AddedituserComponent ,canActivate: [AuthGuard], allowedRoles: [1]},
  { path: 'listuser', component: ListuserComponent ,canActivate: [AuthGuard], allowedRoles: [1]},
  { path: 'addedituserplayer', component: addedituserplayer ,canActivate: [AuthGuard], allowedRoles: [1]},
  { path: 'addedituserplayer/:id', component: addedituserplayer ,canActivate: [AuthGuard], allowedRoles: [1]},
  { path: 'listuserplayer', component: ListuserplayerComponent ,canActivate: [AuthGuard], allowedRoles: [1]},
  { path: 'admin/superadmin/listuser', component: ListuserplayerComponent ,canActivate: [AuthGuard], allowedRoles: [1]},
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard], allowedRoles: [1]},
];

@NgModule({

  declarations: [
    ListuserComponent,
    AddedituserComponent,
    ListuserplayerComponent,
    AddedituserplayerComponent,
    DashboardComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule
  ]

})
export class SuperadminModule { }
