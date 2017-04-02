import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Biryani', 'Biryani is deepaks favorite dinner.', 'http://orsimages.unileversolutions.com/ORS_Images/Knorr_en-IN/Hyderabadi%20Chicken%20Biryani%20%20Recipe%20Knorr%20India_29_3.1.16_326X580.Jpeg',[]),
    new Recipe("Kabab", 'Finger licking by the way!', 'http://www.kababhouse.com/images/mediterranean11.jpg', [])
  ];
  @Output() recipeSelectedEvent = new EventEmitter<Recipe>();
  // myRecipe = new Recipe('Dmmy', 'some description', 'https://camo.githubusercontent.com/9e39276ad39fe3cda7ac61dd0f1560dc5ad1ab95/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f752f3737343835392f4769744875622d5265706f732f7465737464756d6d792f63726173687465737464756d6d792e6a7067')

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    console.log("recipe selected");
    console.dir(recipe);
    this.recipeSelectedEvent.emit(recipe);
  }
}
