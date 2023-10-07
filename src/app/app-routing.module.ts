import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmergencyComponent } from './layout/emergency/emergency.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';



const routes: Routes = [
  {path: '', redirectTo: 'emer', pathMatch: 'full'},
  {path: 'emer', component: EmergencyComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const COMPONENTS = [
  EmergencyComponent,
  NotFoundComponent
]
