import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },{
    path: 'register',
    component: RegisterComponent
  },{
    path: 'login',
    component: LoginComponent
  },{
    path: 'dashbord',
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashbord/dashbord.module').then(m => m.DashbordModule) 
  },{
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
