import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ShareModule } from '../share/share.module';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];
@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
