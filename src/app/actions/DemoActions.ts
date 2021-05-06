import { Action } from "@ngrx/store";


export const INCREMENTAR = '[contador] Incrementar';
export const DECREMENTAR = '[contador] Decrementar';

export class IncrementarAction implements Action {
    readonly type = INCREMENTAR;

    // constructor(public payload: payloadType) { }
 }
export class DecrementarAction implements Action {
    readonly type = DECREMENTAR;

    // constructor(public payload: payloadType) { }
 }
