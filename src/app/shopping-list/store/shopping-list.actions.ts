import { Action } from "@ngrx/store";

import {Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT='ADD_INGREDIENT';
export const ADD_INGREDIENTS='ADD_INGREDIENTS';
	
export class AddIngredient implements Action
{
    type: string=ADD_INGREDIENT;
    constructor(public payload:Ingredient){}
}

export class AddIngredients implements Action{
    type:string=ADD_INGREDIENTS;
    constructor(public payload:Ingredient[]){}
}

export type ShoppingListActions= AddIngredient | AddIngredients;