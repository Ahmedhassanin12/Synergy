import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';

export const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '', component: HomeLayoutComponent },
  { path: 'dashborad', redirectTo: '', pathMatch: 'full' },
];
