import { Component } from '@angular/core';
import { RecipesComponent } from './recipes';

@Component({
  selector: 'recipe-book',
  templateUrl: './recipe-book.component.html'
})
export class RecipeBookComponent {
  title = 'app works!';
}
