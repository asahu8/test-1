import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  constructor() { }
  items: Ingredient[] = [];
  ngOnInit() {
  }

}
