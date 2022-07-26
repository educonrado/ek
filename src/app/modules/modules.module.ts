import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { MaterialModule } from '@modules/material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ListComponent } from './list/list.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    NavigationComponent,
    ListComponent,
    AddProjectComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MaterialModule,
  ]
})
export class ModulesModule { }
