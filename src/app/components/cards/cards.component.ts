import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [
  ]
})
export class CardsComponent implements OnInit {
  @Input() item:any;

  constructor() { }

  ngOnInit(): void {
    
  }


}
