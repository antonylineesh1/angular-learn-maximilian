import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { Store } from '@ngrx/store';
import * as shoppingList from '../store/shopping-list.actions';
import * as fromApp  from '../../store/app.reducer';

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("f", { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.store.select("shoppingList").subscribe((shoppingData) => {
      if (shoppingData.editedIngredientIndex <= -1) {
        this.editMode = true;
        this.editedItemIndex=shoppingData.editedIngredientIndex;
      } else {
        this.editedItemIndex = shoppingData.editedIngredientIndex;
        this.editMode = true;
        this.editedItem = shoppingData.editedIngredient;        
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      this.store.dispatch(
        new shoppingList.UpdateIngredients(newIngredient)
      );
    } else {
      this.store.dispatch(new shoppingList.AddIngredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(new shoppingList.StopEdit());
  }

  onDelete() {
    this.store.dispatch(
      new shoppingList.DeleteIngredients()
    );
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
