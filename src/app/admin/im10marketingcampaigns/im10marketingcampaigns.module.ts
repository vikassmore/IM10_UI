import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StartingpageComponent } from './startingpage/startingpage.component';
import { ListcampaignComponent } from './listcampaign/listcampaign.component';
import { AddeditcampaignComponent } from './addeditcampaign/addeditcampaign.component';
import { ViewcampaignsocialmediaComponent } from './viewcampaignsocialmedia/viewcampaignsocialmedia.component';
import { AddcampaignsocialmediaComponent } from './addcampaignsocialmedia/addcampaignsocialmedia.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthGuard } from 'src/auth.guard';

export const routes = [ 
  { path: '', redirectTo: 'im10marketingcampaigns', pathMatch: 'full'},
  { path: 'addcampaignsocialmedia', component: AddcampaignsocialmediaComponent,canActivate: [AuthGuard], allowedRoles: [11]},
  { path: 'addeditcampaign', component: AddeditcampaignComponent,canActivate: [AuthGuard], allowedRoles: [11]},
  { path: 'listcampaing', component: ListcampaignComponent,canActivate: [AuthGuard], allowedRoles: [11]},
  { path: 'viewcampaignsocialmedia', component: ViewcampaignsocialmediaComponent,canActivate: [AuthGuard], allowedRoles: [11]},
  { path: 'viewcampaignsocialmedia/:id', component: ViewcampaignsocialmediaComponent,canActivate: [AuthGuard], allowedRoles: [11]},
  { path: 'startingpage', component: StartingpageComponent,canActivate: [AuthGuard], allowedRoles: [11]},
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard], allowedRoles: [11]},
];

@NgModule({

  declarations: [
    DashboardComponent,
    StartingpageComponent,
    ListcampaignComponent,
    AddeditcampaignComponent,
    ViewcampaignsocialmediaComponent,
    AddcampaignsocialmediaComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatInputModule,
  ]
  
})
export class Im10marketingcampaignsModule { }
