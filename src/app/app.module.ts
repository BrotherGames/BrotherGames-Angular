import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchGameListPageComponent} from './pages/searchGame-list-page/searchGame-list-page.component';
import { SearchGameEditPageComponent} from './pages/searchGame-edit-page/searchGame-edit-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserEditPageComponent } from './pages/user-edit-page/user-edit-page.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TodoService } from './services/todo.service';
import { HttpModule } from '@angular/http';
import { SignInPageComponent } from './pages/sign-in/sign-in-page.component';
import { AuthService } from './common/auth.service';
import { AppDataService } from './common/app-data.service';
import { UsersService } from './services/users.service';

import { RegisterComponent } from './pages/register-page/register-page.component';

const ROUTES = [
    { path: '', component: HomePageComponent },

    { path: 'signin', component: SignInPageComponent },

    {path: 'register' , component: RegisterComponent},

    { path: 'home', component: HomePageComponent },

  {
    path: 'users', component: UserListPageComponent,
    canActivate: [AuthService],
  },
  {
    path: 'editUsers', component: UserEditPageComponent ,
    canActivate: [AuthService],
  },
  {
    path: 'searchGame', component: SearchGameListPageComponent ,
    canActivate: [AuthService],
  },
  {
    path: 'edit', component: SearchGameEditPageComponent ,
    canActivate: [AuthService],
  },
  {
    path: '**', component: PageNotFoundComponent
  }

];

@NgModule({
  declarations: [
      AppComponent,
      HomePageComponent,
      SearchGameListPageComponent,
      SearchGameEditPageComponent,
      PageNotFoundComponent,
      SignInPageComponent,
      UserEditPageComponent,
      UserListPageComponent,
      RegisterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: INITIAL_CONFIG,
      useValue: {
        apiURL: 'http://localhost:8080'
      }
    },
    TodoService,
    AuthService,
    AppDataService,
    UsersService,
    AppConfiguration],
  bootstrap: [AppComponent]
 })
 export class AppModule { }
