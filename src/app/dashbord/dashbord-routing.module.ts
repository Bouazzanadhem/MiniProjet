import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DashbordComponent } from './dashbord.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';

const routes: Routes = [
  { path: '',
    component: DashbordComponent
  },{
    path: 'AddContact',
    component: AddContactComponent
  },{
    path: 'UpdateContact/:id',
    component: UpdateContactComponent 
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
