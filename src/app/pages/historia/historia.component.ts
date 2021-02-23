import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements  AfterViewInit {

  @ViewChild('scrollbar',{static: true}) scr;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngAfterViewInit(){
    Scrollbar.init(document.getElementById('#scrollbar'));
    
  }
  ngOnInit(): void {
    console.log(this.scr);
    Scrollbar.init(this.scr, {
      damping: 0.05,
      renderByPixels:true,
      continuousScrolling: true,
    });
  }

}
