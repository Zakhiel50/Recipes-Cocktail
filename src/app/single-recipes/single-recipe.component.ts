import { Component, OnInit } from '@angular/core';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe} from '@angular/common';
import { RecipeModel } from '../models/recipe_model';
import { RecipeListService } from '../services/recipes-list.services';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-recipe',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    RouterLink,
  ],
  templateUrl: './single-recipe.component.html',
  styleUrl: './single-recipe.component.scss'
})
export class SingleRecipeComponent implements OnInit {
  recipe!: RecipeModel

  liked!: boolean;
  btnText!: string;

  constructor(
    private recipesListService: RecipeListService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.prepareInterface();
    this.getRecipe();
  }


  getRecipe() {
    const recipeId = this.route.snapshot.params['id'];
    this.recipe = this.recipesListService.getRecipeById(recipeId)
  }

  prepareInterface() {
    this.liked = false;
    this.btnText = 'Oh tchinn!';
  }

  onLike(): void {
    if (this.liked === false) {
      this.recipesListService.likeRecipeById(this.recipe.id, 'like');
      this.liked = true;
      this.btnText= 'Nope unlike!'
    } else {
      this.recipesListService.likeRecipeById(this.recipe.id, 'unlike');
      this.liked = false;
      this.btnText = 'Oh tchinn!'
    }
  }
}
