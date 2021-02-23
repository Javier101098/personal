import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  {path:'principal',component:HomeComponent},
  {path:'historia',component:HistoriaComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'**', pathMatch:'full',redirectTo:'/principal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
