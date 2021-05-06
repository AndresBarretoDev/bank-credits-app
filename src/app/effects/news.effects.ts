import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiConnectionService } from '../services/api-connection.service';
import { GET_NEWS, GET_NEWS_SUCCESS } from '../actions/NewsList.actions';
import { of ,EMPTY} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsEffect {
  constructor(private actions: Actions,
    private newsService: ApiConnectionService, private http:HttpClient) {}

  loadNews$ = createEffect(() =>
    this.actions.pipe(
      ofType < any > (GET_NEWS),
      mergeMap(() => this.newsService.getNews()
        .pipe(
          map(news => ({
            type: GET_NEWS_SUCCESS,
            payload: news
          })),
          catchError(() => EMPTY)
        ))
    )
  );
}
