import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewBankingComponent } from './view-banking/view-banking.component';


const routes: Routes = [
  {
    path:'',  component:HomeComponent
   },
   {
    path:'view-banking',component:ViewBankingComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
