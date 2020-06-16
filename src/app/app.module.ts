import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RunnerListComponent } from './runner-list/runner-list.component';
import { SingleRunnerComponent } from './runner-list/single-runner/single-runner.component';
import { RunnerFormComponent } from './runner-list/runner-form/runner-form.component';
import { HeaderComponent } from './header/header.component';
//import { AuthComponent } from './services/auth/auth.component';//
//import { RunnerComponent } from './services/runner/runner.component';//
import { AuthService } from './services/auth.service';
import { RunnersService } from './services/runners.service';
import { AuthGuardService } from './services/auth-guard.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { FooterComponent } from './footer/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './container/container.component';

const appRoutes : Routes = [
  //Path pour pages avec FOOTER :
  /*{ path: '', canActivate: [AuthGuardService], component: ContainerComponent, 
      children: [ //ContainerComponent
        //{ path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: 'home', canActivate: [AuthGuardService], component: HomeComponent}, // Page Distance
        { path: 'runners', canActivate: [AuthGuardService], component: RunnerListComponent},
        { path: 'runners/new', canActivate: [AuthGuardService], component: RunnerFormComponent}, // Page Inscription
        { path: 'runners/view/:id', canActivate: [AuthGuardService], component: SingleRunnerComponent},
      ] 
  },*/

  // Path pour pages sans FOOTER :
  { path: 'auth/signup', component:SignupComponent }, // Page Créer un compte
  { path: 'auth/signin', component:SigninComponent }, // Page Connexion
  { path: '', redirectTo: 'auth/signin', pathMatch: 'full'},
  { path: 'home', canActivate: [AuthGuardService], component: HomeComponent}, // Page Distance
        { path: 'runners', canActivate: [AuthGuardService], component: RunnerListComponent},
        { path: 'runners/new', canActivate: [AuthGuardService], component: RunnerFormComponent}, // Page Inscription
        { path: 'runners/view/:id', canActivate: [AuthGuardService], component: SingleRunnerComponent},
  { path: '**', redirectTo: 'home'}
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    RunnerListComponent,
    SingleRunnerComponent,
    RunnerFormComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContainerComponent,
    //AuthComponent,
    //RunnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    RunnersService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
