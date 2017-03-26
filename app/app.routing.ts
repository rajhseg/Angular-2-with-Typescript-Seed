import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { HomeComponent } from './HomeComponent';
import { AboutComponent } from './AboutComponent';
import { ContactComponent } from './ContactComponent';
import { UnknownComponent } from './unknownComponent'

const routes:Routes = [

{ path:'home', component:HomeComponent },
{ path:'about', component:AboutComponent },
{ path:'contact', component:ContactComponent },
{ path: '', redirectTo:'/home',pathMatch:'full' },
  { path: '**', component:UnknownComponent }
];

export const routedComponents = [HomeComponent,AboutComponent,
                                ContactComponent,UnknownComponent];

@NgModule({
  imports : [CommonModule,FormsModule, RouterModule.forRoot(routes)],
  declarations:routedComponents,
  exports: [RouterModule,CommonModule],
  providers:[]
})
export class AppRoutingModule{

}