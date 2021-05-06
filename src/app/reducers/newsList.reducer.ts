
import * as newsActions from '../actions/NewsList.actions'

export const newsList = ( state = [], action:newsActions.actions ) =>{
    switch (action.type) {
        case newsActions.GET_NEWS:
            return state;
        case newsActions.GET_NEWS_SUCCESS:
            return [...action.payload];
        
        default:
            return state ;
    }

}

