import { Action } from "@ngrx/store";
import { DECREMENTAR, INCREMENTAR } from "../actions/DemoActions";


 export const demo = (state:number=8, action:Action) =>{
     switch (action.type) {
         case INCREMENTAR:
             return state + 1;
     
         case DECREMENTAR:
             return state - 1;
     
         default:
             return state ;
     }
 }