import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { PasswordchangeComponent } from './passwordchange/passwordchange.component';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';

export const routes = [ 
  { path: '', redirectTo: 'setting', pathMatch: 'full'},
  { path: 'passwordchange', component: PasswordchangeComponent},
  {path:'dashboard', component:DashboardComponent}
];

@NgModule({
  declarations: [
    PasswordchangeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class SettingModule { }
