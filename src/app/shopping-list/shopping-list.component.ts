import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import * as fromShoppinglistState from "./store/shopping-list.reducer";
import * as shoppingListActions from "./store/shopping-list.actions";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients:Observable<{ ingredients: Ingredient[] }>;
  private subscription: Subscription;

  constructor(
    private slService: ShoppingListService,
    private store: Store<fromShoppinglistState.AppState>
  ) {}

  ngOnInit() {
    this.ingredients =this.store.select('shoppingList');
  }

  onEditItem(index: number) {
      this.store.dispatch(new shoppingListActions.StartEdit(index));
  }

  ngOnDestroy() {
    
  }
}
