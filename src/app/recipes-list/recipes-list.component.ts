import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'
})
export class RecipesListComponent {
  faceSnaps!: FaceSnap[]
  mySnap!: FaceSnap
  myOtherSnap!: FaceSnap
  myLastSnap!: FaceSnap

  ngOnInit(): void {
    this.faceSnaps = [
        new FaceSnap(
          'Gin Fizz',
          'Gin, jus de citron, eau gazeuse, sirop de sucre de canne',
          'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2018/06/shutterstock_2181241651-768x512.jpg',
          new Date(),
          100
        ),
        new FaceSnap(
          'Apple Fizz',
          "Jus de pommes, jus de citron, blanc d'oeuf, extrait de vanille",
          'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2018/06/shutterstock_1893788038-768x512.jpg',
          new Date(),
          300
        ),
        new FaceSnap(
          'Mai Tai',
          "Rhum blanc, rhum ambré, triple sec, sirop de sucre de canne, jus de citron, sirop d'orgeat ",
          'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2018/06/shutterstock_2267968785.jpg',
          new Date(),
          20
        ),
      ]
      const stringCategory: string = 'Catégorie:'
      this.faceSnaps[1].setCategory(`${stringCategory} Cocktail.`)
  }
}
