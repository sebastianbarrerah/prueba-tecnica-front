import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { BannerComponent } from '../components/banner/banner.component';

@Component({
  selector: 'lib-layout',
  imports: [NavbarComponent, BannerComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
