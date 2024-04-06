import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: 'dashborad', title: 'Dashboard', component: HomeLayoutComponent },
  { path: 'signin', title: 'Sign in', component: SignInComponent },
  { path: 'signup', title: 'Sign up', component: SignUpComponent },
  {
    path: '',
    redirectTo: '/dashborad',
    title: 'Dashborad',
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundComponent },
];
