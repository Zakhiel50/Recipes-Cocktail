import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap

snapped!: boolean;
btnText!: string;

ngOnInit(): void {
    this.snapped = false
    this.btnText = 'Oh tchinn!'
  }

  onSnap(): void {
    if (this.snapped === false) {
      this.faceSnap.addSnap()
      this.snapped = true;
      this.btnText= 'Nope unlike!'
    } else {
      this.faceSnap.removeSnap()
      this.snapped = false;
      this.btnText = 'Oh tchinn!'
    }
  }
}
