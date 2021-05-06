import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
})
export class NewsPageComponent implements OnInit {
detail:any
  constructor(private store:Store<AppState>, 
    private actRouter:ActivatedRoute,
    private location:Location) { }

  ngOnInit(): void {
    
    this.store.select('newsList').subscribe( newsItem => {
      const id = this.actRouter.snapshot.paramMap.get('id');
      this.detail = newsItem.find(newsId => newsId.id === id );
    })
   
  }
  goBack(){
    this.location.back();
  }
  

}
