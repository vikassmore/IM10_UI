import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ListplayerendorsementComponent } from './listplayerendorsement/listplayerendorsement.component';
import { AddeditplayerendorsementComponent } from './addeditplayerendorsement/addeditplayerendorsement.component';
import { StartingpageComponent } from './startingpage/startingpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatePipe } from '@angular/common';
import { AuthGuard } from 'src/auth.guard';

export const routes = [
  { path: '', redirectTo: 'endorsementmanageradmin', pathMatch: 'full' },
  { path: 'listplayerendorsement', component: ListplayerendorsementComponent ,canActivate: [AuthGuard], allowedRoles: [4] },
  { path: 'addeditplayerendorsement', component: AddeditplayerendorsementComponent ,canActivate: [AuthGuard], allowedRoles: [4]},
  { path: 'addeditplayerendorsement/:id', component: AddeditplayerendorsementComponent ,canActivate: [AuthGuard], allowedRoles: [4]},
  { path: 'startingpage', component: StartingpageComponent ,canActivate: [AuthGuard], allowedRoles: [4]},
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard], allowedRoles: [4]},
];

@NgModule({

  declarations: [
    ListplayerendorsementComponent,
    AddeditplayerendorsementComponent,
    StartingpageComponent,
    DashboardComponent,
    AddcompanyComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [DatePipe]

})
export class EndorsementmanageradminModule { }
