import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateGroupComponent } from './components/create-group/create-group.component';
import { GroupsListComponent } from './components/groups-list/groups-list.component';
import { GroupsMenuComponent } from './components/groups-menu/groups-menu.component';
import { SharedService } from './services/shared.service';
import { UpdateGroupComponent } from './components/update-group/update-group.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { CreateServiceComponent } from './components/create-service/create-service.component';
import { UpdateServiceComponent } from './components/update-service/update-service.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateGroupComponent,
    GroupsListComponent,
    GroupsMenuComponent,
    UpdateGroupComponent,
    ServicesListComponent,
    CreateServiceComponent,
    UpdateServiceComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
