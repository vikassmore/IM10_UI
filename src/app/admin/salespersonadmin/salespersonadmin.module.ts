import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ListadvertisecontentComponent } from './listadvertisecontent/listadvertisecontent.component';
import { AddeditadvertisecontentComponent } from './addeditadvertisecontent/addeditadvertisecontent.component';
import { ListadvertiseaddsonComponent } from './listadvertiseaddson/listadvertiseaddson.component';
import { ListlistingComponent } from './listlisting/listlisting.component';
import { AddeditlistingComponent } from './addeditlisting/addeditlisting.component';
import { AddeditadvertiseaddsonComponent } from './addeditadvertiseaddson/addeditadvertiseaddson.component';
import { StartingpageComponent } from './startingpage/startingpage.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatePipe } from '@angular/common';
import { AuthGuard } from 'src/auth.guard';

export const routes = [
  { path: '', redirectTo: 'salespersonadmin', pathMatch: 'full' },
  { path: 'startingpage', component: StartingpageComponent ,canActivate: [AuthGuard], allowedRoles: [3]},
  { path: 'listadvertisecontent', component: ListadvertisecontentComponent ,canActivate: [AuthGuard], allowedRoles: [3]},
  { path: 'listadvertiseaddson', component: ListadvertiseaddsonComponent ,canActivate: [AuthGuard], allowedRoles: [3]},
  { path: 'addeditadvertisecontent', component: AddeditadvertisecontentComponent ,canActivate: [AuthGuard], allowedRoles: [3]},
  { path: 'addeditadvertisecontent/:id', component: AddeditadvertisecontentComponent ,canActivate: [AuthGuard], allowedRoles: [3]},
  { path: 'addeditadvertiseaddson', component: AddeditadvertiseaddsonComponent ,canActivate: [AuthGuard], allowedRoles: [3]},
  { path: 'addeditadvertiseaddson/:id', component: AddeditadvertiseaddsonComponent ,canActivate: [AuthGuard], allowedRoles: [3]},
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard], allowedRoles: [3]},
  { path: 'listlisting', component: ListlistingComponent ,canActivate: [AuthGuard], allowedRoles: [3]},
  { path: 'addeditlisting', component: AddeditlistingComponent ,canActivate: [AuthGuard], allowedRoles: [3]},
  { path: 'addeditlisting/:id', component: AddeditlistingComponent ,canActivate: [AuthGuard], allowedRoles: [3]},
];

@NgModule({

  declarations: [
    ListadvertisecontentComponent,
    AddeditadvertisecontentComponent,
    ListadvertiseaddsonComponent,
    AddeditadvertiseaddsonComponent,
    StartingpageComponent,
    ListlistingComponent,
    AddeditlistingComponent,
    DashboardComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,
    MatDatepickerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [DatePipe]
  
})
export class SalespersonadminModule { }
