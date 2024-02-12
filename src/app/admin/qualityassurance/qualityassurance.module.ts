import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ListcontentComponent } from './listcontent/listcontent.component';
import { ListadvcontentComponent } from './listadvcontent/listadvcontent.component';
import { ListcontentupdateComponent } from './listcontentupdate/listcontentupdate.component';
import { StartingpageComponent } from './startingpage/startingpage.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from 'src/auth.guard';

export const routes = [
  { path: '', redirectTo: 'qualityassurance', pathMatch: 'full' },
  { path: 'startingpage', component: StartingpageComponent ,canActivate: [AuthGuard], allowedRoles: [8]},
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard], allowedRoles: [8]},
  { path: 'listcontent', component: ListcontentComponent ,canActivate: [AuthGuard], allowedRoles: [8]},
  { path: 'listadvcontent', component: ListadvcontentComponent ,canActivate: [AuthGuard], allowedRoles: [8]},
  { path: 'listcontentupdate', component: ListcontentupdateComponent ,canActivate: [AuthGuard], allowedRoles: [8]},
];

@NgModule({
  
  declarations: [
    ListcontentComponent,
    ListadvcontentComponent,
    ListcontentupdateComponent,
    StartingpageComponent,
    DashboardComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule
  ]

})
export class QaModule { }
