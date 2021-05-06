import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { ApiConnectionService } from 'src/app/services/api-connection.service';
interface AppState{
  counter:number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countert:number = 10;
  newsList:any;
  loading = true;
  constructor( private store:Store<AppState>, private api:ApiConnectionService) { 
    this.store.subscribe( state => {
      console.log("el state",state);
      this.countert = state.counter;
      this.loading = false
    })

  }

  ngOnInit() {
    this.api.getNews().subscribe( (news) =>{
      console.log(news);
      this.newsList = news
      
    });
    
  }

  aumentar(){
    this.countert += 1;
    const action:Action={
      type:'INCREMENT'
    };
    this.store.dispatch(action);
  }
  disminuir(){
    this.countert -= 1;
    const action:Action={
      type:'DECREMENT'
    };
    this.store.dispatch(action);
  }

}
