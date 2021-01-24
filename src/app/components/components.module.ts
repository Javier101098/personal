import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [InfoComponent, MenuComponent],
  imports: [
    CommonModule
  ],
  exports:[
    InfoComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
