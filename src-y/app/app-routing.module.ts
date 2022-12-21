import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { BookingComponent } from './booking/booking.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes =
[
  {path:'loginform',component:LoginformComponent},
  {path:'history',component:HistoryComponent},
  {path:'booking',component:BookingComponent},
  {path:'',redirectTo:'/loginform',pathMatch:'full'}  // Defaults to login page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }