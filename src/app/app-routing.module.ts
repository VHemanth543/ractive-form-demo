import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NestedComponent } from './nested/nested.component';

const routes: Routes = [


  {
     path : 'home' , component : HomeComponent
   },

  {
     path : 'dummy' , component : NestedComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
