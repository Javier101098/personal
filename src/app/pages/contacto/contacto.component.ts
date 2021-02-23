import { Component, OnInit, ViewChild } from '@angular/core'
import SmoothScrollbar from 'smooth-scrollbar'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @ViewChild('scrollbar') scrollbar;  
  constructor() {
   
   }

  ngOnInit(): void {
    SmoothScrollbar.init(this.scrollbar, {
      damping: 0.05,
      renderByPixels:true,
      continuousScrolling: true,
    });
  }

}
