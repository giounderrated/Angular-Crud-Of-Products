import { Component, Input } from '@angular/core';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarFull } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-rating-label',
  templateUrl: './rating-label.component.html',
})
export class RatingLabelComponent {
  @Input() rating: number;
  @Input() readOnly: boolean = true;

  private readonly MAX_NUMBER_OF_STARS = 10;

  ratingArr: number[] = [];

  faStarEmpty = faStarEmpty;
  faStarFull = faStarFull;

  constructor() {
    this.ratingArr = Array(this.MAX_NUMBER_OF_STARS);
  }

  ngOnInit(): void {
    this.rating = Math.round(this.rating / 100);
  }

  getStar(i: number): any {
    if (i + 1 <= this.rating) return this.faStarFull;
    else return this.faStarEmpty;
  }

  handleClick(i: number) {
    if (this.readOnly) {
      return;
    }
    console.log(i);
    this.rating = i + 1;
    console.log(i);
  }
}
