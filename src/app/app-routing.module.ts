import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"display", component:DisplayComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"", redirectTo:"login",pathMatch:'full'},
  {path:"**", component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
