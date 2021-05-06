import { Action } from "@ngrx/store";


export const GET_NEWS = '[value] GetNews';
export const GET_NEWS_SUCCESS = '[value] GetNewsSuccess';

export class GetNewsAction implements Action {
    readonly type = GET_NEWS;

    // constructor(public payload: any) { }
 }


export class GetNewsSuccessAction implements Action {
    readonly type = GET_NEWS_SUCCESS;

    constructor(public payload: any) { }
 }

 export type actions = GetNewsAction |
                     GetNewsSuccessAction;