import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { DashbordComponent } from './dashbord.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DashbordComponent, AddContactComponent, UpdateContactComponent],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    SharedModule
  ]
})
export class DashbordModule { }
