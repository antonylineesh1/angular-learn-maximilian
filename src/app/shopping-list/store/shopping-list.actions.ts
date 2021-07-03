import { Action } from "@ngrx/store";

import {Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT='ADD_INGREDIENT';
export const ADD_INGREDIENTS='ADD_INGREDIENTS';
export const UPDATE_INGREDIENTS='UPDATE_INGREDIENTS';
export const DELETE_INGREDIENTS='DELETE_INGREDIENTS';
export const START_EDIT='START_EDIT';
export const STOP_EDIT='STOP_EDIT';
	
export class AddIngredient implements Action
{
    type: string=ADD_INGREDIENT;
    constructor(public payload:Ingredient){}
}

export class AddIngredients implements Action{
    type:string=ADD_INGREDIENTS;
    constructor(public payload:Ingredient[]){}
}
export class UpdateIngredients implements Action {
  type: string = UPDATE_INGREDIENTS;
  constructor(public payload:{index: number,newIngredient: Ingredient} ) {}
}
export class DeleteIngredients implements Action{
    type:string=DELETE_INGREDIENTS;
    constructor(public payload:{index: number}){}
}
export class StartEdit implements Action {
    type:string=START_EDIT;
    constructor(public payload:number){}
}
export class StopEdit implements Action {
    type:string=STOP_EDIT;
}

export type ShoppingListActions =
  | AddIngredient
  | AddIngredients
  | UpdateIngredients
  | DeleteIngredients
  | StartEdit
  | StopEdit;
