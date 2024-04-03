import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ListplayerdetailsComponent } from './listplayerdetails/listplayerdetails.component';
import { AddeditplayerdetailsComponent } from './addeditplayerdetails/addeditplayerdetails.component';
import { StartingpageComponent } from './startingpage/startingpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListplayerdataComponent } from './listplayerdata/listplayerdata.component';
import { AddeditplayerdataComponent } from './addeditplayerdata/addeditplayerdata.component';
import { AuthGuard } from 'src/auth.guard';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageCropperDialogComponentComponent } from './image-cropper-dialog-component/image-cropper-dialog-component.component';

export const routes = [ 
  { path: '', redirectTo: 'im10salesadmin', pathMatch: 'full'},
  { path: 'listplayerdetails', component: ListplayerdetailsComponent,canActivate: [AuthGuard], allowedRoles: [10]},
  { path: 'addeditplayerdetails', component: AddeditplayerdetailsComponent,canActivate: [AuthGuard], allowedRoles: [10]},
  { path: 'addeditplayerdetails/:id', component: AddeditplayerdetailsComponent,canActivate: [AuthGuard], allowedRoles: [10]},
  { path: 'listplayerdata', component: ListplayerdataComponent,canActivate: [AuthGuard], allowedRoles: [10]},
  { path: 'addeditplayerdata', component: AddeditplayerdataComponent,canActivate: [AuthGuard], allowedRoles: [10]},
  { path: 'startingpage', component: StartingpageComponent,canActivate: [AuthGuard], allowedRoles: [10]},
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard], allowedRoles: [10]},
];

@NgModule({
  declarations: [
    ListplayerdetailsComponent,
    AddeditplayerdetailsComponent,
    StartingpageComponent,
    DashboardComponent,
    ListplayerdataComponent,
    AddeditplayerdataComponent,
    ImageCropperDialogComponentComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,
    ImageCropperModule,
    MatFormFieldModule,
    MatInputModule
  ]
  
})
export class Im10salesadminModule { }
