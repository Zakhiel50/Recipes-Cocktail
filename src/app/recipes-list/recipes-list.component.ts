import { Component } from '@angular/core';
import { RecipeModel } from '../models/recipe_model';
import { RecipeComponent } from '../recipes/recipe.component';

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
  recipes!: RecipeModel[]
  mySnap!: RecipeModel
  myOtherSnap!: RecipeModel
  myLastSnap!: RecipeModel

  ngOnInit(): void {
    this.recipes = [
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
      const stringCategory: string = 'Catégorie:'
      this.recipes[1].setCategory(`${stringCategory} Cocktail.`)
  }
}
