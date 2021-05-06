import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [
  ]
})
export class CardsComponent implements OnInit {
  @Input() item:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  goToDetail(item:any){
    this.router.navigate(['noticias', item])
  }


}
