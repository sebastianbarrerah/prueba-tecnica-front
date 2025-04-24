import { Component, input, signal } from '@angular/core';
import { dataPhotos } from '../../../utils/data';

@Component({
  selector: 'lib-candidate-card',
  imports: [],
  templateUrl: './candidate-card.component.html',
  styleUrl: './candidate-card.component.scss'
})
export class CandidateCardComponent {
  public photos:string[] = dataPhotos;
  candidate = input<any>(null);

}
