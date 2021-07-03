import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppinglistActions from './shopping-list.actions';

const initalState = {
  ingredients: [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 10)],
};

export function ShoppingListReducer(state = initalState, action:ShoppinglistActions.AddIngredient) {

    switch (action.type) {
        case ShoppinglistActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients:[ ...state.ingredients,action.payload ]
             }            
         default:
            return state;
    }
}
