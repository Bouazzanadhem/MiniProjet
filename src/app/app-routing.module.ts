import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
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
  },
  { path: 'dashbord', loadChildren: () => import('./dashbord/dashbord.module').then(m => m.DashbordModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }