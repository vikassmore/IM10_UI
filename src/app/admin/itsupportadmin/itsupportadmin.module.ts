import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ListerrorissuelogComponent } from './listerrorissuelog/listerrorissuelog.component';
import { StartingpageComponent } from './startingpage/startingpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from 'src/auth.guard';

export const routes = [ 
  { path: '', redirectTo: 'itsupportadmin', pathMatch: 'full'},
  { path: 'listerrorissuelog', component: ListerrorissuelogComponent,canActivate: [AuthGuard], allowedRoles: [6]},
  { path: 'startingpage', component: StartingpageComponent,canActivate: [AuthGuard], allowedRoles: [6]},
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard], allowedRoles: [6]},
];

@NgModule({

  declarations: [
    ListerrorissuelogComponent,
    StartingpageComponent,
    DashboardComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,
  ]
  
})
export class ItsupportadminModule { }
