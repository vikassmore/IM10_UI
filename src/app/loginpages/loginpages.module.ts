import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { InputFileModule } from 'ngx-input-file';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

export const routes = [ 
  { path: '', redirectTo: 'loginpage', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, data: { breadcrumb: 'login' } },
  { path: 'forgotpassword', component: ForgotpasswordComponent, data: { breadcrumb: 'forgot password' } },
];

@NgModule({

  declarations: [
    LoginComponent,
    ForgotpasswordComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    SwiperModule,
    InputFileModule,
    MatFormFieldModule,
    MatInputModule,
  ]
  
})
export class LoginpagesModule { }
