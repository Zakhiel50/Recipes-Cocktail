import { Component } from '@angular/core';
import { RecipeModel } from '../models/recipe_model';
import { RecipeComponent } from '../recipes/recipe.component';
import { RecipeListService } from '../services/recipes-list.services';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [
    RecipeComponent,
  ],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'
})
export class RecipesListComponent {
  recipes!: RecipeModel[];

  constructor(private recipesListService: RecipeListService) {

  }

  ngOnInit(): void {
    this.recipes = this.recipesListService.getRecipes();
      const stringCategory: string = 'Catégorie:'
      
  }
}
