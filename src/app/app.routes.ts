import { Routes } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleRecipeComponent } from './single-recipes/single-recipe.component';

export const routes: Routes = [
    {path: 'recipes/:id', component: SingleRecipeComponent},
    { path: 'recipes', component: RecipesListComponent },
    { path: '', component: LandingPageComponent },
];
