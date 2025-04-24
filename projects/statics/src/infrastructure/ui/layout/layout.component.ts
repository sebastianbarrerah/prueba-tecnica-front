import { Component } from '@angular/core';
import { StaticsComponent } from "../components/statics/statics.component";

@Component({
  selector: 'lib-layout-static',
  imports: [StaticsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutStaticComponent {

}
