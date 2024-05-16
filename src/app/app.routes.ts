import { Routes } from '@angular/router';
import {NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import { HeaderComponent } from './comp/header/header.component';
import { SignUpComponent } from './comp/sign-up/sign-up.component';
import { LoginComponent } from './comp/login/login.component';
import { ContactUsComponent } from './comp/contact-us/contact-us.component';
import { ForDoctorsComponent } from './comp/for-doctors/for-doctors.component';
import { AppComponent } from './app.component';






export const routes: Routes = [
    {path:"", component:LoginComponent},
    {path:"signUp", component:SignUpComponent},
    {path:"login", component:LoginComponent},
    {path:"ContactUs", component:ContactUsComponent},
    {path:"ForDoc", component:ForDoctorsComponent}



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }