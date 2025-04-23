import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { BannerComponent } from "../components/banner/banner.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'lib-layout',
  imports: [HeaderComponent, BannerComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
