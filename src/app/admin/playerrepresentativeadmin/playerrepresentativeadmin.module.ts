import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ListcontentcommentComponent } from './listcontentcomment/listcontentcomment.component';
import { ContentcommentreplyComponent } from './contentcommentreply/contentcommentreply.component';
import { StartingpageComponent } from './startingpage/startingpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContentcommentviewComponent } from './contentcommentview/contentcommentview.component';
import { AuthGuard } from 'src/auth.guard';
import { ContentcommentImageVideoViewComponent } from './contentcomment-image-video-view/contentcomment-image-video-view.component';

export const routes = [ 
  { path: '', redirectTo: 'playerrepresentativeadmin', pathMatch: 'full'},
  { path: 'listcontentcomment', component: ListcontentcommentComponent,canActivate: [AuthGuard], allowedRoles: [7]},
  { path: 'contentcommentreplay', component: ContentcommentreplyComponent,canActivate: [AuthGuard], allowedRoles: [7]},
  { path: 'startingpage', component: StartingpageComponent,canActivate: [AuthGuard], allowedRoles: [7]},
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard], allowedRoles: [7]},
  { path: 'contentcommentview', component: ContentcommentviewComponent,canActivate: [AuthGuard], allowedRoles: [7]},
];

@NgModule({
  declarations: [
    ListcontentcommentComponent,
    ContentcommentreplyComponent,
    StartingpageComponent,
    DashboardComponent,
    ContentcommentviewComponent,
    ContentcommentImageVideoViewComponent,
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
export class PlayerrepresentativeadminModule { }
