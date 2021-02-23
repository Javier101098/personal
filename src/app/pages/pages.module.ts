import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './historia/historia.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    HomeComponent, 
    HistoriaComponent, 
    ContactoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    HistoriaComponent,
    ContactoComponent
  ]
})
export class PagesModule { }
