import { Component, OnInit, Input } from '@angular/core';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe} from '@angular/common';
import { RecipeModel } from '../models/recipe_model';

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

snapped!: boolean;
btnText!: string;

ngOnInit(): void {
    this.snapped = false
    this.btnText = 'Oh tchinn!'
  }

  onSnap(): void {
    if (this.snapped === false) {
      this.recipe.addSnap()
      this.snapped = true;
      this.btnText= 'Nope unlike!'
    } else {
      this.recipe.removeSnap()
      this.snapped = false;
      this.btnText = 'Oh tchinn!'
    }
  }
}
