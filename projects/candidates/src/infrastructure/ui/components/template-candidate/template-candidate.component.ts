import { Component } from '@angular/core';
import { CandidateCardComponent } from "../candidate-card/candidate-card.component";

@Component({
  selector: 'lib-template-candidate',
  imports: [CandidateCardComponent],
  templateUrl: './template-candidate.component.html',
  styleUrl: './template-candidate.component.scss'
})
export class TemplateCandidateComponent {


}
