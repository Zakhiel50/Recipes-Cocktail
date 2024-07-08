import { Component, OnInit, Input } from '@angular/core';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe} from '@angular/common';
import { RecipeModel } from '../models/recipe_model';
import { RecipeListService } from '../services/recipes-list.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
  ],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent implements OnInit {
  @Input() recipe!: RecipeModel

liked!: boolean;
btnText!: string;

constructor(private recipesListService: RecipeListService,
  private router: Router
) {

}


ngOnInit(): void {
    this.liked = false
    this.btnText = 'Oh tchinn!'
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
  onViewRecipe() {
    this.router.navigateByUrl(`recipes/${this.recipe.id}`)
      }
}
