import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
import * as shoppinglistActions from './shopping-list.actions';

const initalState = {
  ingredients: [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 10)],
};

export function ShoppingListReducer(state = initalState, action:any) {

    switch (action.type) {
        case shoppinglistActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients:[ ...state.ingredients,action.payload ]
             }           
        case shoppinglistActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients:[ ...state.ingredients,...action.payload]
                }           
         default:
            return state;
    }
}
