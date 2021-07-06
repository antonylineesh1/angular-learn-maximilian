import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
import * as shoppinglistActions from './shopping-list.actions';


export interface ShoppingListState{
    ingredients:Ingredient[],
    editedIngredient:Ingredient,
    editedIngredientIndex:number
}

export interface AppState{
    shoppingList:ShoppingListState
}


const initalState = {
  ingredients: [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 10)],
  editedIngredient:null,
  editedIngredientIndex:-1
};

export function ShoppingListReducer(state:ShoppingListState = initalState, action:any) {

    switch (action.type) {
      case shoppinglistActions.ADD_INGREDIENT:
        return {
          ...state,
          ingredients: [...state.ingredients, action.payload],
        };
      case shoppinglistActions.ADD_INGREDIENTS:
        return {
          ...state,
          ingredients: [
            ...state.ingredients,
            ...(action.payload as Ingredient[]),
          ],
        };
      case shoppinglistActions.UPDATE_INGREDIENTS:
          const existingIngredient = state.ingredients.find(
            (x, i) => i === state.editedIngredientIndex
          );
          const newMergedIngredient = {
            ...existingIngredient,
            ...action.payload,
          };
          const existingIngredients = [...state.ingredients];
          existingIngredients[state.editedIngredientIndex] = newMergedIngredient;

          return {
            ...state,
            ingredients: [...existingIngredients],
            editedIngredient:null,
            editedIngredientIndex:-1
          };

      case shoppinglistActions.DELETE_INGREDIENTS:
          return {
            ...state,
            ingredients: state.ingredients.filter((x, i) => i !== state.editedIngredientIndex),
            editedIngredient:null,
            editedIngredientIndex:-1
          };
      case shoppinglistActions.START_EDIT:
        const tt=state;
        debugger;
        return {
          ...state,
          editedIngredient:{...state.ingredients[action.payload]},
          editedIngredientIndex:action.payload
        };        
      case shoppinglistActions.STOP_EDIT:
        return {
          ...state,
          editedIngredient:null,
          editedIngredientIndex:-1
        };
      default:
        return state;
    }
}
