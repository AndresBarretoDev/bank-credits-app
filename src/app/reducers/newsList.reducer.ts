// import { Action } from "@ngrx/store";
// import { GET_NEWS } from "../actions/NewsList.actions";

import * as newsActions from '../actions/NewsList.actions'

export const newsList = ( state = [], action:newsActions.actions ) =>{
    switch (action.type) {
        case newsActions.GET_NEWS:
            console.log("get news", action);
            
            return [];
        case newsActions.GET_NEWS_SUCCESS:
            console.log("aSUCCESSSSS", action);
            
            return [...action.payload];
    
        default:
            return state ;
    }

}

