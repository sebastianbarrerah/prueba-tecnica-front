import { Component } from '@angular/core';
import { TemplateCandidateComponent } from "../components/template-candidate/template-candidate.component";

@Component({
  selector: 'lib-layout',
  imports: [TemplateCandidateComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
