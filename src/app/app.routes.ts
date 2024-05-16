import { Routes } from '@angular/router';
import {NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LoginComponent } from './Components/login/login.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ForDoctorsComponent } from './Components/for-doctors/for-doctors.component';
/* import { AppComponent } from './app.component'; */
/* import { BackgroundsComponent } from './Components/backgrounds/backgrounds.component';
import { SearchComponent } from './Components/search/search.component';
import { SearchResultComponent } from './Components/search-result/search-result.component';
import { HeaderComponent } from './Components/header/header.component'; */

export const routes: Routes = [
   /*  {path:"", component:LoginComponent}, */
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