import * as shoppingListReducer from "../shopping-list/store/shopping-list.reducer";
import * as authReducer from "../auth/store/auth.reducer";
import { ActionReducerMap, combineReducers } from "@ngrx/store";

export interface AppState{
    shoppingList:shoppingListReducer.State,
    auth:authReducer.State,
}

  export const rootReducer:ActionReducerMap<AppState> = {
    shoppingList: shoppingListReducer.ShoppingListReducer,
    auth: authReducer.authReducer
  }