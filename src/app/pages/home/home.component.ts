import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GET_NEWS } from 'src/app/actions/NewsList.actions';
import { AppState } from 'src/app/reducers';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newsList:any;
  constructor( private store:Store<AppState>) {}

  ngOnInit() {

    this.newsList = this.store.select('newsList');
   
    this.store.dispatch({ type: GET_NEWS });
    
  }

}
