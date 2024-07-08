import { Injectable } from "@angular/core";
import { RecipeModel } from "../models/recipe_model";
import { RecipeType } from "../models/recipe-type.type";

@Injectable({
    providedIn: 'root',
})
export class RecipeListService {
    private recipes: RecipeModel[] = [
        new RecipeModel(
          'Gin Fizz',
          'Gin, jus de citron, eau gazeuse, sirop de sucre de canne',
          'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2018/06/shutterstock_2181241651-768x512.jpg',
          new Date(),
          100
        ),
        new RecipeModel(
          'Apple Fizz',
          "Jus de pommes, jus de citron, blanc d'oeuf, extrait de vanille",
          'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2018/06/shutterstock_1893788038-768x512.jpg',
          new Date(),
          300
        ),
        new RecipeModel(
          'Mai Tai',
          "Rhum blanc, rhum ambré, triple sec, sirop de sucre de canne, jus de citron, sirop d'orgeat ",
          'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2018/06/shutterstock_2267968785.jpg',
          new Date(),
          20
        ),
      ]

      getRecipes(): RecipeModel[] {
        return [...this.recipes]
      }

      likeRecipeById(recipeId: string, likeType: RecipeType): void {
        const foundRecipe : RecipeModel | undefined = this.recipes.find(recipe => recipe.id === recipeId)
        if (!foundRecipe) {
          throw new Error('Recipe not found')
        }
        foundRecipe.like(likeType);
      }
}