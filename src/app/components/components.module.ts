import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [InfoComponent, MenuComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    InfoComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
