import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { DecrementarAction, IncrementarAction } from 'src/app/actions/DemoActions';
import { GET_NEWS } from 'src/app/actions/NewsList.actions';
import { AppState } from 'src/app/reducers';
import { ApiConnectionService } from 'src/app/services/api-connection.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countert:number;
  newsList:any;
  constructor( private store:Store<AppState>, private api:ApiConnectionService) {   }

  ngOnInit() {

    this.store.select(state=> state.newsList).subscribe( counter => {
      console.log("el state news",counter);
      this.newsList = counter
    })
    this.store.dispatch({ type: GET_NEWS });
    
    // this.api.getNews().subscribe( (news) =>{
    //   console.log(news);
    //   this.newsList = news
      
    // });
    
  }

  aumentar(){
    this.countert += 1;
    const action = new IncrementarAction();
    this.store.dispatch(action);
  }
  disminuir(){
    this.countert -= 1;
    const action = new DecrementarAction();
    this.store.dispatch(action);
  }

}
