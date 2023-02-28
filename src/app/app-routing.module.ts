import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGroupComponent } from './components/create-group/create-group.component';
import { CreateServiceComponent } from './components/create-service/create-service.component';
import { GroupsListComponent } from './components/groups-list/groups-list.component';
import { LoginComponent } from './components/login/login.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UpdateGroupComponent } from './components/update-group/update-group.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
      {path: 'groups', component: GroupsListComponent},
      {path: 'groups/create', component: CreateGroupComponent},
      {path: 'groups/edit/:groupId', component: UpdateGroupComponent},
      {path: 'services/:groupId/:groupName', component: ServicesListComponent},
      {path: 'services/create', component: CreateServiceComponent},

      {path: 'login', component: LoginComponent},
      {path: 'sign-up', component: SignUpComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
